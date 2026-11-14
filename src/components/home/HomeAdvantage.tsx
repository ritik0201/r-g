import React from 'react';
import { motion } from 'framer-motion';
import { Target, UserCheck, ShieldCheck, BarChart3 } from 'lucide-react';
import { advantageHeading, advantageItems } from '@/data/advantage';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { fadeUpVariant } from '@/lib/motion';

const iconMap: Record<string, React.ElementType> = {
  Target,
  UserCheck,
  ShieldCheck,
  BarChart3,
};

/**
 * The R&G Advantage Component for Home page:
 * 4 outcome-driven enterprise advantage guarantees.
 */
export const HomeAdvantage: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#f4f8fc] border-t border-slate-200/80">
      <Container>
        <div className="max-w-2xl mb-8 sm:mb-10">
          <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
            {advantageHeading.eyebrow}
          </span>
          <h2 className="heading-section text-primary text-2xl sm:text-3xl font-bold tracking-tight mb-2.5">
            {advantageHeading.heading}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {advantageHeading.description}
          </p>
        </div>

        {/* 4 Advantage Benefit Cards */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          {advantageItems.map((item) => {
            const Icon = iconMap[item.iconName] || Target;

            return (
              <Card
                key={item.id}
                className="p-4 sm:p-5 bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm rounded-none transition-all flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-none bg-primary text-gold-400 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default HomeAdvantage;

