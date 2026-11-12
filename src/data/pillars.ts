import type { PillarItem } from '@/types';

export const pillarsHeading = {
  eyebrow: 'OUR SERVICE PILLARS',
  heading: 'Our Service Pillars',
  subtitle: 'From strategy to staffing—delivered with accountability.',
};

export const pillarsData: PillarItem[] = [
  {
    id: 'it-consultancy',
    number: '01',
    title: 'IT Consultancy',
    description:
      'Assess, define, and execute phased roadmaps for technology strategy, product evaluation, and secure integrations.',
    tagline: 'STRATEGY • ARCHITECTURE • INTEGRATIONS',
    iconUrl: '/images/icon-it-consultancy.png',
    iconName: 'Code2',
  },
  {
    id: 'hr-staffing',
    number: '02',
    title: 'HR & Staffing',
    description:
      'End-to-end talent acquisition and workforce solutions through our franchise with Talent Corner HR Services.',
    tagline: 'EXECUTIVE SEARCH • TALENT SOURCING',
    iconUrl: '/images/icon-hr-staffing.png',
    iconName: 'BrainCircuit',
  },
  {
    id: 'software-projects',
    number: '03',
    title: 'Software Projects',
    description:
      'Full-cycle development, specializing in Magento implementations, performance tuning, and API integrations.',
    tagline: 'FULL-CYCLE DEV • MAGENTO • APIS',
    iconUrl: '/images/icon-software-projects.png',
    iconName: 'Palette',
  },
  {
    id: 'it-training',
    number: '04',
    title: 'IT Training',
    description:
      'Customized corporate training in modern technologies (Java, Python, Fullstack) in partnership with Mikado Solutions.',
    tagline: 'JAVA • PYTHON • FULLSTACK ACADEMY',
    iconUrl: '/images/icon-it-training.png',
    iconName: 'TrendingUp',
  },
];
