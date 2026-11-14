import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, PhoneCall, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationLinks } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { Button } from '@/components/common/Button';
import { BrandLogo } from '@/components/common/BrandLogo';
import { cn } from '@/lib/utils';

/**
 * Top Navigation Bar:
 * Features institutional brand wordmark, desktop navigation, and a refined mobile drawer
 * matching the user's mobile reference screenshots.
 */
export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, toggle, close } = useMobileMenu();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    close();
  }, [location.pathname, close]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/80',
          isScrolled ? 'shadow-nav py-2.5 sm:py-3' : 'py-3 sm:py-4'
        )}
      >
        <div className="container-page flex items-center justify-between gap-3 sm:gap-4">
          {/* Brand Logo - Institutional wordmark */}
          <Link
            to="/"
            className="flex items-center min-w-0 shrink focus-visible:outline-primary group py-0.5"
            aria-label={`${siteConfig.name} Home`}
          >
            <BrandLogo theme="light" size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-7 lg:gap-8"
            aria-label="Main Navigation"
          >
            {navigationLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.href);

              return (
                <Link
                  key={link.id}
                  to={link.href}
                  className={cn(
                    'relative py-1 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-primary font-bold'
                      : 'text-slate-600 hover:text-primary'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* CTA Button (Desktop) */}
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex shadow-sm rounded-none"
              icon={<ArrowRight className="w-4 h-4 ml-1" />}
              iconPosition="right"
            >
              Get in Touch
            </Button>

            {/* Mobile Header Quick Dial Button */}
            <Link
              to="/contact"
              className="md:hidden w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-light transition-colors shadow-sm"
              aria-label="Contact advisory desk"
            >
              <PhoneCall className="w-4 h-4" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={toggle}
              className="md:hidden p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg text-primary hover:bg-slate-100 border border-slate-200 focus-visible:outline-primary shrink-0 transition-colors"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Matches user mobile screenshot) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 z-50 bg-navy-950/50 backdrop-blur-xs md:hidden"
              aria-hidden="true"
            />

            {/* Slide-in Menu Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[280px] xs:max-w-[300px] bg-white shadow-2xl border-l border-slate-200 p-6 flex flex-col justify-between overflow-y-auto md:hidden"
            >
              <div>
                {/* Header in Drawer with Close Button */}
                <div className="flex items-center justify-end pb-4 border-b border-slate-100">
                  <button
                    type="button"
                    onClick={close}
                    className="p-1.5 text-slate-400 hover:text-primary rounded-md hover:bg-slate-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links List */}
                <nav className="flex flex-col py-6 space-y-3">
                  {[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Training', href: '/training' },
                    { label: 'About & Partners', href: '/about' },
                    { label: 'Contact', href: '/contact' },
                  ].map((link) => {
                    const isActive =
                      link.href === '/'
                        ? location.pathname === '/'
                        : location.pathname.startsWith(link.href);

                    return (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={close}
                        className={cn(
                          'text-base font-semibold py-1.5 transition-colors block text-left',
                          isActive
                            ? 'text-primary font-bold'
                            : 'text-slate-700 hover:text-primary'
                        )}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>

                {/* Golden "Book a consultation" button */}
                <Link
                  to="/contact"
                  onClick={close}
                  className="w-full bg-[#d8af3a] hover:bg-[#c59c25] text-navy-950 font-heading font-bold text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Calendar className="w-4 h-4 text-navy-950" />
                  <span>Book a consultation</span>
                </Link>
              </div>

              {/* Drawer Footer Box (Thane Office) */}
              <div className="pt-6 border-t border-slate-100">
                <div className="bg-[#eef4fb] rounded-xl p-3.5 text-left border border-blue-100/80">
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                    Thane Office
                  </span>
                  <a
                    href="mailto:contact@rgconsultancy.in"
                    className="text-xs font-semibold text-primary hover:underline block break-all"
                  >
                    advisory@rgconsultancy.com
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
