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
 * Features perfectly formatted typography, balanced line breaks,
 * highlighted strategic keywords, and the interactive "Our Core Focus" panel.
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
              <span className="eyebrow text-[11px] text-primary font-bold tracking-wider">
                {heroData.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading-display text-primary tracking-tight leading-[1.12] mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-balance">
              Your trusted partner in{' '}
              <span className="text-accent underline decoration-gold-300 decoration-wavy decoration-2 underline-offset-8">
                IT &amp; HR Consultancy.
              </span>
            </h1>

            {/* Description with precise semantic bolding */}
            <p className="text-text-muted text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
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
                className="bg-white/80 border border-border hover:border-accent hover:text-accent font-medium"
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

          {/* Right Column: Floating "Our Core Focus" Card (5 columns) */}
          <motion.div
            variants={scaleInVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative w-full"
          >
            {/* Ambient decorative back-glow */}
            <div
              className="absolute -inset-2 bg-gradient-to-r from-gold-200/30 via-lavender-200/40 to-navy-200/30 rounded-3xl blur-xl -z-10"
              aria-hidden="true"
            />

            {/* Container Box */}
            <div className="relative rounded-2xl bg-white/95 backdrop-blur-md p-6 sm:p-8 shadow-float border border-border">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy-50 flex items-center justify-center text-accent">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-primary">
                      Our Core Focus
                    </h3>
                    <span className="text-xs text-text-muted">
                      Integrated Delivery Capabilities
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-accent px-2.5 py-1 rounded-full bg-gold-50 border border-gold-200/60 uppercase tracking-wider font-mono">
                  SPECIALIZED
                </span>
              </div>

              {/* Focus Items List */}
              <div className="space-y-3.5">
                {heroData.coreFocus.map((focus, idx) => {
                  const Icon = coreFocusIcons[idx % coreFocusIcons.length];
                  return (
                    <motion.div
                      key={focus.title}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="group flex items-center justify-between p-4 rounded-xl bg-navy-50/50 hover:bg-white border border-border hover:border-accent hover:shadow-card transition-all"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-lg bg-white group-hover:bg-primary group-hover:text-accent text-primary flex items-center justify-center border border-border shadow-xs transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-sm sm:text-base text-primary group-hover:text-accent transition-colors">
                            {focus.title}
                          </h4>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-text-muted/60 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-xs text-text-muted">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Active Client Engagements
                </span>
                <span className="font-semibold text-primary">Est. 2023</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
