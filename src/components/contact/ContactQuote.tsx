import React from 'react';
import { ShieldCheck } from 'lucide-react';

/**
 * Advisory Committee Quote Card for Contact Page:
 * Soft light-blue box with quotation and attribution.
 */
export const ContactQuote: React.FC = () => {
  return (
    <div className="bg-[#f0f6fc] border border-blue-100/90 rounded-none p-4 sm:p-6 relative">
      <span className="text-3xl font-serif text-accent leading-none block mb-1">
        &ldquo;
      </span>
      <p className="font-heading italic text-slate-800 text-xs sm:text-sm md:text-base leading-relaxed mb-3">
        Every enterprise transformation begins with an honest diagnostic inquiry. We
        prioritize clarity over formality.
      </p>
      <div className="flex items-center justify-between text-xs pt-2.5 border-t border-blue-200/60 text-slate-500">
        <span className="font-mono font-bold tracking-wider text-[10px] sm:text-[11px] uppercase text-primary">
          — ADVISORY COMMITTEE, R&amp;G THANE
        </span>
        <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
      </div>
    </div>
  );
};

export default ContactQuote;
