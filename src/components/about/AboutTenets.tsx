import React from 'react';
import { Eye, Target, Handshake } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';

/**
 * Three Operational Tenets Component for About page:
 * Absolute Transparency, Execution Discipline, Enduring Partnership.
 */
export const AboutTenets: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#f8fafc]/80 border-y border-slate-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-end mb-10 sm:mb-14">
          <div className="lg:col-span-7">
            <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
              OUR OPERATIONAL FOUNDATION
            </span>
            <h2 className="heading-section text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Structured for High Trust and Accountability
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              Three core operational tenets that define how we engage, advise, and execute
              alongside your executive leadership.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <Card className="p-5 sm:p-7 bg-white border border-slate-200/90 rounded-none shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono font-bold text-xl sm:text-2xl text-accent">
                  01
                </span>
                <div className="w-9 h-9 rounded-none bg-sky-50 border border-sky-200 text-primary flex items-center justify-center">
                  <Eye className="w-4 h-4 text-accent" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-2.5">
                Absolute Transparency
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Uncompromising clarity on project viability, milestone feasibility, and
                technical debt. We tell clients what they need to know, not just what they
                want to hear.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 pt-3 border-t border-slate-100">
              FOUNDATION 01 • INTEGRITY
            </span>
          </Card>

          <Card className="p-5 sm:p-7 bg-white border border-slate-200/90 rounded-none shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono font-bold text-xl sm:text-2xl text-accent">
                  02
                </span>
                <div className="w-9 h-9 rounded-none bg-sky-50 border border-sky-200 text-primary flex items-center justify-center">
                  <Target className="w-4 h-4 text-accent" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-2.5">
                Execution Discipline
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Architecture roadmaps are anchored in immediate operational realities.
                Every strategy comes with concrete deployment phases and talent staffing
                allocations.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 pt-3 border-t border-slate-100">
              FOUNDATION 02 • ACCOUNTABILITY
            </span>
          </Card>

          <Card className="p-5 sm:p-7 bg-white border border-slate-200/90 rounded-none shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono font-bold text-xl sm:text-2xl text-accent">
                  03
                </span>
                <div className="w-9 h-9 rounded-none bg-sky-50 border border-sky-200 text-primary flex items-center justify-center">
                  <Handshake className="w-4 h-4 text-accent" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-2.5">
                Enduring Partnership
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                We measure engagement success by your capability to sustain improvements
                independently long after initial systems and teams are deployed.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 pt-3 border-t border-slate-100">
              FOUNDATION 03 • SUSTAINABILITY
            </span>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default AboutTenets;
