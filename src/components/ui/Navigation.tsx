'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['about', 'education', 'skills', 'projects', 'ailab', 'terminal', 'experience', 'certifications', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 300) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      
      {/* Desktop Floating Pill Nav */}
      <motion.div 
        className="pointer-events-auto hidden md:flex items-center justify-between gap-8 px-6 py-3 rounded-full bg-dark-900/40 border border-white/10 backdrop-blur-xl shadow-glow-sm transition-all duration-500"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="relative group"
        >
          <div className="flex items-center gap-0.5">
            <span className="text-xl font-bold tracking-tight text-white">ABHINASH</span>
            <span className="text-xl font-black text-indigo-500">.</span>
          </div>
        </button>

        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`relative px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'text-white' : 'text-white/50 hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <a
          href="https://github.com/abhinashp25"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1.5 rounded-full bg-white text-dark-900 text-[13px] font-semibold hover:scale-105 active:scale-95 transition-transform"
        >
          GitHub
        </a>
      </motion.div>

      {/* Mobile Nav Top Bar */}
      <div className={`pointer-events-auto md:hidden w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 ${
        scrolled ? 'bg-dark-900/60 backdrop-blur-xl border border-white/5' : ''
      }`}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-0.5">
          <span className="text-xl font-bold tracking-tight text-white">ABHINASH</span>
          <span className="text-xl font-black text-indigo-500">.</span>
        </button>

        <button
          className="p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pointer-events-auto md:hidden absolute top-24 left-4 right-4 bg-dark-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl overflow-hidden flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-3 rounded-xl text-left text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
