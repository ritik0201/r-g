import React from 'react';
import { motion } from 'framer-motion';
import { proprietorData } from '@/data/about';
import { Container } from '@/components/common/Container';
import { fadeUpVariant } from '@/lib/motion';

/**
 * Meet the Proprietor Section:
 * Features a direct executive photograph without card containers, borders, or plaques,
 * paired seamlessly with the editorial narrative and leadership quote.
 */
export const Proprietor: React.FC = () => {
  return (
    <section
      id="founder"
      className="py-14 sm:py-20 lg:py-28 bg-slate-50/70 border-y border-slate-200/80 relative"
    >
      <Container>
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: '60px 0px 0px 0px' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center"
          >
            {/* Left Column: Direct Authentic Photograph (No card wrapper) */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start w-full">
              <img
                src={proprietorData.image}
                alt={proprietorData.imageAlt}
                className="w-full max-w-[260px] xs:max-w-[280px] sm:max-w-sm h-72 xs:h-80 sm:h-96 rounded-2xl object-cover object-top shadow-md mx-auto lg:mx-0"
                loading="lazy"
              />
              <div className="mt-4 text-center lg:text-left w-full">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-primary leading-tight">
                  {proprietorData.name}
                </h3>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider font-mono mt-1">
                  Founder &amp; Proprietor
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  R&amp;G Consultancy Services
                </p>
              </div>
            </div>

            {/* Right Column: Leadership Narrative & Editorial Pull-Quote */}
            <div className="lg:col-span-7 flex flex-col items-start text-left w-full">
              <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 sm:mb-2.5 block">
                LEADERSHIP SPOTLIGHT
              </span>

              <h2 className="heading-section text-primary text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
                Meet the Proprietor
              </h2>

              {/* Distinguished Pull Quote with Gold Accent Bar */}
              <blockquote className="font-heading italic text-lg sm:text-xl md:text-2xl text-primary leading-relaxed border-l-4 border-accent pl-4 sm:pl-5 my-4 sm:my-6 py-1">
                {proprietorData.quote}
              </blockquote>

              {/* Executive Bio */}
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                With extensive experience in both technology and talent management,{' '}
                <strong className="font-semibold text-primary">Mr. Makhija</strong>{' '}
                founded R&amp;G to deliver solutions built on{' '}
                <strong className="font-semibold text-primary">
                  clarity and accountability
                </strong>
                , leveraging strategic partnerships to offer comprehensive, high-quality
                services.
              </p>

              {/* Core Commitments Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full pt-5 sm:pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  Outcome-Driven Delivery
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  Senior Hands-On Consulting
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  Cross-Sector IT &amp; HR Synergy
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  Long-Term Strategic Partnerships
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
