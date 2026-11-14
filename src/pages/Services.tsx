import React from 'react';
import { ServicesHero, ServicesShowcase, ServicesCTA } from '@/components/services';

/**
 * Services Page Component:
 * Composed using dedicated modular components from `@/components/services`.
 * Clean desktop and mobile responsive layout matching user specifications.
 */
export const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20 sm:pt-24 bg-white">
      {/* 1. Header with Jump-to-Practice Navigation */}
      <ServicesHero />

      {/* 2. 4 Alternating Practice Showcases */}
      <ServicesShowcase />

      {/* 3. Combined Advisory Package CTA */}
      <ServicesCTA />
    </div>
  );
};

export default ServicesPage;
