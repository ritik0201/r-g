import React from 'react';
import { Container } from '@/components/common/Container';

/**
 * Bottom Assurance & Jurisdiction Metrics Strip:
 * 4 key operational assurances: Jurisdiction, Avg SLA, Privacy Standard, Executive Desk.
 */
export const ContactMetricsStrip: React.FC = () => {
  return (
    <section className="bg-white border-t border-slate-200 py-6 sm:py-8">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          <div>
            <span className="block text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-0.5">
              JURISDICTION
            </span>
            <p className="font-heading font-bold text-xs sm:text-sm md:text-base text-primary">
              Maharashtra &amp; Pan-India
            </p>
          </div>

          <div>
            <span className="block text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-0.5">
              AVG SLA
            </span>
            <p className="font-heading font-bold text-xs sm:text-sm md:text-base text-primary">
              &lt; 1 Business Day
            </p>
          </div>

          <div>
            <span className="block text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-0.5">
              PRIVACY STANDARD
            </span>
            <p className="font-heading font-bold text-xs sm:text-sm md:text-base text-primary">
              Strict Institutional NDA
            </p>
          </div>

          <div>
            <span className="block text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-0.5">
              EXECUTIVE DESK
            </span>
            <p className="font-heading font-bold text-xs sm:text-sm md:text-base text-primary">
              Lodha iThink, Thane (W)
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactMetricsStrip;

