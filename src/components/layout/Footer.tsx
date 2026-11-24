import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ShieldCheck } from 'lucide-react';
import { BrandLogo } from '@/components/common/BrandLogo';

/**
 * Enterprise Footer:
 * - Desktop: 4-column institutional navy footer matching Figma.
 * - Mobile: Clean light-background layout with Thane Office card matching exact mobile screenshot.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="w-full sm:bg-[#0a192b] sm:text-white bg-[#fbf9f5] text-slate-800 border-t border-slate-200 sm:border-navy-950 pt-10 sm:pt-16 pb-20 sm:pb-12">
      <div className="container-page">
        {/* =========================================================================
            DESKTOP FOOTER GRID (Hidden on mobile, visible sm+)
           ========================================================================= */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 sm:pb-14 border-b border-navy-800/80">
          {/* Col 1: Brand & Headquarters (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center group focus-visible:outline-white py-1"
              aria-label="R&G Consultancy Services Home"
            >
              <BrandLogo theme="dark" size="md" />
            </Link>

            <p className="font-medium text-xs sm:text-sm text-slate-300 max-w-xs leading-relaxed">
              Aligning technology and talent with business growth.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#caa264] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  Ghodbunder Road / Lodha iThink Techno Campus, Thane West, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#caa264] shrink-0" />
                <a
                  href="tel:+912258942100"
                  className="hover:text-gold-300 transition-colors font-medium text-white"
                >
                  +91 (022) 5894 2100
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-300">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
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
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center font-medium"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Practice Areas (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-300">
              PRACTICE AREAS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: 'IT Consultancy', href: '/services#it-consultancy' },
                { label: 'HR & Executive Staffing', href: '/services#hr-staffing' },
                { label: 'Software Projects', href: '/services#software-projects' },
                { label: 'Corporate IT Training', href: '/services#corporate-training' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-white transition-colors inline-flex items-center font-medium"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Strategic Alliances & SLA (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-300">
              STRATEGIC ALLIANCES
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li className="hover:text-white transition-colors">Talent Corner HR Services</li>
              <li className="hover:text-white transition-colors">Simplified IT Solutions</li>
              <li className="hover:text-white transition-colors">Mikado Solutions</li>
            </ul>

            <div className="p-3 bg-navy-900/90 border border-navy-800 rounded-none space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#caa264] shrink-0" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300">
                  SLA GUARANTEE
                </span>
              </div>
              <p className="text-xs text-slate-400 pl-5.5">
                Response within 1 business day
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MOBILE-SPECIFIC LIGHT FOOTER LAYOUT (Matching mobile screenshot)
           ========================================================================= */}
        <div className="sm:hidden space-y-5 pb-6">
          {/* Brand header on mobile */}
          <div className="text-right">
            <h3 className="font-heading font-black text-xl text-primary leading-tight">
              R&amp;G
              <br />
              Consultancy
            </h3>
          </div>

          <p className="text-xs text-slate-600 italic leading-relaxed">
            &ldquo;Aligning technology and talent with business growth.&rdquo;
          </p>

          {/* Nav links row */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-slate-700">
            <Link to="/" className="hover:text-[#caa264] transition-colors">
              Home
            </Link>
            <Link to="/services" className="hover:text-[#caa264] transition-colors">
              Services
            </Link>
            <Link to="/training" className="hover:text-[#caa264] transition-colors">
              Training
            </Link>
            <Link to="/about" className="hover:text-[#caa264] transition-colors">
              About &amp; Partners
            </Link>
            <Link to="/contact" className="hover:text-[#caa264] transition-colors">
              Contact
            </Link>
          </div>

          {/* Thane Office Box matching mobile screenshot */}
          <div className="w-full bg-[#edf5fd] rounded-none p-4 text-left border border-sky-100 space-y-1 shadow-2xs">
            <span className="text-xs font-bold text-primary block">
              Thane Office
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Lodha iThink Techno Campus, Thane (W), Maharashtra 400607
            </p>
            <a
              href="tel:+912258942100"
              className="text-xs font-semibold text-sky-800 hover:text-primary transition-colors block pt-0.5"
            >
              +91 (022) 5894 2100
            </a>
          </div>

          {/* Legal and Copyright on mobile */}
          <div className="pt-2 text-[11px] text-slate-500 space-y-1">
            <div className="flex items-center gap-3">
              <Link to="/contact" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
            <p>© 2024 R&amp;G Consultancy Services. All rights reserved.</p>
          </div>
        </div>

        {/* Desktop Bottom Bar (Hidden on mobile) */}
        <div className="hidden sm:flex pt-6 sm:pt-8 flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© 2024 R&amp;G Consultancy Services. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hover:text-[#caa264] transition-colors py-1">
              Privacy Policy
            </Link>
            <span className="text-slate-600" aria-hidden="true">
              |
            </span>
            <Link to="/contact" className="hover:text-[#caa264] transition-colors py-1">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
