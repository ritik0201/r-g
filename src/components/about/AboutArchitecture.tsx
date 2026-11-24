import React from 'react';
import { Compass, Laptop, Network, BarChart3, Users, Cloud, Terminal, GraduationCap } from 'lucide-react';
import { Container } from '@/components/common/Container';

/**
 * Operational Model Component for About page:
 * Dual architecture comparing "Led Directly by R&G" and "Vetted Ecosystem Partners"
 * matching exact Figma layout and copy.
 */
export const AboutArchitecture: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
            OPERATIONAL MODEL
          </span>
          <h2 className="heading-section text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
            Our Integrated Delivery Architecture
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
            A clear demarcation between high-level governance led by R&amp;G and specialized
            technical execution delivered through our vetted partner network.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Left Card: Led Directly by R&G (Navy Card) */}
          <div className="rounded-none bg-[#091b2e] text-white p-6 sm:p-8 shadow-xl flex flex-col justify-between border border-navy-900">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-none bg-white/10 text-gold-300 border border-white/15 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> PRINCIPAL PRACTICE
                </span>
                <span className="text-xs text-slate-300 font-mono font-medium">
                  Core Stewardship
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                Led Directly by R&amp;G
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                High-touch, conflict-free governance led exclusively by Mr. Sanjay
                Makhija and senior advisory principals. We sit on your side of the table.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 rounded-none bg-[#0f2742] border border-white/10 flex items-start gap-3">
                  <Compass className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white">
                      Strategic IT Advisory
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Technology roadmap creation, IT health scoring, and capex-to-growth
                      rationalization.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-none bg-[#0f2742] border border-white/10 flex items-start gap-3">
                  <Laptop className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white">
                      IT Architecture &amp; Vendor Selection
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Rigorous RFP design, contract protection benchmarks, and supplier
                      performance audits.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-none bg-[#0f2742] border border-white/10 flex items-start gap-3">
                  <Network className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white">
                      Client Program Leadership
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Independent steerco chairs, risk mitigation, and executive reporting to
                      promoters.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-none bg-[#0f2742] border border-white/10 flex items-start gap-3">
                  <BarChart3 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white">
                      Success Metrics &amp; Commercial Audits
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Verifiable ROI tracking across software adoption, headcount efficiency,
                      and uptime.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-white/10 text-xs text-slate-300 font-mono font-medium">
              Single point of client accountability
            </div>
          </div>

          {/* Right Card: Vetted Ecosystem Partners (White Card) */}
          <div className="rounded-none bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-none bg-sky-50 text-sky-800 border border-sky-200/60 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" /> EXECUTION ALLIANCE
                </span>
                <span className="text-xs text-slate-500 font-mono font-medium">
                  Scalable Delivery Pods
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-primary mb-2">
                Vetted Ecosystem Partners
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Rapid deployment of specialized implementation units mobilized through deeply
                vetted, decades-established strategic partners.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 rounded-none bg-[#edf4fb] border border-sky-100 flex items-start gap-3">
                  <Users className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-primary">
                      Executive Search &amp; IT Talent Acquisition
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      High-caliber technical leaders, software squads, and permanent executive
                      staffing.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-none bg-[#edf4fb] border border-sky-100 flex items-start gap-3">
                  <Cloud className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-primary">
                      Hybrid Cloud &amp; Infrastructure Engineering
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Disaster recovery automation, multi-cloud migration, and high-availability
                      operations.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-none bg-[#edf4fb] border border-sky-100 flex items-start gap-3">
                  <Terminal className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-primary">
                      Enterprise Software &amp; Full-Stack Build
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Modern microservices architecture, CRM/ERP integration, and secure API
                      gateways.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-none bg-[#edf4fb] border border-sky-100 flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-primary">
                      Corporate Upskilling &amp; Sandbox Labs
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Custom workforce upskilling, cloud certifications, and team performance
                      engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 text-xs text-slate-500 font-mono font-medium">
              Guaranteed by R&amp;G Governance Protocols
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutArchitecture;
