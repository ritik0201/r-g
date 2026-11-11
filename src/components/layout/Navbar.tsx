import React, { useState, useEffect } from 'react';
import { User, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationLinks } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { Button } from '@/components/common/Button';
import { cn } from '@/lib/utils';

/**
 * Top sticky navigation bar matching Google Stitch design specifications.
 * Includes scroll detection, active indicator, account avatar, and animated mobile drawer.
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
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-border',
          isScrolled ? 'shadow-nav py-3' : 'py-4'
        )}
      >
        <div className="container-page flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-accent"
            aria-label={`${siteConfig.name} Home`}
          >
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-accent font-heading font-black text-xl shadow-sm border border-navy-800">
              R&amp;G
            </div>
            <span className="font-heading font-bold text-lg md:text-xl text-primary tracking-tight hidden sm:inline-block">
              {siteConfig.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7" aria-label="Main Navigation">
            {navigationLinks.map((link) => {
              const targetId = link.href.startsWith('#') ? link.href.slice(1) : link.id;
              const isActive = activeSection === targetId;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={cn(
                    'relative py-1 text-sm font-medium transition-colors hover:text-primary',
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-text-muted hover:text-primary'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* CTA Button */}
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="hidden md:inline-flex shadow-sm"
              icon={<ArrowRight className="w-4 h-4 ml-1" />}
              iconPosition="right"
            >
              Get in Touch
            </Button>

            {/* Account / User Avatar */}
            <button
              type="button"
              className="w-9 h-9 rounded-full bg-primary hover:bg-navy-800 text-white flex items-center justify-center transition-all duration-200 shadow-sm focus-visible:outline-accent"
              aria-label="User Account"
            >
              <User className="w-4 h-4 text-white" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={toggle}
              className="xl:hidden p-2 rounded-lg text-primary hover:bg-navy-50 border border-border focus-visible:outline-accent"
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
              className="fixed inset-0 z-40 bg-navy-950/40 backdrop-blur-sm xl:hidden"
              aria-hidden="true"
            />

            {/* Slide-in Menu Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-float border-l border-border p-6 flex flex-col justify-between overflow-y-auto xl:hidden"
            >
              <div>
                {/* Header in Drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-accent font-heading font-black text-lg">
                      R&amp;G
                    </div>
                    <span className="font-heading font-bold text-base text-primary">
                      {siteConfig.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={close}
                    className="p-2 rounded-lg text-text-muted hover:text-primary hover:bg-navy-50"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col py-6 space-y-1">
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
                          'flex items-center justify-between px-4 py-3 rounded-button text-base font-medium transition-colors',
                          isActive
                            ? 'bg-lavender-100 text-primary font-bold'
                            : 'text-text-muted hover:text-primary hover:bg-navy-50'
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
              <div className="pt-6 border-t border-border space-y-4">
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  onClick={close}
                  icon={<ArrowRight className="w-4 h-4 ml-1" />}
                >
                  Get in Touch
                </Button>
                <div className="text-xs text-text-muted text-center">
                  <p>{siteConfig.phone}</p>
                  <p>{siteConfig.email}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
