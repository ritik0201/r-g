import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { fadeUpVariant } from '@/lib/motion';

/**
 * CallToAction Section:
 * Full-bleed Deep Navy executive consultation banner matching the bottom of the design image.
 */
export const CallToAction: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-primary text-white border-t border-navy-900 relative overflow-hidden"
    >
      {/* Subtle geometric dot accent */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: '60px 0px 0px 0px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column: Heading & Copy (8 cols) */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-3 block">
              INITIATE ENGAGEMENT
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.65rem] text-white tracking-tight leading-[1.18] mb-4">
              Ready to Accelerate Your Enterprise Growth?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Schedule a confidential executive consultation with our principal
              consultants. We evaluate your current IT architecture and talent footprint
              to formulate actionable delivery options.
            </p>
          </div>

          {/* Right Column: Dual Buttons (4 cols) */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch gap-3.5 w-full">
            <a
              href="mailto:rngconsultancy9@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-gold-300 hover:bg-gold-400 text-navy-950 font-bold text-sm shadow-md transition-all text-center"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>

            <Button
              href="#about"
              variant="secondary"
              size="lg"
              className="w-full justify-center bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white py-3.5"
            >
              About the Firm
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
