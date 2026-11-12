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
 * Features company background, consulting philosophy, and core strategic tenets
 * (Vision, Mission, Values, Teamwork) with expanded paragraph width matching user specification.
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

        {/* Narrative Copy with expanded comfortable width matching Image 1 */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl lg:max-w-[940px] mx-auto text-center mb-16 space-y-6"
        >
          <p className="text-slate-600 text-lg sm:text-xl md:text-[1.2rem] leading-[1.8]">
            <strong className="font-semibold text-primary">
              R&amp;G Consultancy Services
            </strong>{' '}
            is a proprietor-led consulting firm founded by{' '}
            <strong className="font-semibold text-primary">Mr. Sanjay Makhija.</strong> We
            began with IT consultancy and expanded into HR consultancy, software project
            delivery, and IT training.
          </p>
          <p className="text-slate-600 text-lg sm:text-xl md:text-[1.2rem] leading-[1.8]">
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
                  className="p-7 flex flex-col justify-between h-full bg-slate-50/70 border border-slate-200 group hover:bg-white hover:border-primary/50 hover:shadow-card-hover transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary text-gold-400 flex items-center justify-center shadow-xs mb-5 transition-transform group-hover:scale-105">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-2">
                      {item.title}
                    </h3>

                    {item.title === 'Values' ? (
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        Accountability <span className="text-accent">•</span> Clarity{' '}
                        <span className="text-accent">•</span> Partnership{' '}
                        <span className="text-accent">•</span> Impact
                      </p>
                    ) : (
                      <p className="text-slate-600 text-sm leading-relaxed">
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
