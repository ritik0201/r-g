import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { siteConfig } from '@/data/site';
import { fadeUpVariant, scaleInVariant } from '@/lib/motion';

/**
 * Let's Connect (Contact Form) Section:
 * Features a Deep Navy corporate identity panel paired with a clean White interactive form,
 * delivering the requested White -> Navy -> Gold color hierarchy.
 */
export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-28 bg-white relative">
      <Container>
        <SectionHeading
          eyebrow="GET IN TOUCH"
          heading="Let's Connect"
          subtitle="We usually respond within one business day."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Authoritative Deep Navy Contact Card (5 cols) */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: '60px 0px 0px 0px' }}
            className="lg:col-span-5 space-y-6 w-full"
          >
            <div className="p-5 xs:p-6 sm:p-8 md:p-9 rounded-2xl bg-primary text-white shadow-lg space-y-5 sm:space-y-6 relative overflow-hidden">
              <div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                  R&amp;G Consultancy Services
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-300">
                  {siteConfig.tagline}
                </p>
              </div>

              <div className="space-y-4 pt-2 text-sm">
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3 sm:gap-3.5 text-white/90 hover:text-gold-300 transition-colors group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors shadow-xs shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-slate-400 block font-medium">
                      Direct Phone
                    </span>
                    <span className="font-semibold text-sm sm:text-base text-white">
                      {siteConfig.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 sm:gap-3.5 text-white/90 hover:text-gold-300 transition-colors group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors shadow-xs shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-slate-400 block font-medium">
                      Email Inquiries
                    </span>
                    <span className="font-semibold text-xs sm:text-sm text-white break-all sm:break-normal">
                      {siteConfig.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3 sm:gap-3.5 text-white/90">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-accent shrink-0 shadow-xs mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-slate-400 block font-medium">
                      Office Address
                    </span>
                    <span className="font-medium text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {siteConfig.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-3.5 text-white/90 pt-2 border-t border-white/10">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-accent shrink-0 shadow-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">
                      Turnaround Time
                    </span>
                    <span className="font-semibold text-xs sm:text-sm text-gold-300">
                      Response within 1 business day
                    </span>
                  </div>
                </div>
              </div>

              {/* Strategic Partner Footnotes inside Navy Panel */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-navy-950/60 border border-navy-900 text-xs text-slate-300 space-y-1.5">
                <p>
                  <strong className="text-white font-semibold">
                    Implementation Partner:
                  </strong>{' '}
                  {siteConfig.implementationPartner}
                </p>
                <p>
                  <strong className="text-white font-semibold">
                    Staffing Franchise Partner:
                  </strong>{' '}
                  {siteConfig.staffingPartner}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean White Interactive Form (7 cols) */}
          <motion.div
            variants={scaleInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: '60px 0px 0px 0px' }}
            className="lg:col-span-7 w-full"
          >
            <Card className="p-5 xs:p-6 sm:p-8 md:p-10 bg-white border border-slate-200 shadow-card rounded-2xl relative">
              {submitted ? (
                <div className="py-8 sm:py-12 text-center space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-primary">
                    Message Received
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
                    Thank you for contacting R&amp;G Consultancy Services. We have
                    received your inquiry and will respond within one business day.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        message: '',
                      });
                    }}
                    className="mt-4"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Name field matching original WordPress Formidable format */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Name <span className="text-accent">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder=""
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-base sm:text-sm text-primary"
                        />
                        <span className="text-xs text-slate-500 mt-1 block">First</span>
                      </div>

                      <div>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder=""
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-base sm:text-sm text-primary"
                        />
                        <span className="text-xs text-slate-500 mt-1 block">Last</span>
                      </div>
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-primary mb-2"
                      >
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=""
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-base sm:text-sm text-primary"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-primary mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=""
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-base sm:text-sm text-primary"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-primary mb-2"
                    >
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=""
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-base sm:text-sm text-primary resize-none"
                    />
                  </div>

                  {/* Submit Button: Authoritative Deep Navy */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto px-9 py-3.5 shadow-sm font-semibold text-base sm:text-sm justify-center"
                      disabled={loading}
                      icon={<Send className="w-4 h-4 ml-1" />}
                    >
                      {loading ? 'Submitting...' : 'Submit'}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
