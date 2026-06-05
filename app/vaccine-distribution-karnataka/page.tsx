import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { PageJsonLd } from '@/components/json-ld';
import SpecialtyPageLayout from '@/components/specialty-page-layout';

export const metadata: Metadata = {
  title: `Vaccine Distribution in Karnataka — Cold-Chain Logistics | ${SITE_NAME}`,
  description: 'RS Medical Agency provides licensed B2B vaccine distribution with temperature-controlled cold-chain logistics across all 31 districts of Karnataka. Serving hospitals, government programmes, clinics, and institutions.',
  alternates: { canonical: '/vaccine-distribution-karnataka' },
  openGraph: {
    title: `Vaccine Distribution Karnataka | ${SITE_NAME}`,
    description: 'Licensed B2B vaccine distribution with cold-chain logistics to hospitals, government programmes, and institutions across Karnataka.',
    url: `${SITE_URL}/vaccine-distribution-karnataka`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Vaccine Distribution Karnataka', item: `${SITE_URL}/vaccine-distribution-karnataka` },
  ],
};

const service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Vaccine Distribution & Cold-Chain Logistics',
  provider: { '@id': `${SITE_URL}/#organization` },
  description: 'Temperature-controlled vaccine distribution with end-to-end cold-chain monitoring, serving government immunisation programmes, hospitals, clinics, and healthcare institutions across Karnataka.',
  areaServed: { '@type': 'AdministrativeArea', name: 'Karnataka, India' },
  serviceType: 'Cold-Chain Pharmaceutical Distribution',
};

const faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does RS Medical Agency maintain cold-chain for vaccine distribution?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RS Medical Agency uses temperature-controlled vehicles with real-time digital monitoring, cold storage warehouses, and documented temperature logs at every stage from receipt to last-mile delivery, ensuring full regulatory compliance for vaccine distribution.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does RS Medical Agency distribute vaccines for government immunisation programmes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. RS Medical Agency supplies vaccines to government health departments, public hospitals, primary health centres, and institutional buyers running immunisation programmes across all 31 districts of Karnataka.',
      },
    },
  ],
};

const sections = [
  {
    heading: 'Vaccine Distribution with Cold-Chain Logistics in Karnataka',
    content: 'RS Medical Agency is a licensed B2B vaccine distributor operating from Hassan, Karnataka, with temperature-controlled cold-chain logistics across all 31 districts of the state. With over 25 years of experience in healthcare distribution, we supply vaccines to government immunisation programmes, hospitals, clinics, and institutional buyers. Our fleet of 180+ delivery vehicles includes cold-chain-equipped units with real-time temperature monitoring to ensure vaccine integrity from warehouse to point of administration.',
  },
  {
    heading: 'Vaccine Product Categories',
    content: 'We distribute vaccines from leading manufacturers including Pfizer, GSK, Sun Pharma, and others in our network of 500+ brands. Our vaccine portfolio serves both routine immunisation programmes and institutional procurement needs.',
    bullets: [
      'Routine childhood immunisation vaccines as per the national immunisation schedule',
      'Adult vaccines including influenza, hepatitis, pneumococcal, and travel vaccines',
      'COVID-19 vaccines and related cold-chain products',
      'Vaccines for institutional and occupational health programmes',
      'Speciality vaccines requiring ultra-cold storage and handling',
    ],
  },
  {
    heading: 'End-to-End Cold-Chain Compliance',
    content: 'Vaccine potency depends on unbroken cold-chain maintenance from manufacturer to administration. RS Medical Agency has invested heavily in cold-chain infrastructure to ensure every vaccine reaches its destination within the required temperature range. Our cold-chain system includes temperature-controlled warehouse storage zones, refrigerated and insulated transport containers, real-time digital temperature monitoring with alert systems, batch-wise temperature log documentation for every shipment, and trained handling staff at every stage of the supply chain. This infrastructure enables us to maintain a 99.6%+ fulfilment rate even for the most temperature-sensitive vaccine products.',
  },
  {
    heading: 'Coverage Across All 31 Districts of Karnataka',
    content: 'RS Medical Agency delivers vaccines to every district in Karnataka, from major urban centres to rural primary health centres. Our distribution network reaches Bengaluru, Mysuru, Mangaluru, Hassan, Hubballi-Dharwad, Belagavi, Kalaburagi, Ballari, Davanagere, Shivamogga, Tumakuru, and all remaining districts. Same-day delivery is available in the Hassan district and select metro areas, with next-day delivery standard across the state. This coverage is particularly important for government immunisation programmes that require reliable supply to remote health facilities.',
  },
  {
    heading: 'Documentation and Regulatory Compliance',
    content: 'Every vaccine shipment from RS Medical Agency includes comprehensive documentation to meet regulatory and institutional requirements. We provide batch-wise certificates of analysis, temperature excursion reports, GST-compliant invoices, and full traceability records. Our documentation standards are designed to satisfy the audit requirements of government health departments, hospital accreditation bodies, and international procurement agencies.',
  },
  {
    heading: 'Who We Supply',
    content: 'RS Medical Agency distributes vaccines exclusively through B2B channels to licensed institutional buyers. We do not sell vaccines directly to individual consumers.',
    bullets: [
      'Government health departments and immunisation programmes',
      'Public and private hospitals with vaccination centres',
      'Primary health centres and community health centres',
      'Licensed pharmacies with cold storage capability',
      'Corporate and occupational health programmes',
      'NGOs running vaccination drives',
    ],
  },
];

export default function VaccineDistributionKarnatakaPage() {
  return (
    <>
      <PageJsonLd schemas={[breadcrumb, service, faq]} />
      <SpecialtyPageLayout
        title="Vaccine Distribution in Karnataka — Cold-Chain Logistics"
        subtitle="Licensed B2B vaccine distribution with end-to-end temperature-controlled cold-chain logistics — serving government immunisation programmes, hospitals, clinics, and institutions across all 31 districts."
        heroImage="https://images.pexels.com/photos/5863389/pexels-photo-5863389.jpeg?auto=compress&cs=tinysrgb&w=1200"
        sections={sections}
      />
    </>
  );
}
