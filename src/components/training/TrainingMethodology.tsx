import React from 'react';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';

/**
 * 4-Pillar Upskilling Methodology Component:
 * 01 Pre-Assessment Audit, 02 Tailored Curriculum, 03 Real-world Sandbox, 04 Post-Training Metrics.
 */
export const TrainingMethodology: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#f8fafc]/80 border-y border-slate-200/80">
      <Container>
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
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
          <Card className="p-5 sm:p-6 bg-white border border-slate-200/90 rounded-none shadow-2xs flex flex-col justify-between">
            <div>
              <span className="font-mono font-bold text-xl sm:text-2xl text-accent block mb-2.5">
                01
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-primary mb-2">
                Pre-Assessment Audit
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Comprehensive baseline assessments to evaluate current capability gaps and
                eliminate redundant modules before kickoff.
              </p>
            </div>
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold pt-3 border-t border-slate-100">
              Skill Gap Evaluation
            </span>
          </Card>

          <Card className="p-5 sm:p-6 bg-white border border-slate-200/90 rounded-none shadow-2xs flex flex-col justify-between">
            <div>
              <span className="font-mono font-bold text-xl sm:text-2xl text-accent block mb-2.5">
                02
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-primary mb-2">
                Tailored Curriculum
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Modular engineering design patterns customized to meet your company&apos;s
                actual internal architectural conventions.
              </p>
            </div>
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold pt-3 border-t border-slate-100">
              Stack Alignment
            </span>
          </Card>

          <Card className="p-5 sm:p-6 bg-white border border-slate-200/90 rounded-none shadow-2xs flex flex-col justify-between">
            <div>
              <span className="font-mono font-bold text-xl sm:text-2xl text-accent block mb-2.5">
                03
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-primary mb-2">
                Real-world Sandbox
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Engineers implement code in production-grade simulation isolated sandboxes
                with automated linting and peer PR reviews.
              </p>
            </div>
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold pt-3 border-t border-slate-100">
              Production Sandbox
            </span>
          </Card>

          <Card className="p-5 sm:p-6 bg-white border border-slate-200/90 rounded-none shadow-2xs flex flex-col justify-between">
            <div>
              <span className="font-mono font-bold text-xl sm:text-2xl text-accent block mb-2.5">
                04
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-primary mb-2">
                Post-Training Metrics
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Quantitative benchmarking report detailing velocity gains, code test
                coverage, and readiness for team leadership.
              </p>
            </div>
            <span className="text-[10px] font-mono uppercase text-slate-400 font-bold pt-3 border-t border-slate-100">
              Verifiable Outcomes
            </span>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default TrainingMethodology;
