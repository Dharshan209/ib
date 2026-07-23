"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { therapeuticAreas, featuredProducts, countByArea, products } from '../../lib/products';

const targets = therapeuticAreas.map((a) => countByArea(a.name));
const total = products.length;
const AREA_INTERVAL_MS = 4200;

const Home = () => {
  const [animatedTotal, setAnimatedTotal] = useState(0);
  const [activeArea, setActiveArea] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReduceMotion(reduce);
    if (reduce) {
      setAnimatedTotal(total);
      return;
    }
    const steps = 26;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      const f = Math.min(1, i / steps);
      const e = 1 - Math.pow(1 - f, 3);
      setAnimatedTotal(Math.round(total * e));
      if (f >= 1) clearInterval(timer);
    }, 34);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (reduceMotion || !autoplay) return;
    const timer = setTimeout(() => {
      setActiveArea((i) => (i + 1) % therapeuticAreas.length);
    }, AREA_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [activeArea, autoplay, reduceMotion]);

  const area = therapeuticAreas[activeArea];
  const areaProduct = products.find((p) => p.area === area.name);

  const selectArea = (i: number) => {
    setActiveArea(i);
    setAutoplay(false);
  };

  return (
    <div className="bg-paper">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-7 pt-16 pb-10 grid lg:grid-cols-[1.04fr_.96fr] gap-14 items-center">
        <div>
          <div className="eyebrow mb-5 animate-fade-in">For healthcare professionals · Women&apos;s health</div>
          <h1 className="font-semibold text-4xl md:text-[56px] leading-[1.04] tracking-[-0.03em] text-navy mb-5 animate-fade-in">
            Reproductive health,<br />precisely formulated.
          </h1>
          <div className="h-5 mb-3 overflow-hidden">
            <span
              key={activeArea}
              className="font-mono text-[12.5px] tracking-[.02em] text-green-ink inline-block"
              style={{ animation: 'fadeIn 0.45s ease-out' }}
            >
              Now spotlighting · {area.name} — {area.focus}
            </span>
          </div>
          <p className="text-lg md:text-[19px] leading-relaxed text-ink-2 max-w-[48ch] mb-8 animate-fade-in">
            High-quality medicines in Women&apos;s Health, Infertility and Wellness — a purpose-driven, vertically integrated healthcare organisation trusted by doctors across India.
          </p>
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-in">
            <Link href="/products" className="font-semibold text-base text-white bg-green-600 hover:bg-green-700 rounded-md px-6 py-3 transition-colors shadow-sm">
              Explore products →
            </Link>
            <Link href="/team" className="font-semibold text-base text-green-ink bg-surface hover:bg-green-50 border border-line-strong hover:border-green-300 rounded-md px-6 py-3 transition-colors">
              Meet the team
            </Link>
          </div>
          <div className="flex gap-7 border-t border-line pt-5 animate-fade-in">
            <div>
              <div className="font-grotesk font-bold text-2xl tracking-[-0.02em] text-ink">{animatedTotal}</div>
              <div className="text-xs text-ink-2">Products</div>
            </div>
            <div>
              <div className="font-grotesk font-bold text-2xl tracking-[-0.02em] text-ink">6</div>
              <div className="text-xs text-ink-2">Therapeutic areas</div>
            </div>
            <div>
              <div className="font-grotesk font-bold text-2xl tracking-[-0.02em] text-ink">Rx</div>
              <div className="text-xs text-ink-2">Clinician-led</div>
            </div>
          </div>
        </div>

        {/* Therapeutic area rotator */}
        <div
          className="relative animate-fade-in"
          onMouseEnter={() => setAutoplay(false)}
        >
          <div className="absolute -inset-x-5 -inset-y-8 bg-[radial-gradient(60%_60%_at_70%_30%,rgba(70,168,0,.14),transparent_70%)] blur-sm animate-glow pointer-events-none"></div>
          <div className="relative bg-gradient-to-br from-surface to-green-50 border border-line rounded-2xl shadow-[var(--e-3)] overflow-hidden min-h-[300px]">
            <div className="absolute inset-0 grid-texture animate-drift pointer-events-none"></div>
            <div key={activeArea} className="relative p-6 pb-6" style={{ animation: 'fadeIn 0.5s ease-out' }}>
              <div className="flex justify-between items-baseline mb-5">
                <span className="font-mono text-[10.5px] tracking-[.14em] uppercase text-ink-3">
                  Therapeutic area · 0{activeArea + 1}/0{therapeuticAreas.length}
                </span>
                <span className="font-mono text-[10.5px] text-orange-ink">● {targets[activeArea]} SKU</span>
              </div>

              <h3 className="font-semibold text-[28px] tracking-[-0.02em] text-navy mb-2.5">{area.name}</h3>
              <p className="text-[14.5px] leading-relaxed text-ink-2 mb-5 max-w-[38ch] min-h-[42px]">
                {area.description}
              </p>

              {areaProduct && (
                <Link
                  href={`/products/${areaProduct.slug}`}
                  className="flex items-center gap-3 bg-white/70 hover:bg-white border border-line rounded-lg p-3 transition-colors mb-3"
                >
                  <div className="w-14 h-14 shrink-0 rounded-md bg-gradient-to-br from-white to-green-50 border border-line flex items-center justify-center p-1.5">
                    <Image src={areaProduct.image} alt={areaProduct.name} width={56} height={56} className="object-contain w-full h-full" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-[14px] text-navy truncate">{areaProduct.name}</div>
                    <div className="font-mono text-[11px] text-ink-3 truncate">{areaProduct.use}</div>
                  </div>
                  <span className="ml-auto text-green-ink text-sm shrink-0">→</span>
                </Link>
              )}

              <Link
                href={`/products?area=${encodeURIComponent(area.name)}`}
                className="inline-block font-semibold text-[13px] text-green-ink hover:underline"
              >
                View all {targets[activeArea]} in {area.name} →
              </Link>
            </div>
          </div>

          {/* area selector / autoplay progress */}
          <div className="flex gap-2 mt-4">
            {therapeuticAreas.map((a, i) => (
              <button
                key={a.slug}
                onClick={() => selectArea(i)}
                aria-label={`Show ${a.name}`}
                aria-current={i === activeArea}
                className="flex-1 h-[3px] rounded-full bg-line-strong overflow-hidden cursor-pointer"
              >
                <span
                  className="block h-full bg-green-600 rounded-full"
                  style={
                    i === activeArea
                      ? autoplay && !reduceMotion
                        ? { animation: `fillBar ${AREA_INTERVAL_MS}ms linear forwards` }
                        : { width: '100%' }
                      : { width: '0%' }
                  }
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* THERAPEUTIC AREAS */}
      <section className="max-w-7xl mx-auto px-6 md:px-7 py-16">
        <div className="font-mono text-xs tracking-[.14em] text-green-ink uppercase mb-3">Therapeutic areas</div>
        <div className="flex justify-between items-end flex-wrap gap-4 mb-7">
          <h2 className="font-semibold text-3xl tracking-[-0.02em] text-ink max-w-[22ch] m-0">
            Focused where women&apos;s health needs it most
          </h2>
          <Link href="/products" className="font-semibold text-[14.5px] text-green-ink">View all products →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[18px] gap-y-4">
          {therapeuticAreas.map((area, i) => (
            <Link
              key={area.slug}
              href={`/products?area=${encodeURIComponent(area.name)}`}
              className="text-left bg-surface border border-line rounded-lg p-[22px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="font-mono text-[11px] text-ink-3 mb-2.5">0{i + 1} · {targets[i]} products</div>
              <div className="font-semibold text-lg text-navy mb-1.5">{area.name}</div>
              <div className="text-[13.5px] text-ink-2 leading-relaxed">{area.description}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-sunk border-y border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-7 py-14">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-7">
            <div>
              <div className="font-mono text-xs tracking-[.14em] text-green-ink uppercase mb-2.5">Featured</div>
              <h2 className="font-semibold text-3xl tracking-[-0.02em] text-ink m-0">Frequently prescribed</h2>
            </div>
            <Link href="/products" className="font-semibold text-[14.5px] text-green-ink">See catalog →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {featuredProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="text-left bg-surface border border-line rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-square bg-gradient-to-br from-white to-green-50 flex items-center justify-center border-b border-line p-4">
                  <span className="absolute z-10 top-3 left-3 text-[10px] font-semibold text-green-ink bg-green-50 border border-green-100 rounded-full px-2.5 py-1">{p.tag}</span>
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={200}
                    height={200}
                    className="object-contain w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="font-mono text-[10.5px] tracking-[.1em] text-ink-3 uppercase mb-1">{p.use}</div>
                  <div className="font-semibold text-lg tracking-[-0.01em] text-navy mb-2.5">{p.name}</div>
                  <span className="text-[13.5px] font-semibold text-green-ink">View details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SCIENCE SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-6 md:px-7 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="font-mono text-xs tracking-[.14em] text-green-ink uppercase mb-3">Why Indian Biologicals?</div>
          <h2 className="font-semibold text-[30px] tracking-[-0.02em] text-ink mb-4">Specialised care for every stage of life</h2>
          <p className="text-[16.5px] leading-relaxed text-ink-2 mb-5">
            We bridge the gap between scientific advancement and clinical application, providing trusted solutions for healthcare providers nationwide. Our portfolio is curated to address the most pressing needs in modern healthcare, with a primary focus on women&apos;s well-being and reproductive health.
          </p>
          <Link href="/about" className="font-semibold text-[15px] text-green-ink bg-surface border border-line-strong hover:bg-green-50 hover:border-green-300 rounded-md px-5 py-2.5 transition-colors">
            About Indian Biologicals →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3.5">
          <div className="bg-surface border border-line rounded-lg p-5">
            <div className="font-grotesk font-bold text-[34px] tracking-[-0.03em] text-green-ink leading-none">13+</div>
            <div className="text-[13px] text-ink-2 mt-1">Years in service</div>
          </div>
          <div className="bg-surface border border-line rounded-lg p-5">
            <div className="font-grotesk font-bold text-[34px] tracking-[-0.03em] text-navy leading-none">500+</div>
            <div className="text-[13px] text-ink-2 mt-1">Customers nationwide</div>
          </div>
          <div className="bg-surface border border-line rounded-lg p-5">
            <div className="font-grotesk font-bold text-[34px] tracking-[-0.03em] text-orange-ink leading-none">35+</div>
            <div className="text-[13px] text-ink-2 mt-1">Years of experience</div>
          </div>
          <div className="bg-navy rounded-lg p-5">
            <div className="font-grotesk font-bold text-2xl tracking-[-0.02em] text-white leading-tight">Trusted</div>
            <div className="text-[13px] text-navy-100 mt-1">by doctors across India</div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="max-w-7xl mx-auto px-6 md:px-7 mb-16">
        <div className="bg-navy rounded-2xl p-8 md:p-12 flex justify-between items-center gap-8 flex-wrap relative overflow-hidden">
          <div className="absolute inset-0 grid-texture-dark pointer-events-none"></div>
          <div className="relative max-w-[46ch]">
            <h2 className="font-semibold text-[28px] tracking-[-0.02em] text-white mb-2">Ready to partner with a trusted healthcare leader?</h2>
            <p className="text-[15.5px] text-navy-100 m-0">
              Join 500+ doctors and healthcare facilities that rely on Indian Biologicals for superior medical solutions.
            </p>
          </div>
          <div className="relative flex gap-3 flex-wrap">
            <Link href="/contact" className="font-semibold text-base text-navy bg-white rounded-md px-6 py-3 hover:-translate-y-0.5 transition-transform inline-block">
              Get in touch today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
