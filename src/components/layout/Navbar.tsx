import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationLinks } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { Button } from '@/components/common/Button';
import { cn } from '@/lib/utils';

/**
 * Top navigation bar:
 * Features a clean, professional corporate wordmark logo (without the heavy navy box container),
 * authoritative Deep Navy desktop navigation, and a Deep Navy primary action button.
 */
export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, toggle, close } = useMobileMenu();

  // Track active section for indicator
  const sectionIds = navigationLinks.map((link) =>
    link.href.startsWith('#') ? link.href.slice(1) : link.id
  );
  const activeSection = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/80',
          isScrolled ? 'shadow-nav py-2.5 sm:py-3' : 'py-3 sm:py-4'
        )}
      >
        <div className="container-page flex items-center justify-between gap-3 sm:gap-4">
          {/* Brand Logo & Name - Clean professional typography without the box */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 shrink focus-visible:outline-primary group"
            aria-label={`${siteConfig.name} Home`}
          >
            <span className="font-heading font-black text-2xl sm:text-3xl text-primary tracking-tight group-hover:text-primary-light transition-colors shrink-0">
              R&amp;G
            </span>
            <div
              className="h-6 sm:h-7 w-px bg-slate-300 hidden xs:block shrink-0"
              aria-hidden="true"
            />
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-heading font-bold text-xs sm:text-sm md:text-base text-primary tracking-tight leading-tight truncate">
                {siteConfig.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 tracking-tight mt-0.5 hidden sm:block truncate">
                {siteConfig.subTagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navigationLinks.map((link) => {
              const targetId = link.href.startsWith('#') ? link.href.slice(1) : link.id;
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.id}
                  href={link.href}
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
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            {/* CTA Button: Authoritative Deep Navy */}
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex shadow-sm"
              icon={<ArrowRight className="w-4 h-4 ml-1" />}
              iconPosition="right"
            >
              Get in Touch
            </Button>

            {/* Mobile Hamburger Button - Minimum 44x44px ergonomic touch target */}
            <button
              type="button"
              onClick={toggle}
              className="md:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-primary hover:bg-slate-100 border border-slate-200 focus-visible:outline-primary shrink-0 transition-colors"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 z-40 bg-navy-950/40 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />

            {/* Slide-in Menu Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[300px] xs:max-w-xs sm:max-w-sm bg-white shadow-float border-l border-slate-200 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto md:hidden"
            >
              <div>
                {/* Header in Drawer */}
                <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-slate-200">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <span className="font-heading font-black text-xl sm:text-2xl text-primary tracking-tight shrink-0">
                      R&amp;G
                    </span>
                    <div className="h-5 sm:h-6 w-px bg-slate-200 shrink-0" />
                    <div className="min-w-0">
                      <span className="font-heading font-bold text-xs text-primary block leading-tight truncate">
                        {siteConfig.name}
                      </span>
                      <span className="text-[10px] text-slate-500 truncate block">
                        {siteConfig.subTagline}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={close}
                    className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg text-slate-500 hover:text-primary hover:bg-slate-100 shrink-0 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col py-5 sm:py-6 space-y-1">
                  {navigationLinks.map((link) => {
                    const targetId = link.href.startsWith('#')
                      ? link.href.slice(1)
                      : link.id;
                    const isActive = activeSection === targetId;

                    return (
                      <a
                        key={link.id}
                        href={link.href}
                        onClick={close}
                        className={cn(
                          'flex items-center justify-between px-3.5 sm:px-4 py-3 min-h-[44px] rounded-lg text-base font-medium transition-colors',
                          isActive
                            ? 'bg-slate-100 text-primary font-bold'
                            : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                        )}
                      >
                        <span>{link.label}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-accent" />}
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Footer CTA */}
              <div className="pt-5 sm:pt-6 border-t border-slate-200 space-y-4">
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  className="w-full justify-center min-h-[44px]"
                  onClick={close}
                  icon={<ArrowRight className="w-4 h-4 ml-1" />}
                >
                  Get in Touch
                </Button>
                <div className="text-xs text-slate-500 text-center space-y-1">
                  <p>{siteConfig.phone}</p>
                  <p className="break-all">{siteConfig.email}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
