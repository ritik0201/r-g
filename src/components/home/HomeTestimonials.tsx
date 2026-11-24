import React from 'react';
import { Star } from 'lucide-react';
import { Container } from '@/components/common/Container';

const testimonials = [
  {
    quote:
      'R&G provided exceptional clarity during our ERP transition, ensuring our internal engineering team was fully upskilled on time and our operations experienced zero disruption.',
    author: 'VP of Engineering',
    company: 'Logistics Enterprise • Thane',
    monogram: 'VP',
  },
  {
    quote:
      "Their pragmatic talent acquisition strategy helped us close 8 critical leadership roles within 45 days. The depth of domain vetting Sanjay's team provided saved us months.",
    author: 'Chief People Officer',
    company: 'Manufacturing Conglomerate • Mumbai',
    monogram: 'CP',
  },
];

/**
 * Client Testimonials Section for Home:
 * Matching exact mobile view with 5 gold stars, "VERIFIED ENGAGEMENT" pill,
 * italic quotation, and author monogram avatar.
 */
export const HomeTestimonials: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-slate-200/80">
      <Container>
        <div className="max-w-2xl mb-6 sm:mb-10">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-5 h-0.5 bg-[#caa264]" />
            <span className="text-xs font-mono font-bold text-[#caa264] uppercase tracking-widest">
              ENDORSEMENTS
            </span>
          </div>
          <h2 className="font-heading text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2">
            Client Testimonials
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
            Validated perspectives from operating partners and enterprise leaders.
          </p>
        </div>

        {/* 2 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="p-5 sm:p-6 bg-white border border-slate-200/90 shadow-2xs rounded-none flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars + Verified Engagement Pill */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-[#caa264]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#caa264] text-[#caa264]" />
                    ))}
                  </div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-sky-800 bg-sky-50 border border-sky-200/60 px-2 py-0.5 rounded-none">
                    VERIFIED ENGAGEMENT
                  </span>
                </div>

                <blockquote className="font-heading italic text-xs sm:text-sm text-slate-800 leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Attribution */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <span className="w-9 h-9 rounded-none bg-sky-50 text-primary font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-sky-100">
                  {item.monogram}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-sm text-primary leading-tight">
                    {item.author}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeTestimonials;
