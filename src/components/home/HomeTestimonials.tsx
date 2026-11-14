import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonialsHeading, testimonialsData } from '@/data/testimonials';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { fadeUpVariant } from '@/lib/motion';

/**
 * Verified Client Perspectives for Home:
 * 5-star verified testimonial cards with sharp avatar frames.
 */
export const HomeTestimonials: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-200/80">
      <Container>
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
            {testimonialsHeading.eyebrow}
          </span>
          <h2 className="heading-section text-primary text-2xl sm:text-3xl font-bold tracking-tight mb-2.5">
            {testimonialsHeading.heading}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {testimonialsHeading.subtitle}
          </p>
        </div>

        {/* 2 Testimonial Cards */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
        >
          {testimonialsData.map((item) => (
            <Card
              key={item.id}
              className="p-5 sm:p-7 bg-[#fcfdfe] border border-slate-200/90 shadow-2xs hover:shadow-xs rounded-none flex flex-col justify-between"
            >
              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <blockquote className="font-heading italic text-sm sm:text-base text-slate-800 leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author attribution row */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-11 h-11 rounded-none object-cover border border-slate-300 shrink-0 shadow-2xs"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-primary leading-tight">
                    {item.author}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">
                    {item.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default HomeTestimonials;

