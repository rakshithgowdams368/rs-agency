'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '@/lib/content';

const viewportOpts = { once: true, amount: 0.15 as const };

export default function Testimonials() {
  const reduced = useReducedMotion();
  const anim = reduced ? {} : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: viewportOpts, transition: { duration: 0.6 } };

  return (
    <section id="testimonials" className="section-py">
      <div className="container-main">
        <motion.div {...anim} className="text-center mb-14">
          <p className="eyebrow">Voices</p>
          <h2 className="section-h2 mb-3">Customer Testimonials</h2>
          <p className="text-ink-soft max-w-2xl mx-auto">
            Our customers&apos; words reflect our commitment to excellence.
          </p>
        </motion.div>

        <motion.div
          {...anim}
          transition={{ ...anim.transition, delay: 0.2 }}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[number] }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = testimonial.quote.length > 150;
  const displayText = isLong && !expanded
    ? testimonial.quote.slice(0, 150) + '...'
    : testimonial.quote;

  return (
    <div className="break-inside-avoid bg-white border border-line rounded-2xl p-6 shadow-soft">
      <Quote size={24} className="text-brand-green/30 mb-3" />
      <p className="text-ink-soft leading-relaxed text-sm mb-3">
        &ldquo;{displayText}&rdquo;
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-medium text-brand-green hover:text-brand-green-light mb-3"
        >
          {expanded ? 'Read less' : 'Read more'}
        </button>
      )}
      <p className="text-ink font-medium text-sm">~ {testimonial.name}</p>
      <p className="text-xs uppercase tracking-wider text-ink-soft mt-0.5">
        {testimonial.company}
      </p>
    </div>
  );
}
