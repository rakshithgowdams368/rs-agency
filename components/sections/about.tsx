'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { aboutParagraphs } from '@/lib/content';

const images = [
  { src: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Warehouse operations' },
  { src: 'https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Delivery truck' },
  { src: 'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Pharmacy shelves' },
  { src: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Business handshake' },
  { src: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Team collaboration' },
];

const viewportOpts = { once: true, amount: 0.15 as const };

export default function About() {
  const reduced = useReducedMotion();
  const anim = reduced ? {} : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: viewportOpts, transition: { duration: 0.6 } };

  return (
    <section id="about" className="section-py">
      <div className="container-main">
        <motion.div {...anim}>
          <p className="eyebrow">About Us</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8">
            <h2 className="section-h2 !mb-0 flex-1">
              Healthcare partners you can trust.
            </h2>
            <div className="inline-flex w-fit shrink-0 items-center gap-3 rounded-2xl bg-brand-green px-5 py-4 text-white shadow-lg">
              <span className="text-4xl font-extrabold leading-none">25+</span>
              <span className="max-w-[150px] text-sm font-semibold leading-tight">Years of Experience</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div {...anim} transition={{ ...anim.transition, delay: 0.15 }}>
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="text-ink-soft leading-[1.75] mb-4 text-base md:text-lg">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            {...anim}
            transition={{ ...anim.transition, delay: 0.3 }}
            className="grid grid-cols-6 grid-rows-4 gap-3 h-[460px] md:h-[540px]"
          >
            <div className="col-span-3 row-span-4 rounded-2xl overflow-hidden">
              <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
            {images.slice(1).map((img, i) => (
              <div key={i} className="col-span-3 row-span-2 rounded-2xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
