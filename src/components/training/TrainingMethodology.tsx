import React from 'react';
import { SlidersHorizontal, Layers, Terminal, TrendingUp } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';

const pillars = [
  {
    num: '01',
    title: 'Pre-Assessment Audit',
    description:
      'Comprehensive coding assessments and repo audits measure current baseline capabilities and eliminate prerequisite mismatches before kickoff.',
    tag: 'Skill Delta Matrix',
    icon: SlidersHorizontal,
  },
  {
    num: '02',
    title: 'Tailored Curriculum',
    description:
      "Module structures and design patterns are customized to mirror your company's actual internal architectural conventions and governance constraints.",
    tag: 'Stack Alignment',
    icon: Layers,
  },
  {
    num: '03',
    title: 'Real-world Sandbox',
    description:
      'Engineers implement complete production-grade modules in isolated sandbox environments with automated linting, test suites, and peer PR reviews.',
    tag: 'Production Mocks',
    icon: Terminal,
  },
  {
    num: '04',
    title: 'Post-Training Metrics',
    description:
      'Delivery concludes with post-training competency scorecards, code velocity telemetry, and executive debriefs provided to engineering leadership.',
    tag: 'Executive Reporting',
    icon: TrendingUp,
  },
];

/**
 * 4-Pillar Upskilling Methodology Component:
 * 01 Pre-Assessment Audit, 02 Tailored Curriculum, 03 Real-world Sandbox, 04 Post-Training Metrics
 * matching exact Figma specifications.
 */
export const TrainingMethodology: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc]/80 border-y border-slate-200/80">
      <Container>
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="eyebrow text-xs font-bold text-[#caa264] tracking-widest uppercase font-mono mb-2 block">
            THE R&amp;G APPROACH
          </span>
          <h2 className="heading-section text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2.5">
            4-Pillar Upskilling Methodology
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
            We reject passive webinar-style training. Our framework is grounded in
            architectural immersion and verifiable skill outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.num}
                className="p-6 bg-white border border-slate-200/90 rounded-none shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <span className="font-mono font-bold text-2xl sm:text-3xl text-[#caa264] block mb-3">
                    {pillar.num}
                  </span>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-primary mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Icon className="w-3.5 h-3.5 text-slate-400" />
                  <span>{pillar.tag}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default TrainingMethodology;
