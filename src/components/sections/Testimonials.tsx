import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonialsData, testimonialsHeading } from '@/data/testimonials';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { fadeUpVariant } from '@/lib/motion';

/**
 * Verified Client Perspectives Section:
 * Executive testimonials featuring verified promoters and C-suite partners.
 */
export const Testimonials: React.FC = () => {
  return (
    <section id="perspectives" className="py-20 lg:py-28 bg-white relative">
      <Container>
        {/* Header: 2-Column Split matching the design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-6">
            <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2.5 block">
              {testimonialsHeading.eyebrow}
            </span>
            <h2 className="heading-section text-primary text-3xl sm:text-4xl font-bold tracking-tight">
              {testimonialsHeading.heading}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {testimonialsHeading.subtitle}
            </p>
          </div>
        </div>

        {/* 2 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05, margin: '60px 0px 0px 0px' }}
              className="h-full"
            >
              <Card className="p-7 sm:p-8 bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  {/* 5 Gold Stars */}
                  <div
                    className="flex items-center gap-1 mb-5"
                    aria-label="5 out of 5 stars"
                  >
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-slate-700 text-sm sm:text-[0.9375rem] leading-relaxed italic mb-8">
                    {item.quote}
                  </blockquote>
                </div>

                {/* Author attribution row */}
                <div className="flex items-center gap-3.5 pt-5 border-t border-slate-100">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-11 h-11 rounded-none object-cover border border-slate-300 shrink-0 shadow-2xs"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-base text-primary leading-tight">
                      {item.author}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                      {item.role}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
