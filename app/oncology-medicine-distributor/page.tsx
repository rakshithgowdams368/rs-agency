import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { PageJsonLd } from '@/components/json-ld';
import SpecialtyPageLayout from '@/components/specialty-page-layout';

export const metadata: Metadata = {
  title: `Oncology Medicine Distributor in Karnataka & India | ${SITE_NAME}`,
  description: 'RS Medical Agency is a licensed B2B oncology medicine distributor in Hassan, Karnataka. We supply cancer medicines including chemotherapy, immunotherapy, and targeted therapy products to hospitals, pharmacies, and institutions across India.',
  alternates: { canonical: '/oncology-medicine-distributor' },
  openGraph: {
    title: `Oncology Medicine Distributor | ${SITE_NAME}`,
    description: 'Licensed B2B distributor of oncology medicines to hospitals, pharmacies, and institutions across Karnataka and India.',
    url: `${SITE_URL}/oncology-medicine-distributor`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Oncology Medicine Distributor', item: `${SITE_URL}/oncology-medicine-distributor` },
  ],
};

const service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Oncology Medicine Distribution',
  provider: { '@id': `${SITE_URL}/#organization` },
  description: 'Licensed B2B wholesale distribution of oncology medicines including chemotherapy agents, immunotherapy products, targeted therapy drugs, and supportive care medications to hospitals, pharmacies, clinics, and institutions.',
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Karnataka, India' },
    { '@type': 'Country', name: 'India' },
  ],
  serviceType: 'Pharmaceutical Distribution',
};

const faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which oncology medicines does RS Medical Agency distribute?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RS Medical Agency distributes a comprehensive range of oncology medicines including chemotherapy agents, immunotherapy products, targeted therapy drugs, hormonal therapies, and supportive care medications from leading manufacturers like Sun Pharma, Cipla, Dr. Reddy\'s, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you supply oncology medicines with cold-chain compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All temperature-sensitive oncology products are transported in temperature-controlled vehicles with real-time monitoring and documented compliance at every stage from warehouse to delivery.',
      },
    },
  ],
};

const sections = [
  {
    heading: 'Licensed B2B Oncology Medicine Distribution',
    content: 'RS Medical Agency is a licensed B2B pharmaceutical distributor specialising in oncology medicine distribution from its headquarters in Hassan, Karnataka. With over 25 years of experience in healthcare distribution, we supply cancer medicines to licensed pharmacies, hospitals, clinics, government institutions, and international healthcare distributors. Our oncology portfolio spans thousands of SKUs from more than 500 manufacturers and brands, including Sun Pharma, Cipla, Dr. Reddy\'s, Lupin, Pfizer, and Abbott.',
  },
  {
    heading: 'Comprehensive Oncology Product Range',
    content: 'Our oncology distribution catalogue covers the full spectrum of cancer care pharmaceutical products required by institutional buyers. We maintain deep inventory across all major therapeutic categories to ensure consistent availability and rapid fulfilment for our partners.',
    bullets: [
      'Chemotherapy agents: alkylating agents, antimetabolites, platinum compounds, taxanes, and anthracyclines',
      'Immunotherapy products: checkpoint inhibitors and monoclonal antibodies including rituximab, trastuzumab, bevacizumab, and nivolumab',
      'Targeted therapy drugs: tyrosine kinase inhibitors such as dasatinib, cabozantinib, enzalutamide, and abiraterone',
      'Hormonal therapies: aromatase inhibitors, anti-androgens, and LHRH analogues',
      'Supportive care: antiemetics, growth factors, pain management, and nutritional support products',
    ],
  },
  {
    heading: 'Cold-Chain Integrity for Temperature-Sensitive Oncology Products',
    content: 'Many oncology medicines require strict temperature-controlled storage and transport. RS Medical Agency operates a dedicated cold-chain logistics network with 180+ vehicles equipped with real-time temperature monitoring. Every shipment of temperature-sensitive oncology products is documented with batch-wise temperature logs, certificates of analysis, and full traceability from manufacturer to delivery point. Our 99.6%+ fulfilment rate reflects the reliability institutions need when stocking critical cancer medicines.',
  },
  {
    heading: 'Service Area: Karnataka, India, and International Markets',
    content: 'RS Medical Agency distributes oncology medicines across all 31 districts of Karnataka, with same-day and next-day delivery in major centres including Bengaluru, Mysuru, Mangaluru, Hubballi-Dharwad, and Belagavi. We also serve institutional buyers across domestic India and support international healthcare distributors with complete export documentation and customs handling. Our distribution network covers government hospitals, private hospital chains, standalone pharmacies, cancer care centres, and NGOs running treatment programmes.',
  },
  {
    heading: 'Who We Supply',
    content: 'RS Medical Agency is a strictly B2B distributor. We do not sell directly to individual consumers. Our oncology medicine distribution services are available exclusively to licensed institutional buyers.',
    bullets: [
      'Multi-specialty and cancer care hospitals',
      'Licensed retail and hospital pharmacies',
      'Government health institutions and procurement agencies',
      'NGOs and charitable organisations operating cancer treatment programmes',
      'International healthcare distributors and importers',
    ],
  },
  {
    heading: 'Quality Assurance and Compliance',
    content: 'Every oncology product distributed by RS Medical Agency is sourced directly from authorised manufacturers or their appointed stockists. We maintain rigorous quality controls including batch verification, expiry management, storage condition monitoring, and complete documentation for regulatory compliance. Our partnerships with over 500 manufacturers mean we can provide competitive pricing at institutional scale while maintaining the supply chain integrity that cancer care demands.',
  },
];

export default function OncologyMedicineDistributorPage() {
  return (
    <>
      <PageJsonLd schemas={[breadcrumb, service, faq]} />
      <SpecialtyPageLayout
        title="Oncology Medicine Distributor in Karnataka & India"
        subtitle="Licensed B2B distribution of cancer medicines — chemotherapy, immunotherapy, targeted therapy, and supportive care products — to hospitals, pharmacies, and institutions."
        heroImage="https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=1200"
        sections={sections}
      />
    </>
  );
}
