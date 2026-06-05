'use client';

import React, { useEffect, useRef, useState, Suspense } from 'react';

interface LazySectionProps {
  fallback: React.ReactNode;
  importFn: () => Promise<{ default: React.ComponentType }>;
  id?: string;
}

const moduleCache = new Map<string, React.LazyExoticComponent<React.ComponentType>>();

export function LazySection({ fallback, importFn, id }: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = useState(false);
  const importKey = importFn.toString();

  if (!moduleCache.has(importKey)) {
    moduleCache.set(importKey, React.lazy(importFn));
  }

  const LazyComponent = moduleCache.get(importKey)!;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefetchObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          importFn().catch(() => {});
          prefetchObserver.disconnect();
        }
      },
      { rootMargin: '1200px' }
    );

    const mountObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldMount(true);
          mountObserver.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    prefetchObserver.observe(el);
    mountObserver.observe(el);

    return () => {
      prefetchObserver.disconnect();
      mountObserver.disconnect();
    };
  }, [importFn]);

  return (
    <div ref={ref} id={id}>
      {shouldMount ? (
        <Suspense fallback={fallback}>
          <LazyComponent />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
}
