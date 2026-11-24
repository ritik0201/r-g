import React from 'react';
import { Eye, CheckCircle2, Gem } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';

/**
 * Three Operational Principles Component for About page:
 * Absolute Transparency, Execution Discipline, Enduring Partnerships matching exact Figma design.
 */
export const AboutTenets: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc]/80 border-y border-slate-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-end mb-10 sm:mb-14">
          <div className="lg:col-span-7">
            <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
              OUR OPERATING PRINCIPLES
            </span>
            <h2 className="heading-section text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Structured for High Trust and Accountability
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              Our guiding ethos dictates every diagnostic audit, supplier negotiation,
              and executive placement we undertake.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 01 */}
          <Card className="p-6 sm:p-7 bg-white border border-slate-200/90 rounded-none shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono font-bold text-2xl sm:text-3xl text-sky-200">
                  01
                </span>
                <div className="w-8 h-8 rounded-none bg-sky-50 border border-sky-100 text-sky-700 flex items-center justify-center">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-3">
                Absolute Transparency
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                We conduct unbiased vendor evaluations free from hidden commissions or
                licensing kickbacks. Our clients receive uncompromisingly candid architectural
                audits and straight-talking counsel.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 pt-3 border-t border-slate-100">
              VENDOR NEUTRALITY GUARANTEE
            </span>
          </Card>

          {/* Card 02 */}
          <Card className="p-6 sm:p-7 bg-white border border-slate-200/90 rounded-none shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono font-bold text-2xl sm:text-3xl text-sky-200">
                  02
                </span>
                <div className="w-8 h-8 rounded-none bg-sky-50 border border-sky-100 text-sky-700 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-3">
                Execution Discipline
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Strategy without weekly rigor is overhead. Every initiative is benchmarked
                against rigorous governance milestones, weekly sprint accountability, and
                executive sponsor health metrics.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 pt-3 border-t border-slate-100">
              WEEKLY MILESTONE AUDITS
            </span>
          </Card>

          {/* Card 03 */}
          <Card className="p-6 sm:p-7 bg-white border border-slate-200/90 rounded-none shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono font-bold text-2xl sm:text-3xl text-sky-200">
                  03
                </span>
                <div className="w-8 h-8 rounded-none bg-sky-50 border border-sky-100 text-sky-700 flex items-center justify-center">
                  <Gem className="w-4 h-4" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-3">
                Enduring Partnerships
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                We measure advisory efficacy in multi-year organizational maturity rather
                than rapid ticket turnaround. Over 85% of our client relationships span
                continuous growth iterations.
              </p>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 pt-3 border-t border-slate-100">
              LONG-TERM VALUE ALIGNMENT
            </span>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default AboutTenets;
