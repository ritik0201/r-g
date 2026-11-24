import React from 'react';
import { Building2, Phone, Clock, MapPin, Check } from 'lucide-react';
import { Container } from '@/components/common/Container';

/**
 * About Location Component:
 * Lodha iThink Techno Campus details with interactive map representation matching exact Figma design.
 */
export const AboutLocation: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc]/50 border-t border-slate-200/80">
      <Container>
        <div className="bg-white rounded-none border border-slate-200 shadow-md p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Location Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono">
                    HEADQUARTERS &amp; REGIONAL CORRIDOR
                  </span>
                </div>
                <h2 className="heading-section text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                  Anchored in Thane&apos;s Thriving Tech Belt
                </h2>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                Positioned along the high-growth Ghodbunder Road commercial corridor at Lodha
                iThink Techno Campus, R&amp;G operates at the nexus of Mumbai&apos;s corporate
                financial core and Thane&apos;s dynamic enterprise technology zones.
              </p>

              <div className="space-y-4 pt-1">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-none bg-sky-50 border border-sky-200 text-accent flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-primary">
                      Lodha iThink Techno Campus
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Ghodbunder Road, Thane West, Maharashtra 400607, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-none bg-sky-50 border border-sky-200 text-accent flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-primary">
                      Direct Advisory Desk
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      +91 (022) 5894 2100 • contact@rgconsultancy.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-none bg-sky-50 border border-sky-200 text-accent flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-primary">
                      Executive Working Hours
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Monday - Friday: 09:30 - 18:30 IST (In-Person &amp; Hybrid Briefings)
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Verification Check Pills */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-accent" />
                  <span>Central Connectivity</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-accent" />
                  <span>Dedicated Boardroom</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-accent" />
                  <span>SLA Desk</span>
                </div>
              </div>
            </div>

            {/* Right: Map Visual Card with Sharp Edges */}
            <div className="lg:col-span-6">
              <div className="relative rounded-none overflow-hidden border border-slate-300 shadow-md bg-[#dbe6f0] aspect-[16/11]">
                <svg
                  className="w-full h-full object-cover"
                  viewBox="0 0 400 240"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="400" height="240" fill="#e4ebf3" />
                  <path
                    d="M260 0 C250 40, 290 80, 270 140 C250 190, 310 240, 320 240 L400 240 L400 0 Z"
                    fill="#bfdbfe"
                    opacity="0.8"
                  />
                  <path
                    d="M0 0 L150 0 C140 60, 110 110, 80 160 C50 200, 0 240, 0 240 Z"
                    fill="#dcfce7"
                    opacity="0.8"
                  />
                  <path
                    d="M80 0 C130 50, 170 100, 210 150 C230 180, 240 240, 240 240"
                    stroke="#f59e0b"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 120 C80 110, 180 130, 260 110 C320 90, 400 130, 400 130"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <circle cx="180" cy="115" r="14" fill="#0a2540" />
                  <circle cx="180" cy="115" r="6" fill="#c9a227" />
                  <text
                    x="40"
                    y="70"
                    fill="#15803d"
                    fontSize="9"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                  >
                    Sanjay Gandhi National Park
                  </text>
                  <text
                    x="158"
                    y="92"
                    fill="#0a2540"
                    fontSize="11"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                  >
                    Thane ठाणे
                  </text>
                  <text
                    x="285"
                    y="60"
                    fill="#1e40af"
                    fontSize="9"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                  >
                    Thane Creek
                  </text>
                  <text
                    x="290"
                    y="180"
                    fill="#475569"
                    fontSize="8"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                  >
                    Dombivli
                  </text>
                  <text
                    x="240"
                    y="140"
                    fill="#475569"
                    fontSize="8"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                  >
                    Kasheli
                  </text>
                  <text
                    x="120"
                    y="180"
                    fill="#475569"
                    fontSize="8"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                  >
                    Kalwa
                  </text>
                </svg>

                {/* Overlays at the bottom of the map matching Figma */}
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 bg-white/95 backdrop-blur-sm p-2 border border-slate-200">
                  <span className="text-[11px] font-bold text-primary flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent" /> Thane Corridor Gateway
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-slate-500">
                    Direct Highway Access
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutLocation;
