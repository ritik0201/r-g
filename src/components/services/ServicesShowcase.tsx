import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { fadeUpVariant } from '@/lib/motion';

/**
 * 4 Practice Showcases Component for Services Page:
 * Practice 01 (IT Advisory), 02 (HR Staffing), 03 (Software Projects), 04 (Corporate Training).
 * All images feature sharp edges (rounded-none).
 */
export const ServicesShowcase: React.FC = () => {
  return (
    <div className="divide-y divide-slate-200/80">
      {/* Practice 01: Strategic IT Consultancy & Advisory */}
      <section
        id="it-consultancy"
        className="py-14 sm:py-20 lg:py-24 bg-white scroll-mt-24"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Image (Sharp Edges) */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-none overflow-hidden shadow-xl border border-slate-300 aspect-[4/3] bg-slate-100">
                <img
                  src="/images/service-it-consultancy.jpg"
                  alt="Strategic IT Consultancy & Architecture Review"
                  className="w-full h-full object-cover rounded-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-4 left-4 text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-none bg-navy-950/90 text-gold-300 border border-navy-800">
                  PRACTICE 01 • ARCHITECTURE &amp; AUDIT
                </span>
              </div>
            </motion.div>

            {/* Copy */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
                01 • ENTERPRISE ADVISORY
              </span>
              <h2 className="heading-section text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
                Strategic IT Consultancy &amp; Advisory
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-6">
                Aligning digital investments with institutional growth objectives. We
                audit modern systems, overhaul legacy technical debt, and ensure
                high-conviction modernization mandates that protect organizations against
                operational risk.
              </p>

              <div className="space-y-3.5 mb-6 w-full">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-primary">
                      Technology Roadmaps
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Multi-year architectural execution blueprints aligned with
                      commercial budgets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-primary">
                      Product &amp; Vendor Evaluation
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Objective assessment of enterprise software packages and third-party
                      vendor bids.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-primary">
                      Secure System Integrations
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Enterprise-grade integration architectures across ERP, CRM, and
                      bespoke platforms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Delivery Model Badge */}
              <div className="w-full p-3 rounded-none bg-slate-50 border border-slate-200 flex items-center gap-3 mb-6">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-primary uppercase text-[10px] tracking-wider block font-mono">
                    DELIVERY MODEL
                  </span>
                  <span className="text-slate-600">
                    Led directly by Senior Advisory Board with deep enterprise client
                    governance.
                  </span>
                </div>
              </div>

              <Button
                to="/contact"
                variant="primary"
                size="md"
                className="w-full sm:w-auto justify-center rounded-none shadow-sm text-xs sm:text-sm"
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
                iconPosition="right"
              >
                Request a Proposal for IT Consultancy
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Practice 02: Executive HR, Talent & Staffing */}
      <section
        id="hr-staffing"
        className="py-14 sm:py-20 lg:py-24 bg-[#f8fafc]/70 scroll-mt-24"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Copy */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1"
            >
              <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
                02 • HUMAN CAPITAL
              </span>
              <h2 className="heading-section text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
                Executive HR, Talent &amp; Staffing
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-6">
                Bridging critical capability gaps with vetted, high-retention talent. Our
                human capital advisory operates alongside technology managers to recruit
                executives, lead specialized engineering squads, and scale
                cross-functional teams.
              </p>

              <div className="space-y-3.5 mb-6 w-full">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-primary">
                      Talent Acquisition
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Rapid sourcing pipelines for niche technology, operations, and
                      leadership roles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-primary">
                      Executive Search
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Confidential executive-level placement managed by senior advisory
                      leadership.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-primary">
                      Workforce Solutions
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Flexible contract-to-hire and managed team staffing for peak demand
                      periods.
                    </p>
                  </div>
                </div>
              </div>

              {/* Delivery Model Badge */}
              <div className="w-full p-3 rounded-none bg-white border border-slate-200 flex items-center gap-3 mb-6 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-primary uppercase text-[10px] tracking-wider block font-mono">
                    DELIVERY MODEL
                  </span>
                  <span className="text-slate-600">
                    Powered in strategic partnership with Talent Corner HR Services.
                  </span>
                </div>
              </div>

              <Button
                to="/contact"
                variant="primary"
                size="md"
                className="w-full sm:w-auto justify-center rounded-none shadow-sm text-xs sm:text-sm"
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
                iconPosition="right"
              >
                Request a Proposal for HR &amp; Staffing
              </Button>
            </motion.div>

            {/* Image (Sharp Edges) */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="lg:col-span-6 relative order-1 lg:order-2"
            >
              <div className="relative rounded-none overflow-hidden shadow-xl border border-slate-300 aspect-[4/3] bg-slate-100">
                <img
                  src="/images/service-hr-staffing.jpg"
                  alt="Executive HR Staffing & Talent Acquisition"
                  className="w-full h-full object-cover rounded-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-4 left-4 text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-none bg-navy-950/90 text-gold-300 border border-navy-800">
                  PRACTICE 02 • TALENT ACQUISITION
                </span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Practice 03: Software Projects & E-Commerce Engineering */}
      <section
        id="software-projects"
        className="py-14 sm:py-20 lg:py-24 bg-white scroll-mt-24"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Image (Sharp Edges) */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-none overflow-hidden shadow-xl border border-slate-300 aspect-[4/3] bg-slate-100">
                <img
                  src="/images/service-software.jpg"
                  alt="Software Projects & E-Commerce Engineering"
                  className="w-full h-full object-cover rounded-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-4 left-4 text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-none bg-navy-950/90 text-gold-300 border border-navy-800">
                  PRACTICE 03 • SYSTEM ENGINEERING
                </span>
              </div>
            </motion.div>

            {/* Copy */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
                03 • ENGINEERING EXCELLENCE
              </span>
              <h2 className="heading-section text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
                Software Projects &amp; E-Commerce Engineering
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-6">
                Engineering robust transactional systems capable of handling
                high-throughput volumes. From enterprise ERP extensions to
                mission-critical Magento architectures, our execution blend assures
                technical agility with business continuity.
              </p>

              <div className="space-y-3.5 mb-6 w-full">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-primary">
                      Magento Enterprise Development
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Bespoke omni-channel catalog builds, payment gateways, and complex
                      ERP/CRM syncs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-primary">
                      Performance Tuning &amp; Database Optimization
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Latency reduction, memory profiling, and PostgreSQL/MySQL cluster
                      optimization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-primary">
                      API Integrations &amp; Microservices
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Clean architecture decoupling monolithic codebases into
                      fault-tolerant services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Delivery Model Badge */}
              <div className="w-full p-3 rounded-none bg-slate-50 border border-slate-200 flex items-center gap-3 mb-6">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-primary uppercase text-[10px] tracking-wider block font-mono">
                    DELIVERY MODEL
                  </span>
                  <span className="text-slate-600">
                    Executed in partnership with Mikado Solutions under strict project
                    governance.
                  </span>
                </div>
              </div>

              <Button
                to="/contact"
                variant="primary"
                size="md"
                className="w-full sm:w-auto justify-center rounded-none shadow-sm text-xs sm:text-sm"
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
                iconPosition="right"
              >
                Request a Proposal for Software Projects
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Practice 04: Corporate IT Training & Workforce Upskilling */}
      <section
        id="corporate-training"
        className="py-14 sm:py-20 lg:py-24 bg-[#f8fafc]/70 scroll-mt-24"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Copy */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1"
            >
              <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
                04 • CAPABILITY BUILDING
              </span>
              <h2 className="heading-section text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
                Corporate IT Training &amp; Workforce Upskilling
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-6">
                Transforming corporate talent pools into high-output engineering
                powerhouse units. Our custom cohorts emphasize hands-on architecture
                problem-solving rather than passive theory.
              </p>

              <div className="space-y-3.5 mb-6 w-full">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-primary">
                      Java Enterprise Track
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Spring Boot microservices, memory management, concurrent pipelines,
                      and cloud cohorts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-primary">
                      Python for Business &amp; Data Automation
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Automated ETL, workflow orchestration, data pipelines, and internal
                      tools.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-xs sm:text-sm text-primary">
                      Fullstack Engineering
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Modern React/TypeScript frontends with rigorous enterprise
                      integration standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Delivery Model Badge */}
              <div className="w-full p-3 rounded-none bg-white border border-slate-200 flex items-center gap-3 mb-6 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-primary uppercase text-[10px] tracking-wider block font-mono">
                    DELIVERY MODEL
                  </span>
                  <span className="text-slate-600">
                    Delivered in partnership with Mikado Solutions.
                  </span>
                </div>
              </div>

              <Button
                to="/training"
                variant="primary"
                size="md"
                className="w-full sm:w-auto justify-center rounded-none shadow-sm text-xs sm:text-sm"
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
                iconPosition="right"
              >
                Request a Proposal for IT Training
              </Button>
            </motion.div>

            {/* Image (Sharp Edges) */}
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="lg:col-span-6 relative order-1 lg:order-2"
            >
              <div className="relative rounded-none overflow-hidden shadow-xl border border-slate-300 aspect-[4/3] bg-slate-100">
                <img
                  src="/images/service-training.jpg"
                  alt="Corporate IT Training & Workforce Upskilling"
                  className="w-full h-full object-cover rounded-none"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-4 left-4 text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-none bg-navy-950/90 text-gold-300 border border-navy-800">
                  PRACTICE 04 • WORKFORCE READINESS
                </span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ServicesShowcase;
