import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { caseStudiesData, caseStudiesHeading } from '@/data/caseStudies';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { staggerContainerVariant, fadeUpVariant } from '@/lib/motion';

/**
 * Case Studies Section:
 * Showcases verified work highlights with category badges, hover image zoom, and feature tags.
 */
export const CaseStudies: React.FC = () => {
  return (
    <section id="work" className="py-20 lg:py-28 bg-lavender-100/60 relative">
      <Container>
        {/* Section Header with "View all work" Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="eyebrow text-xs font-bold text-accent uppercase tracking-widest mb-2 block">
              {caseStudiesHeading.eyebrow}
            </span>
            <h2 className="heading-section text-primary">{caseStudiesHeading.heading}</h2>
          </div>

          <a
            href={caseStudiesHeading.viewAllLink.href}
            className="inline-flex items-center gap-1.5 text-sm md:text-base font-bold text-primary hover:text-accent transition-colors group"
          >
            <span>{caseStudiesHeading.viewAllLink.label}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 3 Case Study Cards Grid */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {caseStudiesData.map((project) => (
            <motion.div key={project.id} variants={fadeUpVariant} className="h-full">
              <Card
                variant="default"
                className="group flex flex-col justify-between h-full bg-white overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div>
                  {/* Card Image Area with Category Badge */}
                  <div className="relative h-56 w-full overflow-hidden bg-navy-100">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-primary/90 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] font-bold tracking-wider uppercase shadow-sm">
                      {project.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-primary mb-2.5 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Tag & Arrow */}
                <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 flex items-center justify-between border-t border-border/60">
                  <span className="text-xs font-bold text-text-muted tracking-wide font-mono uppercase">
                    {project.featureTag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-navy-50 group-hover:bg-primary group-hover:text-white flex items-center justify-center text-accent transition-colors duration-200">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
