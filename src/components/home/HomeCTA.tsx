import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import { Container } from '@/components/common/Container';

/**
 * Ready to Accelerate CTA Component for Home:
 * Deep Navy card matching exact mobile screenshot with gold "Book a Consultation" button
 * and Thane response commitment subtext.
 */
export const HomeCTA: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f4f7fb]">
      <Container>
        <div className="bg-[#0c192c] text-white p-6 sm:p-10 lg:p-12 rounded-none border border-navy-900 shadow-md max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-0.5 bg-[#caa264]" />
            <span className="text-xs font-mono font-bold text-[#caa264] uppercase tracking-wider">
              EXECUTIVE CONSULTATION
            </span>
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-2.5">
            Ready to Accelerate Your Enterprise Growth?
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-2xl">
            Schedule a confidential strategic advisory consultation with Sanjay Makhija and our senior
            advisory team at our Thane office or virtually.
          </p>

          <Link
            to="/contact"
            className="w-full bg-[#e5be75] hover:bg-[#d8af3a] text-slate-950 font-bold py-3.5 px-6 rounded-none flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md transition-all cursor-pointer mb-3.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Consultation</span>
          </Link>

          <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[11px] font-mono text-slate-400 pt-1">
            <MapPin className="w-3.5 h-3.5 text-[#caa264] shrink-0" />
            <span>Thane (W), Maharashtra • Direct Response within 24h</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeCTA;
