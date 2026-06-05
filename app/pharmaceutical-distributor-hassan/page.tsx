import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { PageJsonLd } from '@/components/json-ld';
import SpecialtyPageLayout from '@/components/specialty-page-layout';

export const metadata: Metadata = {
  title: `Pharmaceutical Distributor in Hassan, Karnataka | ${SITE_NAME}`,
  description: 'RS Medical Agency is a trusted B2B pharmaceutical distributor headquartered in Hassan, Karnataka. With 25+ years experience, 30,000+ SKUs, and 500+ brands, we serve pharmacies, hospitals, and institutions across Karnataka, India, and internationally.',
  alternates: { canonical: '/pharmaceutical-distributor-hassan' },
  openGraph: {
    title: `Pharmaceutical Distributor Hassan | ${SITE_NAME}`,
    description: 'Trusted B2B pharmaceutical distributor in Hassan, Karnataka with 25+ years experience, 30,000+ SKUs, and coverage across all 31 districts.',
    url: `${SITE_URL}/pharmaceutical-distributor-hassan`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Pharmaceutical Distributor Hassan', item: `${SITE_URL}/pharmaceutical-distributor-hassan` },
  ],
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  url: `${SITE_URL}/pharmaceutical-distributor-hassan`,
  image: `${SITE_URL}/og-image.jpg`,
  description: 'B2B pharmaceutical distributor headquartered in Hassan, Karnataka, India with 25+ years experience, 30,000+ SKUs, and distribution across all 31 districts of Karnataka.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'AVK College Road, Indian Bank Backside, Hanuman Building, 3rd Floor',
    addressLocality: 'Hassan',
    addressRegion: 'Karnataka',
    postalCode: '573201',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0072,
    longitude: 76.0962,
  },
  telephone: '+91-63601-07599',
  email: 'rakesh@rsmedicalagency.com',
  priceRange: 'Wholesale/B2B',
  parentOrganization: { '@id': `${SITE_URL}/#organization` },
};

const faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is RS Medical Agency located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RS Medical Agency is headquartered at AVK College Road, Indian Bank Backside, Hanuman Building, 3rd Floor, Hassan, Karnataka 573201, India. From Hassan, we distribute pharmaceuticals across all 31 districts of Karnataka and beyond.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many products does RS Medical Agency stock?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RS Medical Agency maintains an active catalogue of over 30,000 SKUs from more than 500 manufacturers and brands, covering oncology, HIV, nephrology, vaccines, and general pharmaceutical products.',
      },
    },
  ],
};

const sections = [
  {
    heading: 'B2B Pharmaceutical Distributor Headquartered in Hassan, Karnataka',
    content: 'RS Medical Agency is a B2B pharmaceutical and healthcare distribution company headquartered in Hassan, Karnataka, India. Founded over 25 years ago, we have grown from a regional distributor into a comprehensive healthcare supply chain partner serving licensed pharmacies, hospitals, clinics, government institutions, NGOs, and international healthcare distributors. Our Hassan headquarters is strategically located in central Karnataka, enabling efficient distribution across the entire state and beyond through our fleet of 180+ delivery vehicles.',
  },
  {
    heading: 'Scale and Product Range',
    content: 'RS Medical Agency maintains an active catalogue of over 30,000 SKUs from more than 500 manufacturers and brands. Our product range spans general pharmaceuticals, speciality medicines, and four key therapeutic areas where we have developed deep expertise and inventory strength.',
    bullets: [
      'Oncology medicines: chemotherapy, immunotherapy, targeted therapy, and supportive care products',
      'HIV products: antiretroviral therapies, fixed-dose combinations, and related medicines',
      'Nephrology products: renal care medicines, dialysis support products, and immunosuppressants',
      'Vaccines: routine immunisation, adult vaccines, and specialty vaccines with full cold-chain logistics',
      'General pharmaceuticals: across all major therapeutic categories from leading Indian and international brands',
    ],
  },
  {
    heading: 'Distribution Network Across Karnataka',
    content: 'From our Hassan headquarters, RS Medical Agency distributes pharmaceuticals to all 31 districts of Karnataka. Our distribution infrastructure includes 180+ delivery vehicles, temperature-controlled cold-chain logistics, and a digital tracking platform that provides real-time shipment visibility. Same-day delivery is available within Hassan district and select metro centres. Next-day delivery covers all remaining Karnataka districts including Bengaluru, Mysuru, Mangaluru, Hubballi-Dharwad, Belagavi, Kalaburagi, Ballari, Davanagere, Shivamogga, and Tumakuru.',
  },
  {
    heading: 'Manufacturer Partnerships',
    content: 'RS Medical Agency has built distribution relationships with over 500 pharmaceutical manufacturers and brands over our 25+ years of operation. Our established partnerships include leading Indian and international companies.',
    bullets: [
      'Sun Pharma, Cipla, Dr. Reddy\'s, Lupin, Mankind, Zydus',
      'Torrent, Glenmark, Abbott, Alkem',
      'Pfizer, GSK, and other multinational pharmaceutical companies',
      'Specialised oncology, HIV, nephrology, and vaccine manufacturers',
    ],
  },
  {
    heading: 'Trust and Reliability',
    content: 'RS Medical Agency has earned the trust of institutional buyers across Karnataka and beyond through consistent performance over two decades. Our 99.6%+ order fulfilment rate is among the strongest in regional pharmaceutical distribution. Every shipment includes batch-wise documentation, temperature logs for cold-chain products, certificates of analysis, and GST-compliant invoices. Full traceability from manufacturer to last-mile delivery is maintained for every product we distribute.',
  },
  {
    heading: 'National and International Reach',
    content: 'While our headquarters and core distribution infrastructure are centred in Hassan, Karnataka, RS Medical Agency serves institutional buyers across domestic India and internationally. We support international healthcare distributors with complete export documentation, customs handling, and end-to-end logistics management. Our domestic reach extends beyond Karnataka to serve hospital chains, pharmacy networks, and government procurement agencies in other Indian states.',
  },
  {
    heading: 'B2B Only — Licensed Institutional Buyers',
    content: 'RS Medical Agency operates exclusively as a B2B pharmaceutical distributor. We do not sell directly to individual consumers. Our products and services are available exclusively to licensed pharmacies, hospitals, clinics, government institutions, NGOs, and authorised healthcare distributors. Every new partner undergoes a verification process to confirm licensing and institutional status before orders are fulfilled.',
  },
];

export default function PharmaceuticalDistributorHassanPage() {
  return (
    <>
      <PageJsonLd schemas={[breadcrumb, localBusiness, faq]} />
      <SpecialtyPageLayout
        title="Pharmaceutical Distributor in Hassan, Karnataka"
        subtitle="Trusted B2B pharmaceutical distribution from Hassan to all 31 districts of Karnataka and beyond — 30,000+ SKUs, 500+ brands, 25+ years of experience, and a 99.6%+ fulfilment rate."
        heroImage="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200"
        sections={sections}
      />
    </>
  );
}
