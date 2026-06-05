'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Phone, Mail, MessageCircle } from 'lucide-react';
import { contactInfo, specialtyPages } from '@/lib/content';
import { SITE_NAME } from '@/lib/constants';

interface SpecialtySection {
  heading: string;
  content: string;
  bullets?: string[];
}

interface SpecialtyPageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  sections: SpecialtySection[];
}

export default function SpecialtyPageLayout({ title, subtitle, heroImage, sections }: SpecialtyPageProps) {
  return (
    <>
      <header className="bg-white border-b border-line sticky top-0 z-50">
        <nav className="container-main flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/RS-medical-logo.png"
              alt="RS Medical Agency logo"
              width={100}
              height={100}
              className="rounded"
              priority
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-brand-blue transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </nav>
      </header>

      <main>
        <section className="relative py-20 md:py-28 bg-brand-blue-deep text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src={heroImage}
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
          </div>
          <div className="absolute inset-0 bg-brand-blue-deep/80" aria-hidden="true" />
          <div className="relative container-main">
            <p className="eyebrow !text-brand-green-light !mb-4">{SITE_NAME}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-heading leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          </div>
        </section>

        <article className="section-py">
          <div className="container-main max-w-4xl">
            {sections.map((section, i) => (
              <div key={i} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold font-heading text-ink mb-4">{section.heading}</h2>
                <p className="text-ink-soft leading-[1.75] text-base md:text-lg mb-4">
                  {section.content}
                </p>
                {section.bullets && (
                  <ul className="space-y-2 mt-4">
                    {section.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-ink-soft">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2.5 shrink-0" />
                        <span className="leading-[1.75]">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </article>

        <section className="bg-bg-soft section-py">
          <div className="container-main max-w-4xl">
            <h2 className="text-2xl font-bold font-heading text-ink mb-6">Get in Touch</h2>
            <p className="text-ink-soft leading-[1.75] mb-8">
              Ready to discuss your requirements? Contact RS Medical Agency for a no-obligation quote tailored to your volume, product mix, and delivery needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-white font-semibold rounded-full hover:bg-brand-green-light transition-colors"
              >
                <Phone size={18} />
                Call Us
              </a>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20BD5A] transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-blue text-brand-blue font-semibold rounded-full hover:bg-brand-blue hover:text-white transition-colors"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>
          </div>
        </section>

        <nav className="border-t border-line section-py">
          <div className="container-main max-w-4xl">
            <h2 className="text-lg font-bold font-heading text-ink mb-4">Explore Our Specialties</h2>
            <div className="flex flex-wrap gap-3">
              {specialtyPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="px-4 py-2 text-sm font-medium bg-bg-soft text-ink rounded-full hover:bg-brand-blue hover:text-white transition-colors"
                >
                  {page.label}
                </Link>
              ))}
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium bg-bg-soft text-ink rounded-full hover:bg-brand-blue hover:text-white transition-colors"
              >
                Home
              </Link>
            </div>
          </div>
        </nav>
      </main>

      <footer className="bg-brand-blue-deep text-white/60 py-8">
        <div className="container-main text-center text-xs">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="mt-2">RS Medical Agency supplies to licensed institutions and businesses only, not to individual consumers.</p>
        </div>
      </footer>
    </>
  );
}
