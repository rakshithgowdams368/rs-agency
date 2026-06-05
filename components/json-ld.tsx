import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_TAGLINE } from '@/lib/constants';
import { faqItems, journeySteps, districts, contactInfo } from '@/lib/content';

const ORG_ID = `${SITE_URL}/#organization`;
const LOCAL_ID = `${SITE_URL}/#localbusiness`;
const FOUNDER_ID = `${SITE_URL}/#founder`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: 'AVK College Road, Indian Bank Backside, Hanuman Building, 3rd Floor',
  addressLocality: 'Hassan',
  addressRegion: 'Karnataka',
  postalCode: '573201',
  addressCountry: 'IN',
};

const contactPoint = {
  '@type': 'ContactPoint',
  telephone: '+91-63601-07599',
  contactType: 'sales',
  email: 'rakesh@rsmedicalagency.com',
  availableLanguage: ['English', 'Hindi', 'Kannada'],
};

const sameAs = [
  contactInfo.social.facebook,
  contactInfo.social.instagram,
  contactInfo.social.linkedin,
];

const areaServed = [
  ...districts.map((d) => ({
    '@type': 'AdministrativeArea',
    name: `${d} District, Karnataka`,
  })),
  { '@type': 'Country', name: 'India' },
  { '@type': 'AdministrativeArea', name: 'Worldwide' },
];

const organization = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'MedicalBusiness'],
  '@id': ORG_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/rs-logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description: SITE_DESCRIPTION,
  slogan: SITE_TAGLINE,
  foundingDate: '2000', // ~25+ years experience
  address: postalAddress,
  contactPoint,
  sameAs,
  areaServed,
  knowsAbout: [
    'Oncology medicine distribution',
    'HIV product supply',
    'Nephrology products distribution',
    'Vaccine cold-chain logistics',
    'Pharmaceutical wholesale',
    'B2B healthcare distribution',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', '@id': `${SITE_URL}/#service-oncology`, name: 'Oncology Medicine Distribution' },
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', '@id': `${SITE_URL}/#service-hiv`, name: 'HIV Products Supply' },
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', '@id': `${SITE_URL}/#service-nephrology`, name: 'Nephrology Products Distribution' },
    },
    {
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', '@id': `${SITE_URL}/#service-vaccines`, name: 'Vaccine Distribution & Cold-Chain Logistics' },
    },
  ],
  founder: { '@id': FOUNDER_ID },
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': LOCAL_ID,
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/rs-logo.png`,
  description: SITE_DESCRIPTION,
  address: postalAddress,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0072,
    longitude: 76.0962,
  },
  telephone: '+91-63601-07599',
  email: 'rakesh@rsmedicalagency.com',
  priceRange: 'Wholesale/B2B',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
      // TODO: Confirm actual opening hours
    },
  ],
  sameAs,
  parentOrganization: { '@id': ORG_ID },
};

const founder = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': FOUNDER_ID,
  name: 'TODO: Founder Full Legal Name',
  // TODO: Add credentials, e.g. jobTitle: 'Founder & Managing Director'
  jobTitle: 'Founder',
  worksFor: { '@id': ORG_ID },
  description: 'Founder of RS Medical Agency with over 25 years of experience in healthcare distribution.',
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { '@id': ORG_ID },
};

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const breadcrumbHome = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
  ],
};

const serviceOncology = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/#service-oncology`,
  name: 'Oncology Medicine Distribution',
  description: 'Licensed B2B distribution of oncology (cancer) medicines to hospitals, pharmacies, clinics, and institutions across Karnataka, India, and internationally.',
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'AdministrativeArea', name: 'Karnataka, India' },
  serviceType: 'Pharmaceutical Distribution',
};

const serviceHiv = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/#service-hiv`,
  name: 'HIV Products Supply',
  description: 'B2B supply and distribution of HIV pharmaceutical products to licensed pharmacies, hospitals, government institutions, and NGOs.',
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'AdministrativeArea', name: 'Karnataka, India' },
  serviceType: 'Pharmaceutical Distribution',
};

const serviceNephrology = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/#service-nephrology`,
  name: 'Nephrology Products Distribution',
  description: 'Wholesale distribution of nephrology pharmaceutical products to hospitals, dialysis centres, and healthcare institutions.',
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'AdministrativeArea', name: 'Karnataka, India' },
  serviceType: 'Pharmaceutical Distribution',
};

const serviceVaccines = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/#service-vaccines`,
  name: 'Vaccine Distribution & Cold-Chain Logistics',
  description: 'Temperature-controlled vaccine distribution with end-to-end cold-chain monitoring, serving government programmes, hospitals, and clinics across Karnataka.',
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'AdministrativeArea', name: 'Karnataka, India' },
  serviceType: 'Cold-Chain Pharmaceutical Distribution',
};

const howTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to order pharmaceutical supplies from RS Medical Agency',
  description: 'A step-by-step guide for licensed pharmacies, hospitals, and institutions to place wholesale pharmaceutical orders with RS Medical Agency.',
  step: journeySteps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.title,
    text: [
      'Register your licensed pharmacy, hospital, or institution with RS Medical Agency by submitting required documentation for verification.',
      'Browse our catalogue of 30,000+ SKUs and place your order via our digital platform, phone, email, or through your dedicated account manager.',
      'Our team verifies product availability, confirms pricing, and prepares your order with full batch-wise documentation and compliance checks.',
      'Your order is dispatched via our fleet of 180+ temperature-controlled vehicles with real-time tracking and cold-chain monitoring.',
      'Our support team is available for post-delivery assistance including returns, reorders, documentation queries, and account management.',
    ][i],
  })),
};

const speakable = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: `${SITE_NAME} — B2B Pharmaceutical Distributor in Hassan, Karnataka`,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#faq h3', '#faq [data-state] p', '.hero-summary'],
  },
  url: SITE_URL,
};

const allSchemas = [
  organization,
  localBusiness,
  founder,
  website,
  faqPage,
  breadcrumbHome,
  serviceOncology,
  serviceHiv,
  serviceNephrology,
  serviceVaccines,
  howTo,
  speakable,
];

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemas) }}
    />
  );
}

export function PageJsonLd({ schemas }: { schemas: Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
