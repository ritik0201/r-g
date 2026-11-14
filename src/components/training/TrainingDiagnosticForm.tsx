import React, { useState } from 'react';
import { ShieldCheck, Clock, Building2, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';

/**
 * Technical Training Diagnostic Form Component:
 * Allows corporate engineering leaders to specify team size, delivery format, and track preferences.
 */
export const TrainingDiagnosticForm: React.FC = () => {
  const [teamSize, setTeamSize] = useState('11–25 engineers');
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
      className="py-14 sm:py-20 lg:py-24 bg-[#f8fafc] scroll-mt-24"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
          {/* Left Navy Column */}
          <div className="lg:col-span-5 rounded-none bg-primary text-white p-6 sm:p-8 shadow-xl space-y-5 border border-navy-900">
            <div>
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-2">
                CORPORATE INQUIRIES
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2.5">
                Schedule a Technical Training Diagnostic
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Connect with our technical practice leaders to customize module depths,
                verify syllabus topics against your needs, and reserve dedicated cohort
                schedules.
              </p>
            </div>

            <div className="space-y-3.5 pt-2 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">
                    Direct Practice Consultation
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Speak directly with curriculum architects, not sales reps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">1-Business-Day Turnaround</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Receive customized technical syllabus outline within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">Campus or In-House</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Lodha iThink, Thane West facility or on-premises corporate deployment.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-none bg-navy-950/70 border border-navy-900 text-xs text-slate-300">
              <span className="text-[10px] font-mono uppercase text-accent font-bold block mb-1">
                ALLIANCE GUARANTEE
              </span>
              Technical programs co-certified by Mikado Solutions ensuring rigorous
              industry-standard learning and competence.
            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7">
            <Card className="p-5 sm:p-8 bg-white border border-slate-200/90 rounded-none shadow-card">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 border border-emerald-200">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-primary">
                    Inquiry Dispatched
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Thank you. Your training diagnostic inquiry has been routed to our
                    corporate practice leads. We will connect within one business day.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    className="mt-3 rounded-none"
                  >
                    Submit another inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-primary mb-1">
                        Full Name &amp; Corporate Title{' '}
                        <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Rajesh Sharma, VP Engineering"
                        className="w-full px-3.5 py-2.5 rounded-none bg-slate-50 border border-slate-200 text-xs sm:text-sm text-primary focus:bg-white focus:border-primary outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-primary mb-1">
                        Corporate Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="r.sharma@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-none bg-slate-50 border border-slate-200 text-xs sm:text-sm text-primary focus:bg-white focus:border-primary outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-primary mb-1">
                        Company / Entity Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="e.g. Bharat Financial Technologies"
                        className="w-full px-3.5 py-2.5 rounded-none bg-slate-50 border border-slate-200 text-xs sm:text-sm text-primary focus:bg-white focus:border-primary outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-primary mb-1">
                        Preferred Tech Track <span className="text-accent">*</span>
                      </label>
                      <select
                        value={formData.track}
                        onChange={(e) =>
                          setFormData({ ...formData, track: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-none bg-slate-50 border border-slate-200 text-xs sm:text-sm text-primary focus:bg-white focus:border-primary outline-none font-medium"
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

                  {/* Approximate Team Size */}
                  <div>
                    <label className="block text-xs font-semibold text-primary mb-2">
                      Approximate Team Size <span className="text-accent">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        '5–10 engineers',
                        '11–25 engineers',
                        '26–50 engineers',
                        '50+ Enterprise',
                      ].map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setTeamSize(size)}
                          className={`py-2 px-2 text-[11px] font-semibold border rounded-none text-center transition-all ${
                            teamSize === size
                              ? 'bg-primary text-white border-primary shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Format */}
                  <div>
                    <label className="block text-xs font-semibold text-primary mb-2">
                      Delivery Format <span className="text-accent">*</span>
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
                          className={`py-2 px-3 text-[11px] font-semibold border rounded-none text-center transition-all ${
                            deliveryFormat === format
                              ? 'bg-primary text-white border-primary shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {format}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">
                      Specific Technical Goals &amp; Timeline
                    </label>
                    <textarea
                      rows={3}
                      value={formData.goals}
                      onChange={(e) =>
                        setFormData({ ...formData, goals: e.target.value })
                      }
                      placeholder="Mention specific libraries, architecture bottlenecks, target deployment dates, or custom module requirements..."
                      className="w-full px-3.5 py-2.5 rounded-none bg-slate-50 border border-slate-200 text-xs sm:text-sm text-primary focus:bg-white focus:border-primary outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-none bg-gradient-to-r from-[#d8af3a] to-[#c59c25] hover:from-[#c59c25] hover:to-[#b38918] text-navy-950 font-heading font-bold text-xs sm:text-sm shadow-sm transition-all"
                  >
                    Submit Corporate Inquiry →
                  </button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrainingDiagnosticForm;
