"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const defaultTextColor = 'text-gray-300';
  const hoverTextColor = 'text-white';
  const textSizeClass = 'text-sm';

  return (
    <a href={href} className={`group relative inline-block overflow-hidden h-5 flex items-center ${textSizeClass}`}>
      <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
        <span className={defaultTextColor}>{children}</span>
        <span className={hoverTextColor}>{children}</span>
      </div>
    </a>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass('rounded-2xl');
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full');
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const logoElement = (
    <div className="flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-10 h-10 fill-black stroke-black overflow-visible">
        <circle cx="50" cy="50" r="35" fill="none" strokeWidth="13" />
        <line x1="50" y1="50" x2="82" y2="82" strokeWidth="13" strokeLinecap="round" />
        <circle cx="50" cy="50" r="14"  />
        <circle cx="82" cy="82" r="14"  />
      </svg>
    </div>
  );

  const navLinksData = [
    { label: 'Manifesto', href: '#1' },
    { label: 'Careers', href: '#2' },
    { label: 'Discover', href: '#3' },
  ];

  const loginButtonElement = (
    <button className="btn">Log In</button>
  );

  const signupButtonElement = (
    <button className="btn">Sign Up</button>
  );

  return (
    <header className={`fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50
                       flex flex-col items-center
                       px-5 sm:px-6 py-3 border border-[#E5E5E5] bg-[#FFFFFF]
                       ${headerShapeClass}
                       w-[calc(100%-2rem)] max-w-5xl
                       transition-all duration-300 ease-in-out`}>

      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
           {logoElement}
           <span className="text-white font-bold tracking-widest text-sm hidden sm:block ml-1">QAWI</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {loginButtonElement}
          {signupButtonElement}
        </div>

        <button 
          className="md:hidden flex items-center justify-center p-2 -mr-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none" 
          onClick={toggleMenu} 
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div className={`md:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? 'max-h-[400px] opacity-100 mt-5' : 'max-h-0 opacity-0 mt-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-2 text-base w-full pb-4">
          {navLinksData.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors w-full text-center py-3 font-medium">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center space-y-3 w-full border-t border-[#333]/50 pt-5 pb-2">
          {loginButtonElement}
          {signupButtonElement}
        </div>
      </div>
    </header>
  );
}
