import React from 'react';
import { Container } from '@/components/common/Container';

const partners = [
  {
    monogram: 'TC',
    name: 'Talent Corner HR Services',
    subTag: 'HUMAN RESOURCES ALLIANCE',
    description:
      'Specialized in executive leadership searches, pan-India technical talent acquisition, and turnkey contingent staffing networks.',
  },
  {
    monogram: 'SI',
    name: 'Simplified IT Solutions',
    subTag: 'INFRASTRUCTURE & SYSTEMS PARTNER',
    description:
      'Providing high-availability network architectures, cyber resilience protocols, and enterprise cloud infrastructure setup.',
  },
  {
    monogram: 'MS',
    name: 'Mikado Solutions',
    subTag: 'TECHNICAL TRAINING PARTNER',
    description:
      'Advanced corporate upskilling programs covering modern programming runtimes, testing frameworks, and architecture excellence.',
  },
];

/**
 * Strategic Delivery Partners Section for Home:
 * Matching exact mobile screenshot cards with monogram, title, sub-tag, and description.
 */
export const HomePartners: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#edf4fb] border-t border-slate-200/80">
      <Container>
        <div className="max-w-2xl mb-6 sm:mb-10 text-left sm:text-center sm:mx-auto">
          <span className="text-xs font-mono font-bold text-sky-800 uppercase tracking-wider block mb-1.5">
            ALLIANCES &amp; CAPABILITIES
          </span>
          <h2 className="font-heading text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2">
            Strategic Delivery Partners
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
            Delivering institutional-grade capabilities through trusted, specialized industry partnerships.
          </p>
        </div>

        {/* 3 Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="p-5 sm:p-6 bg-white border border-slate-200/90 shadow-2xs rounded-none flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <span className="w-9 h-9 rounded-none bg-sky-50 border border-sky-100 text-primary font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    {partner.monogram}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-base text-primary leading-tight">
                      {partner.name}
                    </h3>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#caa264] block mt-0.5">
                      {partner.subTag}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomePartners;
