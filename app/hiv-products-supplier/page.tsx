import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { PageJsonLd } from '@/components/json-ld';
import SpecialtyPageLayout from '@/components/specialty-page-layout';

export const metadata: Metadata = {
  title: `HIV Products Supplier & Distributor in Karnataka | ${SITE_NAME}`,
  description: 'RS Medical Agency is a licensed B2B supplier of HIV pharmaceutical products in Hassan, Karnataka. We distribute antiretroviral medicines to hospitals, government institutions, NGOs, and pharmacies across India.',
  alternates: { canonical: '/hiv-products-supplier' },
  openGraph: {
    title: `HIV Products Supplier | ${SITE_NAME}`,
    description: 'Licensed B2B supplier of HIV pharmaceutical products to hospitals, government institutions, and NGOs across Karnataka and India.',
    url: `${SITE_URL}/hiv-products-supplier`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'HIV Products Supplier', item: `${SITE_URL}/hiv-products-supplier` },
  ],
};

const service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'HIV Products Supply & Distribution',
  provider: { '@id': `${SITE_URL}/#organization` },
  description: 'Licensed B2B supply and distribution of HIV pharmaceutical products including antiretroviral medicines to hospitals, pharmacies, government institutions, and NGOs.',
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
      name: 'Does RS Medical Agency supply HIV medicines to government institutions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. RS Medical Agency is a licensed B2B distributor that supplies HIV pharmaceutical products to government hospitals, ART centres, public health institutions, and government procurement agencies across Karnataka and India.',
      },
    },
    {
      '@type': 'Question',
      name: 'What HIV products does RS Medical Agency distribute?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We distribute a comprehensive range of HIV pharmaceutical products including antiretroviral therapies (ART), fixed-dose combinations, opportunistic infection treatments, and diagnostic support products from leading Indian and international manufacturers.',
      },
    },
  ],
};

const sections = [
  {
    heading: 'Licensed B2B HIV Products Distribution',
    content: 'RS Medical Agency is a licensed B2B pharmaceutical distributor supplying HIV products from its headquarters in Hassan, Karnataka. With over 25 years in healthcare distribution, we serve hospitals, government ART centres, pharmacies, NGOs, and international healthcare distributors with a reliable supply of HIV pharmaceutical products. Our distribution network ensures that critical HIV medicines reach institutional buyers promptly, backed by 180+ delivery vehicles and a 99.6%+ order fulfilment rate.',
  },
  {
    heading: 'HIV Product Portfolio',
    content: 'Our HIV product catalogue is sourced from authorised manufacturers and their appointed stockists, ensuring authenticity and regulatory compliance at every level. We maintain inventory from over 500 manufacturers and brands to ensure consistent supply.',
    bullets: [
      'Antiretroviral therapy (ART) medications: nucleoside reverse transcriptase inhibitors, non-nucleoside reverse transcriptase inhibitors, protease inhibitors, and integrase inhibitors',
      'Fixed-dose combination tablets for simplified treatment regimens',
      'Products for prevention of mother-to-child transmission (PMTCT)',
      'Medications for treatment and prevention of HIV-related opportunistic infections',
      'Diagnostic support products used in conjunction with treatment programmes',
    ],
  },
  {
    heading: 'Supporting Government and NGO Programmes',
    content: 'RS Medical Agency has extensive experience working with government health departments, public hospitals, and non-governmental organisations running HIV treatment and prevention programmes. We understand the procurement requirements, documentation standards, and delivery timelines that institutional buyers operate under. Our team provides dedicated account management for government and NGO partners, with batch-wise documentation, compliance paperwork, and flexible delivery scheduling to match programme needs.',
  },
  {
    heading: 'Supply Chain Reliability for Critical Medicines',
    content: 'Consistent availability of HIV medicines is essential for treatment adherence and programme outcomes. RS Medical Agency maintains deep inventory levels specifically for high-demand HIV products and uses demand forecasting based on historical ordering patterns to prevent stockouts. Our 30,000+ SKU catalogue and relationships with 500+ manufacturers mean we can source and supply both standard regimens and less common products that smaller distributors may struggle to stock. Temperature-sensitive HIV products are handled through our cold-chain logistics network with documented compliance.',
  },
  {
    heading: 'Service Area for HIV Products',
    content: 'We distribute HIV products across all 31 districts of Karnataka, including every ART centre and government hospital in the state. Same-day and next-day delivery is available in Bengaluru, Mysuru, Hassan, Mangaluru, Hubballi-Dharwad, Belagavi, and other major centres. We also serve institutional buyers in other Indian states and support international healthcare distributors with full export documentation and customs handling.',
  },
  {
    heading: 'Compliance and Documentation',
    content: 'Every HIV product shipment includes complete batch-wise documentation, invoices meeting GST and regulatory requirements, and temperature logs for cold-chain items. We maintain full traceability from manufacturer through to last-mile delivery. RS Medical Agency is a strictly B2B distributor and does not sell directly to individual consumers. All HIV products are supplied exclusively to licensed pharmacies, hospitals, government institutions, NGOs, and authorised healthcare distributors.',
  },
];

export default function HivProductsSupplierPage() {
  return (
    <>
      <PageJsonLd schemas={[breadcrumb, service, faq]} />
      <SpecialtyPageLayout
        title="HIV Products Supplier & Distributor in Karnataka"
        subtitle="Licensed B2B supply of HIV pharmaceutical products — antiretroviral medicines, fixed-dose combinations, and treatment support products — to hospitals, government institutions, and NGOs."
        heroImage="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1200"
        sections={sections}
      />
    </>
  );
}
