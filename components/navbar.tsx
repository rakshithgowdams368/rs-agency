'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/content';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileOpen
          ? 'bg-white shadow-soft'
          : scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
      }`}
    >
      <nav className="container-main flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2 shrink-0" aria-label="RS Medical Agency home">
          <Image
            src="/RS-medical-logo.png"
            alt="RS Medical Agency logo"
            width={100}
            height={100}
            className="rounded"
            priority
          />
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                scrolled
                  ? 'text-ink hover:text-brand-blue hover:bg-bg-soft'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('#contact')}
            className="ml-3 px-5 py-2 text-sm font-semibold bg-brand-green text-white rounded-full hover:bg-brand-green-light transition-colors"
          >
            Get a Quote
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled || mobileOpen ? 'text-ink' : 'text-white'
          }`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 top-16 md:top-20 z-40 bg-white lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col w-full px-6 py-6 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left w-full px-4 py-3.5 text-base font-medium text-gray-800 hover:text-brand-blue hover:bg-gray-50 rounded-xl transition-colors border-b border-gray-100 last:border-b-0"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleClick('#contact')}
                className="mt-6 w-full px-5 py-3.5 text-base font-semibold bg-brand-green text-white rounded-full hover:bg-brand-green-light transition-colors"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
