import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { approachData } from '@/data/approach';
import { Container } from '@/components/common/Container';
import { scaleInVariant } from '@/lib/motion';

/**
 * Integrated Consulting Approach Section:
 * Full-width banner highlighting end-to-end operational lifecycle with quote badge.
 */
export const IntegratedApproach: React.FC = () => {
  return (
    <section id="how-we-work" className="py-12 md:py-16 bg-white">
      <Container>
        <motion.div
          variants={scaleInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl bg-lavender-200/80 border border-lavender-300/80 p-8 sm:p-12 md:p-14 relative overflow-hidden shadow-sm"
        >
          {/* Subtle watermarked background decoration */}
          <div
            className="absolute -right-8 -bottom-10 opacity-5 pointer-events-none text-primary"
            aria-hidden="true"
          >
            <Quote className="w-64 h-64" />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 relative z-10">
            {/* Gold Quote Badge */}
            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-navy-950 shrink-0 shadow-md">
              <Quote className="w-7 h-7 fill-navy-950" />
            </div>

            {/* Content */}
            <div className="space-y-2">
              <span className="eyebrow text-xs font-bold text-accent uppercase tracking-widest block">
                {approachData.eyebrow}
              </span>
              <p className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl text-primary leading-snug max-w-4xl">
                {approachData.quote}
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
