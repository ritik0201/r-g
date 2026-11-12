import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Users, Laptop, GraduationCap } from 'lucide-react';
import { pillarsData, pillarsHeading } from '@/data/pillars';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { staggerContainerVariant, fadeUpVariant } from '@/lib/motion';

const pillarIcons: Record<string, React.ElementType> = {
  'it-consultancy': Layers,
  'hr-staffing': Users,
  'software-projects': Laptop,
  'it-training': GraduationCap,
};

/**
 * Helper to render pillar descriptions with exact semantic bolding
 */
const renderPillarDescription = (id: string, description: string) => {
  if (id === 'hr-staffing') {
    return (
      <>
        End-to-end talent acquisition and workforce solutions through our franchise with{' '}
        <strong className="font-semibold text-primary">Talent Corner HR Services</strong>.
      </>
    );
  }
  if (id === 'it-training') {
    return (
      <>
        Customized corporate training in modern technologies (Java, Python, Fullstack) in
        partnership with{' '}
        <strong className="font-semibold text-primary">Mikado Solutions</strong>.
      </>
    );
  }
  return description;
};

/**
 * Our Service Pillars Section:
 * Features cards with the exact same icon container & color scheme as the About section
 * (Deep Navy bg-primary container with refined Gold text-gold-400 icons).
 */
export const Pillars: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <Container>
        <SectionHeading
          eyebrow={pillarsHeading.eyebrow}
          heading={pillarsHeading.heading}
          subtitle={pillarsHeading.subtitle}
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
            const Icon = pillarIcons[pillar.id] || Layers;

            return (
              <motion.div key={pillar.id} variants={fadeUpVariant} className="h-full">
                <Card
                  variant="hover"
                  className="p-7 sm:p-8 flex flex-col justify-between h-full bg-white border border-slate-200 group hover:border-primary/60 hover:shadow-card-hover transition-all duration-300 rounded-2xl"
                >
                  <div>
                    {/* Top row: Number & Icon styled identical to the About section */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-heading font-black text-2xl text-primary group-hover:text-primary-light transition-colors">
                        {pillar.number}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-primary text-gold-400 flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-xl text-primary mb-3">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {renderPillarDescription(pillar.id, pillar.description)}
                    </p>
                  </div>

                  {/* Bottom Tagline */}
                  {pillar.tagline && (
                    <div className="pt-5 mt-6 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block font-mono">
                        {pillar.tagline}
                      </span>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
