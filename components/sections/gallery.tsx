'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryProducts } from '@/lib/content';

const viewportOpts = { once: true, amount: 0.15 as const };
const AUTO_SLIDE_INTERVAL = 3500;

function usePerView() {
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    function update() {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return perView;
}

export default function Gallery() {
  const reduced = useReducedMotion();
  const anim = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: viewportOpts,
        transition: { duration: 0.6 },
      };

  const perView = usePerView();
  const total = galleryProducts.length;
  const maxIndex = Math.max(0, total - perView);

  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  const clamp = useCallback((v: number) => Math.max(0, Math.min(v, maxIndex)), [maxIndex]);

  const prev = useCallback(() => setCurrent((c) => clamp(c - 1)), [clamp]);
  const next = useCallback(
    () => setCurrent((c) => (c >= maxIndex ? 0 : clamp(c + 1))),
    [clamp, maxIndex]
  );

  const lbPrev = useCallback(
    () => setLightbox((c) => (c === null ? null : c === 0 ? total - 1 : c - 1)),
    [total]
  );
  const lbNext = useCallback(
    () => setLightbox((c) => (c === null ? null : c === total - 1 ? 0 : c + 1)),
    [total]
  );

  useEffect(() => {
    setCurrent((c) => Math.min(c, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (paused || lightbox !== null) return;
    const id = setInterval(next, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [paused, lightbox, next]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    },
    [prev, next]
  );

  const handleLightboxKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') lbPrev();
      if (e.key === 'ArrowRight') lbNext();
      if (e.key === 'Escape') setLightbox(null);
    },
    [lbPrev, lbNext]
  );

  const slideWidth = 100 / perView;
  const translateX = current * slideWidth;

  return (
    <section className="section-py">
      <div className="container-main">
        <motion.div {...anim} className="text-center mb-14">
          <p className="eyebrow">Our Products</p>
          <h2 className="section-h2">Product Gallery</h2>
        </motion.div>

        <motion.div
          {...anim}
          transition={{ ...anim.transition, delay: 0.2 }}
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Product gallery carousel"
        >
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-ink hover:text-brand-blue hover:bg-white transition-all -translate-x-1/2 md:w-12 md:h-12"
            aria-label="Previous product"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-ink hover:text-brand-blue hover:bg-white transition-all translate-x-1/2 md:w-12 md:h-12"
            aria-label="Next product"
          >
            <ChevronRight size={22} />
          </button>

          <div className="overflow-hidden rounded-2xl mx-4 md:mx-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${translateX}%)` }}
            >
              {galleryProducts.map((product, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-2 md:px-3"
                  style={{ width: `${slideWidth}%` }}
                >
                  <div
                    className="group cursor-pointer"
                    onClick={() => setLightbox(i)}
                  >
                    <div className="aspect-[4/5] bg-bg-soft rounded-xl border border-line overflow-hidden relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-white text-sm font-medium leading-snug">
                          {product.name}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm font-medium text-ink text-center leading-snug line-clamp-2">
                      {product.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-1.5 mt-8 flex-wrap px-4">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-brand-green w-6'
                    : 'bg-line w-2 hover:bg-brand-green/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
            onKeyDown={handleLightboxKeyDown}
            tabIndex={0}
            role="dialog"
            aria-label="Product lightbox"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white">
                <Image
                  src={galleryProducts[lightbox].image}
                  alt={galleryProducts[lightbox].name}
                  fill
                  sizes="(max-width: 768px) 90vw, 640px"
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-white text-center mt-4 font-medium">
                {galleryProducts[lightbox].name}
              </p>

              <button
                onClick={lbPrev}
                className="absolute left-[-48px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full flex items-center justify-center text-white transition-colors max-md:left-2"
                aria-label="Previous product"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={lbNext}
                className="absolute right-[-48px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full flex items-center justify-center text-white transition-colors max-md:right-2"
                aria-label="Next product"
              >
                <ChevronRight size={20} />
              </button>

              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
