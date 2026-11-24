import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { fadeUpVariant } from '@/lib/motion';

/**
 * Home Hero Component:
 * Matches exact Figma image specifications:
 * - Eyebrow with gold dash: "— CONSULTING & ADVISORY • EST. 2023"
 * - Master headline: "Technology. / Talent. / Growth." (italic, gold)
 * - Description: "Aligning technology and talent with business growth. Strategic advisory and disciplined execution for expanding enterprises across Mumbai, Thane, and beyond."
 * - Dual CTAs: "Our Services →" and "Talk to Us"
 * - Metrics Card: 35+ YEARS ADVISORY LEADERSHIP | MMR THANE & MUMBAI CORE HUB | 100% END-TO-END GOVERNANCE
 * - Right: Boardroom photo with Taj skyline and bottom INSTITUTIONAL RIGOR badge
 */
export const HomeHero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-24 bg-white overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Copy, CTAs, and Metrics Card (7 cols) */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start z-10 w-full"
          >
            {/* Eyebrow with gold dash */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-5 sm:w-6 h-0.5 bg-[#caa264] rounded-full shrink-0" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#caa264] uppercase">
                CONSULTING &amp; ADVISORY • EST. 2023
              </span>
            </div>

            {/* Stacked Master Headline */}
            <h1 className="font-heading font-black tracking-tight leading-[1.08] mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] text-primary">
              Technology.
              <br />
              Talent.
              <br />
              <span className="italic font-normal text-gold-500 font-heading">
                Growth.
              </span>
            </h1>

            {/* Subhead Description */}
            <p className="text-slate-600 text-xs sm:text-sm md:text-base lg:text-[1rem] leading-relaxed max-w-lg mb-6 sm:mb-8">
              Aligning technology and talent with business growth. Strategic advisory and disciplined execution for expanding enterprises across Mumbai, Thane, and beyond.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto">
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-[#0c192c] hover:bg-navy-900 text-white font-semibold px-5 py-3 sm:px-6 sm:py-3.5 rounded-none text-xs sm:text-sm shadow-sm transition-all"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-800 font-semibold px-5 py-3 sm:px-6 sm:py-3.5 rounded-none text-xs sm:text-sm border border-slate-300 shadow-2xs transition-all"
              >
                Talk to Us
              </a>
            </div>

            {/* 3 Metrics Strip Card matching exact image */}
            <div className="grid grid-cols-3 bg-white border border-slate-200/90 shadow-sm p-4 sm:p-5 w-full max-w-xl rounded-none">
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl sm:text-3xl text-primary leading-none">
                  35+
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-1.5 leading-snug">
                  YEARS ADVISORY LEADERSHIP
                </span>
              </div>
              <div className="flex flex-col border-x border-slate-100 px-3 sm:px-4">
                <span className="font-heading font-black text-2xl sm:text-3xl text-primary leading-none">
                  MMR
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-1.5 leading-snug">
                  THANE &amp; MUMBAI CORE HUB
                </span>
              </div>
              <div className="flex flex-col pl-3 sm:pl-4">
                <span className="font-heading font-black text-2xl sm:text-3xl text-primary leading-none">
                  100%
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-1.5 leading-snug">
                  END-TO-END GOVERNANCE
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Boardroom Meeting Photo with INSTITUTIONAL RIGOR badge (5 cols) */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative w-full mt-6 lg:mt-0 flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-[460px]">
              <div className="relative rounded-none overflow-hidden shadow-2xl border border-slate-300 aspect-[4/4.8] max-h-[440px] sm:max-h-[480px] lg:max-h-[520px] bg-slate-100">
                <img
                  src="/images/hero-meeting.jpg"
                  alt="R&G Strategic Executive Consulting Meeting"
                  className="w-full h-full object-cover object-center rounded-none"
                  loading="eager"
                />

                {/* INSTITUTIONAL RIGOR Overlay Card at bottom of photo */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 p-3 sm:p-3.5 shadow-lg flex items-center gap-3 rounded-none">
                  <div className="w-9 h-9 rounded-none bg-[#0c192c] text-[#caa264] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-primary block leading-none">
                      INSTITUTIONAL RIGOR
                    </span>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-snug mt-1 truncate sm:whitespace-normal">
                      Bespoke interventions engineered for enterprise scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HomeHero;
