import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { strategicPartnersData, partnersHeading } from '@/data/partners';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { SectionHeading } from '@/components/common/SectionHeading';
import { staggerContainerVariant, fadeUpVariant } from '@/lib/motion';

/**
 * Strategic Delivery Partners Section:
 * Highlights institutional ecosystem partners (Talent Corner, Simplified IT, Mikado Solutions)
 * with dedicated monogram insignias, domain badges, and practice specializations.
 */
export const Partners: React.FC = () => {
  return (
    <section
      id="partnerships"
      className="py-20 lg:py-28 bg-[#f4f7fb]/80 border-y border-slate-200/80 relative"
    >
      <Container>
        {/* Section Header */}
        <SectionHeading
          eyebrow={partnersHeading.eyebrow}
          heading={partnersHeading.heading}
          subtitle={partnersHeading.subtitle}
        />

        {/* 3 Partner Cards Grid */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: '60px 0px 0px 0px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {strategicPartnersData.map((partner) => {
            return (
              <motion.div key={partner.id} variants={fadeUpVariant} className="h-full">
                <Card
                  variant="hover"
                  className="p-7 sm:p-8 bg-white border border-slate-200/90 rounded-2xl flex flex-col justify-between h-full shadow-xs hover:shadow-card-hover hover:border-primary/50 transition-all duration-300 group"
                >
                  <div>
                    {/* Top Row: Monogram Insignia & Category Pill */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="w-10 h-10 rounded-lg bg-sky-100/70 border border-sky-200/70 text-primary font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                        {partner.monogram}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-sky-800 bg-sky-50 border border-sky-200/60 px-2.5 py-0.5 rounded-full uppercase tracking-wider text-right">
                        {partner.badge}
                      </span>
                    </div>

                    {/* Partner Name */}
                    <h3 className="font-heading font-bold text-xl text-primary mb-3 leading-snug group-hover:text-primary-light transition-colors">
                      {partner.name}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {partner.description}
                    </p>
                  </div>

                  {/* Specialization Footer Link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-primary/80 group-hover:text-primary transition-colors">
                    <span className="text-accent text-[11px] font-mono font-bold tracking-tight">
                      {partner.specialization}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-accent shrink-0 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
