"use client";
import React from "react";
import Link from "next/link";
import FiveC from "./5c";
import { therapeuticAreas } from "../../lib/products";

const AboutUs = () => {
  return (
    <div className="bg-paper">
      <section className="max-w-7xl mx-auto px-6 md:px-7 pt-10 pb-6">
        <div className="flex gap-2 items-center text-[13px] text-ink-2 mb-6">
          <Link href="/" className="text-green-ink">Home</Link>
          <span className="text-ink-3">/</span>
          <span className="text-ink">About</span>
        </div>
        <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-12 items-center">
          <div className="reveal reveal-left">
            <div className="font-mono text-xs tracking-[.14em] text-green-ink uppercase mb-3.5">About Indian Biologicals</div>
            <h1 className="font-semibold text-4xl md:text-[46px] leading-[1.06] tracking-[-0.03em] text-navy mb-5">
              A purpose-driven healthcare organisation
            </h1>
            <p className="text-lg leading-relaxed text-ink-2 mb-4">
              Indian Biologicals Pvt Ltd, established in 2011, is a dynamic, purpose-driven healthcare organisation delivering high-quality medicines in Women&apos;s Health, Infertility and Wellness. IB is vertically integrated with development, manufacturing and marketing capabilities across India.
            </p>
            <p className="text-base leading-relaxed text-ink-2 m-0">
              We are associated with Altoven, a leading emerging manufacturing plant with over 35 years of pharmaceutical expertise in APIs, biosimilars, branded generics and more.
            </p>
          </div>
          <div className="reveal reveal-right relative bg-gradient-to-br from-surface to-green-50 border border-line rounded-2xl shadow-[var(--e-2)] p-6 overflow-hidden" style={{ animationDelay: '120ms' }}>
            <div className="absolute inset-0 grid-texture pointer-events-none"></div>
            <div className="relative flex flex-col gap-3.5">
              <div className="flex justify-between items-baseline">
                <span className="font-grotesk font-bold text-[38px] tracking-[-0.03em] text-green-ink leading-none">2011</span>
                <span className="text-[13px] text-ink-2">established</span>
              </div>
              <div className="h-px bg-line"></div>
              <div className="flex justify-between items-baseline">
                <span className="font-grotesk font-bold text-[38px] tracking-[-0.03em] text-navy leading-none">35+</span>
                <span className="text-[13px] text-ink-2">years of expertise</span>
              </div>
              <div className="h-px bg-line"></div>
              <div className="flex justify-between items-baseline">
                <span className="font-grotesk font-bold text-[38px] tracking-[-0.03em] text-orange-ink leading-none">500+</span>
                <span className="text-[13px] text-ink-2">customers nationwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mission & vision */}
      <section className="bg-sunk border-y border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-7 py-14 grid md:grid-cols-2 gap-[22px]">
          <div className="reveal reveal-left bg-surface border border-line rounded-xl p-8">
            <div className="font-mono text-xs tracking-[.14em] text-green-ink uppercase mb-3.5">Our mission</div>
            <p className="text-lg leading-relaxed text-ink m-0">
              To improve the lives and health of all women &amp; couples to achieve their dreams of parenthood by offering high-quality products through healthcare professionals — from conventional therapy to state-of-the-art technologies.
            </p>
          </div>
          <div className="reveal reveal-right bg-navy rounded-xl p-8 relative overflow-hidden" style={{ animationDelay: '120ms' }}>
            <div className="absolute inset-0 grid-texture-dark pointer-events-none"></div>
            <div className="relative">
              <div className="font-mono text-xs tracking-[.14em] text-green-300 uppercase mb-3.5">Our vision</div>
              <p className="text-lg leading-relaxed text-white m-0">
                We strive to be the leaders in Infertility, Women&apos;s Health and Wellness in the local and global communities through excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5Cs */}
      <section className="max-w-7xl mx-auto px-6 md:px-7 py-14">
        <FiveC />
      </section>

      {/* focus areas */}
      <section className="max-w-7xl mx-auto px-6 md:px-7 pb-14">
        <div className="reveal reveal-scale bg-navy rounded-2xl p-8 md:p-11 relative overflow-hidden">
          <div className="absolute inset-0 grid-texture-dark pointer-events-none"></div>
          <div className="relative">
            <div className="font-mono text-xs tracking-[.14em] text-green-300 uppercase mb-3">Where we focus</div>
            <h2 className="font-semibold text-[28px] tracking-[-0.02em] text-white mb-6">Six areas of women&apos;s health</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {therapeuticAreas.map((area, i) => (
                <div key={area.slug} className="reveal bg-white/[.06] border border-white/[.14] rounded-md p-4 hover:bg-white/[.1] transition-colors duration-300" style={{ animationDelay: `${(i % 3) * 70}ms` }}>
                  <div className="font-semibold text-base text-white mb-1">{area.name}</div>
                  <div className="text-[13px] text-navy-100">{area.focus}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="reveal max-w-7xl mx-auto px-6 md:px-7 pb-16 text-center">
        <h2 className="font-semibold text-[28px] tracking-[-0.02em] text-ink mb-2.5">Work with our medical affairs team</h2>
        <p className="text-base text-ink-2 max-w-[52ch] mx-auto mb-6">
          Product information, prescriber support and distribution partnerships.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/contact" className="font-semibold text-[15px] text-white bg-green-600 hover:bg-green-700 rounded-md px-[22px] py-3 transition-colors">
            Contact us
          </Link>
          <Link href="/products" className="font-semibold text-[15px] text-green-ink bg-surface border border-line-strong rounded-md px-[22px] py-3 transition-colors">
            Browse products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
