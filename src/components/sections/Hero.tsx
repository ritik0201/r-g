import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { heroData } from '@/data/hero';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { fadeUpVariant, scaleInVariant } from '@/lib/motion';

/**
 * Enterprise Hero Section:
 * Single viewport desktop containment with stacked serif typography (Technology. Talent. Growth.),
 * responsive CTAs, quantitative trust metrics, and the executive boardroom visual with sharp edges
 * and built-in Institutional Rigor badge matching reference specifications.
 */
export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-4.25rem)] lg:h-screen lg:max-h-[960px] flex items-center justify-center pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-16 lg:pb-4 overflow-hidden bg-white"
    >
      {/* Subtle fine geometric dot grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#0a2540_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Copy, CTAs, and Metrics (7 columns) */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start z-10 w-full"
          >
            {/* Eyebrow with gold horizontal accent bar */}
            <div className="flex items-center gap-2 mb-3 sm:mb-3.5">
              <span
                className="w-5 sm:w-6 h-0.5 bg-accent rounded-full shrink-0"
                aria-hidden="true"
              />
              <span className="eyebrow text-[10px] sm:text-xs text-accent font-bold tracking-wider font-mono uppercase">
                {heroData.eyebrow}
              </span>
            </div>

            {/* Stacked Master Headline */}
            <h1 className="font-heading font-black tracking-tight leading-[1.06] mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] xl:text-[3.65rem] text-primary">
              Technology.
              <br />
              Talent.
              <br />
              <span className="italic font-normal text-gold-500 font-heading">
                Growth.
              </span>
            </h1>

            {/* Subhead Description */}
            <p className="text-slate-600 text-xs sm:text-sm md:text-base lg:text-[0.98rem] xl:text-lg leading-relaxed max-w-lg mb-5 sm:mb-6">
              {heroData.description}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-7">
              <Button
                to={heroData.primaryCta.href}
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
                className="shadow-md py-2.5 sm:py-3 px-5 sm:px-6 text-xs sm:text-sm rounded-none"
              >
                {heroData.primaryCta.label}
              </Button>

              <Button
                to={heroData.secondaryCta.href}
                variant="secondary"
                size="md"
                className="font-medium py-2.5 sm:py-3 px-5 sm:px-6 text-xs sm:text-sm border-slate-300 rounded-none"
              >
                {heroData.secondaryCta.label}
              </Button>
            </div>

            {/* Three Quantitative Metrics Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-4 sm:pt-5 border-t border-slate-200/90 w-full max-w-lg">
              {heroData.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-heading font-black text-xl sm:text-2xl lg:text-[1.75rem] text-primary tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-medium leading-snug mt-0.5 sm:mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Executive Boardroom Photo with Sharp Edges (5 columns) */}
          <motion.div
            variants={scaleInVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative w-full mt-6 lg:mt-0 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-[420px] xl:max-w-[460px]">
              {/* Executive Meeting Visual with Sharp Edges */}
              <div className="relative rounded-none overflow-hidden shadow-2xl border border-slate-300 aspect-[4/4.8] max-h-[400px] sm:max-h-[440px] lg:max-h-[460px] xl:max-h-[490px] bg-slate-100">
                <img
                  src={heroData.image}
                  alt="R&G Strategic Executive Consulting Meeting"
                  className="w-full h-full object-cover object-center rounded-none"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
