import React from 'react';
import { motion } from 'framer-motion';
import { Target, UserCheck, ShieldCheck, BarChart3 } from 'lucide-react';
import {
  advantageHeading,
  advantageItems,
  workflowHeading,
  workflowSteps,
} from '@/data/advantage';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { fadeUpVariant } from '@/lib/motion';

const iconMap: Record<string, React.ElementType> = {
  Target,
  UserCheck,
  ShieldCheck,
  BarChart3,
};

/**
 * The R&G Advantage & How We Work (Split 2-Column Section):
 * Pairs execution guarantees on the left with the 4-stage engagement framework on the right.
 */
export const AdvantageWorkflow: React.FC = () => {
  return (
    <section id="advantage" className="py-20 lg:py-28 bg-white relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: The R&G Advantage (6 cols) */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: '60px 0px 0px 0px' }}
            className="lg:col-span-6 flex flex-col"
          >
            <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2.5 block">
              {advantageHeading.eyebrow}
            </span>
            <h2 className="heading-section text-primary text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              {advantageHeading.heading}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              {advantageHeading.description}
            </p>

            {/* 4 Advantage Benefit Cards */}
            <div className="space-y-3.5">
              {advantageItems.map((item) => {
                const Icon = iconMap[item.iconName] || Target;

                return (
                  <Card
                    key={item.id}
                    className="p-4 sm:p-4.5 bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-primary/40 hover:shadow-sm rounded-xl transition-all duration-200 flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary text-gold-400 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading font-bold text-base text-primary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: How We Work (6 cols) */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: '60px 0px 0px 0px' }}
            className="lg:col-span-6 flex flex-col mt-6 lg:mt-0"
          >
            <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2.5 block">
              {workflowHeading.eyebrow}
            </span>
            <h2 className="heading-section text-primary text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              {workflowHeading.heading}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              {workflowHeading.description}
            </p>

            {/* 4 Framework Steps */}
            <div className="space-y-3.5">
              {workflowSteps.map((step) => {
                return (
                  <Card
                    key={step.step}
                    className="p-4.5 sm:p-5 bg-white border border-slate-200/90 hover:border-primary/40 hover:shadow-xs rounded-xl transition-all duration-200"
                  >
                    {/* Header Row: Step Number, Title, and Milestone Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono font-bold text-base text-accent">
                          {step.step}
                        </span>
                        <h3 className="font-heading font-bold text-base text-primary">
                          {step.title}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-sky-800 bg-sky-50 border border-sky-200/60 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {step.milestone}
                      </span>
                    </div>

                    {/* Step Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                      {step.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
