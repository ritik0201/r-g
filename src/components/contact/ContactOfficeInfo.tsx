import React from 'react';
import { Building2, Phone, Mail, ExternalLink } from 'lucide-react';

/**
 * Thane Executive Office Info Component for Contact Page:
 * Address, Phone desk, routing channels, and sharp map preview.
 */
export const ContactOfficeInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-none border border-slate-200/90 p-5 sm:p-7 shadow-2xs space-y-5">
      <div>
        <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block mb-1">
          HEADQUARTERS
        </span>
        <h3 className="font-heading font-bold text-lg sm:text-xl text-primary">
          Thane Executive Office
        </h3>
      </div>

      <div className="space-y-4 pt-1">
        {/* Address */}
        <div className="flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-none bg-slate-100 text-primary flex items-center justify-center shrink-0 mt-0.5">
            <Building2 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-semibold text-xs sm:text-sm text-slate-900">
              Physical Address
            </h4>
            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
              R&amp;G Consultancy Services
              <br />
              Suite 402, Corporate Heights / Lodha iThink Techno Campus,
              <br />
              Ghodbunder Road, Thane (West), Maharashtra — 400607, India.
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-none bg-slate-100 text-primary flex items-center justify-center shrink-0 mt-0.5">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-semibold text-xs sm:text-sm text-slate-900">
              Phone Advisory Desk
            </h4>
            <p className="text-xs text-slate-700 mt-0.5 font-medium">
              <a
                href="tel:+912225804100"
                className="hover:text-primary transition-colors"
              >
                +91 (022) 2580 4100
              </a>{' '}
              /{' '}
              <a
                href="tel:+919820034812"
                className="hover:text-primary transition-colors"
              >
                +91 98200 34812
              </a>
            </p>
            <span className="text-[11px] text-slate-500 block mt-0.5">
              Mon – Fri • 9:30 AM – 6:30 PM IST
            </span>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-none bg-slate-100 text-primary flex items-center justify-center shrink-0 mt-0.5">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-semibold text-xs sm:text-sm text-slate-900">
              Direct Routing Channels
            </h4>
            <div className="text-xs space-y-0.5 mt-0.5">
              <a
                href="mailto:contact@rgconsultancy.in"
                className="block text-primary hover:text-accent font-medium transition-colors"
              >
                contact@rgconsultancy.in
              </a>
              <a
                href="mailto:sanjay@rgconsultancy.in"
                className="block text-primary hover:text-accent font-medium transition-colors"
              >
                sanjay@rgconsultancy.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Styled Map Preview Card with Sharp Edges */}
      <div className="relative rounded-none overflow-hidden border border-slate-300 shadow-inner bg-[#dbe6f0] aspect-[16/9]">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 400 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="220" fill="#e4ebf3" />
          <path
            d="M260 0 C250 40, 290 80, 270 140 C250 190, 310 220, 320 220 L400 220 L400 0 Z"
            fill="#bfdbfe"
            opacity="0.8"
          />
          <path
            d="M0 0 L150 0 C140 60, 110 110, 80 160 C50 200, 0 220, 0 220 Z"
            fill="#dcfce7"
            opacity="0.8"
          />
          <path
            d="M80 0 C130 50, 170 100, 210 150 C230 180, 240 220, 240 220"
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
          <circle cx="180" cy="110" r="14" fill="#0a2540" />
          <circle cx="180" cy="110" r="6" fill="#c9a227" />
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
            x="160"
            y="90"
            fill="#0a2540"
            fontSize="11"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            Thane
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
        </svg>

        {/* Overlays at the bottom of the map */}
        <div className="absolute inset-x-2.5 bottom-2.5 flex items-center justify-between gap-2">
          <span className="bg-primary/90 backdrop-blur text-white text-[10px] font-mono font-semibold px-2 py-0.5 rounded-none shadow-xs">
            Ghodbunder Tech Corridor
          </span>
          <a
            href="https://maps.google.com/?q=Lodha+iThink+Techno+Campus+Thane"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white/95 hover:bg-white text-primary text-[10px] font-bold px-2 py-0.5 rounded-none shadow-xs transition-colors border border-slate-200"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactOfficeInfo;
