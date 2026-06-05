'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqItems } from '@/lib/content';

const viewportOpts = { once: true, amount: 0.15 as const };

export default function FAQ() {
  const reduced = useReducedMotion();
  const anim = reduced ? {} : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: viewportOpts, transition: { duration: 0.6 } };

  return (
    <section id="faq" className="section-py bg-bg-soft">
      <div className="container-main">
        <motion.div {...anim} className="text-center mb-14">
          <p className="eyebrow">Answers</p>
          <h2 className="section-h2">Answering your questions.</h2>
        </motion.div>

        <motion.div
          {...anim}
          transition={{ ...anim.transition, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white border border-line rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-ink hover:text-brand-blue py-5 text-base">
                  <h3 className="text-base font-semibold font-heading">{item.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="text-ink-soft pb-5 leading-relaxed">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
