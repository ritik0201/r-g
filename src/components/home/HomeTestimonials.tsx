import React from 'react';
import { Star } from 'lucide-react';
import { Container } from '@/components/common/Container';

const testimonialsList = [
  {
    quote:
      '“R&G fundamentally altered how we executed our core ERP migration. Rather than handing us an ivory-tower document, Sanjay\'s team placed the exact technical leads we needed and held weekly governance reviews. Our downtime was reduced to zero during cutover.”',
    author: 'Rajesh Varma',
    role: 'Chief Operating Officer, Varma Logistics Group (Thane)',
    avatar: '/images/avatar-rajesh.jpg',
  },
  {
    quote:
      '“Finding qualified full-stack architects with domain knowledge in manufacturing was stalling our factory automation project. Through their partnership with Talent Corner and Mikado, R&G built and upskilled a 14-person engineering wing in under eight weeks.”',
    author: 'Ananya Deshmukh',
    role: 'VP Technology, Apex Industrial Technologies (Navi Mumbai)',
    avatar: '/images/avatar-ananya.jpg',
  },
];

/**
 * Verified Client Perspectives Section for Home:
 * Matches exact Figma image (media_1795542254356_04a404eb.png):
 * - Eyebrow: "INSTITUTIONAL VALIDATION"
 * - Heading: "Verified Client Perspectives"
 * - Subtitle on right: "Direct accounts from executive directors and technology leadership across the Mumbai Metropolitan Region."
 * - 2 testimonial cards with 5 gold stars, quote, and executive avatar.
 */
export const HomeTestimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200/80">
      <Container>
        {/* Section Header: 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 sm:mb-14">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono font-bold text-[#caa264] uppercase tracking-widest block mb-2">
              INSTITUTIONAL VALIDATION
            </span>
            <h2 className="font-heading text-primary text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight leading-tight">
              Verified Client Perspectives
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              Direct accounts from executive directors and technology leadership across the Mumbai Metropolitan Region.
            </p>
          </div>
        </div>

        {/* 2 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonialsList.map((item) => (
            <div
              key={item.author}
              className="p-6 sm:p-8 bg-[#fdfefe] border border-slate-200/90 shadow-2xs hover:shadow-xs rounded-none flex flex-col justify-between"
            >
              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-[#caa264] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#caa264] text-[#caa264]" />
                  ))}
                </div>

                {/* Quotation */}
                <blockquote className="font-heading italic text-sm sm:text-base text-slate-800 leading-relaxed mb-6">
                  {item.quote}
                </blockquote>
              </div>

              {/* Author Attribution with Avatar */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-11 h-11 rounded-none object-cover border border-slate-300 shrink-0 shadow-2xs"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-primary leading-tight">
                    {item.author}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">{item.role}</p>
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
