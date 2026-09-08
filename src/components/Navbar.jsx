import React, { useState } from "react";
import { createPortal } from "react-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  const handleNavClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-[#faf7f2]/95 backdrop-blur-sm px-4 sm:px-8 py-4 flex items-center justify-between font-sans border-b border-[#e5ddd0] sticky top-0 z-50">
      {/* Logo / Name */}
      <div className="text-[#1a1a1a] text-xl font-bold tracking-wide z-50">
        Iqra Ashraf
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => handleNavClick(item)}
            className={`relative py-1 text-sm font-medium transition-colors duration-300 ${
              activeItem === item
                ? "text-[#d9552c]"
                : "text-[#6b6b6b] hover:text-[#1a1a1a]"
            }`}
          >
            {item}
            {activeItem === item && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d9552c] rounded-full" />
            )}
          </a>
        ))}
      </div>

      {/* Desktop CTA */}
      <button className="hidden md:block bg-[#1a1a1a] hover:bg-[#d9552c] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded transition-all duration-300">
        Hire Me
      </button>

      {/* Hamburger Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none z-50"
        aria-label="Toggle Menu"
      >
        <span className={`h-0.5 w-6 bg-[#1a1a1a] rounded-full transition-all duration-300 transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`h-0.5 w-6 bg-[#1a1a1a] rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
        <span className={`h-0.5 w-6 bg-[#1a1a1a] rounded-full transition-all duration-300 transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      
    
{createPortal(
  <div
    className={`fixed inset-0 flex flex-col items-center justify-center gap-8 md:hidden z-40 ${
      isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
    }`}
  >
    <div
      className={`absolute inset-0 bg-white transition-opacity duration-300 ${
        isMenuOpen ? "opacity-100" : "opacity-0"
      }`}
    />
    <div
      className={`relative flex flex-col items-center gap-6 w-full px-8 transition-opacity duration-300 ${
        isMenuOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => handleNavClick(item)}
          className={`text-xl font-medium tracking-wide py-2 transition-colors duration-300 ${
            activeItem === item
              ? "text-[#d9552c]"
              : "text-[#3a3a3a] hover:text-[#1a1a1a]"
          }`}
        >
          {item}
        </a>
      ))}
      <button className="mt-4 w-full max-w-50 bg-[#1a1a1a] hover:bg-[#d9552c] text-white font-bold text-sm uppercase tracking-wider px-5 py-3 rounded transition-all duration-300">
        Hire Me
      </button>
    </div>
  </div>,
  document.body
)}
    </nav>
  );
};

export default Navbar;