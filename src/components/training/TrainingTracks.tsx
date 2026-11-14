import React from 'react';
import { Clock, Download } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';

/**
 * 3 Corporate Engineering Tracks Component:
 * Java & Spring Boot, Python & Data Automation, Modern Fullstack Engineering.
 */
export const TrainingTracks: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-end mb-10 sm:mb-14">
          <div className="lg:col-span-7">
            <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
              FLAGSHIP CURRICULA
            </span>
            <h2 className="heading-section text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Core Corporate Engineering Tracks
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              Structured curricula engineered to compress onboarding time and build
              immediate deployment value. Cohorts are tailored to corporate engineering
              stack specifications.
            </p>
          </div>
        </div>

        {/* 3 Tracks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Track 01 */}
          <Card className="p-5 sm:p-7 bg-white border border-slate-200/90 rounded-none shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-none bg-sky-50 text-sky-800 border border-sky-200/60">
                  TRACK 01
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-accent" /> 8 to 12 Weeks
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-2.5">
                Enterprise Java &amp; Spring Boot Architecture
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Comprehensive enterprise engineering track for teams migrating legacy
                monoliths to microservices architectures with production-level resiliency.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs py-3 border-y border-slate-100 mb-5 font-medium">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">
                    Delivery Modes
                  </span>
                  <span className="text-primary font-semibold text-xs">
                    Hybrid / On-site / Remote
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">
                    Target Engineers
                  </span>
                  <span className="text-primary font-semibold text-xs">
                    Backend Devs &amp; Leads
                  </span>
                </div>
              </div>

              <h4 className="text-[10px] font-mono uppercase font-bold tracking-wider text-slate-400 mb-2.5">
                CORE LEARNING MODULES
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-accent shrink-0 mt-1.5" />
                  Java Concurrency, Garbage Collection &amp; Memory Optimization
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-accent shrink-0 mt-1.5" />
                  Spring Boot 3.x, Spring Cloud &amp; Distributed Tracing
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-accent shrink-0 mt-1.5" />
                  Microservice Security (OAuth2 / OIDC &amp; mTLS)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-accent shrink-0 mt-1.5" />
                  Resilience4j Circuit Breakers &amp; Kafka Event Streaming
                </li>
              </ul>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <a
                href="#diagnostic"
                className="w-full py-2.5 rounded-none bg-primary hover:bg-primary-light text-white font-semibold text-xs text-center block transition-colors shadow-2xs"
              >
                Inquire for Team
              </a>
              <a
                href="#diagnostic"
                className="w-full py-1.5 text-xs font-semibold text-slate-500 hover:text-primary flex items-center justify-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Syllabus (PDF)</span>
              </a>
            </div>
          </Card>

          {/* Track 02 */}
          <Card className="p-5 sm:p-7 bg-white border border-slate-200/90 rounded-none shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between h-full relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-none bg-accent text-white shadow-xs">
              HIGH DEMAND
            </span>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-none bg-amber-50 text-amber-800 border border-amber-200/60">
                  TRACK 02
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-accent" /> 6 to 10 Weeks
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-2.5">
                Python for Enterprise &amp; Data Automation
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Accelerate automated workflows, high-speed data pipelines, and internal
                tools with idiomatic, maintainable enterprise Python.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs py-3 border-y border-slate-100 mb-5 font-medium">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">
                    Delivery Modes
                  </span>
                  <span className="text-primary font-semibold text-xs">
                    Live Virtual / Cohort
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">
                    Target Engineers
                  </span>
                  <span className="text-primary font-semibold text-xs">
                    QA &amp; Data Analysts
                  </span>
                </div>
              </div>

              <h4 className="text-[10px] font-mono uppercase font-bold tracking-wider text-slate-400 mb-2.5">
                CORE LEARNING MODULES
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-accent shrink-0 mt-1.5" />
                  Asynchronous Programming with AsyncIO &amp; FastAPI
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-accent shrink-0 mt-1.5" />
                  NumPy, Pandas &amp; Polars High-Velocity Data Pipelines
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-accent shrink-0 mt-1.5" />
                  Production PyTest Unit &amp; Integration Testing Suites
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-accent shrink-0 mt-1.5" />
                  SQLAlchemy 2.0 ORM &amp; Database Migration Strategies
                </li>
              </ul>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <a
                href="#diagnostic"
                className="w-full py-2.5 rounded-none bg-primary hover:bg-primary-light text-white font-semibold text-xs text-center block transition-colors shadow-2xs"
              >
                Inquire for Team
              </a>
              <a
                href="#diagnostic"
                className="w-full py-1.5 text-xs font-semibold text-slate-500 hover:text-primary flex items-center justify-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Syllabus (PDF)</span>
              </a>
            </div>
          </Card>

          {/* Track 03 */}
          <Card className="p-5 sm:p-7 bg-white border border-slate-200/90 rounded-none shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-none bg-sky-50 text-sky-800 border border-sky-200/60">
                  TRACK 03
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-accent" /> 10 to 12 Weeks
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-2.5">
                Modern Fullstack Web Engineering
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Full lifecycle web engineering for product teams building high-conversion,
                fault-tolerant client interfaces and micro-frontends.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs py-3 border-y border-slate-100 mb-5 font-medium">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">
                    Delivery Modes
                  </span>
                  <span className="text-primary font-semibold text-xs">
                    Corporate Cohort / Hybrid
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">
                    Target Engineers
                  </span>
                  <span className="text-primary font-semibold text-xs">
                    Fullstack &amp; UI Devs
                  </span>
                </div>
              </div>

              <h4 className="text-[10px] font-mono uppercase font-bold tracking-wider text-slate-400 mb-2.5">
                CORE LEARNING MODULES
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-accent shrink-0 mt-1.5" />
                  TypeScript 5+, Schema Validation (Zod) &amp; Clean Architecture
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-accent shrink-0 mt-1.5" />
                  React 19+, Server Components &amp; State Management
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-accent shrink-0 mt-1.5" />
                  State Machine Workflows, REST / GraphQL Contracts
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-accent shrink-0 mt-1.5" />
                  Automated Testing, Lighthouse Auditing &amp; CI/CD Delivery
                </li>
              </ul>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <a
                href="#diagnostic"
                className="w-full py-2.5 rounded-none bg-primary hover:bg-primary-light text-white font-semibold text-xs text-center block transition-colors shadow-2xs"
              >
                Inquire for Team
              </a>
              <a
                href="#diagnostic"
                className="w-full py-1.5 text-xs font-semibold text-slate-500 hover:text-primary flex items-center justify-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Syllabus (PDF)</span>
              </a>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default TrainingTracks;
