import type { CaseStudyItem } from '@/types';

export const caseStudiesHeading = {
  eyebrow: 'CASE STUDIES',
  heading: 'Selected Work',
  viewAllLink: {
    label: 'View all work',
    href: '#work',
  },
};

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'jewelite',
    category: 'JEWELRY COMMERCE',
    title: 'Jewelite',
    description:
      'Live bullion pricing engine synchronized real-time to Shopify commerce checkout with microsecond rate parity.',
    featureTag: 'Real-Time Sync',
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'Editorial close up of precious gold jewelry and rings with warm reflections and deep blue ambiance',
    link: '#work-jewelite',
  },
  {
    id: 'basco-games',
    category: 'E-COMMERCE PLATFORM',
    title: 'Basco Games',
    description:
      'Gaming e-commerce architecture featuring customer tier segment discount portals and integrated regional warehouse dispatch.',
    featureTag: 'B2B + B2C Matrix',
    image:
      'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'Modern geometric tabletop game boards and high precision minimalist components in an architectural setting',
    link: '#work-basco',
  },
  {
    id: 'metric-ai',
    category: 'AI ANALYTICS',
    title: 'MetricAI',
    description:
      'Multi-model LLM usage telemetry, automated rate-limit failovers, and centralized enterprise API credential governance.',
    featureTag: 'API Orchestration',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    imageAlt:
      'Clean enterprise data telemetry interfaces and analytics dashboards rendered on high resolution hardware',
    link: '#work-metricai',
  },
];
