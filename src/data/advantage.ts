import type { AdvantageItem, WorkflowStepItem } from '@/types';

export const advantageHeading = {
  eyebrow: 'EXECUTION-FIRST ARCHITECTURE',
  heading: 'The R&G Advantage',
  description:
    'We reject disconnected consultancy models. We embed experienced senior advisors directly into customer context, backing each engagement with execution guarantees across talent and technology.',
};

export const advantageItems: AdvantageItem[] = [
  {
    id: 'outcome-driven',
    title: 'Outcome-Driven Approach',
    description:
      'Scope and milestones defined by tangible commercial outcomes and ROI benchmarks rather than abstract billable hours.',
    iconName: 'Target',
  },
  {
    id: 'single-contact',
    title: 'Single Point of Contact',
    description:
      'A designated senior practitioner manages your account across all four pillars, eliminating cross-vendor friction and finger-pointing.',
    iconName: 'UserCheck',
  },
  {
    id: 'delivery-partners',
    title: 'Trusted Delivery Partners',
    description:
      'Tight synergy with leading institutions in specialized IT and HR execution ensure superior delivery speed and reliability.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'success-metrics',
    title: 'Clear Success Metrics',
    description:
      'Transparent review cycles, defined SLA metrics, and open progress tracking for full operational accountability.',
    iconName: 'BarChart3',
  },
];

export const workflowHeading = {
  eyebrow: 'AGILE CONSULTING FRAMEWORK',
  heading: 'How We Work',
  description:
    'Our 4-stage engagement methodology minimizes risk, accelerates deployment, and ensures complete institutional knowledge retention.',
};

export const workflowSteps: WorkflowStepItem[] = [
  {
    step: '01',
    title: 'Discover & Diagnose',
    milestone: 'MILESTONE: DISCOVERY AUDIT',
    description:
      'Comprehensive assessment of current technology landscape and talent structure to identify high-impact friction points and strategic opportunities.',
  },
  {
    step: '02',
    title: 'Plan & Architect',
    milestone: 'MILESTONE: BLUEPRINT DELIVERY',
    description:
      'Development of detailed roadmap, architecture blueprint, budget forecasts, talent requirements, and partner engagement scope.',
  },
  {
    step: '03',
    title: 'Deliver & Staff',
    milestone: 'MILESTONE: FULL LIFECYCLE ONBOARDING',
    description:
      'Synchronized execution across custom software delivery, corporate IT training programs, and targeted talent acquisition.',
  },
  {
    step: '04',
    title: 'Support & Elevate',
    milestone: 'MILESTONE: PERFORMANCE AUDIT',
    description:
      'Post-implementation reviews, ongoing governance, SLA audits, performance benchmarking, and transition to internal capability.',
  },
];
