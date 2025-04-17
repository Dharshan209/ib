import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
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
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo and Name */}
      <div className="logo-container">
        <img src="/logo.svg" alt="Logo" className="logo" onClick={() => scrollToSection("home")} />
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <a 
          href="#home" 
          className={`nav-link ${activeSection === "home" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Home
        </a>
        <a 
          href="#about" 
          className={`nav-link ${activeSection === "about" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          About
        </a>
        <a 
          href="#product" 
          className={`nav-link ${activeSection === "product" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("product");
          }}
        >
          Product
        </a>
        <a 
          href="#team" 
          className={`nav-link ${activeSection === "team" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("team");
          }}
        >
          Team
        </a>
        <a 
          href="#gallery" 
          className={`nav-link ${activeSection === "gallery" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("gallery");
          }}
        >
          Gallery
        </a>
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
    </header>
  );
}

export default Header;