import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Container } from '@/components/common/Container';

/**
 * Ready to Accelerate CTA Component for Home:
 * Matches exact Figma image (media_1795542254356_04a404eb.png):
 * - Deep navy section (#0a192b)
 * - Eyebrow: "INITIATE DIALOGUE"
 * - Heading: "Ready to Accelerate Your Enterprise Growth?"
 * - Description: "Schedule a confidential consultation with our principal advisors. We review your organizational IT architecture and talent pipeline with zero preliminary obligations."
 * - Dual CTAs: "Book a Consultation" (gold button with calendar) and "About The Firm" (outline button)
 */
export const HomeCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0a192b] text-white border-t border-navy-950">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 max-w-6xl mx-auto">
          {/* Left Text */}
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-[#caa264] uppercase tracking-widest block mb-2 sm:mb-3">
              INITIATE DIALOGUE
            </span>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.65rem] text-white tracking-tight leading-tight mb-3">
              Ready to Accelerate Your Enterprise Growth?
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
              Schedule a confidential consultation with our principal advisors. We review your organizational IT architecture and talent pipeline with zero preliminary obligations.
            </p>
          </div>

          {/* Right Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
            <Link
              to="/contact"
              className="bg-[#caa264] hover:bg-[#b88f50] text-[#0a192b] font-heading font-bold py-3.5 px-6 rounded-none flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md transition-all cursor-pointer text-center"
            >
              <span>Book a Consultation</span>
              <Calendar className="w-4 h-4 text-[#0a192b]" />
            </Link>

            <Link
              to="/about"
              className="bg-transparent hover:bg-white/10 text-white font-heading font-semibold py-3.5 px-6 rounded-none border border-white/20 text-xs sm:text-sm transition-all text-center"
            >
              About The Firm
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeCTA;
