import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Users, Terminal, GraduationCap } from 'lucide-react';
import { Container } from '@/components/common/Container';

/**
 * 4 Practice Showcases Component for Services Page:
 * Practice 01 (IT Advisory), 02 (HR Staffing), 03 (Software Projects), 04 (Corporate Training)
 * matching exact Figma layout, copy, badges, delivery model boxes, and sharp edges.
 */
export const ServicesShowcase: React.FC = () => {
  return (
    <div className="py-10 sm:py-16 bg-[#f4f7fb]">
      <Container>
        {/* =========================================================================
            PRACTICE 01: Strategic IT Consultancy & Advisory
           ========================================================================= */}
        <section
          id="it-consultancy"
          className="bg-white rounded-none border border-slate-200/90 shadow-2xs p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 scroll-mt-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image (Left) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-none overflow-hidden shadow-md border border-slate-300 aspect-[4/3] bg-slate-100">
                <img
                  src="/images/service-it-consultancy.jpg"
                  alt="Strategic IT Consultancy & Architecture Review"
                  className="w-full h-full object-cover rounded-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-none bg-[#0c192c]/95 text-white border border-white/10 shadow-sm">
                  PRACTICE 01 // ARCHITECTURE &amp; CLOUD
                </span>
              </div>
            </div>

            {/* Content (Right) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-[#caa264] mb-2">
                <span>01</span>
                <span className="text-slate-400">•</span>
                <span>ENTERPRISE ADVISORY</span>
              </div>

              <h2 className="font-heading text-primary text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                Strategic IT Consultancy &amp; Advisory
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Aligning core IT investment with institutional governance. We architect
                resilient systems, audit legacy technical debt, and establish high-assurance
                modernization trajectories that insulate organizations against structural risk.
              </p>

              {/* 3 Bullets with gold diamond */}
              <div className="space-y-3.5 mb-5 w-full">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#caa264] text-xs font-bold shrink-0 mt-0.5">✦</span>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-primary">
                      Technology Roadmaps
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Multi-year architectural blueprints mapping digital readiness to revenue
                      expansion targets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#caa264] text-xs font-bold shrink-0 mt-0.5">✦</span>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-primary">
                      Product &amp; Vendor Evaluation
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Objective procurement audits, RFP development, and neutral technical
                      viability assessments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#caa264] text-xs font-bold shrink-0 mt-0.5">✦</span>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-primary">
                      Secure System Integrations
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Enterprise API orchestrations adhering to strict SOC2 and ISO compliance
                      structures.
                    </p>
                  </div>
                </div>
              </div>

              {/* Delivery Model Callout Box */}
              <div className="w-full bg-[#f0f6fc] border border-blue-100 rounded-none p-3.5 sm:p-4 flex items-start gap-3 mb-6">
                <div className="w-7 h-7 rounded-none bg-blue-100/70 text-[#0c192c] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                    DELIVERY MODEL
                  </span>
                  <p className="text-xs text-slate-700 mt-0.5 leading-snug">
                    Led directly by Senior Advisory Practice directors and principal architects.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0c192c] hover:bg-navy-900 text-white font-semibold px-5 py-3 rounded-none text-xs sm:text-sm transition-all shadow-2xs"
              >
                <span>Request a Proposal for IT Consultancy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            PRACTICE 02: Executive HR, Talent & Staffing
           ========================================================================= */}
        <section
          id="hr-staffing"
          className="bg-white rounded-none border border-slate-200/90 shadow-2xs p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 scroll-mt-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content (Left) */}
            <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-[#caa264] mb-2">
                <span>02</span>
                <span className="text-slate-400">•</span>
                <span>HUMAN CAPITAL</span>
              </div>

              <h2 className="font-heading text-primary text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                Executive HR, Talent &amp; Staffing
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Bridging senior capability gaps with vetted, tier-one leadership. Our human
                capital division delivers elite technology managers, C-suite executives, and
                specialized functional teams curated for cultural fit and institutional impact.
              </p>

              {/* 3 Bullets with gold diamond */}
              <div className="space-y-3.5 mb-5 w-full">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#caa264] text-xs font-bold shrink-0 mt-0.5">✦</span>
                  <div>
   
                    <h3 className="font-bold text-xs sm:text-sm text-primary">
                      Talent Acquisition
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Rapid scaling pipelines for high-growth tech firms requiring mid-to-senior
                      software talent.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#caa264] text-xs font-bold shrink-0 mt-0.5">✦</span>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-primary">
                      Executive Search
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Confidential boardroom and VP-level mandates managed by seasoned industry
                      specialists.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#caa264] text-xs font-bold shrink-0 mt-0.5">✦</span>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-primary">
                      Workforce Solutions
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Contractual augmentation and managed engineering pods for time-sensitive
                      milestones.
                    </p>
                  </div>
                </div>
              </div>

              {/* Delivery Model Callout Box */}
              <div className="w-full bg-[#f0f6fc] border border-blue-100 rounded-none p-3.5 sm:p-4 flex items-start gap-3 mb-6">
                <div className="w-7 h-7 rounded-none bg-blue-100/70 text-[#0c192c] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                    DELIVERY MODEL
                  </span>
                  <p className="text-xs text-slate-700 mt-0.5 leading-snug">
                    Powered in strategic partnership with{' '}
                    <strong className="font-semibold text-slate-900">
                      Talent Corner HR Services.
                    </strong>
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0c192c] hover:bg-navy-900 text-white font-semibold px-5 py-3 rounded-none text-xs sm:text-sm transition-all shadow-2xs"
              >
                <span>Request a Proposal for HR &amp; Staffing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Image (Right) */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative rounded-none overflow-hidden shadow-md border border-slate-300 aspect-[4/3] bg-slate-100">
                <img
                  src="/images/service-hr-staffing.jpg"
                  alt="Executive HR, Talent & Staffing"
                  className="w-full h-full object-cover rounded-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-none bg-[#0c192c]/95 text-white border border-white/10 shadow-sm">
                  PRACTICE 02 // TALENT ARCHITECTURE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            PRACTICE 03: Software Projects & E-Commerce Engineering
           ========================================================================= */}
        <section
          id="software-projects"
          className="bg-white rounded-none border border-slate-200/90 shadow-2xs p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 scroll-mt-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image (Left) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-none overflow-hidden shadow-md border border-slate-300 aspect-[4/3] bg-slate-100">
                <img
                  src="/images/service-software.jpg"
                  alt="Software Projects & E-Commerce Engineering"
                  className="w-full h-full object-cover rounded-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-none bg-[#0c192c]/95 text-white border border-white/10 shadow-sm">
                  PRACTICE 03 // SYSTEMS &amp; COMMERCE
                </span>
              </div>
            </div>

            {/* Content (Right) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-[#caa264] mb-2">
                <span>03</span>
                <span className="text-slate-400">•</span>
                <span>ENGINEERING EXCELLENCE</span>
              </div>

              <h2 className="font-heading text-primary text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                Software Projects &amp; E-Commerce Engineering
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Engineering robust transactional foundations capable of handling high
                throughput. From custom enterprise ERP extensions to mission-critical
                Magento implementations, our execution balances architectural purity with
                business velocity.
              </p>

              {/* 3 Bullets with gold diamond */}
              <div className="space-y-3.5 mb-5 w-full">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#caa264] text-xs font-bold shrink-0 mt-0.5">✦</span>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-primary">
                      Magento Enterprise Development
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Bespoke storefront architectures, high-load payment gateways, and
                      headless B2B platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#caa264] text-xs font-bold shrink-0 mt-0.5">✦</span>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-primary">
                      Performance Tuning &amp; Database Optimization
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Latency reduction, Redis query caching, and PostgreSQL/MySQL cluster
                      replication.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#caa264] text-xs font-bold shrink-0 mt-0.5">✦</span>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-primary">
                      API Integrations &amp; Microservices
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Decoupled system topologies enabling friction-free third-party
                      synchronization and resilience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Delivery Model Callout Box */}
              <div className="w-full bg-[#f0f6fc] border border-blue-100 rounded-none p-3.5 sm:p-4 flex items-start gap-3 mb-6">
                <div className="w-7 h-7 rounded-none bg-blue-100/70 text-[#0c192c] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                    DELIVERY MODEL
                  </span>
                  <p className="text-xs text-slate-700 mt-0.5 leading-snug">
                    Executed with certified engineering partners and direct R&amp;G project
                    governance.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0c192c] hover:bg-navy-900 text-white font-semibold px-5 py-3 rounded-none text-xs sm:text-sm transition-all shadow-2xs"
              >
                <span>Request a Proposal for Software Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            PRACTICE 04: Corporate IT Training & Workforce Upskilling
           ========================================================================= */}
        <section
          id="corporate-training"
          className="bg-white rounded-none border border-slate-200/90 shadow-2xs p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12 scroll-mt-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content (Left) */}
            <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-[#caa264] mb-2">
                <span>04</span>
                <span className="text-slate-400">•</span>
                <span>CAPABILITY BUILDING</span>
              </div>

              <h2 className="font-heading text-primary text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                Corporate IT Training &amp; Workforce Upskilling
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Transforming corporate talent pools into high-output engineering
                powerhouses. Designed for corporate cohorts, our curricula emphasize
                hands-on architectural problem-solving rather than passive theory.
              </p>

              {/* 3 Bullets with gold diamond */}
              <div className="space-y-3.5 mb-5 w-full">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#caa264] text-xs font-bold shrink-0 mt-0.5">✦</span>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-primary">
                      Java Enterprise Track
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Spring Boot microservices, memory profiling, thread management, and
                      enterprise integration patterns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#caa264] text-xs font-bold shrink-0 mt-0.5">✦</span>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-primary">
                      Python for Business &amp; Data Automation
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Scripting ETL pipelines, automating financial modeling workflows, and
                      internal tooling APIs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#caa264] text-xs font-bold shrink-0 mt-0.5">✦</span>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-primary">
                      Fullstack Engineering
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Production-ready React, Node.js, and containerized deployment standards
                      for internal product squads.
                    </p>
                  </div>
                </div>
              </div>

              {/* Delivery Model Callout Box */}
              <div className="w-full bg-[#f0f6fc] border border-blue-100 rounded-none p-3.5 sm:p-4 flex items-start gap-3 mb-6">
                <div className="w-7 h-7 rounded-none bg-blue-100/70 text-[#0c192c] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                    DELIVERY MODEL
                  </span>
                  <p className="text-xs text-slate-700 mt-0.5 leading-snug">
                    Delivered in partnership with{' '}
                    <strong className="font-semibold text-slate-900">
                      Mikado Solutions.
                    </strong>
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0c192c] hover:bg-navy-900 text-white font-semibold px-5 py-3 rounded-none text-xs sm:text-sm transition-all shadow-2xs"
              >
                <span>Request a Proposal for IT Training</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Image (Right) */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative rounded-none overflow-hidden shadow-md border border-slate-300 aspect-[4/3] bg-slate-100">
                <img
                  src="/images/service-training.jpg"
                  alt="Corporate IT Training & Workforce Upskilling"
                  className="w-full h-full object-cover rounded-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-none bg-[#0c192c]/95 text-white border border-white/10 shadow-sm">
                  PRACTICE 04 // TALENT ELEVATION
                </span>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default ServicesShowcase;
