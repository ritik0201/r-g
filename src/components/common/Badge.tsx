import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'navy' | 'lavender' | 'neutral' | 'success';
  size?: 'sm' | 'md';
}

/**
 * Reusable Badge component for status, chips, and micro-labels.
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  className,
  ...props
}) => {
  const variantStyles = {
    gold: 'bg-gold-50 text-gold-700 border border-gold-200',
    navy: 'bg-navy-50 text-navy-900 border border-navy-200',
    lavender: 'bg-lavender-100 text-navy-900 border border-lavender-200',
    neutral: 'bg-grey-100 text-grey-700 border border-grey-200',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 tracking-wider',
    md: 'text-xs px-2.5 py-1 tracking-wide',
  };

  return (
    <span
      className={cn(
        'badge inline-flex items-center font-bold uppercase rounded',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
