import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Award } from 'lucide-react';
import { proprietorData } from '@/data/about';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { scaleInVariant } from '@/lib/motion';

/**
 * Meet the Proprietor Section:
 * Highlights Mr. Sanjay Makhija with photographic portrait, executive pull-quote,
 * and leadership statement formatted with refined typography.
 */
export const Proprietor: React.FC = () => {
  return (
    <section
      id="founder"
      className="py-20 lg:py-24 bg-navy-50/50 relative overflow-hidden"
    >
      <Container>
        <motion.div
          variants={scaleInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 sm:p-12 lg:p-14 bg-white border border-border shadow-card relative overflow-hidden text-center flex flex-col items-center">
            {/* Ambient accent background glow */}
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gold-200/20 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-lavender-200/30 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Profile Avatar with Gold Border */}
            <div className="relative mb-6">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-accent via-gold-200 to-navy-900 shadow-md">
                <img
                  src={proprietorData.image}
                  alt={proprietorData.imageAlt}
                  className="w-full h-full rounded-full object-cover bg-white"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary text-accent flex items-center justify-center border-2 border-white shadow-sm">
                <Award className="w-4 h-4" />
              </div>
            </div>

            {/* Title & Name */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 mb-2">
              <span className="eyebrow text-[11px] text-accent font-bold tracking-wider">
                {proprietorData.eyebrow}
              </span>
            </div>
            <h2 className="heading-section text-primary text-2xl sm:text-3xl mb-1">
              {proprietorData.heading}
            </h2>
            <h3 className="font-heading font-bold text-accent text-lg sm:text-xl mb-6">
              {proprietorData.name}
            </h3>

            {/* Pull Quote */}
            <div className="max-w-2xl mx-auto my-4 p-6 sm:p-7 rounded-2xl bg-lavender-100/60 border-l-4 border-accent text-left relative shadow-xs">
              <Quote className="w-8 h-8 text-accent/30 absolute top-4 right-4 pointer-events-none" />
              <blockquote className="italic font-medium text-primary text-base sm:text-lg leading-relaxed">
                {proprietorData.quote}
              </blockquote>
            </div>

            {/* Bio Paragraph with semantic bold emphasis */}
            <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl mt-4">
              With extensive experience in both technology and talent management, Mr.
              Makhija founded R&amp;G to deliver solutions built on{' '}
              <strong className="font-semibold text-primary">
                clarity and accountability
              </strong>
              , leveraging strategic partnerships to offer comprehensive, high-quality
              services.
            </p>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};
