import type { AdvantageItem, WorkflowStepItem } from '@/types';

export const advantageHeading = {
  eyebrow: 'OPERATING ARCHITECTURE',
  heading: 'The R&G Advantage',
  description:
    'We reject disconnected consulting models where technology advisors propose unstaffed theoretical roadmaps. Our engagement framework guarantees accountable ownership from strategy through daily execution.',
};

export const advantageItems: AdvantageItem[] = [
  {
    id: 'outcome-driven',
    title: 'Outcome-Driven Approach',
    description:
      'Key performance indicators tied directly to operational benchmarks, avoiding billing on abstract vanity timelines.',
    iconName: 'Target',
  },
  {
    id: 'single-contact',
    title: 'Single Point of Contact',
    description:
      'A dedicated Director-level Engagement Lead coordinates software, recruitment, and architecture workflows simultaneously.',
    iconName: 'UserCheck',
  },
  {
    id: 'delivery-partners',
    title: 'Trusted Delivery Partners',
    description:
      'Tight syndication with vetted leaders in specialized infrastructure, executive recruitment, and technical training.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'success-metrics',
    title: 'Clear Success Metrics',
    description:
      'Transparent milestone deliverables with SLA guarantees, executive dashboards, and bi-weekly review gates.',
    iconName: 'BarChart3',
  },
];

export const workflowHeading = {
  eyebrow: 'STRUCTURED DELIVERY',
  heading: 'How We Work',
  description:
    'Our sequential engagement methodology mitigates risk, accelerates deployment, and ensures complete institutional knowledge retention.',
};

export const workflowSteps: WorkflowStepItem[] = [
  {
    step: '01',
    title: 'Discover & Diagnose',
    milestone: 'MILESTONE: DISCOVERY AUDIT',
    description:
      'In-depth analysis of existing tech stacks, organizational bottlenecks, recruitment velocity, and enterprise targets across key stakeholders.',
  },
  {
    step: '02',
    title: 'Plan & Architect',
    milestone: 'MILESTONE: BLUEPRINT SIGNOFF',
    description:
      'Development of the comprehensive technical architecture, resource requisition matrices, vendor parameters, and delivery roadmaps.',
  },
  {
    step: '03',
    title: 'Deliver & Staff',
    milestone: 'MILESTONE: GO-LIVE & ONBOARD',
    description:
      'Agile execution sprints for custom software, active executive candidate placement, integration testing, and team onboarding.',
  },
  {
    step: '04',
    title: 'Support & Elevate',
    milestone: 'MILESTONE: SLA GOVERNANCE',
    description:
      'Corporate workforce training modules, continuous infrastructure monitoring, executive reviews, and iterative capability enhancement.',
  },
];
