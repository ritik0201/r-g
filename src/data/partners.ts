import type { StrategicPartnerItem, PartnerItem } from '@/types';

export const partnersHeading = {
  eyebrow: 'INSTITUTIONAL ECOSYSTEM',
  heading: 'Strategic Delivery Partners',
  subtitle:
    'We integrate deep specialized access to premier domain-leading organizations, delivering unmatched execution breadth without enterprise overhead.',
};

export const strategicPartnersHeading = partnersHeading;

export const strategicPartnersData: StrategicPartnerItem[] = [
  {
    id: 'talent-corner',
    monogram: 'TC',
    badge: 'STAFFING & TALENT ACQUISITION',
    name: 'Talent Corner HR Services',
    description:
      'National HR powerhouse with 20+ years of pedigree and 150,000+ candidates placed. Our exclusive master franchise powers precision executive hiring, technical staffing, and bulk talent campaigns.',
    specialization: 'Specialization: Pan-India Talent Staffing',
    logoUrl: '/images/talent-corner.png',
  },
  {
    id: 'simplified-it',
    monogram: 'SIT',
    badge: 'SOFTWARE DEVELOPMENT PARTNER',
    name: 'Simplified IT Solutions',
    description:
      'Elite development and implementation arm specializing in complex Magento enterprise e-commerce systems, custom cloud backend architectures, database engineering, and core API integrations.',
    specialization: 'Specialization: Python & Cloud Solutions',
    logoUrl: '/images/simplified-it.png',
  },
  {
    id: 'mikado-solutions',
    monogram: 'MS',
    badge: 'CORPORATE IT TRAINING',
    name: 'Mikado Solutions',
    description:
      'Premier corporate IT skilling institution offering structured corporate programs in modern software engineering (Java, Python, DevOps, Full-Stack frameworks) for enterprise workforce readiness.',
    specialization: 'Specialization: Full-Stack Corporate Training',
    logoUrl: '/images/mikado-solutions.png',
  },
];

// Compatibility for existing PartnerItem references
export const partnersData: PartnerItem[] = strategicPartnersData.map((item) => ({
  id: item.id,
  role: item.badge,
  name: item.name,
  description: item.description,
  logoUrl: item.logoUrl || '',
}));

export const contactCTAData = {
  eyebrow: 'INITIATE ENGAGEMENT',
  heading: 'Ready to Accelerate Your Enterprise Growth?',
  subtext:
    'Schedule a confidential executive consultation with our principal consultants. We evaluate your current IT architecture and talent footprint to formulate actionable delivery options.',
  buttonText: 'Book a Consultation',
  buttonHref: '#contact',
};
