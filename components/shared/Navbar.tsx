"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-dark/70 backdrop-blur-md border-b border-white/5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
        : "bg-transparent py-6 md:py-8"
    }`}>
      <nav className="container mx-auto flex justify-between items-center px-6 md:px-8">
          
          {/* Logo */}
          <Link href='/' className='z-61 relative font-title font-black uppercase text-sm tracking-[0.2em] text-light transition-colors hover:text-cyan-main'>
              Kyoto House
          </Link>

          {/* Componente escritorio */}
          <DesktopMenu />

          {/* Boton Movil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='z-61 relative text-light p-2 transition-transform active:scale-90 cursor-pointer lg:hidden'
          >
            {isOpen ? <X size={28} className='text-cyan-main text-glow-cyan'/> : <Menu size={28}/>}
          </button>
      </nav>

      <MobileMenu isOpen={isOpen} closeMenu={() => setIsOpen(false)}/>
    </header>
  );
}