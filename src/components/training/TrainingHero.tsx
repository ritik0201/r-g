import React from 'react';
import { Award, Building2, Laptop, GraduationCap, Sliders } from 'lucide-react';
import { Container } from '@/components/common/Container';

/**
 * Training Hero Component:
 * Header with accredited delivery framework card and 4 feature pills matching exact Figma design.
 */
export const TrainingHero: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 border-b border-slate-200/80 bg-gradient-to-b from-[#f4f7fb] via-[#f8fafc] to-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-8 sm:mb-12">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-800 border border-sky-200/80 rounded-none text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#caa264]" />
              <span>CORPORATE UPSKILLING</span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight leading-[1.12] mb-3 sm:mb-4">
              Enterprise Technical Training Programs
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
              Customized technical learning tracks designed to elevate engineering
              productivity, code quality, and architecture standards for corporate teams.
            </p>
          </div>

          {/* Accredited Delivery Framework Card matching Figma */}
          <div className="lg:col-span-4">
            <div className="p-4 sm:p-5 rounded-none bg-sky-50/80 border border-sky-100 text-primary shadow-2xs">
              <div className="flex items-center gap-2 text-primary font-bold text-xs sm:text-sm mb-1.5">
                <Award className="w-4 h-4 text-[#caa264] shrink-0" />
                <span>Accredited Delivery Framework</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Delivered in strategic alliance with certified specialized training partners across MMR.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Feature Pills Row matching Figma */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="p-4 rounded-none bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-none bg-sky-50 border border-sky-100 text-[#caa264] flex items-center justify-center shrink-0 mt-0.5">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-primary">
                On-site MMR / Live
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                Lodha iThink, Thane campus or your corporate premises.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-none bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-none bg-sky-50 border border-sky-100 text-[#caa264] flex items-center justify-center shrink-0 mt-0.5">
              <Laptop className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-primary">
                Project-Based
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                80% laboratory time on enterprise architecture patterns.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-none bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-none bg-sky-50 border border-sky-100 text-[#caa264] flex items-center justify-center shrink-0 mt-0.5">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-primary">
                Accredited Mentors
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                Instructors with 12+ years tier-1 enterprise delivery.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-none bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-none bg-sky-50 border border-sky-100 text-[#caa264] flex items-center justify-center shrink-0 mt-0.5">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-primary">
                Tech Stack Custom
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                Mapped directly to your internal repositories and CI/CD.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrainingHero;
