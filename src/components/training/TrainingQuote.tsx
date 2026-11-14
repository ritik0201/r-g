import React from 'react';
import { Container } from '@/components/common/Container';

/**
 * Training Principle Quote Component:
 * Quotation banner with Mikado Solutions accreditation pill.
 */
export const TrainingQuote: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 bg-white">
      <Container>
        <div className="p-6 sm:p-9 rounded-none bg-amber-50/40 border border-amber-200/60 max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center sm:text-left">
            <blockquote className="font-heading italic text-base sm:text-lg text-primary leading-relaxed mb-2">
              &ldquo;Sustainable technological modernization starts with upskilling the
              engineers who build and own your core intellectual property.&rdquo;
            </blockquote>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
              — ADVISORY PRINCIPLE • TECHNICAL PRACTICE GROUP
            </span>
          </div>
          <div className="p-3.5 sm:p-4 rounded-none bg-white border border-slate-200/80 shadow-2xs shrink-0 text-center sm:text-left w-full sm:w-auto">
            <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-0.5">
              PARTNER ACCREDITATION
            </span>
            <h3 className="font-bold text-xs sm:text-sm text-primary">
              Mikado Solutions Certified Delivery
            </h3>
            <span className="text-xs text-slate-500">Thane West Delivery Center</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrainingQuote;
