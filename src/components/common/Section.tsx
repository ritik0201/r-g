import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  variant?: 'default' | 'alt' | 'navy' | 'lavender';
}

/**
 * Semantic section wrapper component with theme background variants.
 */
export const Section: React.FC<SectionProps> = ({
  children,
  id,
  variant = 'default',
  className,
  ...props
}) => {
  const variantStyles = {
    default: 'section bg-surface',
    alt: 'section-alt bg-surface-alt',
    lavender: 'py-20 lg:py-24 bg-lavender-100',
    navy: 'py-20 lg:py-24 bg-primary text-white',
  };

  return (
    <section id={id} className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </section>
  );
};
