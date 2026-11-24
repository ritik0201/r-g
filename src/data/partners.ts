import type { StrategicPartnerItem, PartnerItem } from '@/types';

export const partnersHeading = {
  eyebrow: 'INSTITUTIONAL ECOSYSTEM',
  heading: 'Strategic Delivery Partners',
  subtitle:
    'We bring our clients privileged access to specialized domain-leading organizations, delivering seamless execution across every layer of the enterprise.',
};

export const strategicPartnersHeading = partnersHeading;

export const strategicPartnersData: StrategicPartnerItem[] = [
  {
    id: 'talent-corner',
    monogram: 'TC',
    badge: 'HUMAN RESOURCES & STAFFING',
    name: 'Talent Corner HR Services',
    description:
      "India's premier executive search franchise with an extensive national database, offering specialized executive headhunting and technical recruiting frameworks.",
    specialization: 'Specialization: C-Suite & Tech Staffing',
    logoUrl: '/images/talent-corner.png',
  },
  {
    id: 'simplified-it',
    monogram: 'SI',
    badge: 'INFRASTRUCTURE & CLOUD',
    name: 'Simplified IT Solutions',
    description:
      'Comprehensive cloud architecture consultants providing certified AWS/Azure deployments, hybrid network topologies, and 24/7 managed infrastructure.',
    specialization: 'Specialization: Hybrid Cloud Systems',
    logoUrl: '/images/simplified-it.png',
  },
  {
    id: 'mikado-solutions',
    monogram: 'MS',
    badge: 'ENTERPRISE TRAINING',
    name: 'Mikado Solutions',
    description:
      'Industry-aligned technical education and upskilling programs focusing on enterprise DevOps, full-stack frameworks, and automated quality engineering.',
    specialization: 'Specialization: Deep Tech Upskilling',
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
