import type { HeroData } from '@/types';

export const heroData: HeroData = {
  eyebrow: 'STRATEGIC GUIDANCE & HANDS-ON IMPLEMENTATION',
  headline: 'Your trusted partner in IT & HR Consultancy.',
  description:
    'Founded on 1 November 2023, R&G Consultancy Services aligns technology and talent with business growth. We provide end-to-end IT consultancy, HR consultancy, software projects, and IT training—combining strategic guidance with hands-on implementation.',
  primaryCta: {
    label: 'Get in Touch',
    href: '#contact',
  },
  secondaryCta: {
    label: 'Explore Services',
    href: '#services',
  },
  trustSignals: [
    {
      label: 'Outcome-Driven Consulting',
      iconName: 'ShieldCheck',
    },
    {
      label: 'Partner-Enabled Execution',
      iconName: 'Zap',
    },
  ],
  coreFocus: [
    {
      title: 'Technology Strategy',
      iconName: 'Sitemap',
    },
    {
      title: 'Executive HR Staffing',
      iconName: 'UserCheck',
    },
    {
      title: 'Magento & Integrations',
      iconName: 'Code2',
    },
    {
      title: 'Corporate IT Training',
      iconName: 'GraduationCap',
    },
  ],
};
