import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { leadershipQuoteData } from '@/data/about';
import { Container } from '@/components/common/Container';
import { fadeUpVariant } from '@/lib/motion';

/**
 * Leadership Quote Section for Home:
 * Refined periwinkle/ice-blue container with gold quote icon and executive attribution.
 */
export const HomeProprietor: React.FC = () => {
  return (
    <section
      id="about"
      className="py-14 sm:py-20 lg:py-24 bg-[#e8f1fc] border-y border-sky-100/80 relative overflow-hidden"
    >
      <Container>
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          {/* Quote Icon */}
          <div className="w-10 h-10 rounded-none bg-white/90 border border-sky-200/80 text-accent flex items-center justify-center mb-5 shadow-2xs">
            <Quote className="w-4 h-4 fill-current rotate-180" />
          </div>

          {/* Master Leadership Quote */}
          <blockquote className="font-heading italic text-lg sm:text-2xl md:text-[2rem] lg:text-[2.2rem] text-primary leading-snug sm:leading-relaxed font-medium px-2">
            &ldquo;{leadershipQuoteData.quote}&rdquo;
          </blockquote>

          {/* Attribution */}
          <div className="mt-6 sm:mt-7">
            <h3 className="font-heading font-bold text-base sm:text-lg text-primary tracking-tight">
              {leadershipQuoteData.author}
            </h3>
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-widest mt-1 block">
              {leadershipQuoteData.role}
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HomeProprietor;

