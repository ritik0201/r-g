import React from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Cpu,
  Calculator,
  Layers,
  Bot,
  BarChart3,
  Palette,
  Megaphone,
  GraduationCap,
} from 'lucide-react';
import { expertiseData, expertiseHeading } from '@/data/expertise';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { fastStaggerVariant, fadeUpVariant } from '@/lib/motion';

const iconMap = {
  ShoppingBag,
  Cpu,
  Calculator,
  Layers,
  Bot,
  BarChart3,
  Palette,
  Megaphone,
  GraduationCap,
};

/**
 * Technology Capabilities Section:
 * Highlights full stack, AI, and e-commerce capabilities using interactive pill chips.
 */
export const Expertise: React.FC = () => {
  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-white relative">
      <Container>
        <SectionHeading
          eyebrow={expertiseHeading.eyebrow}
          heading={expertiseHeading.heading}
          subtext={expertiseHeading.subtext}
        />

        {/* Pill Chips Grid */}
        <motion.div
          variants={fastStaggerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-3.5 max-w-4xl"
        >
          {expertiseData.map((item) => {
            const IconComponent = iconMap[item.iconName];

            return (
              <motion.div
                key={item.id}
                variants={fadeUpVariant}
                whileHover={{ y: -2 }}
                className="chip group cursor-default py-3 px-5 border border-border bg-white hover:border-accent hover:bg-navy-50/50 shadow-sm transition-all"
              >
                <IconComponent className="w-4 h-4 text-accent transition-colors group-hover:text-primary shrink-0" />
                <span className="font-medium text-sm md:text-base text-primary">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
