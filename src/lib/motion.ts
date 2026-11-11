import type { Variants, Transition } from 'framer-motion';

/**
 * Shared motion curve and durations matching theme.css
 */
export const brandTransition: Transition = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const quickTransition: Transition = {
  duration: 0.25,
  ease: [0.16, 1, 0.3, 1] as const,
};

/**
 * Fade-up on scroll variant
 */
export const fadeUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: brandTransition,
  },
};

/**
 * Fade-in variant
 */
export const fadeInVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: brandTransition,
  },
};

/**
 * Scale-in variant (useful for cards and badges)
 */
export const scaleInVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: brandTransition,
  },
};

/**
 * Staggered container variant for lists/grids
 */
export const staggerContainerVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

/**
 * Fast stagger container for chips/pills
 */
export const fastStaggerVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

/**
 * Mobile drawer slide-in variant
 */
export const drawerVariant: Variants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: quickTransition,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: brandTransition,
  },
};
