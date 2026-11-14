import React from 'react';
import { Container } from '@/components/common/Container';

/**
 * About Hero Component:
 * Clean headline, mission subhead, and institutional badges.
 */
export const AboutHero: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 border-b border-slate-200/80 bg-gradient-to-b from-slate-50/70 via-white to-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2.5 block">
              ABOUT THE FIRM
            </span>
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight leading-[1.12] mb-4">
              Institutional Wisdom,
              <br />
              Boutique Dedication.
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              Aligning technology and talent with business growth. Strategic advisory and
              disciplined execution for expanding enterprises across Mumbai, Thane, and
              beyond.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap lg:flex-col lg:items-end gap-2.5">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-none bg-sky-50 text-sky-800 border border-sky-200/70 shadow-2xs">
              PROPRIETOR-LED FIRM
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-none bg-slate-100 text-primary border border-slate-200 shadow-2xs">
              ESTABLISHED 1 NOVEMBER 2023
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
