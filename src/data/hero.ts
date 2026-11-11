import type { HeroData } from '@/types';

export const heroData: HeroData = {
  eyebrow: 'PRODUCT ENGINEERING & DIGITAL OPERATIONS',
  headline: {
    line1: 'We build it.',
    line2: 'We run it.',
    line3: 'We grow it.',
  },
  description:
    'R&G designs and builds consumer platforms, custom applications and AI-powered tools, and then supports them with design, content and growth work. One accountable team instead of a chain of vendors.',
  primaryCta: {
    label: 'Get in Touch',
    href: '#contact',
  },
  secondaryCta: {
    label: 'View Our Work',
    href: '#work',
  },
  trustSignals: [
    {
      label: '100% Accountable',
      iconName: 'ShieldCheck',
    },
    {
      label: 'SLA-Backed Delivery',
      iconName: 'Zap',
    },
  ],
  preview: {
    commerce: {
      title: 'Shopify + Custom Engine',
      status: 'ACTIVE',
      metricLabel: 'Throughput Volume',
      metricValue: '₹4.82M / day',
      chartLevels: [35, 60, 100, 80],
    },
    aiEngine: {
      title: 'AI Middleware Engine',
      sla: '99.98% SLA',
      description:
        'Live model routing, payload token optimization, dynamic pricing arbitration.',
      pipeline: [
        { step: 'API Ingest', latency: '12ms' },
        { step: 'Logic Sync', latency: '28ms' },
        { step: 'Dispatch', latency: '8ms' },
      ],
    },
    growthStack: {
      title: 'Continuous Growth Stack',
      subtitle: 'Engineering • Ops • Placement',
    },
  },
};
