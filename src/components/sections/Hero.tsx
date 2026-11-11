import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, CheckCircle2, Cpu, Activity } from 'lucide-react';
import { heroData } from '@/data/hero';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { Container } from '@/components/common/Container';
import { fadeUpVariant, scaleInVariant } from '@/lib/motion';

/**
 * Hero Section:
 * Displays three-line architectural headline with gold accent,
 * dual CTAs, confidence metrics, and a floating operational dashboard preview card.
 */
export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-white to-navy-50/40"
    >
      {/* Subtle decorative background grid pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#0b1f3a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs (7 columns) */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-50 border border-navy-100 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="eyebrow text-[11px] text-primary font-bold">
                {heroData.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading-display text-primary tracking-tight leading-[1.08] mb-6">
              {heroData.headline.line1} <br />
              {heroData.headline.line2} <br />
              <span className="text-accent underline decoration-gold-200 decoration-wavy decoration-2 underline-offset-8">
                {heroData.headline.line3}
              </span>
            </h1>

            {/* Description */}
            <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              {heroData.description}
            </p>

            {/* Call to actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Button
                href={heroData.primaryCta.href}
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5 ml-1" />}
                className="shadow-md"
              >
                {heroData.primaryCta.label}
              </Button>

              <Button
                href={heroData.secondaryCta.href}
                variant="ghost"
                size="lg"
                className="bg-white/80"
              >
                {heroData.secondaryCta.label}
              </Button>
            </div>

            {/* Micro Confidence Row */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border w-full">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                <span className="text-xs md:text-sm font-bold text-primary tracking-tight">
                  {heroData.trustSignals[0].label}
                </span>
              </div>

              <div className="w-1.5 h-1.5 rounded-full bg-border" aria-hidden="true" />

              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent shrink-0" />
                <span className="text-xs md:text-sm font-bold text-primary tracking-tight">
                  {heroData.trustSignals[1].label}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating Operational Hub Graphic (5 columns) */}
          <motion.div
            variants={scaleInVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative"
          >
            {/* Ambient decorative back-glow */}
            <div
              className="absolute -inset-2 bg-gradient-to-r from-gold-200/30 via-lavender-200/40 to-navy-200/30 rounded-3xl blur-xl -z-10"
              aria-hidden="true"
            />

            {/* Container Box */}
            <div className="relative rounded-2xl bg-white/90 backdrop-blur-md p-6 sm:p-7 shadow-float border border-border space-y-5">
              {/* Card 1: Commerce Window Card */}
              <div className="bg-navy-50/50 rounded-xl p-5 border border-border shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs font-bold text-primary">
                      {heroData.preview.commerce.title}
                    </span>
                  </div>
                  <Badge variant="gold" size="sm">
                    {heroData.preview.commerce.status}
                  </Badge>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs text-text-muted block font-medium">
                      {heroData.preview.commerce.metricLabel}
                    </span>
                    <span className="font-heading font-black text-2xl md:text-3xl text-primary tracking-tight mt-0.5 block">
                      {heroData.preview.commerce.metricValue}
                    </span>
                  </div>

                  {/* Mini animated bar chart */}
                  <div
                    className="flex items-end gap-1.5 h-10 pb-1"
                    aria-label="Daily throughput volume chart"
                  >
                    {heroData.preview.commerce.chartLevels.map((lvl, idx) => (
                      <span
                        key={idx}
                        style={{ height: `${lvl}%` }}
                        className={`w-2.5 rounded-t transition-all ${
                          idx === 2
                            ? 'bg-accent shadow-sm'
                            : idx === 1
                              ? 'bg-primary'
                              : 'bg-navy-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 2: AI Middleware Engine Node */}
              <div className="bg-white rounded-xl p-5 border border-border shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    <Cpu className="w-4 h-4 text-accent" />
                    <span>{heroData.preview.aiEngine.title}</span>
                  </div>
                  <span className="text-xs font-bold text-accent px-2 py-0.5 rounded bg-gold-50 border border-gold-200">
                    {heroData.preview.aiEngine.sla}
                  </span>
                </div>

                <p className="text-xs text-text-muted leading-relaxed mb-4">
                  {heroData.preview.aiEngine.description}
                </p>

                {/* Micro Pipeline Step Badges */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  {heroData.preview.aiEngine.pipeline.map((step) => (
                    <div
                      key={step.step}
                      className="bg-navy-50/80 p-2 rounded-lg border border-border text-center"
                    >
                      <span className="text-[11px] font-bold text-primary block truncate">
                        {step.step}
                      </span>
                      <span className="text-[10px] text-text-muted font-mono mt-0.5 block">
                        {step.latency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 3: Continuous Growth Stack (Navy card) */}
              <div className="bg-primary text-white rounded-xl p-4 sm:p-5 shadow-md flex items-center justify-between border border-navy-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shrink-0">
                    <Activity className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="font-heading font-bold text-sm sm:text-base text-white block">
                      {heroData.preview.growthStack.title}
                    </span>
                    <span className="text-xs text-navy-200 block mt-0.5">
                      {heroData.preview.growthStack.subtitle}
                    </span>
                  </div>
                </div>
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 ml-2" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
