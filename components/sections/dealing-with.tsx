'use client';

import Image from 'next/image';

const brandLogos = [
  { src: '/brand/Rectangle_36.png', alt: 'Pfizer' },
  { src: '/brand/Rectangle_37.png', alt: 'Natco' },
  { src: '/brand/Rectangle_38.png', alt: 'Zydus' },
  { src: '/brand/Rectangle_39.png', alt: 'Abbott' },
  { src: '/brand/Rectangle_40.png', alt: 'Hetero' },
  { src: '/brand/Rectangle_41.png', alt: 'Cipla' },
  { src: '/brand/Rectangle_42.png', alt: 'Roche' },
];

export default function DealingWith() {
  const duplicated = [...brandLogos, ...brandLogos];

  return (
    <section className="section-py bg-bg-soft overflow-hidden">
      <div className="container-main mb-10">
        <p className="eyebrow text-center">Our Partners</p>
        <h2 className="section-h2 text-center">Companies We Deal With</h2>
      </div>
      <div className="marquee-pause relative">
        <div className="flex marquee-track animate-marquee w-max gap-6">
          {duplicated.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex items-center justify-center px-6 py-4 bg-white rounded-2xl shadow-soft border border-line min-w-[200px] h-24"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={60}
                className="object-contain max-h-14"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
