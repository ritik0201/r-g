import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Laptop, GraduationCap } from 'lucide-react';
import { pillarsData, pillarsHeading } from '@/data/pillars';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { staggerContainerVariant, fadeUpVariant } from '@/lib/motion';

const iconFallbackMap: Record<string, React.ElementType> = {
  'it-consultancy': Code2,
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
 * Displays the 4 service pillars with original copy, semantic formatting,
 * and flaticon visual badges.
 */
export const Pillars: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-lavender-100/70 relative">
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
            const FallbackIcon = iconFallbackMap[pillar.id] || Code2;

            return (
              <motion.div key={pillar.id} variants={fadeUpVariant} className="h-full">
                <Card
                  variant="hover"
                  className="p-7 sm:p-8 flex flex-col justify-between h-full bg-white group hover:border-accent hover:shadow-card-hover transition-all"
                >
                  <div>
                    {/* Top row: Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-heading font-black text-2xl text-accent">
                        {pillar.number}
                      </span>
                      <div className="w-14 h-14 rounded-xl bg-navy-50 flex items-center justify-center p-2.5 border border-border group-hover:border-accent transition-all duration-300 shadow-xs">
                        {pillar.iconUrl ? (
                          <img
                            src={pillar.iconUrl}
                            alt={`${pillar.title} icon`}
                            className="w-full h-full object-contain transition-transform group-hover:scale-110"
                            loading="lazy"
                          />
                        ) : (
                          <FallbackIcon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-xl text-primary mb-3">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-muted text-sm leading-relaxed">
                      {renderPillarDescription(pillar.id, pillar.description)}
                    </p>
                  </div>

                  {/* Bottom Tagline */}
                  {pillar.tagline && (
                    <div className="pt-6 mt-6 border-t border-border">
                      <span className="text-[11px] font-bold text-text-muted uppercase tracking-wider block font-mono">
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
