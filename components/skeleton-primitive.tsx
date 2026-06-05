'use client';

import { cn } from '@/lib/utils';

interface SkeletonBarProps {
  className?: string;
  style?: React.CSSProperties;
}

export function SkeletonBar({ className, style }: SkeletonBarProps) {
  return <div className={cn('skeleton-shimmer', className)} style={style} />;
}

export function SkeletonShell({
  className,
  soft = false,
  children,
}: {
  className?: string;
  soft?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={cn('section-py', soft && 'bg-bg-soft', className)}>
      <div className="container-main">{children}</div>
    </section>
  );
}

export function SkeletonHeader() {
  return (
    <div className="flex flex-col items-center gap-3 mb-12">
      <SkeletonBar className="h-3 w-32" />
      <SkeletonBar className="h-10 w-72 md:w-96" />
      <SkeletonBar className="h-4 w-80" />
    </div>
  );
}
