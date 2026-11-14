import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { fadeUpVariant } from '@/lib/motion';

/**
 * Ready to Accelerate CTA Component for Home:
 * Deep Navy card with golden Consultation trigger and direct About link.
 */
export const HomeCTA: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-primary text-white border-t border-navy-950">
      <Container>
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div>
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-2">
              INSTITUTIONAL GROWTH
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">
              Ready to Accelerate Your Enterprise Growth?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Schedule a confidential advisory review with our senior consultants to
              examine your IT architecture and talent pipeline across your primary
              operations.
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
              Book a Consultation
            </Button>
            <Button
              to="/about"
              variant="ghost"
              size="md"
              className="w-full sm:w-auto justify-center text-white hover:text-accent hover:bg-white/10 rounded-none border border-white/20 text-xs sm:text-sm"
            >
              About the Firm
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HomeCTA;
