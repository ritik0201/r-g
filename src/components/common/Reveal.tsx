import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUpVariant } from '@/lib/motion';

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  amount?: number;
  duration?: number;
}

/**
 * Animated scroll reveal wrapper leveraging Framer Motion whileInView.
 * Respects user's reduced-motion preferences automatically.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className,
  amount = 0.15,
  duration = 0.5,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
