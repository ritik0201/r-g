import React from 'react';
import { motion } from 'framer-motion';
import { partnersData, partnersHeading } from '@/data/partners';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { SectionHeading } from '@/components/common/SectionHeading';
import { staggerContainerVariant, fadeUpVariant } from '@/lib/motion';

/**
 * Trusted Partnerships Section:
 * Highlights institutional partners: Simplified IT Solutions,
 * Talent Corner HR Services, Mikado Solutions, and Your Enterprise.
 */
export const Partners: React.FC = () => {
  return (
    <section
      id="partnerships"
      className="py-14 sm:py-20 lg:py-24 bg-slate-50/70 border-y border-slate-200/70 relative"
    >
      <Container>
        {/* Section Header */}
        <SectionHeading
          eyebrow={partnersHeading.eyebrow}
          heading={partnersHeading.heading}
          subtitle={partnersHeading.subtitle}
        />

        {/* 4 Partner Cards Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.02, margin: '60px 0px 0px 0px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {partnersData.map((partner) => {
            return (
              <motion.div key={partner.id} variants={fadeUpVariant} className="h-full">
                <Card
                  variant="hover"
                  className="p-5 sm:p-7 text-center bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-between h-full group hover:border-primary/50 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex flex-col items-center w-full">
                    {/* Partner Logo Box */}
                    <div className="w-full h-18 sm:h-20 bg-slate-50/60 rounded-xl border border-slate-200/70 shadow-2xs flex items-center justify-center p-2.5 sm:p-3 mb-4 sm:mb-5 group-hover:border-primary/30 transition-colors">
                      <img
                        src={partner.logoUrl}
                        alt={`${partner.name} logo`}
                        className="max-h-10 sm:max-h-12 max-w-[85%] object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                    </div>

                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1.5 sm:mb-2 font-mono">
                      {partner.role}
                    </span>

                    <h3 className="font-heading font-bold text-base sm:text-lg text-primary mb-1.5 sm:mb-2 leading-snug">
                      {partner.name}
                    </h3>

                    {partner.description && (
                      <p className="text-slate-500 text-xs leading-relaxed max-w-xs mt-1">
                        {partner.description}
                      </p>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
