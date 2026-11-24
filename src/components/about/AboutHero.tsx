import React from 'react';
import { Landmark, ArrowLeftRight } from 'lucide-react';
import { Container } from '@/components/common/Container';

/**
 * About Hero Component:
 * Matching exact Figma design:
 * - "ABOUT R&G" eyebrow with gold indicator
 * - "Institutional Wisdom, Boutique Dedication."
 * - Description & two distinct institutional badges
 */
export const AboutHero: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 border-b border-slate-200/80 bg-gradient-to-b from-slate-50/70 via-white to-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono">
                ABOUT R&amp;G
              </span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight leading-[1.12] mb-4">
              Institutional Wisdom,
              <br />
              Boutique Dedication.
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              Aligning technology and talent with business growth. We operate as an
              extension of enterprise leadership, delivering sovereign architectural guidance
              and premier talent solutions across India.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap lg:flex-col lg:items-end gap-2.5">
            <span className="text-[11px] sm:text-xs font-medium px-3.5 py-1.5 rounded-none bg-sky-50 text-sky-900 border border-sky-200/80 shadow-2xs flex items-center gap-1.5">
              <Landmark className="w-3.5 h-3.5 text-accent" /> Established 2023 • Thane
            </span>
            <span className="text-[11px] sm:text-xs font-medium px-3.5 py-1.5 rounded-none bg-slate-50 text-primary border border-slate-200 shadow-2xs flex items-center gap-1.5">
              <ArrowLeftRight className="w-3.5 h-3.5 text-accent" /> Mandate: Tech &amp; Talent Integration
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
