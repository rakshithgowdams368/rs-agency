'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { LayoutDashboard, Zap, Headphones, Lightbulb, Rocket, TrendingUp } from 'lucide-react';
import { whyUsCards } from '@/lib/content';

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  Zap,
  HeadphonesIcon: Headphones,
  Lightbulb,
  Rocket,
  TrendingUp,
};

const viewportOpts = { once: true, amount: 0.15 as const };

export default function WhyUs() {
  const reduced = useReducedMotion();
  const anim = reduced ? {} : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: viewportOpts, transition: { duration: 0.6 } };

  return (
    <section id="why-us" className="section-py">
      <div className="container-main">
        <motion.div {...anim} className="text-center mb-14">
          <p className="eyebrow">Why RS Medical</p>
          <h2 className="section-h2">Why Choose Us</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsCards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.title}
                {...anim}
                transition={{ ...anim.transition, delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-line hover:border-brand-green/30 hover:shadow-soft transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-bg-soft group-hover:bg-brand-green flex items-center justify-center text-brand-blue group-hover:text-white transition-colors mb-5">
                  {Icon && <Icon size={26} />}
                </div>
                <h3 className="text-lg font-heading font-semibold text-ink tracking-heading mb-2">
                  {card.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
