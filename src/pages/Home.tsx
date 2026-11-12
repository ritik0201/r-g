import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Proprietor } from '@/components/sections/Proprietor';
import { Pillars } from '@/components/sections/Pillars';
import { Partners } from '@/components/sections/Partners';
import { ContactForm } from '@/components/sections/ContactForm';

/**
 * Home Page Component:
 * Composes sections corresponding exactly to https://rngconsultancy.in/
 * while preserving the modern styling, theme, animations, and typography.
 */
export const Home: React.FC = () => {
  return (
    <main className="w-full overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About R&G Section */}
      <About />

      {/* 3. Meet the Proprietor (Founder) Section */}
      <Proprietor />

      {/* 4. Our Service Pillars */}
      <Pillars />

      {/* 5. Trusted Partnerships */}
      <Partners />

      {/* 6. Let's Connect (Contact Form) */}
      <ContactForm />
    </main>
  );
};
