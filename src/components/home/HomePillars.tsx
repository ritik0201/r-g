import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
 * 4 interconnected practice cards with icon, practice chip, description, and link.
 */
export const HomePillars: React.FC = () => {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-28 bg-[#f8fafc]/70 relative border-t border-slate-200/60"
    >
      <Container>
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-end mb-10 sm:mb-16">
          <div className="lg:col-span-6">
            <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
              {practiceAreasHeading.eyebrow}
            </span>
            <h2 className="heading-section text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              {practiceAreasHeading.heading}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              {practiceAreasHeading.subtitle}
            </p>
          </div>
        </div>

        {/* 4 Practice Cards Grid */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {practiceAreasData.map((practice) => {
            const Icon = iconMap[practice.iconName] || Radio;

            return (
              <motion.div key={practice.id} variants={fadeUpVariant} className="h-full">
                <Card
                  variant="hover"
                  className="p-5 sm:p-7 flex flex-col justify-between h-full bg-gradient-to-b from-[#f2f7fc] via-white to-white border border-slate-200/90 shadow-2xs hover:shadow-md group transition-all duration-300 rounded-none"
                >
                  <div>
                    {/* Header: Icon on left, Practice Chip on right */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-none bg-amber-50/90 border border-amber-200/60 text-accent flex items-center justify-center shadow-2xs transition-transform group-hover:scale-105">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase px-2 py-0.5 bg-slate-100 border border-slate-200/70">
                        {practice.practiceNo}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-2.5 leading-tight group-hover:text-primary-light transition-colors">
                      {practice.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {practice.description}
                    </p>
                  </div>

                  {/* Explore Link with Arrow */}
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-accent transition-colors"
                    >
                      <span>{practice.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
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

export default HomePillars;

