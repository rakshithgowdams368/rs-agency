'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { partners } from '@/lib/content';

const brandLogos = [
  { src: '/brand/Rectangle_36.png', alt: 'Pfizer' },
  { src: '/brand/Rectangle_37.png', alt: 'Natco' },
  { src: '/brand/Rectangle_38.png', alt: 'Zydus' },
  { src: '/brand/Rectangle_39.png', alt: 'Abbott' },
  { src: '/brand/Rectangle_40.png', alt: 'Hetero' },
  { src: '/brand/Rectangle_41.png', alt: 'Cipla' },
  { src: '/brand/Rectangle_42.png', alt: 'Roche' },
];

const viewportOpts = { once: true, amount: 0.15 as const };

export default function PartnersSection() {
  const reduced = useReducedMotion();
  const anim = reduced ? {} : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: viewportOpts, transition: { duration: 0.6 } };
  const [showAll, setShowAll] = useState(false);

  const duplicated = [...brandLogos, ...brandLogos];

  return (
    <section className="section-py bg-bg-soft overflow-hidden">
      <div className="container-main">
        <motion.div {...anim} className="text-center mb-14">
          <p className="eyebrow">Trusted Partners</p>
          <h2 className="section-h2">Our Companies</h2>
        </motion.div>

        {!showAll ? (
          <motion.div {...anim} transition={{ ...anim.transition, delay: 0.15 }}>
            <div className="marquee-pause relative">
              <div className="flex marquee-track animate-marquee-slow w-max gap-6">
                {duplicated.map((logo, i) => (
                  <div
                    key={`${logo.alt}-${i}`}
                    className="flex items-center justify-center w-[200px] h-24 bg-white rounded-2xl shadow-soft border border-line grayscale hover:grayscale-0 transition-all"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={160}
                      height={60}
                      className="object-contain max-h-14"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {partners.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center h-20 bg-white rounded-2xl shadow-soft border border-line"
              >
                <span className="font-heading font-semibold text-brand-blue text-sm">{name}</span>
              </div>
            ))}
          </motion.div>
        )}

        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm font-medium text-brand-green hover:text-brand-green-light transition-colors"
          >
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        </div>
      </div>
    </section>
  );
}
