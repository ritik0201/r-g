import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { navigationLinks } from '@/data/navigation';

/**
 * Enterprise Footer:
 * Anchored in authoritative Deep Navy with crisp White typography,
 * subtle Golden accents, and a clean wordmark logo (without the heavy box).
 */
export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary text-white border-t border-navy-950 pt-16 pb-12">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-navy-800">
          {/* Col 1: Brand & Partner Attribution (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <span className="font-heading font-black text-2xl md:text-3xl text-white tracking-tight">
                R&amp;G
              </span>
              <div className="h-7 w-px bg-navy-700" aria-hidden="true" />
              <div className="flex flex-col justify-center">
                <span className="font-heading font-bold text-base text-white tracking-tight leading-tight">
                  {siteConfig.name}
                </span>
                <span className="text-[11px] font-medium text-slate-400 tracking-tight mt-0.5">
                  {siteConfig.subTagline}
                </span>
              </div>
            </div>

            <p className="font-medium text-sm text-slate-300 max-w-sm">
              {siteConfig.tagline}
            </p>

            <div className="space-y-1.5 pt-2 text-xs text-slate-400">
              <p>
                <span className="font-semibold text-white">Implementation Partner:</span>{' '}
                {siteConfig.implementationPartner}
              </p>
              <p>
                <span className="font-semibold text-white">
                  Staffing Franchise Partner:
                </span>{' '}
                {siteConfig.staffingPartner}
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-base text-white">Navigate</h4>
            <ul className="space-y-2.5 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-gold-300 transition-colors flex items-center gap-1 group font-medium"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-base text-white">Contact</h4>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-gold-300 transition-colors font-medium text-white"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-gold-300 transition-colors font-medium text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  {siteConfig.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{siteConfig.copyright}</p>
          <div className="flex items-center gap-2.5">
            <a href="#privacy" className="hover:text-gold-300 transition-colors">
              Privacy
            </a>
            <span className="text-slate-600" aria-hidden="true">
              •
            </span>
            <a href="#terms" className="hover:text-gold-300 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
