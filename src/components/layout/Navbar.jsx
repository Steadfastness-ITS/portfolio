import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-[100] py-6">
      <div className="max-w-[1440px] mx-auto px-12 md:px-24 flex justify-between items-center">
        
        {/* Animated Logo using Tailwind Keyframes */}
        <div className="flex-shrink-0">
          <a 
            href="#" 
            className="text-2xl font-bold tracking-tight inline-block hover:scale-105 transition-transform duration-300 animate-fade-in-left"
          >
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent">
              Portfolio
            </span>
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <li key={link} className="animate-fade-in-down">
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[17px] font-medium text-[#334155] hover:text-[#3b82f6] transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#334155]"
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-6 absolute w-full shadow-lg">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-lg font-medium text-[#334155]" onClick={() => setIsOpen(false)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;