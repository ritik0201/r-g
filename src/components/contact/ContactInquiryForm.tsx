import React, { useState } from 'react';
import { CheckCircle2, Lock, ChevronDown, Send } from 'lucide-react';

/**
 * Advisory Inquiry Form Component for Contact page:
 * Direct routing form with corporate confidentiality NDA box,
 * live validation, and instant dispatch indicator.
 */
export const ContactInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: 'IT Consultancy & Architecture Roadmap',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white rounded-none border border-slate-200/90 shadow-2xs p-5 sm:p-8 md:p-10">
      <div className="flex items-center justify-between gap-3 mb-2">
        <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-primary">
          Send an Advisory Inquiry
        </h2>
        <span className="bg-primary text-white text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-none shadow-2xs shrink-0">
          DIRECT ROUTING
        </span>
      </div>
      <p className="text-xs sm:text-sm text-slate-500 mb-5 leading-relaxed">
        Inquiries route directly to senior consulting directors and practice leads at our
        Lodha iThink executive desk.
      </p>

      <div className="w-full h-px bg-slate-100 mb-5" />

      {isSubmitted ? (
        <div className="p-6 sm:p-8 rounded-none bg-emerald-50 border border-emerald-200 text-center space-y-3">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xs">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-lg sm:text-xl text-emerald-950">
            Inquiry Dispatched Successfully
          </h3>
          <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="font-semibold">{formData.fullName}</strong>.
            Your corporate mandate has been assigned directly to our advisory desk. A
            principal consultant will contact you within one business day.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: '',
                companyName: '',
                email: '',
                phone: '',
                service: 'IT Consultancy & Architecture Roadmap',
                message: '',
              });
            }}
            className="inline-flex items-center text-xs font-semibold text-emerald-700 underline hover:text-emerald-900 mt-2"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Row 1: Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Full Name <span className="text-amber-600">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Vikramaditya Sharma"
                className="w-full px-3.5 py-2.5 rounded-none border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Company Name
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. Apex Industrial Solutions Ltd."
                className="w-full px-3.5 py-2.5 rounded-none border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors bg-white"
              />
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Official Email Address <span className="text-amber-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="v.sharma@apexind.com"
                className="w-full px-3.5 py-2.5 rounded-none border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Phone Number
              </label>
              <div className="flex rounded-none border border-slate-200 overflow-hidden focus-within:border-primary transition-colors bg-white">
                <span className="inline-flex items-center px-2.5 text-xs font-semibold text-slate-600 bg-slate-100 border-r border-slate-200 select-none">
                  +91
                </span>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="98200 12345"
                  className="w-full px-3 py-2 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Service Selection */}
          <div>
            <label
              htmlFor="service"
              className="block text-xs font-semibold text-slate-700 mb-1"
            >
              Service Interested In
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full appearance-none px-3.5 py-2.5 pr-10 rounded-none border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors bg-white font-medium"
              >
                <option value="IT Consultancy & Architecture Roadmap">
                  IT Consultancy &amp; Architecture Roadmap
                </option>
                <option value="Executive HR, Talent & Staffing Mandate">
                  Executive HR, Talent &amp; Staffing Mandate
                </option>
                <option value="Software Projects & E-Commerce Engineering">
                  Software Projects &amp; E-Commerce Engineering
                </option>
                <option value="Corporate IT Training & Workforce Upskilling">
                  Corporate IT Training &amp; Workforce Upskilling
                </option>
                <option value="Comprehensive Advisory & Turnkey Solution">
                  Comprehensive Advisory &amp; Turnkey Solution
                </option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Row 4: Detailed Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-slate-700 mb-1"
            >
              Detailed Message / Project Scope <span className="text-amber-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Outline your current operational objectives, anticipated timelines, or executive staffing specifications..."
              className="w-full px-3.5 py-2.5 rounded-none border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors bg-white resize-y"
            />
          </div>

          {/* Row 5: Corporate Confidentiality Box */}
          <div className="bg-[#f0f6fc] border border-blue-100 rounded-none p-3 sm:p-4 flex items-start gap-3">
            <div className="w-6 h-6 rounded-none bg-blue-100/70 text-accent flex items-center justify-center shrink-0 mt-0.5">
              <Lock className="w-3.5 h-3.5" />
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong className="font-semibold text-slate-800">
                Corporate Confidentiality:
              </strong>{' '}
              Your data is kept strictly confidential under institutional corporate NDA
              guidelines. We never share proprietary correspondence.
            </p>
          </div>

          {/* Row 6: Dispatch Action Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 pt-3 border-t border-slate-100">
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-slate-500 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>READY FOR DISPATCH</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-none bg-gradient-to-r from-[#d8af3a] to-[#c59c25] hover:from-[#c59c25] hover:to-[#b38918] text-navy-950 font-heading font-bold text-xs sm:text-sm shadow-2xs transition-all disabled:opacity-70 cursor-pointer"
            >
              <span>{isSubmitting ? 'Routing...' : 'Send Inquiry'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactInquiryForm;
