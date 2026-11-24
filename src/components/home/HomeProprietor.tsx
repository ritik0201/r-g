import React from 'react';
import { Container } from '@/components/common/Container';

/**
 * Leadership Quote / Strategic Thesis Section for Home:
 * Matches exact Figma image (media_1795542254353_a5df53e1.png):
 * - Soft ice blue background (#edf4fb)
 * - White badge with gold quotation icon (99)
 * - Full italic quotation in bold Playfair Display
 * - Mr. Sanjay Makhija attribution with horizontal rule lines
 */
export const HomeProprietor: React.FC = () => {
  return (
    <section
      id="about"
      className="py-14 sm:py-20 lg:py-24 bg-[#edf4fb] border-y border-sky-100 relative overflow-hidden"
    >
      <Container>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Quote Badge (99) */}
          <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-sky-200/80 text-[#caa264] flex items-center justify-center mb-5 font-mono font-bold text-sm select-none">
            99
          </div>

          {/* Master Leadership Quote */}
          <blockquote className="font-heading italic font-bold text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] text-primary leading-snug sm:leading-relaxed text-center px-2 mb-6 sm:mb-8">
            &ldquo;Sustainable enterprise growth requires synchronization: technology without
            skilled hands stalls, and talent without architectural vision drifts.&rdquo;
          </blockquote>

          {/* Attribution with horizontal rules */}
          <div>
            <h3 className="font-heading font-bold text-base sm:text-lg text-primary tracking-tight">
              Mr. Sanjay Makhija
            </h3>
            <div className="flex items-center justify-center gap-3 mt-1.5">
              <span className="w-8 sm:w-14 h-px bg-slate-300 hidden sm:block" />
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-widest">
                FOUNDER &amp; MANAGING DIRECTOR • R&amp;G CONSULTANCY SERVICES
              </span>
              <span className="w-8 sm:w-14 h-px bg-slate-300 hidden sm:block" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeProprietor;
