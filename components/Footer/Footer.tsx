"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-navy-100">
      <div className="max-w-7xl mx-auto px-6 md:px-7 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-7">
          <div className="reveal">
            <div className="flex items-center gap-2.5 mb-3.5">
              <Image
                src="/IB-logo.svg"
                alt="Indian Biologicals"
                width={40}
                height={40}
                className="w-10 h-10 object-contain bg-white rounded-md p-0.5"
              />
              <span className="font-semibold text-[14.5px] text-white">Indian Biologicals</span>
            </div>
            <p className="text-[13.5px] leading-relaxed text-navy-100 max-w-[36ch] m-0">
              A curated portfolio addressing the most pressing needs in women&apos;s wellbeing and reproductive health.
            </p>
          </div>

          <div className="reveal" style={{ animationDelay: '80ms' }}>
            <div className="font-mono text-[11px] tracking-[.1em] uppercase text-green-300 mb-3">Explore</div>
            <div className="flex flex-col gap-2 text-[13.5px]">
              <Link href="/products" className="text-white hover:text-green-300 transition-colors w-fit">Products</Link>
              <Link href="/about" className="text-white hover:text-green-300 transition-colors w-fit">About</Link>
              <Link href="/team" className="text-white hover:text-green-300 transition-colors w-fit">Team</Link>
              <Link href="/csr" className="text-white hover:text-green-300 transition-colors w-fit">CSR</Link>
              <Link href="/gallery" className="text-white hover:text-green-300 transition-colors w-fit">Gallery</Link>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: '160ms' }}>
            <div className="font-mono text-[11px] tracking-[.1em] uppercase text-green-300 mb-3">Areas</div>
            <div className="flex flex-col gap-2 text-[13.5px] text-navy-100">
              <span>Fertility</span>
              <span>Prenatal</span>
              <span>PCOS</span>
              <span>Anaemia</span>
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: '240ms' }}>
            <div className="font-mono text-[11px] tracking-[.1em] uppercase text-green-300 mb-3">Contact</div>
            <div className="flex flex-col gap-2 text-[13.5px] text-navy-100">
              <span>West Mambalam, Chennai — 600033</span>
              <a href="mailto:admin@indianbiologicals.com" className="text-white hover:text-green-300 transition-colors w-fit">admin@indianbiologicals.com</a>
              <a href="tel:7373739309" className="text-white hover:text-green-300 transition-colors w-fit">73737 39309</a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-400 mt-7 pt-[18px] flex flex-wrap justify-between gap-2.5 text-[12.5px] text-navy-100">
          <span>© {currentYear} Indian Biologicals. For healthcare professionals.</span>
          <span className="flex gap-[18px]">
            <a href="#" className="text-navy-100 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-navy-100 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-navy-100 hover:text-white transition-colors">Adverse-event reporting</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
