import React, { useState } from 'react';
import { ShieldCheck, Clock, Building2, CheckCircle2, Users, Lock, ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';

/**
 * Technical Training Diagnostic Form Component:
 * Allows corporate engineering leaders to specify team size, delivery format, and track preferences
 * matching exact Figma two-pane design.
 */
export const TrainingDiagnosticForm: React.FC = () => {
  const [teamSize, setTeamSize] = useState('5 - 10 engineers');
  const [deliveryFormat, setDeliveryFormat] = useState('On-site Thane/Mumbai');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    track: 'Enterprise Java & Spring Boot Architecture',
    goals: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="diagnostic"
      className="py-14 sm:py-20 lg:py-24 bg-[#f4f7fb] scroll-mt-24 border-t border-slate-200/80"
    >
      <Container>
        <div className="border border-slate-200/90 shadow-md bg-white rounded-none overflow-hidden max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12">
          {/* Left Navy Column (5 cols) matching Figma */}
          <div className="lg:col-span-5 bg-[#0c192c] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-navy-900">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 rounded-none text-[11px] font-mono font-bold uppercase tracking-wider text-[#caa264] mb-4">
                <Users className="w-3.5 h-3.5" />
                <span>CORPORATE ENQUIRIES</span>
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white leading-snug mb-3">
                Schedule a Technical Training Diagnostic
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Connect with our technical practice leaders to customize module depths,
                verify syllabus topics against your repos, and reserve dedicated cohort
                schedules.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#caa264] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">
                      Direct Practice Consultation
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                      Speak directly with curriculum architects, not sales reps.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#caa264] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">1-Business-Day Turnaround</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                      Receive a full custom proposal and syllabus outline within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-[#caa264] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white">Campus or In-House</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                      Lodha iThink, Thane West labs or on-premise boardroom deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-none bg-navy-950/80 border border-navy-800 text-xs text-slate-300">
              <span className="text-[10px] font-mono uppercase text-[#caa264] font-bold block mb-1">
                ALLIANCE GUARANTEE
              </span>
              Technical programs co-certified by Mikado Solutions, ensuring rigorous
              industry-standard testing and compliance.
            </div>
          </div>

          {/* Right White Form Panel (7 cols) matching Figma */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 border border-emerald-200">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-primary">
                  Corporate Diagnostic Scheduled
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="font-semibold">{formData.name}</strong>. Your
                  technical upskilling diagnostic has been routed to our practice leads. We will
                  contact you within 24 hours with syllabus benchmarks and dates.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-none transition-colors"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name &amp; Corporate Title <span className="text-[#caa264]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Sharma, VP Engineering"
                      className="w-full px-3.5 py-2.5 rounded-none border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-primary transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Corporate Email Address <span className="text-[#caa264]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="r.sharma@enterprise.com"
                      className="w-full px-3.5 py-2.5 rounded-none border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-primary transition-colors bg-white"
                    />
                  </div>
                </div>

                {/* Row 2: Company & Preferred Tech Track */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company / Entity Name <span className="text-[#caa264]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Bharat Financial Technologies"
                      className="w-full px-3.5 py-2.5 rounded-none border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-primary transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Tech Track <span className="text-[#caa264]">*</span>
                    </label>
                    <select
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-none border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-primary transition-colors bg-white font-medium"
                    >
                      <option value="Enterprise Java & Spring Boot Architecture">
                        Enterprise Java &amp; Spring Boot Architecture
                      </option>
                      <option value="Python for Enterprise & Data Automation">
                        Python for Enterprise &amp; Data Automation
                      </option>
                      <option value="Modern Fullstack Web Engineering">
                        Modern Fullstack Web Engineering
                      </option>
                      <option value="Custom Mixed Technology Cohort">
                        Custom Mixed Technology Cohort
                      </option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Approximate Team Size */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Approximate Team Size <span className="text-[#caa264]">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      '5 - 10 engineers',
                      '11 - 25 engineers',
                      '25 - 50 engineers',
                      '50+ (Enterprise)',
                    ].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setTeamSize(size)}
                        className={`py-2.5 px-2 text-[11px] font-semibold border rounded-none text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          teamSize === size
                            ? 'bg-sky-50 text-primary border-primary font-bold shadow-2xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <span
                          className={`w-2.5 h-2.5 rounded-full border flex items-center justify-center ${
                            teamSize === size
                              ? 'border-primary bg-primary'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {teamSize === size && (
                            <span className="w-1 h-1 rounded-full bg-white" />
                          )}
                        </span>
                        <span>{size}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row 4: Delivery Format */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Delivery Format <span className="text-[#caa264]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      'On-site Thane/Mumbai',
                      'Live Virtual Sessions',
                      'Hybrid Cohort',
                    ].map((format) => (
                      <button
                        key={format}
                        type="button"
                        onClick={() => setDeliveryFormat(format)}
                        className={`py-2.5 px-3 text-[11px] font-semibold border rounded-none text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          deliveryFormat === format
                            ? 'bg-sky-50 text-primary border-primary font-bold shadow-2xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <span
                          className={`w-2.5 h-2.5 rounded-full border flex items-center justify-center ${
                            deliveryFormat === format
                              ? 'border-primary bg-primary'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {deliveryFormat === format && (
                            <span className="w-1 h-1 rounded-full bg-white" />
                          )}
                        </span>
                        <span>{format}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row 5: Specific Technical Goals */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Specific Technical Goals &amp; Timeline
                  </label>
                  <textarea
                    rows={3}
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    placeholder="Mention specific libraries, architecture bottlenecks, target deployment dates, or custom module requirements..."
                    className="w-full px-3.5 py-2.5 rounded-none border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-primary transition-colors bg-white resize-y"
                  />
                </div>

                {/* Row 6: Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-none bg-[#e5be75] hover:bg-[#d8af3a] text-slate-950 font-heading font-bold text-sm shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Corporate Enquiry</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                {/* Subtext */}
                <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-1.5 pt-1">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span>All discussions and candidate rosters covered by strict mutual Non-Disclosure Agreement.</span>
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrainingDiagnosticForm;
