import React from 'react';
import { Clock } from 'lucide-react';
import { Container } from '@/components/common/Container';

/**
 * Contact Hero Component:
 * Header with gold "— GET IN TOUCH" eyebrow, serif heading,
 * and distinct "SLA ASSURANCE" badge matching exact Figma specification.
 */
export const ContactHero: React.FC = () => {
  return (
    <section className="bg-[#f4f7fb] border-b border-slate-200/80 py-12 sm:py-16 md:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-5 h-0.5 bg-[#caa264]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#caa264] uppercase">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight leading-[1.15] mb-3">
              Start a Conversation with Our Advisory Team
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl">
              Whether exploring a technology roadmap, talent acquisition mandate, or
              corporate training, we are here to assist.
            </p>
          </div>

          {/* SLA Assurance Pill Card matching Figma */}
          <div className="shrink-0 self-start lg:self-end">
            <div className="bg-white rounded-none border border-slate-200/90 shadow-2xs px-4 py-2.5 sm:px-5 sm:py-3.5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-none bg-amber-50/80 border border-amber-200/60 text-[#caa264] flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  SLA ASSURANCE
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-800">
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
