import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Pillars } from '@/components/sections/Pillars';
import { Expertise } from '@/components/sections/Expertise';
import { IntegratedApproach } from '@/components/sections/IntegratedApproach';
import { Credentials } from '@/components/sections/Credentials';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Partners } from '@/components/sections/Partners';
import { ContactCTA } from '@/components/sections/ContactCTA';

/**
 * Home Page Component:
 * Composes all homepage sections in the exact approved Google Stitch sequence.
 */
export const Home: React.FC = () => {
  return (
    <main className="w-full overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Four Core Pillars */}
      <Pillars />

      {/* 3. Technology Capabilities */}
      <Expertise />

      {/* 4. Integrated Consulting Approach */}
      <IntegratedApproach />

      {/* 5. Company Experience & Credentials */}
      <Credentials />

      {/* 6. Selected Work / Case Studies */}
      <CaseStudies />

      {/* 7. Strategic Partner Network */}
      <Partners />

      {/* 8. Contact CTA Band */}
      <ContactCTA />
    </main>
  );
};
