import React from 'react';
import { motion } from 'framer-motion';
import { workflowHeading, workflowSteps } from '@/data/advantage';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { fadeUpVariant } from '@/lib/motion';

/**
 * How We Work Component for Home page:
 * 4-stage engagement methodology matching reference layout.
 */
export const HomeWorkflow: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-200/80">
      <Container>
        <div className="max-w-2xl mb-8 sm:mb-10">
          <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
            {workflowHeading.eyebrow}
          </span>
          <h2 className="heading-section text-primary text-2xl sm:text-3xl font-bold tracking-tight mb-2.5">
            {workflowHeading.heading}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {workflowHeading.description}
          </p>
        </div>

        {/* 4 Framework Steps Stack */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-3.5 sm:space-y-4 max-w-3xl"
        >
          {workflowSteps.map((step) => {
            return (
              <Card
                key={step.step}
                className="p-4 sm:p-5 bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs rounded-none transition-all"
              >
                {/* Header Row: Step Number, Title, and Milestone Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono font-bold text-base text-accent">
                      {step.step}
                    </span>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-primary">
                      {step.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-sky-800 bg-sky-50 border border-sky-200/60 px-2 py-0.5 rounded-none uppercase tracking-wider">
                    {step.milestone}
                  </span>
                </div>

                {/* Step Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1.5">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default HomeWorkflow;

