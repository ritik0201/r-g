import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Radio, Users, Laptop, GraduationCap } from 'lucide-react';
import { Container } from '@/components/common/Container';

const practiceList = [
  {
    icon: Radio,
    badge: 'ADVISORY 01',
    title: 'IT Consultancy',
    description:
      'Comprehensive technology roadmapping, enterprise cloud modernization, IT audit, and organizational cyber posture optimization.',
    linkText: 'Explore Practice',
    href: '/services#it-consultancy',
  },
  {
    icon: Users,
    badge: 'ADVISORY 02',
    title: 'HR & Staffing',
    description:
      'Strategic human capital acquisition, senior executive recruitment, specialized tech talent pools, and talent lifecycle alignment.',
    linkText: 'Explore Practice',
    href: '/services#hr-staffing',
  },
  {
    icon: Laptop,
    badge: 'ADVISORY 03',
    title: 'Software Projects',
    description:
      'Full lifecycle custom software development, mission-critical application engineering, API architectures, and legacy migrations.',
    linkText: 'Explore Practice',
    href: '/services#software-projects',
  },
  {
    icon: GraduationCap,
    badge: 'ADVISORY 04',
    title: 'Corporate IT Training',
    description:
      'Customized technical upskilling curriculums, enterprise DevSecOps workshops, executive digital literacy, and team certifications.',
    linkText: 'Explore Practice',
    href: '/services#corporate-training',
  },
];

/**
 * Enterprise Practice Areas Section:
 * Matches exact Figma image (media_1795542254346_dccad8cb.png):
 * - Eyebrow: "CORE CAPABILITIES"
 * - Heading: "Enterprise Practice Areas"
 * - Subtitle on right: "Four interconnected disciplines delivering systemic capability, resilient infrastructure, and qualified human capital."
 * - 4 pale blue cards with warm peach icon container, advisory tag, and explore practice link.
 */
export const HomePillars: React.FC = () => {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-white relative border-t border-slate-200/80"
    >
      <Container>
        {/* Section Header: 2-column layout matching Figma */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 sm:mb-14">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono font-bold text-[#caa264] uppercase tracking-widest block mb-2">
              CORE CAPABILITIES
            </span>
            <h2 className="font-heading text-primary text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight leading-tight">
              Enterprise Practice Areas
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              Four interconnected disciplines delivering systemic capability, resilient infrastructure, and qualified human capital.
            </p>
          </div>
        </div>

        {/* 4 Practice Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {practiceList.map((practice) => {
            const Icon = practice.icon;

            return (
              <div
                key={practice.title}
                className="p-6 sm:p-7 bg-[#f0f6fe] border border-sky-100 shadow-2xs hover:shadow-sm rounded-none flex flex-col justify-between transition-all group"
              >
                <div>
                  {/* Warm peach icon container */}
                  <div className="w-10 h-10 rounded-none bg-[#fef6ee] border border-amber-100 text-[#b88c29] flex items-center justify-center shadow-2xs mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Advisory Tag */}
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    {practice.badge}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-2.5 leading-tight group-hover:text-primary-light transition-colors">
                    {practice.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {practice.description}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="pt-4 border-t border-sky-200/60">
                  <Link
                    to={practice.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-[#b88c29] transition-colors"
                  >
                    <span>{practice.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
