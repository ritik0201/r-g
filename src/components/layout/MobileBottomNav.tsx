import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Layers, GraduationCap, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Mobile Bottom Navigation Bar:
 * Fixed bottom bar on mobile viewports (< 768px) providing one-tap access to primary pages.
 * Matches reference screenshots: Home, Services, Training, Contact.
 */
export const MobileBottomNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Services', href: '/services', icon: Layers },
    { label: 'Training', href: '/training', icon: GraduationCap },
    { label: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#fcfcfb]/95 backdrop-blur-md border-t border-slate-200/90 py-1.5 px-3 md:hidden shadow-[0_-2px_10px_rgba(0,0,0,0.04)]"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive =
            item.href === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'flex flex-col items-center justify-center py-1 px-3 min-w-[56px] min-h-[44px] transition-colors rounded-lg',
                isActive
                  ? 'text-primary font-bold'
                  : 'text-slate-500 hover:text-primary font-medium'
              )}
            >
              <Icon
                className={cn(
                  'w-5 h-5 mb-0.5 transition-transform',
                  isActive ? 'text-primary scale-110' : 'text-slate-400'
                )}
              />
              <span
                className={cn(
                  'text-[10px] tracking-tight leading-none',
                  isActive ? 'text-primary font-bold' : 'text-slate-500'
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;

