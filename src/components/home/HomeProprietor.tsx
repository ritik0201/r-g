import React from 'react';
import { Container } from '@/components/common/Container';

/**
 * Leadership Quote / Strategic Thesis Section for Home:
 * Matching exact mobile view in Figma:
 * - "STRATEGIC THESIS" eyebrow
 * - Full italic quotation
 * - "— SANJAY MAKHIJA, FOUNDING PARTNER" attribution
 */
export const HomeProprietor: React.FC = () => {
  return (
    <section
      id="about"
      className="py-10 sm:py-16 lg:py-20 bg-[#faf8f5] border-y border-amber-200/50 relative overflow-hidden"
    >
      <Container>
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-mono font-bold text-[#caa264] uppercase tracking-widest block mb-2 sm:mb-3">
            STRATEGIC THESIS
          </span>

          <blockquote className="font-heading italic text-lg sm:text-2xl md:text-3xl text-slate-900 leading-snug sm:leading-relaxed font-normal mb-3 sm:mb-4">
            &ldquo;Sustainable enterprise growth requires synchronization: technology without
            skilled hands stalls, and talent without architectural vision drifts.&rdquo;
          </blockquote>

          <span className="text-xs font-mono font-semibold text-slate-600 uppercase tracking-wider block">
            — SANJAY MAKHIJA, FOUNDING PARTNER
          </span>
        </div>
      </Container>
    </section>
  );
};

export default HomeProprietor;
