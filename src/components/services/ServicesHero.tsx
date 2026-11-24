import React from 'react';
import { Container } from '@/components/common/Container';

/**
 * Services Hero Component:
 * Header with "● OUR SPECIALISATIONS" badge, serif heading,
 * and numbered Jump-to-Practice navigation chips matching exact Figma design.
 */
export const ServicesHero: React.FC = () => {
  const jumpLinks = [
    { num: '01', label: 'Strategic IT Advisory', href: '#it-consultancy' },
    { num: '02', label: 'HR & Executive Staffing', href: '#hr-staffing' },
    { num: '03', label: 'Software & E-Commerce', href: '#software-projects' },
    { num: '04', label: 'Corporate IT Training', href: '#corporate-training' },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#f4f7fb] via-[#f8fafc] to-[#f4f7fb] border-b border-slate-200/80">
      <Container>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-800 border border-sky-200/80 rounded-none text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#caa264]" />
            <span>OUR SPECIALISATIONS</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight leading-[1.12] mb-3 sm:mb-4">
            Strategic Services Tailored for Growth
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
            We provide end-to-end consulting, talent advisory, enterprise development, and
            corporate training to help businesses scale sustainably across dynamic markets.
          </p>

          {/* Jump-to-Practice Navigation Chips matching Figma */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none select-none">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1 hidden sm:inline">
              JUMP TO PRACTICE:
            </span>
            {jumpLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="shrink-0 text-xs font-semibold px-3.5 py-1.5 rounded-none bg-white text-slate-800 hover:text-primary hover:border-primary border border-slate-200 shadow-2xs transition-all flex items-center gap-1.5"
              >
                <span className="text-[#caa264] font-mono font-bold">{link.num}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesHero;
