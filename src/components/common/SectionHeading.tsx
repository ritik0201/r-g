import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  headingTag?: 'h1' | 'h2' | 'h3';
  accentText?: string;
}

/**
 * Standard Section Heading component with eyebrow, title and subtext.
 * Clean White -> Deep Navy -> Gold accent styling.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  heading,
  subtext,
  subtitle,
  align = 'center',
  className,
  headingTag: HeadingTag = 'h2',
  accentText,
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto text-center',
    right: 'text-right items-end ml-auto text-right',
  };

  const displayText = subtext || subtitle;

  return (
    <div className={cn('flex flex-col mb-10 md:mb-14', alignClasses[align], className)}>
      {eyebrow && (
        <span className="eyebrow mb-2.5 font-bold tracking-widest block text-accent text-xs">
          {eyebrow}
        </span>
      )}
      <HeadingTag className="heading-section tracking-tight text-primary font-bold">
        {heading}
        {accentText && <span className="text-accent ml-2">{accentText}</span>}
      </HeadingTag>
      {displayText && (
        <p className="mt-3 text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed">
          {displayText}
        </p>
      )}
    </div>
  );
};
