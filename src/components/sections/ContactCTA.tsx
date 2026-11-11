import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { contactCTAData } from '@/data/partners';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { scaleInVariant } from '@/lib/motion';

/**
 * Contact CTA Section:
 * High-impact rounded lavender panel with headline and gold engagement button.
 */
export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <Container>
        <motion.div
          variants={scaleInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl bg-gradient-to-br from-lavender-200 via-lavender-100 to-lavender-200 border border-lavender-300/80 p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden shadow-card"
        >
          {/* Subtle decorative glow */}
          <div
            className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gold-200/40 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-navy-200/30 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-lavender-300 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="eyebrow text-xs font-bold text-accent">
                {contactCTAData.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h2 className="heading-display text-primary text-3xl sm:text-4xl md:text-5xl leading-tight">
              {contactCTAData.heading}
            </h2>

            {/* Subtext */}
            <p className="text-text-muted text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              {contactCTAData.subtext}
            </p>

            {/* Primary Gold CTA */}
            <div className="pt-4">
              <Button
                href={contactCTAData.buttonHref}
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5 ml-1" />}
                className="shadow-lg hover:shadow-xl px-9 py-4 text-base"
              >
                {contactCTAData.buttonText}
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
