'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { leadershipBio } from '@/lib/content';

const viewportOpts = { once: true, amount: 0.15 as const };

export default function Leadership() {
  const reduced = useReducedMotion();
  const anim = reduced ? {} : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: viewportOpts, transition: { duration: 0.6 } };

  return (
    <section id="leadership" className="section-py bg-bg-soft">
      <div className="container-main">
        <motion.div {...anim} className="text-center mb-6">
          <p className="eyebrow">Meet Our Leadership</p>
          <h2 className="section-h2 mb-3">Our Leadership</h2>
          <p className="text-ink-soft">Leading with experience, serving with care.</p>
        </motion.div>

        <motion.div
          {...anim}
          transition={{ ...anim.transition, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-ink tracking-heading mb-8">
            Building trust, one delivery at a time.
          </h3>
          <blockquote className="text-ink-soft leading-[1.8] text-base md:text-lg mb-8">
            {leadershipBio}
          </blockquote>
          <div className="w-16 h-0.5 bg-line mx-auto mb-6" />
          <p className="font-heading font-bold text-ink text-lg">Rakesh</p>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green mt-1">
            Founder & Managing Director
          </p>
        </motion.div>
      </div>
    </section>
  );
}
