import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide';
}

/**
 * Centered responsive container that enforces max-width and margins from theme tokens.
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'default',
  className,
  ...props
}) => {
  const sizeClasses = {
    default: 'container-page',
    narrow: 'max-w-4xl mx-auto px-5 sm:px-8',
    wide: 'max-w-[1440px] mx-auto px-5 sm:px-8',
  };

  return (
    <div className={cn(sizeClasses[size], className)} {...props}>
      {children}
    </div>
  );
};
