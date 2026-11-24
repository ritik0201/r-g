import React from 'react';
import { ShieldCheck, UserCheck, Network, BarChart3 } from 'lucide-react';
import { Container } from '@/components/common/Container';

const advantageItems = [
  {
    icon: ShieldCheck,
    title: 'Outcome-Driven Approach',
    description:
      'Key performance indicators tied directly to operational benchmarks, avoiding billing on abstract vanity timelines.',
  },
  {
    icon: UserCheck,
    title: 'Single Point of Contact',
    description:
      'A dedicated Director-level Engagement Lead coordinates software, recruitment, and architecture workflows simultaneously.',
  },
  {
    icon: Network,
    title: 'Trusted Delivery Partners',
    description:
      'Tight syndication with vetted leaders in specialized infrastructure, executive recruitment, and technical training.',
  },
  {
    icon: BarChart3,
    title: 'Clear Success Metrics',
    description:
      'Transparent milestone deliverables with SLA guarantees, executive dashboards, and bi-weekly review gates.',
  },
];

const workflowSteps = [
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

/**
 * The R&G Advantage & How We Work (Side-by-side Laptop View Component):
 * Replicates exact Figma desktop/laptop view:
 * - Left: "OPERATING ARCHITECTURE" -> "The R&G Advantage" -> 4 icon-based cards
 * - Right: "STRUCTURED DELIVERY" -> "How We Work" -> 4 numbered milestone cards
 * Stacks gracefully and cleanly on mobile devices.
 */
export const HomeAdvantageWorkflow: React.FC = () => {
  return (
    <section
      id="advantage"
      className="py-14 sm:py-20 lg:py-24 bg-[#fbfcfd] border-t border-slate-200/80 relative"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-start">
          {/* =========================================================================
              LEFT COLUMN: The R&G Advantage (6 cols)
             ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="text-xs font-mono font-bold text-[#caa264] uppercase tracking-widest block mb-2">
              OPERATING ARCHITECTURE
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[2.65rem] text-primary tracking-tight leading-tight mb-3">
              The R&amp;G Advantage
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm lg:text-[0.95rem] leading-relaxed mb-6 sm:mb-8">
              We reject disconnected consulting models where technology advisors propose unstaffed
              theoretical roadmaps. Our engagement framework guarantees accountable ownership from
              strategy through daily execution.
            </p>

            {/* 4 Advantage Cards Stacked */}
            <div className="space-y-3.5 sm:space-y-4">
              {advantageItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="p-4 sm:p-5 bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs rounded-none transition-all flex items-start gap-3.5 sm:gap-4"
                  >
                    <div className="w-9 h-9 rounded-none bg-[#0c192c] text-[#caa264] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading font-bold text-sm sm:text-base text-primary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: How We Work (6 cols)
             ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col mt-10 lg:mt-0">
            <span className="text-xs font-mono font-bold text-[#caa264] uppercase tracking-widest block mb-2">
              STRUCTURED DELIVERY
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-[2.65rem] text-primary tracking-tight leading-tight mb-3">
              How We Work
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm lg:text-[0.95rem] leading-relaxed mb-6 sm:mb-8">
              Our sequential engagement methodology mitigates risk, accelerates deployment, and
              ensures complete institutional knowledge retention.
            </p>

            {/* 4 Methodology Milestone Cards Stacked */}
            <div className="space-y-3.5 sm:space-y-4">
              {workflowSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-4 sm:p-5 bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs rounded-none transition-all"
                >
                  {/* Header Row: Step Number + Title on Left, Milestone Badge on Right */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-100">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono font-bold text-base sm:text-lg text-[#caa264]">
                        {step.step}
                      </span>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-primary">
                        {step.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-sky-800 bg-sky-50 border border-sky-200/60 px-2 py-0.5 rounded-none uppercase tracking-wider">
                      {step.milestone}
                    </span>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeAdvantageWorkflow;
