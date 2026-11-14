import type { HeroData } from '@/types';

export const heroData: HeroData = {
  eyebrow: 'ENTERPRISE IT & TALENT CONSULTING • EST. 2023',
  headlinePart1: 'Technology.',
  headlinePart2: 'Talent.',
  headlineAccent: 'Growth.',
  headline: 'Technology. Talent. Growth.',
  description:
    'Aligning technology and talent with business growth. Strategic advisory and disciplined execution for expanding enterprises across Mumbai, Thane, and beyond.',
  primaryCta: {
    label: 'Our Services',
    href: '/services',
  },
  secondaryCta: {
    label: 'To Schedule',
    href: '/contact',
  },
  stats: [
    {
      value: '35+',
      label: 'Strategic Engagements Delivered',
    },
    {
      value: 'MMR',
      label: 'Primary Footprint (Mumbai, Thane, NM)',
    },
    {
      value: '100%',
      label: 'Delivery Model Integrity',
    },
  ],
  image: '/images/hero-meeting.jpg',
  imageBadge: {
    title: 'INSTITUTIONAL RIGOR',
    description: 'Bespoke interventions engineered for enterprise scale.',
  },
  trustSignals: [
    {
      label: 'Strategic Engagements Delivered',
      iconName: 'ShieldCheck',
    },
    {
      label: 'Senior Practitioner Led',
      iconName: 'Zap',
    },
  ],
  coreFocus: [
    {
      title: 'IT Consultancy',
      iconName: 'Radio',
    },
    {
      title: 'HR & Staffing',
      iconName: 'Users',
    },
    {
      title: 'Software Projects',
      iconName: 'Code2',
    },
    {
      title: 'Corporate IT Training',
      iconName: 'GraduationCap',
    },
  ],
};
