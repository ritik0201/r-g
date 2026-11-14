import React from 'react';
import {
  HomeHero,
  HomePillars,
  HomeProprietor,
  HomeAdvantage,
  HomeWorkflow,
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

      {/* 4. The R&G Advantage */}
      <HomeAdvantage />

      {/* 5. How We Work */}
      <HomeWorkflow />

      {/* 6. Strategic Delivery Partners */}
      <HomePartners />

      {/* 7. Verified Client Perspectives */}
      <HomeTestimonials />

      {/* 8. Ready to Accelerate Your Enterprise Growth */}
      <HomeCTA />
    </div>
  );
};

export default Home;
