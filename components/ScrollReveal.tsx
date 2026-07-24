"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global scroll-reveal driver. Observes every `.reveal` element and adds
 * `is-visible` when it scrolls into view, triggering the CSS animation.
 * Re-scans on route change, and a MutationObserver picks up `.reveal`
 * elements added later (e.g. client-side filtered lists).
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const hasIO = "IntersectionObserver" in window;

    if (reduce || !hasIO) {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    const observeAll = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => io.observe(el));
    };

    // Initial scan, deferred a frame so navigated DOM is laid out.
    const raf = requestAnimationFrame(observeAll);

    // Catch `.reveal` nodes added after mount (filtered grids, etc.).
    let scheduled = false;
    const mo = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        observeAll();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
