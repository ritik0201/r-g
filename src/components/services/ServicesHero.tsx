import React from 'react';
import { Container } from '@/components/common/Container';

/**
 * Services Hero Component:
 * Header with jump-to-practice filter pills (horizontal scrolling on mobile).
 */
export const ServicesHero: React.FC = () => {
  const jumpLinks = [
    { label: 'Strategic IT Advisory', href: '#it-consultancy' },
    { label: 'HR & Executive Staffing', href: '#hr-staffing' },
    { label: 'Software & E-Commerce', href: '#software-projects' },
    { label: 'Corporate IT Training', href: '#corporate-training' },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#f3f7fb] via-white to-white border-b border-slate-200/80">
      <Container>
        <div className="max-w-3xl">
          <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
            OUR SPECIALIZED PRACTICE
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight leading-[1.15] mb-3 sm:mb-4">
            Strategic Services Tailored for Growth
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
            We provide end-to-end consulting, talent advisory, enterprise development, and
            corporate training to help businesses scale sustainably across dynamic
            markets.
          </p>

          {/* Jump-to-Practice Navigation Chips (Horizontal Scroll on Mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none select-none">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1 hidden sm:inline">
              JUMP TO PRACTICE:
            </span>
            {jumpLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="shrink-0 text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-none bg-white text-slate-700 hover:text-primary hover:border-primary border border-slate-200 shadow-2xs transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesHero;
