import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { BrandLogo } from '@/components/common/BrandLogo';

/**
 * Enterprise Footer:
 * Dual-optimized:
 * - Desktop: Deep Navy institutional multi-column structure
 * - Mobile: Clean centered card layout matching the reference mobile screenshots
 */
export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary text-white border-t border-navy-950 pt-12 sm:pt-16 pb-20 sm:pb-12">
      <div className="container-page">
        {/* Desktop Footer Grid (Hidden on small mobile, visible on sm and up) */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-14 border-b border-navy-800">
          {/* Col 1: Brand & Partner Attribution (5 cols) */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center group focus-visible:outline-white py-1"
              aria-label={`${siteConfig.name} Home`}
            >
              <BrandLogo theme="dark" size="md" />
            </Link>

            <p className="font-medium text-xs sm:text-sm text-slate-300 max-w-sm">
              {siteConfig.tagline}
            </p>

            <div className="space-y-1.5 pt-1 text-xs text-slate-400">
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
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="font-heading font-bold text-base text-white">Navigate</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Training', href: '/training' },
                { label: 'About & Partners', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-accent transition-colors inline-flex items-center py-1 font-medium"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <h4 className="font-heading font-bold text-base text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-300">
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
                  className="hover:text-gold-300 transition-colors font-medium text-white break-all sm:break-normal"
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

        {/* Mobile-Specific Centered Footer Layout (matches screenshots) */}
        <div className="sm:hidden flex flex-col items-center text-center space-y-6 pb-6 border-b border-navy-800">
          <Link to="/" aria-label="Home">
            <BrandLogo theme="dark" size="md" className="items-center" />
          </Link>

          <p className="text-xs text-slate-300 italic max-w-xs leading-relaxed">
            &ldquo;Aligning technology and talent with business growth.&rdquo;
          </p>

          {/* Links row */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-300">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/services" className="hover:text-accent transition-colors">
              Services
            </Link>
            <Link to="/training" className="hover:text-accent transition-colors">
              Training
            </Link>
            <Link to="/about" className="hover:text-accent transition-colors">
              About &amp; Partners
            </Link>
            <Link to="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          {/* Thane Office Box */}
          <div className="w-full bg-[#16273e] rounded-xl p-4 text-left border border-navy-700/80 space-y-1">
            <span className="text-[11px] font-bold text-accent uppercase tracking-wider block">
              Thane Office
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Lodha iThink Techno Campus, Thane (W), Maharashtra 400607
            </p>
            <a
              href="tel:+912225804100"
              className="text-xs font-semibold text-white hover:text-accent transition-colors block pt-1"
            >
              +91 (022) 2580 4100
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <p>© 2026 R&amp;G Consultancy Services. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hover:text-accent transition-colors py-1">
              Privacy Policy
            </Link>
            <span className="text-slate-600" aria-hidden="true">
              •
            </span>
            <Link to="/contact" className="hover:text-accent transition-colors py-1">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
