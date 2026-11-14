import React from 'react';
import { motion } from 'framer-motion';
import { strategicPartnersHeading, strategicPartnersData } from '@/data/partners';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { fadeUpVariant } from '@/lib/motion';

/**
 * Strategic Delivery Partners Section for Home:
 * Showcases vetted alliance partners: Talent Corner, Simplified IT, Mikado Solutions.
 */
export const HomePartners: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#f3f7fb] border-t border-slate-200/80">
      <Container>
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
            {strategicPartnersHeading.eyebrow}
          </span>
          <h2 className="heading-section text-primary text-2xl sm:text-3xl font-bold tracking-tight mb-2.5">
            {strategicPartnersHeading.heading}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {strategicPartnersHeading.subtitle}
          </p>
        </div>

        {/* 3 Partner Cards */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
        >
          {strategicPartnersData.map((partner) => (
            <Card
              key={partner.id}
              className="p-5 sm:p-6 bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm rounded-none flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-none bg-slate-100 text-primary font-mono font-bold text-xs flex items-center justify-center border border-slate-200">
                    {partner.monogram}
                  </span>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 bg-blue-50 text-blue-800 border border-blue-200/60 rounded-none">
                    {partner.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base sm:text-lg text-primary mb-2">
                  {partner.name}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {partner.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-primary">
                  {partner.specialization}
                </span>
                <span className="text-accent text-sm">↗</span>
              </div>
            </Card>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default HomePartners;
