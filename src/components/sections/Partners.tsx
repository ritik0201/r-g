import React from 'react';
import { motion } from 'framer-motion';
import { Network, Handshake, Users2, GraduationCap } from 'lucide-react';
import { partnersData, partnersHeading } from '@/data/partners';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { staggerContainerVariant, fadeUpVariant } from '@/lib/motion';

const roleIcons: Record<string, React.ElementType> = {
  simplifyit: Network,
  'talent-corner': Users2,
  'mikado-solutions': GraduationCap,
};

/**
 * Strategic Alliance Network Section:
 * Highlights key institutional partners for implementation, talent sourcing, and academy foundations.
 */
export const Partners: React.FC = () => {
  return (
    <section id="network" className="py-20 lg:py-24 bg-white relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 mb-3">
            <Handshake className="w-3.5 h-3.5 text-accent" />
            <span className="eyebrow text-[11px] text-accent font-bold">
              {partnersHeading.eyebrow}
            </span>
          </div>
          <h2 className="heading-section text-primary">{partnersHeading.heading}</h2>
        </div>

        {/* 3 Partner Cards */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {partnersData.map((partner) => {
            const Icon = roleIcons[partner.id] || Handshake;

            return (
              <motion.div key={partner.id} variants={fadeUpVariant} className="h-full">
                <Card
                  variant="hover"
                  className="p-8 text-center bg-navy-50/40 border border-border rounded-xl flex flex-col items-center justify-between h-full group hover:bg-white hover:border-accent"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-white border border-border shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-accent transition-colors duration-300 mb-5">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-bold text-accent uppercase tracking-widest block mb-2 font-mono">
                      {partner.role}
                    </span>

                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-primary mb-2">
                      {partner.name}
                    </h3>

                    <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                      {partner.description}
                    </p>
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
