import type { PartnerItem, ContactCTAData } from '@/types';

export const partnersHeading = {
  eyebrow: 'ECOSYSTEM & PARTNERS',
  heading: 'Strategic Alliance Network',
};

export const partnersData: PartnerItem[] = [
  {
    id: 'simplifyit',
    role: 'Implementation Partner',
    name: 'SimplifyIT',
    description: 'Enterprise Cloud Infrastructure & Automation',
  },
  {
    id: 'talent-corner',
    role: 'Talent Partner',
    name: 'Talent Corner',
    description: 'Executive Sourcing & Engineering Staffing',
  },
  {
    id: 'mikado-solutions',
    role: 'Training & Foundation Partner',
    name: 'Mikado Solutions',
    description: 'Full Stack Academy & Technical Upskilling',
  },
];

export const contactCTAData: ContactCTAData = {
  eyebrow: "LET'S BUILD TOGETHER",
  heading: 'Ready to build, run, or scale your platform?',
  subtext:
    'Partner with a single accountable engineering team instead of fragmented vendor chains.',
  buttonText: 'Start a project',
  buttonHref: '#contact',
};
