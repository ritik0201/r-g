import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Container } from '@/components/common/Container';

/**
 * Training Principle Quote Component:
 * Quotation banner with Mikado Solutions accreditation pill matching exact Figma design.
 */
export const TrainingQuote: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <Container>
        <div className="p-6 sm:p-9 rounded-none bg-white border-l-4 border-[#caa264] border-y border-r border-slate-200 shadow-2xs max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Quote & Advisory Principle */}
          <div className="max-w-2xl">
            <span className="text-3xl font-serif text-[#caa264] leading-none block mb-2 select-none">
              &ldquo;
            </span>
            <blockquote className="font-heading italic text-base sm:text-lg md:text-xl text-slate-800 leading-relaxed mb-4">
              &ldquo;Sustainable technological modernization starts with upskilling the
              engineers who build and own your core intellectual property.&rdquo;
            </blockquote>
            <div className="flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#caa264]" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700">
                ADVISORY PRINCIPLE • TECHNICAL PRACTICE GROUP
              </span>
            </div>
          </div>

          {/* Right: Partner Accreditation Pill Card matching Figma */}
          <div className="p-5 sm:p-6 rounded-none bg-[#f0f6fc] border border-blue-100 shadow-2xs shrink-0 w-full lg:w-auto min-w-[280px]">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-900 block mb-2">
              PARTNER ACCREDITATION
            </span>
            <div className="flex items-center gap-2 text-primary font-heading font-bold text-xs sm:text-sm mb-1">
              <ShieldCheck className="w-4 h-4 text-[#caa264] shrink-0" />
              <span>Mikado Solutions Certified Delivery</span>
            </div>
            <span className="text-xs text-slate-500 pl-6 block">
              Thane West Delivery Center
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrainingQuote;
