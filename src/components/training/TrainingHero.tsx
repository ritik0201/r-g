import React from 'react';
import { Award, Building2, Laptop, Clock } from 'lucide-react';
import { Container } from '@/components/common/Container';

/**
 * Training Hero Component:
 * Header with delivery accreditation card and 4 feature pills.
 */
export const TrainingHero: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 border-b border-slate-200/80 bg-gradient-to-b from-slate-50/70 via-white to-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-8 sm:mb-10">
          <div className="lg:col-span-8">
            <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
              CORPORATE UPSKILLING
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight leading-[1.12] mb-3 sm:mb-4">
              Enterprise Technical Training Programs
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
              Customized technical learning tracks designed to elevate engineering
              productivity, code quality, and architecture standards for corporate teams.
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="p-3.5 sm:p-4 rounded-none bg-sky-50 border border-sky-200/70 text-primary">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-800 flex items-center gap-1.5 mb-1">
                <Award className="w-3.5 h-3.5 text-accent" /> Accredited Delivery
                Framework
              </span>
              <p className="text-xs text-slate-600 leading-snug">
                Partnered with industry-benchmarked Mikado Solutions corporate curriculum
                (MS-IT).
              </p>
            </div>
          </div>
        </div>

        {/* 4 Feature Pills Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2">
          <div className="p-3 sm:p-4 rounded-none bg-white border border-slate-200 shadow-2xs">
            <h3 className="font-heading font-bold text-xs sm:text-sm text-primary flex items-center gap-2">
              <Building2 className="w-4 h-4 text-accent shrink-0" /> On-site MMR / Live
            </h3>
            <p className="text-[11px] text-slate-500 mt-1 leading-snug">
              Lodha iThink Techno Campus or your corporate premises.
            </p>
          </div>

          <div className="p-3 sm:p-4 rounded-none bg-white border border-slate-200 shadow-2xs">
            <h3 className="font-heading font-bold text-xs sm:text-sm text-primary flex items-center gap-2">
              <Laptop className="w-4 h-4 text-accent shrink-0" /> Project-Based
            </h3>
            <p className="text-[11px] text-slate-500 mt-1 leading-snug">
              60%+ hands-on engineering in simulated production.
            </p>
          </div>

          <div className="p-3 sm:p-4 rounded-none bg-white border border-slate-200 shadow-2xs">
            <h3 className="font-heading font-bold text-xs sm:text-sm text-primary flex items-center gap-2">
              <Award className="w-4 h-4 text-accent shrink-0" /> Accredited Mentors
            </h3>
            <p className="text-[11px] text-slate-500 mt-1 leading-snug">
              Instructors with 10+ years direct enterprise delivery.
            </p>
          </div>

          <div className="p-3 sm:p-4 rounded-none bg-white border border-slate-200 shadow-2xs">
            <h3 className="font-heading font-bold text-xs sm:text-sm text-primary flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent shrink-0" /> Tech Stack Custom
            </h3>
            <p className="text-[11px] text-slate-500 mt-1 leading-snug">
              Mapped directly to your internal repositories and CI/CD.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrainingHero;
