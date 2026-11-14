import React from 'react';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { strategicPartnersHeading, strategicPartnersData } from '@/data/partners';

/**
 * About Strategic Partners Component:
 * Clean overview of Talent Corner, Simplified IT, and Mikado Solutions.
 */
export const AboutPartners: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#f8fafc]/80 border-t border-slate-200/80">
      <Container>
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
            ECOSYSTEM ALLIANCES
          </span>
          <h2 className="heading-section text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2.5">
            {strategicPartnersHeading.heading}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
            {strategicPartnersHeading.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {strategicPartnersData.map((partner) => (
            <Card
              key={partner.id}
              className="p-5 sm:p-7 bg-white border border-slate-200/90 rounded-none shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
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
                <h3 className="font-heading font-bold text-lg text-primary mb-2">
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
        </div>
      </Container>
    </section>
  );
};

export default AboutPartners;
