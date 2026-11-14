import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Radio, Scale, Laptop, GraduationCap } from 'lucide-react';
import { practiceAreasData, practiceAreasHeading } from '@/data/pillars';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { staggerContainerVariant, fadeUpVariant } from '@/lib/motion';

const iconMap: Record<string, React.ElementType> = {
  Radio,
  Scale,
  Laptop,
  GraduationCap,
};

/**
 * Enterprise Practice Areas Section:
 * Features a balanced 2-column header and 4 interconnected practice cards
 * with soft executive gradients, dedicated practice tags, and action triggers.
 */
export const Pillars: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-[#f8fafc]/70 relative border-t border-slate-200/60"
    >
      <Container>
        {/* Section Header: 2-Column Split matching the design image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-6">
            <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2.5 block">
              {practiceAreasHeading.eyebrow}
            </span>
            <h2 className="heading-section text-primary text-3xl sm:text-4xl font-bold tracking-tight">
              {practiceAreasHeading.heading}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {practiceAreasHeading.subtitle}
            </p>
          </div>
        </div>

        {/* 4 Practice Cards Grid */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: '60px 0px 0px 0px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {practiceAreasData.map((practice) => {
            const Icon = iconMap[practice.iconName] || Radio;

            return (
              <motion.div key={practice.id} variants={fadeUpVariant} className="h-full">
                <Card
                  variant="hover"
                  className="p-6 sm:p-7 flex flex-col justify-between h-full bg-gradient-to-b from-[#f2f7fc] via-white to-white border border-slate-200/90 shadow-2xs hover:shadow-card-hover group transition-all duration-300 rounded-2xl"
                >
                  <div>
                    {/* Circle Icon: Soft tinted circle with accent icon */}
                    <div className="w-11 h-11 rounded-full bg-amber-50/90 border border-amber-200/60 text-accent flex items-center justify-center shadow-2xs mb-5 transition-transform group-hover:scale-105">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Practice Eyebrow */}
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block mb-1.5">
                      {practice.practiceNo}
                    </span>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-xl text-primary mb-3 leading-tight group-hover:text-primary-light transition-colors">
                      {practice.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {practice.description}
                    </p>
                  </div>

                  {/* Explore Link with Arrow */}
                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href={practice.linkHref}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-accent transition-colors"
                    >
                      <span>{practice.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
