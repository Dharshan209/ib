"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { therapeuticAreas } from "../../lib/products";

interface NavItem {
  path: string;
  label: string;
  mega?: boolean;
}

const navItems: NavItem[] = [
  { path: "/products", label: "Products", mega: true },
  { path: "/about", label: "About" },
  { path: "/team", label: "Team" },
  { path: "/csr", label: "CSR" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [megaOpen, setMegaOpen] = useState(false);
  const [indicator, setIndicator] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (path: string): boolean => {
    return pathname === path || pathname.startsWith(path + "/");
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const moveIndicatorTo = (path: string) => {
    const nav = navRef.current;
    const el = linkRefs.current[path];
    if (!nav || !el) return;
    const navBox = nav.getBoundingClientRect();
    const elBox = el.getBoundingClientRect();
    setIndicator({ left: elBox.left - navBox.left, width: elBox.width, opacity: 1 });
  };

  useEffect(() => {
    const active = navItems.find((item) => isActive(item.path));
    if (active) {
      moveIndicatorTo(active.path);
    } else {
      setIndicator((s) => ({ ...s, opacity: 0 }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const resetIndicator = () => {
    const active = navItems.find((item) => isActive(item.path));
    if (active) moveIndicatorTo(active.path);
    else setIndicator((s) => ({ ...s, opacity: 0 }));
  };

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };

  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "auto";
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 glass-header ${scrolled ? "shadow-e-2 bg-paper/95" : ""}`}
      >
        <div
          className={`max-w-7xl mx-auto px-6 md:px-7 flex items-center transition-all duration-300 ${
            scrolled ? "py-2.5" : "py-3.5"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/IB-logo.svg"
              alt="Indian Biologicals"
              width={40}
              height={40}
              className={`transition-all duration-300 ${scrolled ? "w-8 h-8" : "w-9 h-9 md:w-10 md:h-10"}`}
            />
            <span className="font-semibold text-[15px] tracking-tight hidden sm:block text-navy">
              Indian Biologicals
            </span>
          </Link>

          {/* Desktop Nav — centered */}
          <nav
            ref={navRef}
            onMouseLeave={resetIndicator}
            className="hidden lg:flex items-center gap-1 relative mx-auto"
          >
            <span
              className="absolute bottom-0 h-[2px] bg-primary rounded-full transition-all duration-300 ease-out pointer-events-none"
              style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
            />
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={item.mega ? openMega : undefined}
                onMouseLeave={item.mega ? closeMega : undefined}
              >
                <Link
                  ref={(el) => {
                    linkRefs.current[item.path] = el;
                  }}
                  href={item.path}
                  onMouseEnter={() => moveIndicatorTo(item.path)}
                  className={`flex items-center gap-1 text-[14.5px] font-medium px-3.5 py-2 transition-colors duration-200 ${
                    isActive(item.path) ? "text-navy font-semibold" : "text-ink-2 hover:text-primary"
                  }`}
                >
                  {item.label}
                  {item.mega && (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>

                {/* Mega menu panel */}
                {item.mega && (
                  <div
                    onMouseEnter={openMega}
                    onMouseLeave={closeMega}
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                      megaOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="w-[560px] bg-surface border border-line rounded-lg shadow-e-4 p-5">
                      <div className="grid grid-cols-2 gap-1.5">
                        {therapeuticAreas.map((area) => (
                          <Link
                            key={area.slug}
                            href={`/products?area=${encodeURIComponent(area.name)}`}
                            onClick={() => setMegaOpen(false)}
                            className="group flex flex-col gap-0.5 rounded-md px-3.5 py-2.5 hover:bg-green-50 transition-colors duration-150"
                          >
                            <span className="text-[14px] font-semibold text-navy group-hover:text-green-ink">
                              {area.name}
                            </span>
                            <span className="text-[12.5px] text-ink-3">{area.focus}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-line flex justify-between items-center">
                        <span className="text-[12px] text-ink-3">Sixteen formulations, six therapeutic areas</span>
                        <Link
                          href="/products"
                          onClick={() => setMegaOpen(false)}
                          className="text-[13px] font-semibold text-green-ink hover:underline"
                        >
                          Browse all products →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center shrink-0 font-semibold text-[13.5px] text-white bg-primary hover:bg-primary-dark rounded-full px-5 py-2.5 transition-all duration-200 active:scale-95"
          >
            Get in touch
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden ml-auto flex flex-col gap-1.5 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 transition-all duration-300 bg-navy ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 transition-opacity bg-navy ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 bg-navy ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Scroll progress accent line */}
        <div className="h-[2px] w-full bg-transparent">
          <div
            className="h-full bg-primary transition-[width] duration-150 ease-out"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-paper transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-12">
            <Image src="/IB-logo.svg" alt="Logo" width={40} height={40} />
            <button onClick={toggleMobileMenu} className="text-3xl text-ink-2" aria-label="Close menu">
              &times;
            </button>
          </div>
          <nav className="flex flex-col gap-8 items-center">
            {navItems.map((item, i) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-2xl font-semibold ${isActive(item.path) ? "text-green-ink" : "text-navy"}`}
                style={
                  mobileMenuOpen
                    ? { animation: `fadeIn 0.4s ease-out ${i * 0.06}s both` }
                    : undefined
                }
                onClick={toggleMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-line flex flex-col items-center gap-4">
            <Link
              href="/contact"
              onClick={toggleMobileMenu}
              className="w-full text-center font-semibold text-white bg-primary hover:bg-primary-dark rounded-full px-6 py-3.5 transition-colors duration-200"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
