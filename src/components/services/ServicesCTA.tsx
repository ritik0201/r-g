import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { Container } from '@/components/common/Container';

/**
 * Combined Advisory Package CTA Component for Services:
 * Dark Navy card with gold button matching exact Figma design.
 */
export const ServicesCTA: React.FC = () => {
  return (
    <section className="pb-16 sm:pb-20 bg-[#f4f7fb]">
      <Container>
        <div className="bg-[#0c192c] text-white rounded-none p-8 sm:p-10 lg:p-12 border border-navy-900 shadow-md flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left: Heading and Description */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#caa264] text-xs font-mono font-bold tracking-widest uppercase mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>UNIFIED CLIENT ENGAGEMENT</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-3">
              Need a combined advisory package?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
              Contact our Thane office for a unified roadmap spanning technology, leadership
              recruitment, and team skill reinforcement. We consolidate multiple vendor
              streams into one accountable governance partner.
            </p>
          </div>

          {/* Right: Gold CTA Button */}
          <div className="shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#e5be75] hover:bg-[#d8af3a] text-slate-950 font-bold px-7 py-3.5 rounded-none text-xs sm:text-sm shadow-md transition-all w-full sm:w-auto"
            >
              Schedule Strategic Review
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesCTA;
