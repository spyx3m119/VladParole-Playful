import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'work' | 'about' | 'tools') => void;
  onOpenContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home', action: () => onNavigate('home') },
    { name: 'WORK', href: '#work', action: () => onNavigate('work') },
    { name: 'ABOUT', href: '#about', action: () => onNavigate('about') },
    { name: 'TOOLS', href: '#tools', action: () => onNavigate('tools') },
    { name: 'CONTACT', href: '#contact', action: () => onOpenContact() },
  ];

  const handleNavClick = (e: React.MouseEvent, action: (() => void) | null) => {
    e.preventDefault();
    if (action) {
      action();
      setIsOpen(false);
      window.scrollTo(0, 0);
    }
  };

  const getLinkStyles = (name: string, isMobile: boolean = false) => {
    const baseStyles = isMobile 
      ? "text-center font-medium text-lg py-3 rounded-xl transition-all duration-300 border-2" 
      : "text-xs md:text-sm font-medium tracking-wide transition-all duration-300 px-6 py-2 rounded-full border-2";

    switch (name) {
      case 'HOME':
        return `${baseStyles} border-[#bef264] text-[#bef264] hover:bg-[#bef264] hover:text-black hover:shadow-[0_0_15px_rgba(190,242,100,0.4)]`;
      case 'WORK':
        return `${baseStyles} border-[#ec4899] text-[#ec4899] hover:bg-[#ec4899] hover:text-white hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]`;
      case 'ABOUT':
        // Reverse effect: Start Solid -> Hover Transparent
        return `${baseStyles} border-[#ec4899] bg-[#ec4899] text-white hover:bg-transparent hover:text-[#ec4899] hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]`;
      case 'TOOLS':
        // Reverse effect: Start Solid -> Hover Transparent
        return `${baseStyles} border-[#60a5fa] bg-[#60a5fa] text-white hover:bg-transparent hover:text-[#60a5fa] hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]`;
      case 'CONTACT':
        // Reverse effect: Start Solid -> Hover Transparent
        return `${baseStyles} border-[#bef264] bg-[#bef264] text-black hover:bg-transparent hover:text-[#bef264] hover:shadow-[0_0_15px_rgba(190,242,100,0.4)]`;
      default:
        return `${baseStyles} border-transparent text-gray-300 hover:text-white`;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-5xl mx-auto glass-panel rounded-full px-6 py-3 flex justify-between items-center relative shadow-2xl shadow-purple-500/10 border border-white/10 bg-[#0f1014]/80 backdrop-blur-xl">
        
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => { onNavigate('home'); window.scrollTo(0, 0); }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center text-white font-black text-xl shadow-[0_0_15px_rgba(168,85,247,0.6)] border-2 border-white/20">
            V
          </div>
          <span className="font-medium text-xl tracking-tight text-white hidden sm:block">VLAD PAROLE</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={getLinkStyles(link.name)}
              onClick={(e) => handleNavClick(e, link.action)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-24 left-6 right-6 glass-panel rounded-3xl p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-4 fade-in duration-200 bg-[#1a1b26] border-white/10 shadow-2xl z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.action)}
              className={getLinkStyles(link.name, true)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;