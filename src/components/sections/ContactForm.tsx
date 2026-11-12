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
 * Faithfully matches the exact text, labels, and fields of the original form on https://rngconsultancy.in/,
 * formatted with refined typography and responsive design.
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
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <Container>
        <SectionHeading
          eyebrow="GET IN TOUCH"
          heading="Let's Connect"
          subtitle="We usually respond within one business day."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-navy-50/60 border border-border space-y-6 shadow-xs">
              <div>
                <h3 className="font-heading font-bold text-xl text-primary mb-2">
                  R&amp;G Consultancy Services
                </h3>
                <p className="text-sm font-medium text-text-muted">
                  {siteConfig.tagline}
                </p>
              </div>

              <div className="space-y-4 pt-2 text-sm">
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3 text-text hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-accent transition-colors shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted block">Direct Phone</span>
                    <span className="font-semibold text-primary">{siteConfig.phone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-text hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-accent transition-colors shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted block">Email Inquiries</span>
                    <span className="font-semibold text-primary">{siteConfig.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-text">
                  <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-primary shrink-0 shadow-xs mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted block">Office Address</span>
                    <span className="font-medium text-xs sm:text-sm text-text-muted leading-relaxed">
                      {siteConfig.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-text pt-2">
                  <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center text-accent shrink-0 shadow-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-text-muted block">Turnaround Time</span>
                    <span className="font-semibold text-xs sm:text-sm text-primary">
                      Response within 1 business day
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Partner Footnotes */}
            <div className="p-5 rounded-xl bg-white border border-border text-xs text-text-muted space-y-2">
              <p>
                <strong className="text-primary font-semibold">
                  Implementation Partner:
                </strong>{' '}
                {siteConfig.implementationPartner}
              </p>
              <p>
                <strong className="text-primary font-semibold">
                  Staffing Franchise Partner:
                </strong>{' '}
                {siteConfig.staffingPartner}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form (7 cols) */}
          <motion.div
            variants={scaleInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7"
          >
            <Card className="p-8 sm:p-10 bg-white border border-border shadow-card rounded-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-primary">
                    Message Received
                  </h3>
                  <p className="text-text-muted text-base max-w-md mx-auto">
                    Thank you for contacting R&amp;G Consultancy Services. We have
                    received your inquiry and will respond within one business day.
                  </p>
                  <Button
                    variant="ghost"
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field matching original WordPress Formidable format */}
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Name <span className="text-accent">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder=""
                          className="w-full px-4 py-3 rounded-lg bg-navy-50/50 border border-border focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm text-text"
                        />
                        <span className="text-xs text-text-muted mt-1.5 block">
                          First
                        </span>
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
                          className="w-full px-4 py-3 rounded-lg bg-navy-50/50 border border-border focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm text-text"
                        />
                        <span className="text-xs text-text-muted mt-1.5 block">Last</span>
                      </div>
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 rounded-lg bg-navy-50/50 border border-border focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm text-text"
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
                        className="w-full px-4 py-3 rounded-lg bg-navy-50/50 border border-border focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm text-text"
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
                      className="w-full px-4 py-3 rounded-lg bg-navy-50/50 border border-border focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm text-text resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto px-9 py-3.5 shadow-md font-semibold text-sm"
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
