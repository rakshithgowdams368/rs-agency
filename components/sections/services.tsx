'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Truck, Globe } from 'lucide-react';
import { services } from '@/lib/content';

const iconMap: Record<string, React.ReactNode> = {
  Truck: <Truck size={32} />,
  Globe: <Globe size={32} />,
};

const viewportOpts = { once: true, amount: 0.15 as const };

export default function Services() {
  const reduced = useReducedMotion();
  const anim = reduced ? {} : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: viewportOpts, transition: { duration: 0.6 } };

  return (
    <section id="services" className="section-py bg-bg-soft relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #16367C 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />
      <div className="container-main relative">
        <motion.div {...anim} className="text-center mb-14">
          <p className="eyebrow">What We Do</p>
          <h2 className="section-h2">Our Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              {...anim}
              transition={{ ...anim.transition, delay: i * 0.15 }}
              className="group bg-white border border-line rounded-2xl p-8 md:p-10 shadow-soft hover:shadow-soft-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-bg-soft rounded-2xl flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-2xl font-heading font-bold text-ink tracking-heading mb-3">
                {service.title}
              </h3>
              <p className="text-ink-soft mb-6">{service.summary}</p>
              <ul className="space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-ink">
                    <span className="w-2 h-2 rounded-full bg-brand-green shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
