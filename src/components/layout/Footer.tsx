import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { navigationLinks } from '@/data/navigation';
import { partnersData } from '@/data/partners';
import { Badge } from '@/components/common/Badge';

/**
 * Enterprise Footer component pulling static values exclusively from typed data files.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-navy-50/60 border-t border-border pt-16 pb-12">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-border">
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-accent font-heading font-black text-lg shadow-sm">
                R&amp;G
              </div>
              <span className="font-heading font-bold text-xl text-primary tracking-tight">
                {siteConfig.name}
              </span>
            </div>

            <p className="text-text-muted text-base leading-relaxed max-w-sm">
              {siteConfig.tagline}
            </p>

            <div className="pt-2">
              <Badge variant="navy" size="sm" className="bg-white border-border">
                <ShieldCheck className="w-3.5 h-3.5 text-accent mr-1" />
                {siteConfig.scaleBadge}
              </Badge>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-base text-primary">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
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
                  className="hover:text-primary transition-colors font-medium text-text break-all"
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

          {/* Col 4: Strategic Partnerships & Accreditations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-base text-primary">
              Partnerships &amp; Accreditations
            </h4>
            <div className="space-y-2.5">
              {partnersData.map((partner) => (
                <div
                  key={partner.id}
                  className="p-3 bg-white rounded-lg border border-border shadow-[0_2px_8px_0_rgba(11,31,58,0.03)] flex flex-col justify-between"
                >
                  <span className="text-[10px] uppercase font-bold text-accent tracking-wider">
                    {partner.role}
                  </span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs font-bold text-primary">{partner.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-text-muted" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>{siteConfig.copyright}</p>
          <div className="flex items-center gap-6">
            {siteConfig.legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
