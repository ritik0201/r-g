import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { navigationLinks } from '@/data/navigation';

/**
 * Enterprise Footer matching the original site's exact content and structure,
 * styled with the elevated design system and perfect typography.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-navy-50/80 border-t border-border pt-16 pb-12">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-border">
          {/* Col 1: Brand & Partner Attribution (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-accent font-heading font-black text-lg shadow-sm">
                {siteConfig.shortName}
              </div>
              <span className="font-heading font-bold text-xl text-primary tracking-tight">
                {siteConfig.name}
              </span>
            </div>

            <p className="font-medium text-sm text-text-muted">{siteConfig.tagline}</p>

            <div className="space-y-1.5 pt-2 text-xs text-text-muted">
              <p>
                <span className="font-semibold text-primary">
                  Implementation Partner:
                </span>{' '}
                {siteConfig.implementationPartner}
              </p>
              <p>
                <span className="font-semibold text-primary">
                  Staffing Franchise Partner:
                </span>{' '}
                {siteConfig.staffingPartner}
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-base text-primary">Navigate</h4>
            <ul className="space-y-2.5 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-accent transition-colors flex items-center gap-1 group font-medium"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-base text-primary">Contact</h4>
            <ul className="space-y-3.5 text-sm text-text-muted">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-primary transition-colors font-medium text-text"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-colors font-medium text-text"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed">{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>{siteConfig.copyright}</p>
          <div className="flex items-center gap-2.5">
            <a href="#privacy" className="hover:text-accent transition-colors">
              Privacy
            </a>
            <span className="text-text-muted/60" aria-hidden="true">
              •
            </span>
            <a href="#terms" className="hover:text-accent transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
