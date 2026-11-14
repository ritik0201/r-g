import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';

/**
 * Combined Advisory Package CTA Component for Services:
 * Dark Navy card with gold button.
 */
export const ServicesCTA: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-primary text-white border-t border-navy-950">
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-accent text-xs font-mono font-bold tracking-widest uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>UNIFIED CLIENT ENGAGEMENT</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">
              Need a combined advisory package?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Contact our Thane office for unified roadmaps spanning technology cloud,
              hands-on workforce placement, and custom software delivery under one
              accountable governance partner.
            </p>
          </div>
          <Button
            to="/contact"
            variant="secondary"
            size="md"
            className="w-full sm:w-auto justify-center bg-[#d8af3a] hover:bg-[#c59c25] text-navy-950 font-bold border-none shadow-md rounded-none text-xs sm:text-sm shrink-0"
            icon={<ArrowRight className="w-4 h-4 ml-1" />}
            iconPosition="right"
          >
            Schedule Strategic Review
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ServicesCTA;
