import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';

/**
 * About CTA Component:
 * Engage R&G Advisory consultation prompt.
 */
export const AboutCTA: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-primary text-white border-t border-navy-950">
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-2">
              CONSULTING ENGAGEMENT
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">
              Engage R&amp;G Advisory
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Schedule an introductory diagnostic directly with Mr. Sanjay Makhija to
              explore how we can architect, staff, and scale your technology operations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Button
              to="/contact"
              variant="secondary"
              size="md"
              className="w-full sm:w-auto justify-center bg-[#d8af3a] hover:bg-[#c59c25] text-navy-950 font-bold border-none shadow-md rounded-none text-xs sm:text-sm"
              icon={<ArrowRight className="w-4 h-4 ml-1" />}
              iconPosition="right"
            >
              Contact Advisory Desk
            </Button>
            <Button
              to="/services"
              variant="ghost"
              size="md"
              className="w-full sm:w-auto justify-center text-white hover:text-accent hover:bg-white/10 rounded-none border border-white/20 text-xs sm:text-sm"
            >
              Explore Practice Areas
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutCTA;
