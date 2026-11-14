import React from 'react';
import { Container } from '@/components/common/Container';

/**
 * Delivery Architecture Component for About page:
 * Comparison between "Led Directly by R&G" and "Vetted Ecosystem Partners".
 */
export const AboutArchitecture: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
            INTEGRATED MODEL
          </span>
          <h2 className="heading-section text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2.5">
            Our Integrated Delivery Architecture
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
            Direct high-touch consulting from R&amp;G unified seamlessly with
            institutional execution capacity from our partner ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Left Card: Led Directly by R&G */}
          <div className="rounded-none bg-primary text-white p-6 sm:p-8 shadow-xl flex flex-col justify-between border border-navy-900">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-none bg-white/10 text-gold-300 border border-white/15">
                  PROPRIETOR-LED DIRECT
                </span>
                <span className="text-xs text-slate-300 font-mono">
                  Tier-1 Governance
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                Led Directly by R&amp;G
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                High-touch strategic advisory and governance delivered directly by
                principal consultants.
              </p>

              <div className="space-y-3">
                <div className="p-3 rounded-none bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-xs sm:text-sm text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-accent" /> Strategic
                    Technology Roadmaps
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 pl-3.5">
                    Enterprise IT architecture, legacy modernization, and technical
                    auditing.
                  </p>
                </div>

                <div className="p-3 rounded-none bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-xs sm:text-sm text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-accent" /> Vendor &amp;
                    Framework Selection
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 pl-3.5">
                    Unbiased advisory on software vendors, cloud providers, and
                    development stacks.
                  </p>
                </div>

                <div className="p-3 rounded-none bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-xs sm:text-sm text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-accent" /> Chief Program
                    Leadership
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 pl-3.5">
                    Direct executive oversight on complex multi-vendor initiatives and SLA
                    enforcement.
                  </p>
                </div>

                <div className="p-3 rounded-none bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-xs sm:text-sm text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-accent" /> Success
                    Metrics &amp; Governance Audits
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 pl-3.5">
                    Continuous commercial reviews, ROI tracking, and architectural health
                    checks.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-white/10 text-xs text-gold-300 font-mono font-semibold flex items-center justify-between">
              <span>Direct Accountability</span>
              <span>Zero Layering</span>
            </div>
          </div>

          {/* Right Card: Vetted Ecosystem Partners */}
          <div className="rounded-none bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-none bg-sky-50 text-sky-800 border border-sky-200/60">
                  PARTNER-ENABLED SCALE
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  Institutional Depth
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-primary mb-2">
                Vetted Ecosystem Partners
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Specialized domain execution delivered through vetted institutional master
                franchises and partners.
              </p>

              <div className="space-y-3">
                <div className="p-3 rounded-none bg-slate-50 border border-slate-200/80">
                  <h4 className="font-semibold text-xs sm:text-sm text-primary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-accent" /> Executive
                    Search &amp; Talent Acquisition
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 pl-3.5">
                    Powered by master franchise partnership with Talent Corner HR
                    Services.
                  </p>
                </div>

                <div className="p-3 rounded-none bg-slate-50 border border-slate-200/80">
                  <h4 className="font-semibold text-xs sm:text-sm text-primary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-accent" /> Custom
                    Enterprise &amp; Cloud Engineering
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 pl-3.5">
                    Scalable infrastructure implementations in partnership with Simplified
                    IT Solutions.
                  </p>
                </div>

                <div className="p-3 rounded-none bg-slate-50 border border-slate-200/80">
                  <h4 className="font-semibold text-xs sm:text-sm text-primary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-accent" /> Enterprise
                    E-Commerce &amp; Magento
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 pl-3.5">
                    High-volume digital commerce engineering delivered via Mikado
                    Solutions.
                  </p>
                </div>

                <div className="p-3 rounded-none bg-slate-50 border border-slate-200/80">
                  <h4 className="font-semibold text-xs sm:text-sm text-primary flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-none bg-accent" /> Corporate IT
                    Training Cohorts
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 pl-3.5">
                    Targeted workforce upskilling in Java, Python, and full-stack
                    disciplines.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 text-xs text-primary font-mono font-semibold flex items-center justify-between">
              <span>Domain Specialists</span>
              <span>Proven Track Record</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutArchitecture;
