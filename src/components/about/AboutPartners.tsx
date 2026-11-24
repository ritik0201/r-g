import React from 'react';
import { Globe2, Cloud, Terminal } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';

const partnerDetails = [
  {
    monogram: 'TC',
    name: 'Talent Corner',
    subname: 'HR Services Pvt. Ltd.',
    badge: '20+ Yrs',
    icon: Globe2,
    domainTitle: 'Pan-India Executive Reach',
    description:
      'Specialized technology and C-Suite executive search with deep candidate pipelines across Maharashtra and primary Indian metro corridors. High-speed, high-fit leadership staffing.',
    bullets: [
      'CTO & VP Engineering Search',
      'Dedicated Enterprise Talent Pods',
      'Fast-track Tech Lead Deployment',
    ],
    domainType: 'Human Capital & Leadership',
  },
  {
    monogram: 'SI',
    name: 'Simplified IT',
    subname: 'Solutions Enterprise',
    badge: 'Cloud Tier-1',
    icon: Cloud,
    domainTitle: 'Hybrid Cloud & Resiliency',
    description:
      'Mission-critical enterprise infrastructure architectures, automated disaster recovery frameworks, and zero-downtime database and hosting environments for scale operations.',
    bullets: [
      'Zero-Downtime Migration Ops',
      'Multi-Cloud Disaster Recovery',
      'ISO 27001 Security Hardening',
    ],
    domainType: 'Cloud & Infrastructure',
  },
  {
    monogram: 'MS',
    name: 'Mikado Solutions',
    subname: 'Technical Labs',
    badge: 'Authorized Lab',
    icon: Terminal,
    domainTitle: 'Corporate Skill Sandboxes',
    description:
      'Corporate training academies delivering certified practitioner instructors, realistic production-code sandboxes, and modern software engineering toolchain mastery.',
    bullets: [
      'Certified Cloud Architects Training',
      'Production Code Sandboxes',
      'Legacy-to-Modern Tech Stack Bridge',
    ],
    domainType: 'Corporate Skill Labs',
  },
];

/**
 * About Strategic Partners Component:
 * In-depth cards for Talent Corner, Simplified IT, and Mikado Solutions matching exact Figma layout.
 */
export const AboutPartners: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc]/80 border-t border-slate-200/80">
      <Container>
        {/* 2-Column Header matching Figma */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-end mb-10 sm:mb-14">
          <div className="lg:col-span-7">
            <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
              OUR ALLIANCE NETWORK
            </span>
            <h2 className="heading-section text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Strategic Delivery Partners
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              Pre-integrated capabilities with market-tested leaders, ensuring seamless
              execution without vendor friction.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {partnerDetails.map((partner) => {
            const Icon = partner.icon;

            return (
              <Card
                key={partner.name}
                className="p-5 sm:p-7 bg-white border border-slate-200/90 rounded-none shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between h-full"
              >
                <div>
                  {/* Header Row: Monogram, Name & Subname, Top-right Badge */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-none bg-slate-100 text-primary font-mono font-bold text-xs flex items-center justify-center border border-slate-200 shrink-0">
                        {partner.monogram}
                      </span>
                      <div>
                        <h3 className="font-heading font-bold text-base text-primary leading-tight">
                          {partner.name}
                        </h3>
                        <span className="text-[11px] text-slate-500 block leading-tight">
                          {partner.subname}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-sky-800 bg-sky-50 border border-sky-200/60 px-2 py-0.5 rounded-none shrink-0">
                      {partner.badge}
                    </span>
                  </div>

                  {/* Domain Subhead with Icon */}
                  <div className="flex items-center gap-2 mb-2 text-xs font-bold text-primary font-heading">
                    <Icon className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{partner.domainTitle}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {partner.description}
                  </p>

                  {/* 3 Bullets */}
                  <ul className="space-y-1.5 text-xs text-slate-600 mb-6">
                    {partner.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-none bg-accent shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Domain Pill */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400 font-bold tracking-wider uppercase text-[9px]">
                    ALLIANCE DOMAIN
                  </span>
                  <span className="font-semibold text-primary">
                    {partner.domainType}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AboutPartners;
