'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { networkStats, districts } from '@/lib/content';

const viewportOpts = { once: true, amount: 0.15 as const };

export default function Network() {
  const reduced = useReducedMotion();
  const anim = reduced ? {} : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: viewportOpts, transition: { duration: 0.6 } };

  return (
    <section id="network" className="section-py">
      <div className="container-main">
        <motion.div {...anim} className="text-center mb-14">
          <p className="eyebrow">Our Reach</p>
          <h2 className="section-h2 mb-3">Distribution Network Across Karnataka</h2>
          <p className="text-ink-soft max-w-2xl mx-auto">
            Connecting healthcare partners across every district.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <motion.div {...anim} transition={{ ...anim.transition, delay: 0.15 }}>
            <p className="text-ink-soft leading-relaxed mb-6 text-base md:text-lg">
              With <span className="font-bold text-brand-blue">{networkStats.vehicles}</span> dedicated
              vehicles and a fleet built for time-sensitive healthcare logistics, we maintain one of the
              strongest last-mile delivery networks in the state.
            </p>
            <p className="text-ink-soft leading-relaxed text-base md:text-lg">
              We handle <span className="font-bold text-brand-blue">{networkStats.deliveries}</span> deliveries
              annually with approximately <span className="font-bold text-brand-blue">{networkStats.coverage}</span> district
              coverage across Karnataka.
            </p>
          </motion.div>

          <motion.div
            {...anim}
            transition={{ ...anim.transition, delay: 0.3 }}
            className="flex justify-center"
          >
            <Image
              src="/sky-blue-color-karnataka-map-political-administrative-map-karnataka-with-districts_622214-752.png"
              alt="Karnataka District Map"
              width={480}
              height={480}
              className="w-full max-w-md object-contain"
            />
          </motion.div>
        </div>

        <motion.div
          {...anim}
          transition={{ ...anim.transition, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {districts.map((district) => (
            <div
              key={district}
              className="flex items-center gap-2 px-4 py-2 bg-bg-soft border border-line rounded-full text-sm text-ink"
            >
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              {district}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
