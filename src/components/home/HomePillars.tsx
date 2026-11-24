import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Users, Terminal, Radio } from 'lucide-react';
import { Container } from '@/components/common/Container';

const practiceList = [
  {
    icon: Building2,
    badge: 'ADVISORY',
    title: 'IT Consultancy',
    description:
      'Strategic technology roadmaps, enterprise architecture modernization, and governance–first cloud integrations tied to verifiable ROI.',
    linkText: 'Explore IT Advisory',
    href: '/services#it-consultancy',
  },
  {
    icon: Users,
    badge: 'HUMAN CAPITAL',
    title: 'HR & Staffing',
    description:
      'Executive search, high-volume lateral engineering placements, and flexible contract staffing engineered with rigorous domain assessment.',
    linkText: 'Explore HR Solutions',
    href: '/services#hr-staffing',
  },
  {
    icon: Terminal,
    badge: 'ENGINEERING',
    title: 'Software Projects',
    description:
      'Magento enterprise commerce systems, bespoke API gateway architectures, high-performance database migrations, and performance tuning.',
    linkText: 'Explore Engineering',
    href: '/services#software-projects',
  },
  {
    icon: Radio,
    badge: 'WORKFORCE',
    title: 'IT Training',
    description:
      'Curated corporate workforce development across modern Java, Python enterprise pipelines, cloud-native DevOps, and fullstack ecosystems.',
    linkText: 'Explore Training Modules',
    href: '/services#corporate-training',
  },
];

/**
 * Enterprise Practice Areas Section:
 * Matches exact mobile and desktop Figma design with clean white cards,
 * light blue icon boxes, domain badges, and explore links.
 */
export const HomePillars: React.FC = () => {
  return (
    <section
      id="services"
      className="py-12 sm:py-16 lg:py-20 bg-[#fafcfd] relative border-t border-slate-200/80"
    >
      <Container>
        {/* Section Header matching mobile screenshot */}
        <div className="mb-6 sm:mb-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-0.5 bg-[#caa264]" />
            <span className="text-xs font-mono font-bold text-[#caa264] uppercase tracking-widest">
              PRACTICE DOMAINS
            </span>
          </div>
          <h2 className="font-heading text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2">
            Core Practice Areas
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
            Holistic advisory solutions tailored for mid-market and institutional enterprises.
          </p>
        </div>

        {/* 4 Practice Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {practiceList.map((practice) => {
            const Icon = practice.icon;

            return (
              <div
                key={practice.title}
                className="p-5 sm:p-6 bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs rounded-none flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Top Row: Icon on left, Domain Tag on right */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-9 h-9 rounded-none bg-sky-50 border border-sky-100 text-sky-800 flex items-center justify-center shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-sky-800 bg-sky-50 border border-sky-200/60 px-2 py-0.5 rounded-none uppercase tracking-wider">
                      {practice.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-primary mb-2 leading-tight">
                    {practice.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {practice.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    to={practice.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-[#caa264] transition-colors"
                  >
                    <span>{practice.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default HomePillars;
