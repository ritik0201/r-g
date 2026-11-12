import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Rocket, Scale, Users } from 'lucide-react';
import { aboutData } from '@/data/about';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { staggerContainerVariant, fadeUpVariant } from '@/lib/motion';

const valueIcons: Record<string, React.ElementType> = {
  Eye,
  Rocket,
  Scale,
  Users,
};

/**
 * About R&G Section:
 * Features perfectly formatted company narrative, founder attribution,
 * and the 4 core tenets (Vision, Mission, Values, Teamwork).
 */
export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <Container>
        <SectionHeading
          eyebrow={aboutData.eyebrow}
          heading={aboutData.heading}
          subtitle={aboutData.subtitle}
        />

        {/* Narrative Copy with original semantic bolding */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16 space-y-4"
        >
          <p className="text-text-muted text-base sm:text-lg lg:text-xl leading-relaxed">
            <strong className="font-semibold text-primary">
              R&amp;G Consultancy Services
            </strong>{' '}
            is a proprietor-led consulting firm founded by{' '}
            <strong className="font-semibold text-primary">Mr. Sanjay Makhija.</strong> We
            began with IT consultancy and expanded into HR consultancy, software project
            delivery, and IT training.
          </p>
          <p className="text-text-muted text-base sm:text-lg lg:text-xl leading-relaxed">
            Our approach is simple: define clear success metrics, engage senior
            consultants hands-on, and leverage trusted partners to deliver faster,
            reliable results.
          </p>
        </motion.div>

        {/* 4 Strategic Tenets: Vision, Mission, Values, Teamwork */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {aboutData.values.map((item) => {
            const Icon = valueIcons[item.iconName] || Eye;

            return (
              <motion.div key={item.title} variants={fadeUpVariant} className="h-full">
                <Card
                  variant="hover"
                  className="p-7 flex flex-col justify-between h-full bg-navy-50/40 border border-border group hover:bg-white hover:border-accent hover:shadow-card-hover transition-all"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-border shadow-xs flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-accent transition-colors duration-300 mb-5">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-2">
                      {item.title}
                    </h3>

                    {item.title === 'Values' ? (
                      <p className="text-text-muted text-sm leading-relaxed font-medium">
                        Accountability <span className="text-accent">•</span> Clarity{' '}
                        <span className="text-accent">•</span> Partnership{' '}
                        <span className="text-accent">•</span> Impact
                      </p>
                    ) : (
                      <p className="text-text-muted text-sm leading-relaxed">
                        {item.description}
                      </p>
                    )}
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
