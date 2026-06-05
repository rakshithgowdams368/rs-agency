import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import { PageJsonLd } from '@/components/json-ld';
import SpecialtyPageLayout from '@/components/specialty-page-layout';

export const metadata: Metadata = {
  title: `Nephrology Products Distributor in Karnataka & India | ${SITE_NAME}`,
  description: 'RS Medical Agency is a licensed B2B distributor of nephrology pharmaceutical products in Hassan, Karnataka. We supply renal care medicines to hospitals, dialysis centres, and healthcare institutions across India.',
  alternates: { canonical: '/nephrology-products-distributor' },
  openGraph: {
    title: `Nephrology Products Distributor | ${SITE_NAME}`,
    description: 'Licensed B2B distributor of nephrology medicines to hospitals, dialysis centres, and institutions across Karnataka and India.',
    url: `${SITE_URL}/nephrology-products-distributor`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Nephrology Products Distributor', item: `${SITE_URL}/nephrology-products-distributor` },
  ],
};

const service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Nephrology Products Distribution',
  provider: { '@id': `${SITE_URL}/#organization` },
  description: 'Licensed B2B wholesale distribution of nephrology and renal care pharmaceutical products to hospitals, dialysis centres, and healthcare institutions.',
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
      name: 'Does RS Medical Agency supply nephrology products to dialysis centres?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. RS Medical Agency distributes nephrology and renal care products to dialysis centres, nephrology departments in hospitals, and healthcare institutions across Karnataka and India with reliable same-day and next-day delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What nephrology products does RS Medical Agency distribute?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We distribute a range of nephrology products including erythropoiesis-stimulating agents, phosphate binders, immunosuppressants for transplant patients, antihypertensives for renal patients, and dialysis-related pharmaceutical products.',
      },
    },
  ],
};

const sections = [
  {
    heading: 'Licensed B2B Nephrology Products Distribution',
    content: 'RS Medical Agency is a licensed B2B pharmaceutical distributor specialising in nephrology products from its headquarters in Hassan, Karnataka. With over 25 years of experience in healthcare distribution, we supply renal care medicines to hospitals, dialysis centres, transplant units, and healthcare institutions across all 31 districts of Karnataka, domestic India, and international markets. Our nephrology portfolio is drawn from over 500 manufacturers and brands, ensuring our institutional partners have reliable access to the products their patients need.',
  },
  {
    heading: 'Nephrology Product Portfolio',
    content: 'Our nephrology distribution catalogue covers the pharmaceutical needs of renal care departments, dialysis facilities, and transplant programmes. We work with leading manufacturers to maintain consistent availability across the product range.',
    bullets: [
      'Erythropoiesis-stimulating agents (ESAs) for managing anaemia in chronic kidney disease',
      'Phosphate binders and calcium supplements for mineral and bone disorder management',
      'Immunosuppressants for kidney transplant recipients including tacrolimus, mycophenolate, and cyclosporine',
      'Antihypertensive medications specifically indicated for renal patients',
      'Iron supplementation products including IV iron formulations',
      'Dialysis-related pharmaceutical products and supportive care medications',
    ],
  },
  {
    heading: 'Reliable Supply for Dialysis Centres',
    content: 'Dialysis centres operate on tight schedules and cannot afford supply interruptions. RS Medical Agency maintains deep inventory of high-turnover nephrology products and uses demand forecasting to prevent stockouts. With a 99.6%+ order fulfilment rate and a fleet of 180+ delivery vehicles, we provide same-day and next-day delivery to dialysis facilities across Karnataka. Our dedicated account managers understand the recurring ordering patterns of dialysis centres and can set up scheduled deliveries aligned with treatment schedules.',
  },
  {
    heading: 'Cold-Chain and Storage Compliance',
    content: 'Several nephrology products, particularly biologics like erythropoietin and certain immunosuppressants, require strict temperature-controlled storage and transport. RS Medical Agency operates cold-chain logistics with real-time temperature monitoring at every stage. Each shipment of temperature-sensitive nephrology products includes documented temperature logs and certificates of analysis. Our warehouse facilities maintain segregated storage zones to ensure products are kept within their required temperature ranges until dispatch.',
  },
  {
    heading: 'Service Area',
    content: 'RS Medical Agency distributes nephrology products across all 31 districts of Karnataka with particular strength in areas with high concentrations of dialysis facilities including Bengaluru, Mysuru, Mangaluru, Hassan, Hubballi-Dharwad, and Belagavi. We also serve nephrology departments and dialysis centres across domestic India and support international healthcare distributors with complete export documentation and logistics.',
  },
  {
    heading: 'Institutional Buyers We Serve',
    content: 'RS Medical Agency is a strictly B2B distributor. We do not sell nephrology products directly to individual consumers. Our distribution services are available exclusively to licensed institutional buyers.',
    bullets: [
      'Hospital nephrology departments and transplant units',
      'Standalone and hospital-based dialysis centres',
      'Licensed retail and hospital pharmacies stocking renal care products',
      'Government health institutions and procurement agencies',
      'International healthcare distributors and importers',
    ],
  },
];

export default function NephrologyProductsDistributorPage() {
  return (
    <>
      <PageJsonLd schemas={[breadcrumb, service, faq]} />
      <SpecialtyPageLayout
        title="Nephrology Products Distributor in Karnataka & India"
        subtitle="Licensed B2B distribution of renal care medicines — ESAs, phosphate binders, immunosuppressants, and dialysis support products — to hospitals, dialysis centres, and institutions."
        heroImage="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200"
        sections={sections}
      />
    </>
  );
}
