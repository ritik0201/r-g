import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
  to?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

/**
 * Reusable variant-driven Button component styled with theme tokens.
 * Supports standard button, external <a> links with `href`, and SPA navigation with `to`.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  to,
  icon,
  iconPosition = 'right',
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
  };

  const combinedClass = cn('btn', variantClasses[variant], sizeClasses[size], className);

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="inline-flex shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="inline-flex shrink-0">{icon}</span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass} onClick={props.onClick as any}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClass} onClick={props.onClick as any}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {content}
    </button>
  );
};
