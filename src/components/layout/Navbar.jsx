import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll logic for Logo visibility
  useEffect(() => {
    const handleScroll = () => {
      // Logic: If window.scrollY > 50, scrolled is true
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? "bg-[#f8faff]/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
    }`}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-24 flex justify-between items-center">
        
        {/* Navbar Logo - Shows at Home, Disappears on Scroll */}
        <div className={`transition-all duration-500 transform ${
          !scrolled 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 -translate-y-4 pointer-events-none scale-95"
        }`}>
          <a href="#" className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#a855f7] bg-clip-text text-transparent">
              Portfolio
            </span>
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-[17px] font-medium text-[#334155] hover:text-[#4f46e5] transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4f46e5] transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="text-slate-700 p-2 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar - Content Left Unchanged per Instructions */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[110] md:hidden" onClick={() => setIsOpen(false)}>
          <div 
            className="absolute right-0 top-0 h-[380px] w-[240px] bg-white shadow-2xl p-6 flex flex-col animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sidebar Header */}
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-bold bg-gradient-to-r from-[#4f46e5] to-[#a855f7] bg-clip-text text-transparent">
                Portfolio
              </span>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-red-500 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Sidebar Links */}
            <ul className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <li key={link} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-lg font-semibold text-[#334155] hover:text-[#4f46e5] transition-all flex justify-between items-center group"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] scale-0 group-hover:scale-100 transition-transform"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-right { animation: slideInRight 0.01s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-fade-in-up { animation: fadeInUp 0.1s ease-out forwards; opacity: 0; }
      `}} />
    </nav>
  );
};

export default Navbar;