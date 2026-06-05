'use client';

import Navbar from '@/components/navbar';
import ScrollProgress from '@/components/scroll-progress';
import WhatsAppButton from '@/components/whatsapp-button';
import Hero from '@/components/sections/hero';
import DealingWith from '@/components/sections/dealing-with';
import Footer from '@/components/sections/footer';
import { LazySection } from '@/components/lazy-section';
import {
  AboutSkeleton,
  ServicesSkeleton,
  WhyUsSkeleton,
  JourneySkeleton,
  NetworkSkeleton,
  LeadershipSkeleton,
  GallerySkeleton,
  PartnersSkeleton,
  TestimonialsSkeleton,
  FAQSkeleton,
  ContactSkeleton,
} from '@/components/skeletons';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <DealingWith />

        <LazySection
          fallback={<AboutSkeleton />}
          importFn={() => import('@/components/sections/about')}
        />
        <LazySection
          fallback={<ServicesSkeleton />}
          importFn={() => import('@/components/sections/services')}
        />
        <LazySection
          fallback={<WhyUsSkeleton />}
          importFn={() => import('@/components/sections/why-us')}
        />
        <LazySection
          fallback={<JourneySkeleton />}
          importFn={() => import('@/components/sections/journey')}
        />
        <LazySection
          fallback={<NetworkSkeleton />}
          importFn={() => import('@/components/sections/network')}
        />
        <LazySection
          fallback={<LeadershipSkeleton />}
          importFn={() => import('@/components/sections/leadership')}
        />
        <LazySection
          fallback={<GallerySkeleton />}
          importFn={() => import('@/components/sections/gallery')}
        />
        <LazySection
          fallback={<PartnersSkeleton />}
          importFn={() => import('@/components/sections/partners-section')}
        />
        <LazySection
          fallback={<TestimonialsSkeleton />}
          importFn={() => import('@/components/sections/testimonials')}
        />
        <LazySection
          fallback={<FAQSkeleton />}
          importFn={() => import('@/components/sections/faq')}
        />
        <LazySection
          fallback={<ContactSkeleton />}
          importFn={() => import('@/components/sections/contact')}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
