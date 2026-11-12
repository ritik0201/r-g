import React from 'react';
import { motion } from 'framer-motion';
import { partnersData, partnersHeading } from '@/data/partners';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { SectionHeading } from '@/components/common/SectionHeading';
import { staggerContainerVariant, fadeUpVariant } from '@/lib/motion';

/**
 * Trusted Partnerships Section:
 * Highlights key institutional partners: Simplified IT Solutions,
 * Talent Corner HR Services, Mikado Solutions, and Your Enterprise.
 */
export const Partners: React.FC = () => {
  return (
    <section id="partnerships" className="py-20 lg:py-24 bg-white relative">
      <Container>
        {/* Section Header */}
        <SectionHeading
          eyebrow={partnersHeading.eyebrow}
          heading={partnersHeading.heading}
          subtitle={partnersHeading.subtitle}
        />

        {/* 4 Partner Cards Grid */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {partnersData.map((partner) => {
            return (
              <motion.div key={partner.id} variants={fadeUpVariant} className="h-full">
                <Card
                  variant="hover"
                  className="p-7 text-center bg-navy-50/40 border border-border rounded-2xl flex flex-col items-center justify-between h-full group hover:bg-white hover:border-accent hover:shadow-card-hover transition-all"
                >
                  <div className="flex flex-col items-center w-full">
                    {/* Partner Logo Box */}
                    <div className="w-full h-20 bg-white rounded-xl border border-border/80 shadow-xs flex items-center justify-center p-3 mb-5 group-hover:border-accent/40 transition-colors">
                      <img
                        src={partner.logoUrl}
                        alt={`${partner.name} logo`}
                        className="max-h-12 max-w-[85%] object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                    </div>

                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2 font-mono">
                      {partner.role}
                    </span>

                    <h3 className="font-heading font-bold text-lg text-primary mb-2 leading-snug">
                      {partner.name}
                    </h3>

                    {partner.description && (
                      <p className="text-text-muted text-xs leading-relaxed max-w-xs mt-1">
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
