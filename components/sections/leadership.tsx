'use client';

import { motion, useReducedMotion } from 'framer-motion';

const viewportOpts = { once: true, amount: 0.15 as const };

export default function Leadership() {
  const reduced = useReducedMotion();
  const anim = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: viewportOpts,
        transition: { duration: 0.6 },
      };

  return (
    <section id="leadership" className="section-py bg-slate-50">
      <div className="container-main">
        <motion.div {...anim} className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Meet Our Leadership</p>
          <h2 className="section-h2 mb-5">Our Leadership</h2>
          <p className="text-lg md:text-2xl text-ink-soft leading-relaxed mb-10">
            Leading with experience, serving with care.
          </p>

          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-10 md:px-12 md:py-14 shadow-sm">
            <h3 className="text-2xl md:text-4xl font-bold font-heading text-ink leading-tight mb-6">
              Building trust, one delivery at a time.
            </h3>
            <p className="text-base md:text-xl text-ink-soft leading-relaxed">
              With over 25 years of dedicated experience in the healthcare distribution industry, RS Medical Agency is built on a foundation of integrity, reliability, and genuine partnership. We believe ethical leadership shapes ethical operations — and that the partners and people we serve deserve nothing less. From regional pharmacies to hospitals and healthcare institutions, every relationship is treated with the same care.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
