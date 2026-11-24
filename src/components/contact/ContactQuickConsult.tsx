import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/site';

/**
 * Immediate Executive Priority Consultation Card:
 * Deep Navy card with Book Direct Call action matching exact Figma design.
 */
export const ContactQuickConsult: React.FC = () => {
  return (
    <div className="bg-[#0e1e38] text-white rounded-none p-6 sm:p-7 shadow-md border border-navy-900">
      <div className="flex items-center gap-1.5 text-[#caa264] text-[11px] font-mono font-bold tracking-widest uppercase mb-2">
        <Zap className="w-3.5 h-3.5" />
        <span>EXECUTIVE PRIORITY</span>
      </div>

      <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-2">
        Prefer an immediate consultation?
      </h3>
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
        Book a direct 30-minute discovery call with Mr. Sanjay Makhija, Principal Partner,
        to evaluate organizational compatibility and engagement framework.
      </p>

      <a
        href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
        className="w-full bg-white hover:bg-slate-100 text-slate-950 font-heading font-bold text-xs sm:text-sm px-4 py-3 rounded-none flex items-center justify-between shadow-2xs transition-all group"
      >
        <span>Book Direct Call</span>
        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default ContactQuickConsult;
