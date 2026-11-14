import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { fadeUpVariant } from '@/lib/motion';

/**
 * About Founder & Stewardship Component:
 * Features Mr. Sanjay Makhija portrait with sharp edges, executive bio, quote block, and metric pills.
 */
export const AboutFounder: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Executive Portrait with Sharp Edges */}
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
              <div className="absolute bottom-4 left-4 right-4 bg-navy-950/90 backdrop-blur-md rounded-none p-3.5 border border-navy-800 text-white shadow-xl">
                <h3 className="font-heading font-bold text-base sm:text-lg text-white leading-tight">
                  Mr. Sanjay Makhija
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-semibold block mt-0.5">
                  FOUNDER &amp; PROPRIETOR • EST. 1ST NOVEMBER 2023
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
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
              FOUNDER &amp; PROPRIETOR LEADERSHIP
            </span>
            <h2 className="heading-section text-primary text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-snug">
              Hands-on stewardship for organizations scaling through critical technology
              thresholds.
            </h2>
            <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
              <p>
                Founded with a clear conviction: mid-market enterprises and growing
                ventures deserve senior-level strategic clarity without the bureaucratic
                overhead of traditional global consultancies. Mr. Sanjay Makhija brings
                over two decades of dual-domain leadership across enterprise technology
                architecture and human talent systems.
              </p>
              <p>
                Having architected complex software implementations and led high-volume
                technical talent acquisition across Mumbai, Thane, and the wider MMR belt,
                Mr. Makhija established R&amp;G to bridge the persistent gap between
                technology roadmaps and execution capability.
              </p>
            </div>

            {/* Quote Box */}
            <blockquote className="w-full p-4 sm:p-5 rounded-none bg-amber-50/60 border-l-4 border-accent text-primary mb-6 shadow-2xs">
              <p className="font-heading italic text-sm sm:text-base leading-relaxed mb-2.5">
                &ldquo;We do not sell abstract roadmaps; we partner with enterprise owners
                to ensure every rupee invested in architecture and people yields
                measurable commercial growth.&rdquo;
              </p>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-amber-200/50">
                <span className="font-bold font-heading text-primary">
                  Mr. Sanjay Makhija
                </span>
                <span className="text-slate-500 font-mono text-[10px] font-bold">
                  FOUNDER &amp; PROPRIETOR
                </span>
              </div>
            </blockquote>

            {/* Quick Metrics Pills */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="p-3 rounded-none bg-slate-50 border border-slate-200 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  GEOGRAPHIC CORE
                </span>
                <span className="font-heading font-bold text-xs sm:text-sm text-primary mt-0.5 block">
                  Thane • Mumbai • Navi Mumbai
                </span>
              </div>
              <div className="p-3 rounded-none bg-slate-50 border border-slate-200 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  EXECUTIVE FOCUS
                </span>
                <span className="font-heading font-bold text-xs sm:text-sm text-primary mt-0.5 block">
                  Direct Founder Involvement
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
