'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Home, ArrowLeft, Stethoscope } from 'lucide-react';

export default function NotFound() {
  const reduced = useReducedMotion();
  const dur = reduced ? 0 : 0.6;

  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container-main text-center px-6 py-20">
        <motion.div
          initial={reduced ? undefined : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: dur, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-blue/10 mb-6">
            <Stethoscope className="w-10 h-10 text-brand-blue" />
          </div>
          <h1 className="text-[8rem] sm:text-[10rem] font-bold font-heading leading-none tracking-tight text-brand-blue/10 select-none">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur, delay: reduced ? 0 : 0.15 }}
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-ink mb-3">
            Page Not Found
          </h2>
          <p className="text-ink-soft max-w-md mx-auto mb-10 leading-relaxed">
            The page you are looking for does not exist or has been moved.
            Let us get you back on track.
          </p>
        </motion.div>

        <motion.div
          initial={reduced ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur, delay: reduced ? 0 : 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand-blue text-white font-semibold rounded-xl hover:bg-brand-blue/90 transition-all shadow-lg shadow-brand-blue/20 hover:shadow-xl hover:shadow-brand-blue/30 hover:-translate-y-0.5"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-ink font-semibold rounded-xl border border-line hover:border-brand-blue/30 hover:text-brand-blue transition-all hover:-translate-y-0.5"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </motion.div>

        <motion.div
          initial={reduced ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: dur, delay: reduced ? 0 : 0.5 }}
          className="mt-16 flex items-center justify-center gap-2 text-sm text-ink-soft/60"
        >
          <img src="/rs-logo.png" alt="RS Medical Agency" className="h-6 w-auto opacity-50" />
          <span>RS Medical Agency</span>
        </motion.div>
      </div>
    </div>
  );
}
