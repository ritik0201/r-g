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
    <section id="about" className="py-14 sm:py-20 lg:py-28 bg-white relative">
      <Container>
        <SectionHeading
          eyebrow={aboutData.eyebrow}
          heading={aboutData.heading}
          subtitle={aboutData.subtitle}
        />

        {/* Narrative Copy with expanded comfortable width matching user reference */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: '60px 0px 0px 0px' }}
          className="max-w-4xl lg:max-w-[940px] mx-auto text-center mb-10 sm:mb-16 space-y-4 sm:space-y-6 px-1 sm:px-0"
        >
          <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-[1.8]">
            <strong className="font-semibold text-primary">
              R&amp;G Consultancy Services
            </strong>{' '}
            is a proprietor-led consulting firm founded by{' '}
            <strong className="font-semibold text-primary">Mr. Sanjay Makhija.</strong> We
            began with IT consultancy and expanded into HR consultancy, software project
            delivery, and IT training.
          </p>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-[1.8]">
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
          viewport={{ once: true, amount: 0.02, margin: '60px 0px 0px 0px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {aboutData.values.map((item) => {
            const Icon = valueIcons[item.iconName] || Eye;

            return (
              <motion.div key={item.title} variants={fadeUpVariant} className="h-full">
                <Card
                  variant="hover"
                  className="p-5 sm:p-6 md:p-7 flex flex-row sm:flex-col items-start gap-4 sm:gap-0 justify-start sm:justify-between h-full bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(10,37,64,0.06)] group hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(10,37,64,0.12)] transition-all duration-300 rounded-2xl"
                >
                  {/* Icon: Deep Navy container with refined Gold accent */}
                  <div className="w-12 h-12 rounded-xl bg-primary text-gold-400 flex items-center justify-center shadow-xs shrink-0 sm:mb-5 transition-transform group-hover:scale-105">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content: Title & Description */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-primary mb-1.5 sm:mb-2">
                      {item.title}
                    </h3>

                    {item.title === 'Values' ? (
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-semibold">
                        Accountability <span className="text-accent">•</span> Clarity{' '}
                        <span className="text-accent">•</span> Partnership{' '}
                        <span className="text-accent">•</span> Impact
                      </p>
                    ) : (
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
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
