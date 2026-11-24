import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Briefcase, GraduationCap, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Mobile Bottom Navigation Bar:
 * Fixed bottom bar on mobile viewports (< 640px) providing one-tap navigation.
 * Matches exact mobile screenshot with dotted top border, sharp clean styling,
 * and 4 primary icons: Home, Services, Training, Contact.
 */
export const MobileBottomNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/', icon: Building2 },
    { label: 'Services', href: '/services', icon: Briefcase },
    { label: 'Training', href: '/training', icon: GraduationCap },
    { label: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t-2 border-dotted border-sky-400 py-2 px-3 sm:hidden shadow-[0_-2px_12px_rgba(0,0,0,0.06)]"
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
                'flex flex-col items-center justify-center py-1 px-3 min-w-[56px] transition-colors',
                isActive ? 'text-primary font-bold' : 'text-slate-600 font-medium'
              )}
            >
              <Icon
                className={cn(
                  'w-5 h-5 mb-1 transition-transform',
                  isActive ? 'text-primary stroke-[2.2]' : 'text-slate-500 stroke-[1.8]'
                )}
              />
              <span
                className={cn(
                  'text-[10px] tracking-tight leading-none',
                  isActive ? 'text-primary font-bold' : 'text-slate-600'
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
