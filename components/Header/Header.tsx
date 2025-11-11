"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Toggle body scroll when menu is open
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
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
    { path: "/gallery", label: "Gallery" },
  ];

  const isActive = (path: string): boolean => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo and Name */}
      <div className="logo-container">
        <Link href="/">
          <Image 
            src="/IB-logo.svg" 
            alt="Indian Biologicals" 
            width={50}
            height={50}
            className="logo"
            priority
            unoptimized
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="nav-links">
        {navItems.map((item) => (
          <Link 
            key={item.path}
            href={item.path} 
            className={`nav-link ${isActive(item.path) ? "active" : ""}`}
          >
            <span className="nav-text">{item.label}</span>
          </Link>
        ))}
        <Link 
          href="/contact" 
          className={`contact-button ${isActive("/contact") ? "active-button" : ""}`}
        >
          Contact Us
        </Link>
      </nav>

      {/* Mobile menu toggle */}
      <div 
        className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Mobile Navigation */}
      <nav className={`nav-mobile ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <Image 
            src="/IB-logo.svg" 
            alt="Indian Biologicals" 
            width={50}
            height={50}
            className="mobile-logo"
            priority
            unoptimized
          />
          <button 
            className="mobile-close-button"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        
        <div className="mobile-menu-links">
          {[...navItems, { path: "/contact", label: "Contact Us", isButton: true }].map((item) => (
            <Link 
              key={item.path}
              href={item.path} 
              className={`mobile-nav-link ${item.isButton ? 'mobile-contact-button' : ''} ${isActive(item.path) ? "active" : ""}`}
              onClick={toggleMobileMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      <div 
        className={`overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
      ></div>
    </header>
  );
}

export default Header;