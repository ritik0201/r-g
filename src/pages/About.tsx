import React from 'react';
import {
  AboutHero,
  AboutFounder,
  AboutTenets,
  AboutArchitecture,
  AboutPartners,
  AboutLocation,
  AboutCTA,
} from '@/components/about';

/**
 * About Page Component:
 * Composed using dedicated modular components from `@/components/about`.
 * High-trust executive layout with sharp edges and responsive mobile structure.
 */
export const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 sm:pt-24 bg-white">
      {/* 1. Page Hero */}
      <AboutHero />

      {/* 2. Founder & Stewardship */}
      <AboutFounder />

      {/* 3. Operational Foundation & Tenets */}
      <AboutTenets />

      {/* 4. Integrated Delivery Architecture */}
      <AboutArchitecture />

      {/* 5. Strategic Delivery Partners */}
      <AboutPartners />

      {/* 6. Thane Tech Belt Location */}
      <AboutLocation />

      {/* 7. Bottom CTA */}
      <AboutCTA />
    </div>
  );
};

export default AboutPage;
