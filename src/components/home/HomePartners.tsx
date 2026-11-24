import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/common/Container';

const strategicPartners = [
  {
    monogram: 'TC',
    badge: 'HUMAN RESOURCES & STAFFING',
    name: 'Talent Corner HR Services',
    description:
      "India's premier executive search franchise with an extensive national database, offering specialized executive headhunting and technical recruiting frameworks.",
    specialization: 'Specialization: C-Suite & Tech Staffing',
  },
  {
    monogram: 'SI',
    badge: 'INFRASTRUCTURE & CLOUD',
    name: 'Simplified IT Solutions',
    description:
      'Comprehensive cloud architecture consultants providing certified AWS/Azure deployments, hybrid network topologies, and 24/7 managed infrastructure.',
    specialization: 'Specialization: Hybrid Cloud Systems',
  },
  {
    monogram: 'MS',
    badge: 'ENTERPRISE TRAINING',
    name: 'Mikado Solutions',
    description:
      'Industry-aligned technical education and upskilling programs focusing on enterprise DevOps, full-stack frameworks, and automated quality engineering.',
    specialization: 'Specialization: Deep Tech Upskilling',
  },
];

/**
 * Strategic Delivery Partners Section for Home:
 * Matches exact Figma image (media_1795542254353_a5df53e1.png & media_1795542254356_04a404eb.png):
 * - Eyebrow: "INSTITUTIONAL ECOSYSTEM"
 * - Heading: "Strategic Delivery Partners"
 * - Subtitle: "We bring our clients privileged access to specialized domain-leading organizations, delivering seamless execution across every layer of the enterprise."
 * - 3 partner cards with monogram, badge, title, description, and specialization with checkmark.
 */
export const HomePartners: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#edf4fb] border-t border-slate-200/80">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-center mx-auto">
          <span className="text-xs font-mono font-bold text-[#caa264] uppercase tracking-widest block mb-2">
            INSTITUTIONAL ECOSYSTEM
          </span>
          <h2 className="font-heading text-primary text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight mb-3">
            Strategic Delivery Partners
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
            We bring our clients privileged access to specialized domain-leading organizations, delivering seamless execution across every layer of the enterprise.
          </p>
        </div>

        {/* 3 Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {strategicPartners.map((partner) => (
            <div
              key={partner.name}
              className="p-6 sm:p-7 bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm rounded-none flex flex-col justify-between transition-all"
            >
              <div>
                {/* Monogram Box in Soft Blue */}
                <div className="w-10 h-10 rounded-none bg-[#f0f6fe] border border-sky-100 text-primary font-mono font-bold text-xs flex items-center justify-center mb-4">
                  {partner.monogram}
                </div>

                {/* Badge */}
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  {partner.badge}
                </span>

                {/* Name */}
                <h3 className="font-heading font-bold text-lg text-primary mb-2.5 leading-tight">
                  {partner.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {partner.description}
                </p>
              </div>

              {/* Specialization Footer with Checkmark */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{partner.specialization}</span>
                <CheckCircle2 className="w-4 h-4 text-[#caa264] shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomePartners;
