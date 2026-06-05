'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { journeySteps } from '@/lib/content';

const viewportOpts = { once: true, amount: 0.15 as const };

export default function Journey() {
  const reduced = useReducedMotion();
  const anim = reduced ? {} : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: viewportOpts, transition: { duration: 0.6 } };

  return (
    <section className="section-py bg-bg-soft">
      <div className="container-main">
        <motion.div {...anim} className="text-center mb-14">
          <p className="eyebrow">How It Works</p>
          <h2 className="section-h2">Your Journey With Us</h2>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <motion.div {...anim} className="hidden md:flex items-center justify-center gap-12 lg:gap-16 relative">
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[70%] h-0.5 border-t-2 border-dashed border-brand-green/40" />
          {journeySteps.map((s) => (
            <div key={s.step} className="flex flex-col items-center relative z-10">
              <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center font-heading font-bold text-lg shadow-soft">
                {s.step}
              </div>
              <p className="mt-4 text-sm font-medium text-ink text-center max-w-[140px]">
                {s.title}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden space-y-0">
          {journeySteps.map((s, i) => (
            <motion.div
              key={s.step}
              {...anim}
              transition={{ ...anim.transition, delay: i * 0.1 }}
              className="flex items-start gap-4 relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center font-heading font-bold text-sm shrink-0">
                  {s.step}
                </div>
                {i < journeySteps.length - 1 && (
                  <div className="w-0.5 h-12 border-l-2 border-dashed border-brand-green/40" />
                )}
              </div>
              <p className="text-ink font-medium pt-2">{s.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
