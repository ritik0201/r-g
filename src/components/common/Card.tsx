import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'hover' | 'flat' | 'elevated' | 'navy';
}

/**
 * Universal Card component styled through theme tokens with variant support.
 */
export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className,
  ...props
}) => {
  const variantStyles = {
    default: 'card',
    hover: 'card card-hover cursor-pointer',
    flat: 'bg-white border border-border rounded-card p-6',
    elevated: 'bg-white rounded-card shadow-float border border-border p-6',
    navy: 'bg-primary text-white rounded-card p-6 border border-navy-800',
  };

  return (
    <div className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </div>
  );
};
