"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Heart 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "Company", links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "CSR Initiatives", href: "/csr" },
      { label: "Gallery", href: "/gallery" },
    ]},
    { title: "Products", links: [
      { label: "Women's Health", href: "/products#womens-health" },
      { label: "Infertility", href: "/products#infertility" },
      { label: "Wellness", href: "/products#wellness" },
    ]},
    { title: "Support", links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ]}
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image src="/IB-logo.svg" alt="Logo" width={40} height={40} />
              <span className="text-white font-bold text-xl tracking-tight">INDIAN BIOLOGICALS</span>
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Dedicated to delivering international quality healthcare solutions in Women&apos;s Health, Infertility, and Wellness across India since 2011.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all duration-300 group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all duration-300 group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all duration-300 group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all duration-300 group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-white font-bold mb-6 text-lg">{section.title}</h4>
              <ul className="flex flex-col gap-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link href={link.href} className="hover:text-primary transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {currentYear} Indian Biologicals PVT Ltd. All rights reserved.</p>
          <div className="flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
