'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { heroHighlights } from '@/lib/content';
import { SITE_TAGLINE } from '@/lib/constants';

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) bgRef.current.style.transform = `translateY(${y * 0.3}px)`;
      if (contentRef.current) contentRef.current.style.opacity = `${Math.max(0, 1 - y / 600)}`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [reducedMotion]);

  const dur = reducedMotion ? 0 : 0.6;

  const titleParts: React.ReactNode[] = [];
  const titleText = 'Delivering Oncology (Cancer Medicine) Medicines, HIV Products, Nephrology Products & Vaccines';
  let remaining = titleText;
  heroHighlights.forEach((highlight) => {
    const idx = remaining.indexOf(highlight);
    if (idx > -1) {
      if (idx > 0) titleParts.push(remaining.slice(0, idx));
      titleParts.push(
        <span key={highlight} className="text-brand-green-light">
          {highlight}
        </span>
      );
      remaining = remaining.slice(idx + highlight.length);
    }
  });
  if (remaining) titleParts.push(remaining);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-brand-blue-deep/50 backdrop-blur-[1px]" aria-hidden="true" />

      <div ref={contentRef} className="relative container-main py-32 md:py-40">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur, delay: reducedMotion ? 0 : 0.2 }}
            className="eyebrow !text-brand-green-light !mb-6"
          >
            {SITE_TAGLINE}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur, delay: reducedMotion ? 0 : 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading tracking-heading text-white leading-[1.35] mt-4 mb-6"
          >
            {titleParts}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur, delay: reducedMotion ? 0 : 0.5 }}
            className="hero-summary text-lg sm:text-xl text-white/80 leading-relaxed mb-12 max-w-2xl"
          >
            RS Medical Agency is a B2B pharmaceutical distributor headquartered in Hassan, Karnataka, supplying 30,000+ SKUs from 500+ manufacturers to licensed pharmacies, hospitals, and institutions across India and worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur, delay: reducedMotion ? 0 : 0.6 }}
          >
            <a
              href="#services"
              className="inline-flex items-center px-8 py-3.5 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-brand-blue transition-colors"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors"
        animate={reducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}
