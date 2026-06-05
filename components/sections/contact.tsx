'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { toast } from 'sonner';
import { z } from 'zod';
import { contactInfo } from '@/lib/content';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
});

const viewportOpts = { once: true, amount: 0.15 as const };

export default function Contact() {
  const reduced = useReducedMotion();
  const anim = reduced ? {} : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: viewportOpts, transition: { duration: 0.6 } };

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as string;
        if (!fieldErrors[key]) fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    if (!isSupabaseConfigured || !supabase) {
      toast.error('Contact us directly via email or phone.');
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from('enquiries').insert({
      name: form.name,
      email: form.email,
      phone: form.phone || '',
      message: form.message,
    });

    if (error) {
      setSubmitting(false);
      toast.error('Something went wrong. Please try again.');
      return;
    }

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      await fetch(`${supabaseUrl}/functions/v1/send-enquiry-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || '',
          message: form.message,
        }),
      });
    } catch {
      // Email sending is best-effort; enquiry is already saved
    }

    setSubmitting(false);
    toast.success('Enquiry sent! We will get back to you soon.');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="section-py">
      <div className="container-main">
        <motion.div {...anim} className="text-center mb-14">
          <p className="eyebrow">Contact Us</p>
          <h2 className="section-h2">Get in Touch</h2>
        </motion.div>

        <motion.div
          {...anim}
          transition={{ ...anim.transition, delay: 0.15 }}
          className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl border border-line shadow-soft p-8 md:p-12"
        >
          <div>
            <h3 className="text-xl font-heading font-bold text-ink tracking-heading mb-6">
              Contact Information
            </h3>
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-bg-soft rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                  <MapPin size={18} />
                </div>
                <p className="text-ink-soft text-sm leading-relaxed">{contactInfo.address}</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-bg-soft rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                  <Mail size={18} />
                </div>
                <a href={`mailto:${contactInfo.email}`} className="text-ink-soft text-sm hover:text-brand-blue transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-bg-soft rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                  <Phone size={18} />
                </div>
                <a href={`tel:${contactInfo.phone}`} className="text-ink-soft text-sm hover:text-brand-blue transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <a
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-bg-soft rounded-xl flex items-center justify-center text-ink-soft hover:text-brand-blue hover:bg-brand-blue/10 transition-colors"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-bg-soft rounded-xl flex items-center justify-center text-ink-soft hover:text-brand-blue hover:bg-brand-blue/10 transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={contactInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-bg-soft rounded-xl flex items-center justify-center text-ink-soft hover:text-brand-blue hover:bg-brand-blue/10 transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-line bg-bg-soft text-ink text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-line bg-bg-soft text-ink text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                placeholder="you@company.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-line bg-bg-soft text-ink text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-line bg-bg-soft text-ink text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors resize-none"
                placeholder="Tell us about your requirements..."
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 bg-brand-green text-white font-semibold rounded-xl hover:bg-brand-green-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {submitting ? 'Sending...' : 'Send Enquiry'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
