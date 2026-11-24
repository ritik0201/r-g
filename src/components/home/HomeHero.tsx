import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { fadeUpVariant } from '@/lib/motion';

/**
 * Home Hero Component:
 * Matching exact mobile screenshot flow (Eyebrow -> Heading -> Description -> Side-by-Side CTAs -> Image -> 3 Metrics)
 * while preserving full desktop 2-column single-screen composition.
 */
export const HomeHero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-24 bg-white overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column (Desktop) / Top Flow (Mobile) */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start z-10 w-full"
          >
            {/* Eyebrow Pill matching exact mobile screenshot */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 text-sky-900 border border-sky-200/80 rounded-none text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#caa264]" />
              <span>CONSULTING &amp; ADVISORY • EST. 2023</span>
            </div>

            {/* Headline matching exact mobile breakpoint */}
            <h1 className="font-heading font-black tracking-tight leading-[1.08] mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary">
              Technology. Talent.
              <br />
              <span className="italic font-normal text-gold-500 font-heading">
                Growth.
              </span>
            </h1>

            {/* Description matching exact text */}
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mb-4 sm:mb-6">
              Aligning technology and talent with business growth. Strategic advisory and disciplined
              execution for expanding enterprises across Mumbai and beyond.
            </p>

            {/* Dual CTAs side-by-side on mobile and desktop */}
            <div className="grid grid-cols-2 gap-3 w-full sm:w-auto sm:flex sm:flex-row items-center mb-6 lg:mb-8">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-1.5 bg-[#0c192c] hover:bg-navy-900 text-white font-semibold px-4 py-3 sm:px-6 rounded-none text-xs sm:text-sm transition-all shadow-sm text-center"
              >
                <span>Our Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-800 font-semibold px-4 py-3 sm:px-6 rounded-none text-xs sm:text-sm border border-slate-200 transition-all text-center"
              >
                Talk to Us
              </a>
            </div>

            {/* Desktop Metrics Strip (hidden on mobile, shown on lg screens) */}
            <div className="hidden lg:grid grid-cols-3 bg-white border border-slate-200/90 shadow-2xs mt-4 w-full max-w-lg">
              <div className="p-4 sm:p-5 flex flex-col justify-center">
                <span className="font-heading font-black text-2xl sm:text-3xl text-primary leading-none">
                  35+
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-1.5">
                  Years Leadership
                </span>
              </div>
              <div className="p-4 sm:p-5 flex flex-col justify-center bg-sky-50/70 border-x border-slate-100 text-center">
                <span className="font-heading font-black text-2xl sm:text-3xl text-primary leading-none">
                  Thane
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-1.5">
                  &amp; Mumbai Hub
                </span>
              </div>
              <div className="p-4 sm:p-5 flex flex-col justify-center text-right sm:text-left">
                <span className="font-heading font-black text-2xl sm:text-3xl text-primary leading-none">
                  100%
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-1.5">
                  End-to-End
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Image with Overlay Badge & Mobile Metrics Strip */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col items-center w-full"
          >
            {/* Boardroom Meeting Photography */}
            <div className="relative rounded-none overflow-hidden shadow-xl border border-slate-300 w-full aspect-[16/10] sm:aspect-[4/3] bg-slate-100">
              <img
                src="/images/hero-meeting.jpg"
                alt="R&G Strategic Advisory Boardroom Meeting"
                className="w-full h-full object-cover rounded-none"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Direct Leadership Engagement Overlay Badge */}
              <div className="absolute bottom-0 inset-x-0 bg-[#0c192c]/95 backdrop-blur-xs p-2.5 sm:p-3 border-t border-navy-800 text-white flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#caa264] shrink-0" />
                <span className="text-[11px] font-medium text-slate-200 truncate">
                  Direct leadership engagement by Sanjay Makhija
                </span>
              </div>
            </div>

            {/* Mobile Metrics Strip directly underneath image matching mobile screenshot */}
            <div className="grid lg:hidden grid-cols-3 bg-white border border-slate-200/90 shadow-xs mt-3.5 w-full">
              <div className="p-3 sm:p-4 flex flex-col justify-center text-center">
                <span className="font-heading font-black text-xl sm:text-2xl text-primary leading-none">
                  35+
                </span>
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-1">
                  Years Leadership
                </span>
              </div>
              <div className="p-3 sm:p-4 flex flex-col justify-center bg-sky-50/70 border-x border-slate-100 text-center">
                <span className="font-heading font-black text-lg sm:text-xl text-primary leading-none">
                  Thane
                </span>
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-1">
                  &amp; Mumbai Hub
                </span>
              </div>
              <div className="p-3 sm:p-4 flex flex-col justify-center text-center">
                <span className="font-heading font-black text-xl sm:text-2xl text-primary leading-none">
                  100%
                </span>
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-1">
                  End-to-End
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HomeHero;
