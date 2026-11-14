import React from 'react';
import { Container } from '@/components/common/Container';
import {
  ContactHero,
  ContactInquiryForm,
  ContactQuickConsult,
  ContactOfficeInfo,
  ContactQuote,
  ContactMetricsStrip,
} from '@/components/contact';

/**
 * Contact Page Component:
 * Composed using dedicated modular components from `@/components/contact`.
 * Clean desktop and mobile responsive layout matching user specifications.
 */
export const ContactPage: React.FC = () => {
  return (
    <div className="pt-20 sm:pt-24 bg-white text-slate-800">
      {/* 1. Header Section */}
      <ContactHero />

      {/* 2. Main Content Grid */}
      <section className="py-10 sm:py-16 bg-[#f8fafc]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
            {/* Left: Advisory Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactInquiryForm />
            </div>

            {/* Right: Quick Consultation & Thane HQ (5 cols) */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <ContactQuickConsult />
              <ContactOfficeInfo />
              <ContactQuote />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Bottom Assurance / Jurisdiction Strip */}
      <ContactMetricsStrip />
    </div>
  );
};

export default ContactPage;
