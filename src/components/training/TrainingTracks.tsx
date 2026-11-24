import React from 'react';
import { Clock, Download } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';

const tracks = [
  {
    id: 'TRACK 01',
    badgeText: 'TRACK 01',
    isHighDemand: false,
    duration: '6 to 8 Weeks',
    title: 'Enterprise Java & Spring Boot Architecture',
    description:
      'Deep-tier architecture program engineered to migrate legacy backends into cloud-native microservices with bulletproof resiliency.',
    deliveryMode: 'Hybrid / Thane On-site',
    targetEngineers: 'Backend Devs & Integrators',
    modules: [
      'Java Concurrency, Garbage Collection & Memory Optimisation',
      'Spring Boot 3.x, Spring Cloud & Distributed Tracing',
      'Microservice Security (OAuth2 / OIDC & Zero-Trust APIs)',
      'Resilience4j Circuit Breakers & Kafka Event Streams',
    ],
  },
  {
    id: 'TRACK 02',
    badgeText: 'TRACK 02 • HIGH DEMAND',
    isHighDemand: true,
    duration: '4 to 6 Weeks',
    title: 'Python for Enterprise & Data Automation',
    description:
      'Transform repetitive departmental workloads, automated test harnesses, and big-data pipelines into scalable software systems.',
    deliveryMode: 'Live Online / On-site',
    targetEngineers: 'QA Automation & Analysts',
    modules: [
      'Async API Construction with FastAPI & Pydantic V2',
      'NumPy, Pandas & Polars High-Velocity Data Pipelines',
      'Enterprise Task Scheduling (Celery, Redis & Airflow)',
      'SQLAlchemy 2.0 ORM & Database Migration Strategies',
    ],
  },
  {
    id: 'TRACK 03',
    badgeText: 'TRACK 03',
    isHighDemand: false,
    duration: '8 to 12 Weeks',
    title: 'Modern Fullstack Web Engineering',
    description:
      'Comprehensive full-lifecycle engineering for product squads building high-concurrency client-facing digital platforms.',
    deliveryMode: 'Corporate Cohorts / Hybrid',
    targetEngineers: 'Fullstack & Frontend Squads',
    modules: [
      'TypeScript Strict-Mode & Next-Gen ECMAScript Standard',
      'React 18+ Architecture, Server Components & State Trees',
      'Node.js Microservices, NestJS & GraphQL Federation',
      'Automated Playwright E2E & Dockerized CI/CD Delivery',
    ],
  },
];

/**
 * 3 Corporate Engineering Tracks Component:
 * Enterprise Java & Spring Boot, Python for Enterprise, Modern Fullstack Web Engineering
 * matching exact Figma specifications.
 */
export const TrainingTracks: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <Container>
        {/* Header matching Figma */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-end mb-10 sm:mb-14">
          <div className="lg:col-span-7">
            <span className="eyebrow text-xs font-bold text-[#caa264] tracking-widest uppercase font-mono mb-2 block">
              FLAGSHIP CURRICULA
            </span>
            <h2 className="heading-section text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Core Corporate Engineering Tracks
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              Structured technical immersions designed for immediate deployment value.
              Cohorts are limited to corporate sponsorships to preserve rigor.
            </p>
          </div>
        </div>

        {/* 3 Tracks Grid matching Figma */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {tracks.map((track) => (
            <Card
              key={track.id}
              className="p-6 sm:p-7 bg-white border border-slate-200/90 rounded-none shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between h-full"
            >
              <div>
                {/* Top Badge & Duration */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-none border ${
                      track.isHighDemand
                        ? 'bg-sky-100/90 text-sky-900 border-sky-300 font-extrabold'
                        : 'bg-sky-50 text-sky-800 border-sky-200/60'
                    }`}
                  >
                    {track.badgeText}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> {track.duration}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-2.5 leading-snug">
                  {track.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                  {track.description}
                </p>

                {/* Delivery Mode & Target Engineers */}
                <div className="py-3 border-y border-slate-100 mb-5 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-mono text-[11px]">Delivery Mode:</span>
                    <span className="text-primary font-semibold">{track.deliveryMode}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-mono text-[11px]">Target Engineers:</span>
                    <span className="text-primary font-semibold">{track.targetEngineers}</span>
                  </div>
                </div>

                {/* Core Learning Modules */}
                <h4 className="text-[10px] font-mono uppercase font-bold tracking-wider text-slate-800 mb-3">
                  CORE LEARNING MODULES
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 mb-6">
                  {track.modules.map((mod, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#caa264] text-xs font-bold shrink-0 mt-0.5">✦</span>
                      <span>{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <a
                  href="#diagnostic"
                  className="w-full py-2.5 rounded-none bg-[#0c192c] hover:bg-navy-900 text-white font-semibold text-xs sm:text-sm text-center block transition-colors shadow-2xs"
                >
                  Enquire for Team
                </a>
                <button
                  type="button"
                  onClick={() => alert(`Downloading ${track.title} Syllabus (PDF)...`)}
                  className="w-full py-2 rounded-none bg-transparent hover:bg-slate-50 text-slate-600 hover:text-primary font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Syllabus (PDF)</span>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrainingTracks;
