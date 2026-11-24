import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Layers } from 'lucide-react';
import { Container } from '@/components/common/Container';

/**
 * About CTA Component:
 * Engage R&G Advisory consultation prompt matching exact Figma design:
 * - "❖ EXECUTIVE CONSULTATION" gold eyebrow
 * - "Engage R&G Advisory" heading
 * - Exact narrative copy
 * - "Schedule with Sanjay Makhija 📅" gold button
 * - "Review Practice Areas →" deep navy button
 */
export const AboutCTA: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#0e1e38] text-white border-t border-navy-950 relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left: Heading and Narrative */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2.5">
              <Layers className="w-3.5 h-3.5 text-[#caa264]" />
              <span className="text-xs font-mono font-bold text-[#caa264] uppercase tracking-widest">
                EXECUTIVE CONSULTATION
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-3">
              Engage R&amp;G Advisory
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
              Schedule an introduction directly with Mr. Sanjay Makhija to examine your enterprise
              roadmap, vendor posture, or tech leadership requisitions.
            </p>
          </div>

          {/* Right: Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#d8af3a] hover:bg-[#c59c25] text-navy-950 font-bold px-6 py-3.5 rounded-none text-xs sm:text-sm transition-all shadow-md active:scale-[0.99]"
            >
              <span>Schedule with Sanjay Makhija</span>
              <Calendar className="w-4 h-4 ml-0.5" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-[#0a1526] hover:bg-[#11233f] text-white border border-slate-700 hover:border-slate-500 font-semibold px-6 py-3.5 rounded-none text-xs sm:text-sm transition-all"
            >
              <span>Review Practice Areas</span>
              <ArrowRight className="w-4 h-4 ml-0.5 text-slate-300" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutCTA;
