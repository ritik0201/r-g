import type { PartnerItem, ContactCTAData } from '@/types';

export const partnersHeading = {
  eyebrow: 'STRATEGIC ALLIANCES',
  heading: 'Trusted Partnerships',
  subtitle: 'Collaborations that accelerate value and reliability.',
};

export const partnersData: PartnerItem[] = [
  {
    id: 'simplified-it',
    role: 'Implementation Partner',
    name: 'Simplified IT Solutions',
    description: 'Enterprise Cloud Infrastructure, Architecture & Delivery',
    logoUrl: '/images/simplified-it.png',
  },
  {
    id: 'talent-corner',
    role: 'Staffing Franchise Partner',
    name: 'Talent Corner HR Services',
    description: 'Comprehensive Talent Acquisition & Workforce Solutions',
    logoUrl: '/images/talent-corner.png',
  },
  {
    id: 'mikado-solutions',
    role: 'Training Partner',
    name: 'Mikado Solutions',
    description:
      'Corporate Upskilling & Modern Engineering Academy (Java, Python, Fullstack)',
    logoUrl: '/images/mikado-solutions.png',
  },
  {
    id: 'your-enterprise',
    role: 'Strategic Partner',
    name: 'Your Enterprise',
    description: 'Cross-Sector Strategic Collaborations & Business Synergy',
    logoUrl: '/images/your-enterprise.jpg',
  },
];

export const contactCTAData: ContactCTAData = {
  eyebrow: "LET'S CONNECT",
  heading: "Let's Connect",
  subtext: 'We usually respond within one business day.',
  buttonText: 'Get in Touch',
  buttonHref: '#contact',
};
