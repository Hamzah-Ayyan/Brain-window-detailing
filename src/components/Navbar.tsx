import React, { useState } from 'react';
import { Phone, ShieldCheck, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowingEffect } from './ui/glowing-effect';
import type { PageType } from '../App';

interface NavbarProps {
  activePage: PageType;
  setPage: (page: PageType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { name: string; id: PageType }[] = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Our Work', id: 'work' },
    { name: 'Virtual Tint', id: 'virtual' },
    { name: 'Tint Laws', id: 'laws' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: PageType) => {
    setPage(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(5, 5, 5, 0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      height: '80px',
    }} className="md:px-10">
      {/* Logo */}
      <div
        style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', zIndex: 110 }}
        onClick={() => handleNavClick('home')}
      >
        <div style={{
          width: '32px',
          height: '32px',
          background: 'var(--accent-color)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <ShieldCheck size={20} color="#fff" />
        </div>
        <span style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.5px' }}>
          Brian's<span style={{ color: 'var(--accent-color)' }}>.</span>
        </span>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex" style={{
        gap: '8px',
        padding: '6px',
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.05)',
      }}>
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                position: 'relative',
                padding: '8px 16px',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: 500,
                color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                background: 'transparent',
                transition: 'var(--transition-smooth)',
              }}
            >
              <span style={{ position: 'relative', zIndex: 10, lineHeight: '1', display: 'flex', alignItems: 'center' }}>{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="navbar-lamp"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    background: 'rgba(59, 130, 246, 0.1)',
                    borderRadius: '10px',
                    zIndex: 0,
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-4px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '32px',
                    height: '4px',
                    background: '#3b82f6',
                    borderTopLeftRadius: '999px',
                    borderTopRightRadius: '999px',
                  }}>
                    <div style={{ position: 'absolute', width: '48px', height: '24px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '9999px', filter: 'blur(8px)', top: '-8px', left: '-8px' }} />
                    <div style={{ position: 'absolute', width: '32px', height: '24px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '9999px', filter: 'blur(8px)', top: '-4px' }} />
                    <div style={{ position: 'absolute', width: '16px', height: '16px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '9999px', filter: 'blur(4px)', top: 0, left: '8px' }} />
                  </div>
                </motion.div>
              )}
            </button>
          );
        })}
      </div>

      {/* Right Actions Desktop */}
      <div className="hidden md:flex" style={{ alignItems: 'center', gap: '20px' }}>
        <a
          href="tel:+19549643955"
          className="primary-btn"
          style={{
            borderRadius: '12px',
            padding: '10px 20px',
            fontSize: '14px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            minHeight: '48px',
          }}
        >
          <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
          <span style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px', lineHeight: '1' }}>
            <Phone size={16} />
            (954) 964-3955
          </span>
        </a>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="flex md:hidden z-[110]">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            padding: '8px',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            borderRadius: '8px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '48px',
            minHeight: '48px',
          }}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '80px',
              left: 0,
              right: 0,
              background: 'rgba(5, 5, 5, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              zIndex: 100,
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            }}
          >
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: 500,
                    textAlign: 'left',
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.7)',
                    background: isActive ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                    border: isActive ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid transparent',
                    transition: 'var(--transition-smooth)',
                  }}
                >
                  {item.name}
                </button>
              );
            })}

            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <a
                href="tel:+19549643955"
                className="primary-btn"
                style={{
                  borderRadius: '12px',
                  padding: '14px 20px',
                  fontSize: '16px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  minHeight: '48px'
                }}
              >
                <span style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px', lineHeight: '1' }}>
                  <Phone size={18} />
                  Call (954) 964-3955
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
