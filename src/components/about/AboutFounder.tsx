import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { fadeUpVariant } from '@/lib/motion';

/**
 * About Founder & Stewardship Component:
 * Features Mr. Sanjay Makhija portrait with experience badge, executive bio,
 * quote block, and metric pills matching exact Figma specification.
 */
export const AboutFounder: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Executive Portrait with Badges */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-none overflow-hidden shadow-2xl border border-slate-300 aspect-[4/5] max-w-md mx-auto bg-slate-100">
              <img
                src="/images/about-sanjay.jpg"
                alt="Mr. Sanjay Makhija - Founder of R&G Consultancy Services"
                className="w-full h-full object-cover object-top rounded-none"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Founder Nameplate */}
              <div className="absolute bottom-4 left-4 right-4 bg-navy-950/90 backdrop-blur-md rounded-none p-3.5 border border-navy-800 text-white shadow-xl">
                <span className="text-[9px] font-mono uppercase tracking-wider text-accent font-semibold block mb-0.5">
                  LEADERSHIP
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-white leading-tight">
                  Mr. Sanjay Makhija
                </h3>
                <span className="text-[11px] text-slate-300 block mt-0.5">
                  Founder &amp; Principal Consultant
                </span>
              </div>
            </div>

            {/* Experience Overlapping Badge on Bottom Right */}
            <div className="absolute -bottom-4 right-2 sm:right-6 bg-navy-900 text-white border border-navy-700 shadow-xl px-3.5 py-2 rounded-none z-10 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              <div>
                <span className="text-[9px] font-mono uppercase tracking-wider text-accent font-bold block leading-none">
                  EXPERIENCE
                </span>
                <span className="text-xs font-bold text-white leading-tight block mt-0.5">
                  25+ Years Enterprise IT
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Leadership Narrative & Quote */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="lg:col-span-7 flex flex-col items-start mt-6 lg:mt-0"
          >
            <div className="flex items-center gap-2 mb-2">
              <Landmark className="w-3.5 h-3.5 text-accent" />
              <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono">
                FOUNDER&apos;S PERSPECTIVE &amp; COUNSEL
              </span>
            </div>
            <h2 className="heading-section text-primary text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-snug">
              Hands-on stewardship for organizations scaling through critical technology
              thresholds.
            </h2>
            <div className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
              <p>
                Spearheaded by Mr. Sanjay Makhija, R&amp;G Consultancy Services brings three
                decades of executive technology leadership across Mumbai, Thane, and the
                wider pan-Indian business ecosystem. Having orchestrated digital
                transformations, Core ERP overhauls, and executive staffing programs for
                tier-1 enterprises, Mr. Makhija established R&amp;G to bridge a persistent market
                failure: the chasm between macro-level enterprise advisory and street-level
                execution reality.
              </p>
            </div>

            {/* Quote Box matching Figma */}
            <blockquote className="w-full p-4 sm:p-5 rounded-none bg-amber-50/50 border-l-4 border-accent text-primary mb-6 shadow-2xs">
              <p className="font-heading italic text-sm sm:text-base leading-relaxed mb-3">
                &ldquo;We do not sell abstract roadmaps; we partner with business owners
                to ensure every rupee invested in technology and people yields
                measurable commercial growth.&rdquo;
              </p>
              <div className="flex items-center justify-between text-xs pt-2.5 border-t border-amber-200/60 font-mono">
                <span className="font-bold text-primary uppercase text-[11px] tracking-wider">
                  MR. SANJAY MAKHIJA
                </span>
                <span className="text-slate-500 text-[11px]">
                  R&amp;G Consultancy Services
                </span>
              </div>
            </blockquote>

            {/* Two Advisory Metric Pills matching Figma */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              <div className="p-3.5 rounded-none bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block mb-0.5">
                  ADVISORY CADENCE
                </span>
                <span className="font-heading font-bold text-xs sm:text-sm text-primary block">
                  Direct Founder Oversight on Every Strategic Engagement
                </span>
              </div>
              <div className="p-3.5 rounded-none bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block mb-0.5">
                  GEOGRAPHIC REACH
                </span>
                <span className="font-heading font-bold text-xs sm:text-sm text-primary block">
                  Thane HQ • Mumbai Metros • Pan-India Distributed Pods
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutFounder;
