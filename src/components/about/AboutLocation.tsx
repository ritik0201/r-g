import React from 'react';
import { Building2, MapPin, Phone, ExternalLink } from 'lucide-react';
import { Container } from '@/components/common/Container';

/**
 * About Location Component:
 * Lodha iThink Techno Campus details with sharp map representation.
 */
export const AboutLocation: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-t border-slate-200/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Location Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="eyebrow text-xs font-bold text-accent tracking-widest uppercase font-mono mb-2 block">
                STRATEGIC LOCATION &amp; PRESENCE
              </span>
              <h2 className="heading-section text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                Anchored in Thane&apos;s Thriving Tech Belt
              </h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              Positioned strategically in Lodha iThink Techno Campus along the Ghodbunder
              IT corridor, R&amp;G operates at the epicenter of Mumbai Metropolitan
              Region&apos;s booming industrial and technology expansion.
            </p>

            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-none bg-sky-50 border border-sky-200 text-accent flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-xs sm:text-sm text-primary">
                    Lodha iThink Techno Campus
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Suite 402, Corporate Heights / Pokhran Road No. 2, Ghodbunder Road,
                    Thane (West), Maharashtra — 400607
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-none bg-sky-50 border border-sky-200 text-accent flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-xs sm:text-sm text-primary">
                    Direct Advisory Desk
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    +91 (022) 2580 4100 • Mon – Fri, 9:30 AM – 6:30 PM IST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-none bg-sky-50 border border-sky-200 text-accent flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-xs sm:text-sm text-primary">
                    Specialized MMR Engagements
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Thane West • BKC Mumbai • Navi Mumbai • Andheri East Tech Hubs
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-none bg-slate-100 text-primary border border-slate-200">
                On-site Consultation
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-none bg-slate-100 text-primary border border-slate-200">
                Hybrid Delivery Model
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-none bg-slate-100 text-primary border border-slate-200">
                MMR Coverage
              </span>
            </div>
          </div>

          {/* Right: Map Visual Card with Sharp Edges */}
          <div className="lg:col-span-6">
            <div className="relative rounded-none overflow-hidden border border-slate-300 shadow-xl bg-slate-100 aspect-[4/3]">
              <div className="absolute inset-0 bg-[#e5ecf4] flex flex-col items-center justify-center p-6 text-center">
                <div className="w-14 h-14 rounded-none bg-white shadow-lg border border-slate-200 flex items-center justify-center mb-3 text-accent">
                  <MapPin className="w-7 h-7 fill-accent text-primary" />
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-primary mb-1">
                  Lodha iThink Techno Campus
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mb-4 leading-relaxed">
                  Ghodbunder Tech Corridor, Thane (West) — Connected to Eastern Express
                  Highway &amp; Western Express Highway
                </p>
                <a
                  href="https://maps.google.com/?q=Lodha+iThink+Techno+Campus+Thane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-none bg-primary text-white hover:bg-primary-light transition-colors shadow-sm"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutLocation;
