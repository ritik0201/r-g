import React from 'react';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

/**
 * Thane Executive Office Info Component for Contact Page:
 * Address, Phone desk, routing channels, and sharp vector map preview matching exact Figma design.
 */
export const ContactOfficeInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-none border border-slate-200/90 p-6 sm:p-7 shadow-2xs space-y-5">
      <div>
        <span className="text-[11px] font-mono font-bold tracking-widest text-[#caa264] uppercase block mb-1">
          HEADQUARTERS
        </span>
        <h3 className="font-heading font-bold text-lg sm:text-xl text-primary">
          Thane Executive Office
        </h3>
      </div>

      <div className="space-y-4 pt-1">
        {/* Address */}
        <div className="flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-none bg-sky-50 border border-sky-100/80 text-sky-800 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
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
          <div className="w-8 h-8 rounded-none bg-sky-50 border border-sky-100/80 text-sky-800 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-semibold text-xs sm:text-sm text-slate-900">
              Phone Advisory Desk
            </h4>
            <p className="text-xs text-slate-700 mt-0.5 font-medium font-mono">
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
            <span className="text-[11px] text-slate-500 block mt-0.5 font-sans">
              Mon – Fri • 9:30 AM – 6:30 PM IST
            </span>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3.5">
          <div className="w-8 h-8 rounded-none bg-sky-50 border border-sky-100/80 text-sky-800 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-semibold text-xs sm:text-sm text-slate-900">
              Direct Routing Channels
            </h4>
            <div className="text-xs space-y-0.5 mt-0.5">
              <a
                href="mailto:contact@rgconsultancy.in"
                className="block text-primary hover:text-[#caa264] font-medium transition-colors"
              >
                contact@rgconsultancy.in
              </a>
              <a
                href="mailto:sanjay@rgconsultancy.in"
                className="block text-primary hover:text-[#caa264] font-medium transition-colors"
              >
                sanjay@rgconsultancy.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Styled Vector Map Matching Google Maps Layout in Figma */}
      <div className="relative rounded-none overflow-hidden border border-slate-300 shadow-inner bg-[#e2ecf5] aspect-[16/10]">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 400 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Map Base */}
          <rect width="400" height="240" fill="#e5edf5" />

          {/* Green Reserves / Hills */}
          <path
            d="M0 0 L160 0 C150 70, 120 120, 80 170 C40 210, 0 240, 0 240 Z"
            fill="#d1fae5"
            opacity="0.9"
          />
          <path
            d="M70 20 C110 50, 130 90, 110 140 C90 180, 50 200, 30 200 Z"
            fill="#bbf7d0"
            opacity="0.6"
          />

          {/* Waterways / Creek */}
          <path
            d="M260 0 C240 50, 280 90, 260 150 C240 200, 290 240, 300 240 L400 240 L400 0 Z"
            fill="#bfdbfe"
            opacity="0.85"
          />

          {/* Major Expressways / Arterial Highways */}
          <path
            d="M90 0 C140 60, 180 110, 220 160 C240 190, 250 240, 250 240"
            stroke="#f59e0b"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M0 130 C90 120, 190 140, 270 120 C330 100, 400 135, 400 135"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M130 40 C170 80, 210 130, 240 180"
            stroke="#e2e8f0"
            strokeWidth="2.5"
          />

          {/* Location Marker at Lodha iThink Ghodbunder */}
          <circle cx="185" cy="118" r="14" fill="#0c192c" />
          <circle cx="185" cy="118" r="6" fill="#caa264" />
          <circle cx="185" cy="118" r="2" fill="#ffffff" />

          {/* City / Landmark Labels */}
          <text
            x="30"
            y="65"
            fill="#15803d"
            fontSize="8.5"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            Sanjay Gandhi National Park
          </text>
          <text
            x="50"
            y="110"
            fill="#16a34a"
            fontSize="7.5"
            fontFamily="sans-serif"
          >
            Yeoor Waterfall
          </text>
          <text
            x="162"
            y="96"
            fill="#0c192c"
            fontSize="11"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            Thane ठाणे
          </text>
          <text
            x="148"
            y="142"
            fill="#475569"
            fontSize="7.5"
            fontFamily="sans-serif"
          >
            Thane Station West
          </text>
          <text
            x="245"
            y="135"
            fill="#475569"
            fontSize="8"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            Kasheli
          </text>
          <text
            x="125"
            y="185"
            fill="#475569"
            fontSize="8"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            Kalwa
          </text>
          <text
            x="295"
            y="195"
            fill="#475569"
            fontSize="7.5"
            fontFamily="sans-serif"
          >
            Dombivli
          </text>
        </svg>

        {/* Overlays at the bottom of the map matching Figma */}
        <div className="absolute inset-x-2.5 bottom-2.5 flex items-center justify-between gap-2">
          <span className="bg-[#0c192c]/95 backdrop-blur text-white text-[10px] font-mono font-semibold px-2 py-0.5 rounded-none shadow-xs">
            Ghodbunder Tech Corridor
          </span>
          <a
            href="https://maps.google.com/?q=Lodha+iThink+Techno+Campus+Thane"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-white/95 hover:bg-white text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-none shadow-xs transition-colors border border-slate-200"
          >
            <MapPin className="w-3 h-3 text-[#caa264]" />
            <span>Open in Google Maps</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactOfficeInfo;
