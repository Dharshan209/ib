import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine which section is currently in view
      const sections = ["home", "about", "product", "team", "gallery", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // Offset for header height
        behavior: "smooth"
      });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Toggle body scroll when menu is open
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo and Name */}
      <div className="logo-container">
        <img 
          src="/IB-logo.svg" 
          alt="Indian Biologicals" 
          className="logo" 
          onClick={() => scrollToSection("home")} 
        />
      </div>

      {/* Desktop Navigation Links */}
      <nav className="nav-links">
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "product", label: "Products" },
          { id: "team", label: "Team" },
          { id: "gallery", label: "Gallery" }
        ].map((item) => (
          <a 
            key={item.id}
            href={`#${item.id}`} 
            className={`nav-link ${activeSection === item.id ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
          >
            <span className="nav-text">{item.label}</span>
          </a>
        ))}
        <a 
          href="#contact" 
          className={`contact-button ${activeSection === "contact" ? "active-button" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Contact Us
        </a>
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
          <img 
            src="/IB-logo.svg" 
            alt="Indian Biologicals" 
            className="mobile-logo" 
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
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "product", label: "Products" },
            { id: "team", label: "Team" },
            { id: "gallery", label: "Gallery" },
            { id: "contact", label: "Contact Us", isButton: true }
          ].map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              className={`mobile-nav-link ${item.isButton ? 'mobile-contact-button' : ''} ${activeSection === item.id ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
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