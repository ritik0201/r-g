import React from 'react';
import { Container } from '@/components/common/Container';

/**
 * Bottom Assurance & Jurisdiction Metrics Strip for Contact Page:
 * 4 operational pillars with gold mono eyebrow tags matching exact Figma design:
 * JURISDICTION, AVG SLA, PRIVACY STANDARD, EXECUTIVE DESK.
 */
export const ContactMetricsStrip: React.FC = () => {
  return (
    <section className="bg-white border-t border-slate-200/90 py-7 sm:py-9">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          <div>
            <span className="block text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#caa264] mb-1">
              JURISDICTION
            </span>
            <p className="font-heading font-bold text-xs sm:text-sm md:text-base text-slate-900">
              Maharashtra &amp; Pan-India
            </p>
          </div>

          <div>
            <span className="block text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#caa264] mb-1">
              AVG SLA
            </span>
            <p className="font-heading font-bold text-xs sm:text-sm md:text-base text-slate-900">
              &lt; 1 Business Day
            </p>
          </div>

          <div>
            <span className="block text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#caa264] mb-1">
              PRIVACY STANDARD
            </span>
            <p className="font-heading font-bold text-xs sm:text-sm md:text-base text-slate-900">
              Strict Institutional NDA
            </p>
          </div>

          <div>
            <span className="block text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#caa264] mb-1">
              EXECUTIVE DESK
            </span>
            <p className="font-heading font-bold text-xs sm:text-sm md:text-base text-slate-900">
              Lodha iThink, Thane (W)
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactMetricsStrip;
