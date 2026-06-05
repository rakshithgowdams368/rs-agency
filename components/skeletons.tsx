'use client';

import { SkeletonBar, SkeletonShell, SkeletonHeader } from './skeleton-primitive';

export function AboutSkeleton() {
  return (
    <SkeletonShell>
      <SkeletonHeader />
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-3">
          {[...Array(6)].map((_, i) => (
            <SkeletonBar key={i} className={`h-4 ${i % 2 === 0 ? 'w-full' : 'w-4/5'}`} />
          ))}
        </div>
        <div className="grid grid-cols-6 grid-rows-4 gap-3 h-[460px] md:h-[540px]">
          <SkeletonBar className="col-span-3 row-span-4 rounded-2xl h-full" />
          {[...Array(4)].map((_, i) => (
            <SkeletonBar key={i} className="col-span-3 row-span-2 rounded-2xl h-full" />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {[...Array(4)].map((_, i) => (
          <SkeletonBar key={i} className="h-32 rounded-2xl" />
        ))}
      </div>
    </SkeletonShell>
  );
}

export function ServicesSkeleton() {
  return (
    <SkeletonShell soft>
      <SkeletonHeader />
      <div className="grid md:grid-cols-2 gap-8">
        {[...Array(2)].map((_, i) => (
          <SkeletonBar key={i} className="h-[420px] rounded-2xl" />
        ))}
      </div>
    </SkeletonShell>
  );
}

export function WhyUsSkeleton() {
  return (
    <SkeletonShell>
      <SkeletonHeader />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <SkeletonBar key={i} className="h-48 rounded-2xl" />
        ))}
      </div>
    </SkeletonShell>
  );
}

export function JourneySkeleton() {
  return (
    <SkeletonShell soft>
      <SkeletonHeader />
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <SkeletonBar key={i} className="h-24 rounded-2xl" />
        ))}
      </div>
    </SkeletonShell>
  );
}

export function NetworkSkeleton() {
  return (
    <SkeletonShell>
      <SkeletonHeader />
      <SkeletonBar className="h-[420px] rounded-2xl mb-8" />
      <div className="flex flex-wrap justify-center gap-3">
        {[...Array(12)].map((_, i) => (
          <SkeletonBar key={i} className="h-8 w-28 rounded-full" />
        ))}
      </div>
    </SkeletonShell>
  );
}

export function LeadershipSkeleton() {
  return (
    <SkeletonShell soft>
      <SkeletonHeader />
      <div className="max-w-3xl mx-auto space-y-4">
        <SkeletonBar className="h-8 w-3/4 mx-auto" />
        {[...Array(4)].map((_, i) => (
          <SkeletonBar key={i} className={`h-4 ${i % 2 === 0 ? 'w-full' : 'w-4/5'}`} />
        ))}
        <SkeletonBar className="h-4 w-40 mx-auto mt-8" />
        <SkeletonBar className="h-3 w-56 mx-auto" />
      </div>
    </SkeletonShell>
  );
}

export function GallerySkeleton() {
  return (
    <SkeletonShell>
      <SkeletonHeader />
      <SkeletonBar className="max-w-5xl mx-auto aspect-[16/9] rounded-2xl" />
    </SkeletonShell>
  );
}

export function PartnersSkeleton() {
  return (
    <SkeletonShell soft>
      <SkeletonHeader />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {[...Array(12)].map((_, i) => (
          <SkeletonBar key={i} className="h-20 rounded-2xl" />
        ))}
      </div>
    </SkeletonShell>
  );
}

export function TestimonialsSkeleton() {
  return (
    <SkeletonShell>
      <SkeletonHeader />
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {[200, 260, 180, 240, 220, 280].map((h, i) => (
          <SkeletonBar key={i} className={`break-inside-avoid rounded-2xl`} style={{ height: h }} />
        ))}
      </div>
    </SkeletonShell>
  );
}

export function FAQSkeleton() {
  return (
    <SkeletonShell soft>
      <SkeletonHeader />
      <div className="max-w-3xl mx-auto space-y-3">
        {[...Array(6)].map((_, i) => (
          <SkeletonBar key={i} className="h-14 rounded-2xl" />
        ))}
      </div>
    </SkeletonShell>
  );
}

export function ContactSkeleton() {
  return (
    <SkeletonShell>
      <SkeletonHeader />
      <SkeletonBar className="rounded-3xl h-[640px]" />
    </SkeletonShell>
  );
}
