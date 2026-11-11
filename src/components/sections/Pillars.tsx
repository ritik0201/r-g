import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Palette, TrendingUp } from 'lucide-react';
import { pillarsData, pillarsHeading } from '@/data/pillars';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { staggerContainerVariant, fadeUpVariant } from '@/lib/motion';

// Icon map for dynamic icon lookup
const iconMap = {
  Code2,
  BrainCircuit,
  Palette,
  TrendingUp,
};

/**
 * Four Core Pillars Section:
 * Displays four architectural execution pillars on lavender background with lift effects.
 */
export const Pillars: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-lavender-100/70 relative">
      <Container>
        <SectionHeading
          eyebrow={pillarsHeading.eyebrow}
          heading={pillarsHeading.heading}
        />

        {/* 4 Cards Grid */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillarsData.map((pillar) => {
            const IconComponent = iconMap[pillar.iconName];

            return (
              <motion.div key={pillar.id} variants={fadeUpVariant} className="h-full">
                <Card
                  variant="hover"
                  className="p-7 sm:p-8 flex flex-col justify-between h-full bg-white group hover:border-accent hover:shadow-card-hover"
                >
                  <div>
                    {/* Top row: Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-heading font-black text-2xl text-accent">
                        {pillar.number}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                        <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-xl text-primary mb-3">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-muted text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom Tagline */}
                  <div className="pt-6 mt-6 border-t border-border">
                    <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider block font-mono">
                      {pillar.tagline}
                    </span>
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
