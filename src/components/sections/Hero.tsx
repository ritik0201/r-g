import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Users,
  Code2,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { heroData } from '@/data/hero';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { fadeUpVariant, scaleInVariant } from '@/lib/motion';

const coreFocusIcons = [Layers, Users, Code2, GraduationCap];

/**
 * Hero Section:
 * Structured with clean White canvas, authoritative Deep Navy typography and buttons,
 * and selective Golden accents for executive polish.
 */
export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full pt-24 pb-14 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28 overflow-hidden bg-white"
    >
      {/* Subtle fine geometric dot grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#0a2540_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Copy & CTAs (7 columns) */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start z-10 w-full"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 mb-4 sm:mb-6 shadow-2xs max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span className="eyebrow text-[10px] sm:text-[11px] text-primary font-bold tracking-wider truncate sm:overflow-visible">
                {heroData.eyebrow}
              </span>
            </div>

            {/* Headline: Confident, readable clamp scaling on mobile */}
            <h1 className="font-heading text-primary tracking-tight leading-[1.16] mb-5 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold">
              Your trusted partner in{' '}
              <span className="text-primary font-extrabold relative inline-block">
                IT &amp; HR Consultancy.
                <span
                  className="block h-1 w-20 sm:w-28 bg-accent mt-2 rounded-full"
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Description with precise semantic bolding */}
            <p className="text-slate-600 text-sm sm:text-base md:text-xl leading-relaxed max-w-2xl mb-6 sm:mb-8">
              Founded on 1 November 2023,{' '}
              <strong className="font-semibold text-primary">
                R&amp;G Consultancy Services
              </strong>{' '}
              aligns technology and talent with business growth. We provide end-to-end{' '}
              <strong className="font-semibold text-primary">IT consultancy</strong>,{' '}
              <strong className="font-semibold text-primary">HR consultancy</strong>,{' '}
              <strong className="font-semibold text-primary">software projects</strong>,
              and <strong className="font-semibold text-primary">IT training</strong> —
              combining strategic guidance with hands-on implementation.
            </p>

            {/* Call to actions: Primary is Deep Navy, Secondary is White with Navy Border */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <Button
                href={heroData.primaryCta.href}
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5 ml-1" />}
                className="w-full sm:w-auto justify-center shadow-sm py-3.5"
              >
                {heroData.primaryCta.label}
              </Button>

              <Button
                href={heroData.secondaryCta.href}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto justify-center font-medium py-3.5"
              >
                {heroData.secondaryCta.label}
              </Button>
            </div>

            {/* Micro Confidence Row */}
            <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 sm:gap-6 pt-5 sm:pt-6 border-t border-slate-200 w-full">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-primary tracking-tight">
                  {heroData.trustSignals[0].label}
                </span>
              </div>

              <div
                className="w-1.5 h-1.5 rounded-full bg-slate-300 hidden xs:block"
                aria-hidden="true"
              />

              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-primary tracking-tight">
                  {heroData.trustSignals[1].label}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean White Card with Navy Structure (5 columns) */}
          <motion.div
            variants={scaleInVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative w-full"
          >
            {/* Clean White Card with authoritative shadow and clear contrast */}
            <div className="relative rounded-2xl bg-white p-5 sm:p-7 md:p-8 shadow-[0_8px_30px_rgba(10,37,64,0.08)] border border-slate-200/90">
              {/* Card Header: Balanced on all screen sizes */}
              <div className="flex items-center justify-between pb-4 sm:pb-5 mb-4 sm:mb-5 border-b border-slate-200 gap-2">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary flex items-center justify-center text-gold-400 shadow-xs shrink-0">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading font-bold text-base sm:text-xl text-primary leading-tight truncate sm:overflow-visible">
                      Our Core Focus
                    </h3>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-medium block truncate sm:overflow-visible">
                      Core service capabilities
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-accent px-2 sm:px-2.5 py-1 rounded-full bg-gold-50 border border-gold-200 uppercase tracking-wider font-mono shrink-0">
                  04 Pillars
                </span>
              </div>

              {/* Focus Items List: Deep Navy background + Gold icon + clear legible title */}
              <div className="space-y-2.5 sm:space-y-3">
                {heroData.coreFocus.map((focus, idx) => {
                  const Icon = coreFocusIcons[idx % coreFocusIcons.length];
                  return (
                    <div
                      key={focus.title}
                      className="group flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-primary/40 hover:shadow-xs transition-all"
                    >
                      <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary text-gold-400 group-hover:bg-primary-light flex items-center justify-center shadow-xs transition-colors shrink-0">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <h4 className="font-heading font-semibold text-sm sm:text-base text-primary">
                          {focus.title}
                        </h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                    </div>
                  );
                })}
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-4 sm:mt-6 pt-3.5 sm:pt-5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  Active Engagements
                </span>
                <span className="font-semibold text-primary font-mono shrink-0">
                  Est. 2023
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
