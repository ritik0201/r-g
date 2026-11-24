import React from 'react';
import {
  HomeHero,
  HomePillars,
  HomeProprietor,
  HomeAdvantageWorkflow,
  HomePartners,
  HomeTestimonials,
  HomeCTA,
} from '@/components/home';

/**
 * Home Page:
 * Composed using dedicated modular components from `@/components/home`.
 * Fully responsive for desktop and mobile viewports matching design specifications.
 */
export const Home: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2. Enterprise Practice Areas */}
      <HomePillars />

      {/* 3. Leadership Quote */}
      <HomeProprietor />

      {/* 4. The R&G Advantage & How We Work (Side-by-side on desktop, stacked on mobile) */}
      <HomeAdvantageWorkflow />

      {/* 5. Strategic Delivery Partners */}
      <HomePartners />

      {/* 6. Verified Client Perspectives */}
      <HomeTestimonials />

      {/* 7. Ready to Accelerate Your Enterprise Growth */}
      <HomeCTA />
    </div>
  );
};

export default Home;
