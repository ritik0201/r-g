import React from 'react';
import { Clock } from 'lucide-react';
import { Container } from '@/components/common/Container';

/**
 * Contact Hero Component:
 * Header with SLA assurance badge.
 */
export const ContactHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#f3f7fb] via-[#f7f9fc] to-[#fbfcfe] border-b border-slate-200/80 py-12 sm:py-16 md:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-5 sm:w-6 h-0.5 bg-accent" />
              <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight leading-[1.15] mb-3">
              Start a Conversation with Our Advisory Team
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Whether exploring a technology roadmap, talent acquisition mandate, or
              corporate training, we are here to assist.
            </p>
          </div>

          {/* SLA Assurance Pill Card */}
          <div className="shrink-0 self-start lg:self-end">
            <div className="bg-white/95 backdrop-blur rounded-none border border-slate-200 shadow-2xs px-4 py-2.5 sm:px-5 sm:py-3.5 flex items-center gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-none bg-amber-50 border border-amber-200/80 text-accent flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  SLA ASSURANCE
                </span>
                <span className="text-xs sm:text-sm font-bold text-primary">
                  We usually respond within one business day.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;
