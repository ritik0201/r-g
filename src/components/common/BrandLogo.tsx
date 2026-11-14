import React from 'react';
import { cn } from '@/lib/utils';

export interface BrandLogoProps {
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Institutional Brand Logo:
 * Matches the reference corporate wordmark:
 * - Line 1: Bold serif 'R', warm golden '&', and bold serif 'G'
 * - Line 2: Monospaced/wide-tracked sans-serif 'CONSULTANCY SERVICES'
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  theme = 'light',
  size = 'md',
  className,
}) => {
  const isDark = theme === 'dark';

  const sizes = {
    sm: {
      headline: 'text-xl sm:text-2xl',
      subline: 'text-[8px] sm:text-[9px] tracking-[0.22em] mt-0.5',
      ampersand: 'text-lg sm:text-xl mx-0.5',
    },
    md: {
      headline: 'text-2xl sm:text-[1.75rem] md:text-3xl',
      subline: 'text-[8.5px] sm:text-[9.5px] md:text-[10px] tracking-[0.24em] mt-0.5',
      ampersand: 'text-xl sm:text-2xl md:text-[1.65rem] mx-1',
    },
    lg: {
      headline: 'text-3xl sm:text-4xl md:text-[2.65rem]',
      subline: 'text-[10.5px] sm:text-xs md:text-[13px] tracking-[0.26em] mt-1',
      ampersand: 'text-2xl sm:text-3xl md:text-4xl mx-1.5',
    },
  };

  const currentSize = sizes[size];

  return (
    <div className={cn('flex flex-col items-start select-none leading-none', className)}>
      <div
        className={cn(
          'flex items-baseline font-heading font-black tracking-tight leading-none',
          currentSize.headline,
          isDark ? 'text-white' : 'text-primary'
        )}
      >
        <span>R</span>
        <span
          className={cn(
            'font-serif italic font-medium',
            currentSize.ampersand,
            isDark ? 'text-gold-400' : 'text-[#b88c29]'
          )}
        >
          &amp;
        </span>
        <span>G</span>
      </div>
      <span
        className={cn(
          'font-sans font-bold uppercase leading-tight font-body',
          currentSize.subline,
          isDark ? 'text-slate-300' : 'text-slate-700'
        )}
      >
        CONSULTANCY SERVICES
      </span>
    </div>
  );
};

export default BrandLogo;
