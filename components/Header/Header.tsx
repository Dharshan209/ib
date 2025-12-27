"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
  };

  interface NavItem {
    path: string;
    label: string;
    isButton?: boolean;
  }

  const navItems: NavItem[] = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/team", label: "Team" },
    { path: "/csr", label: "CSR" },
    { path: "/gallery", label: "Gallery" },
  ];

  const isActive = (path: string): boolean => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-md py-3`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/IB-logo.svg" 
              alt="Indian Biologicals" 
              width={45} 
              height={45}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span className="font-bold text-xl tracking-tight hidden sm:block text-primary">
              INDIAN BIOLOGICALS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path} 
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(item.path) 
                    ? 'text-primary' 
                    : 'text-slate-600 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-200 ${
                isActive("/contact")
                  ? 'bg-primary text-white'
                  : 'bg-primary text-white hover:bg-primary-dark shadow-md'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden flex flex-col gap-1.5 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 transition-all duration-300 bg-primary ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 transition-opacity bg-primary ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 bg-primary ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-white transition-all duration-500 lg:hidden ${
        mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-12">
            <Image src="/IB-logo.svg" alt="Logo" width={40} height={40} />
            <button onClick={toggleMobileMenu} className="text-3xl text-slate-500">&times;</button>
          </div>
          <nav className="flex flex-col gap-8 items-center">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path} 
                className={`text-2xl font-bold ${isActive(item.path) ? 'text-primary' : 'text-slate-800'}`}
                onClick={toggleMobileMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="mt-8 px-10 py-4 bg-primary text-white rounded-full text-xl font-bold shadow-lg"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;