// Cinematic Humanism Animation System
// Performance-optimized animations with cinematic timing

import { Variants } from 'framer-motion';

// Animation timing presets for cinematic feel
export const animationTiming = {
  // Fast micro-interactions
  fast: {
    duration: 0.2,
    ease: [0.4, 0, 0.2, 1], // cubic-bezier(0.4, 0, 0.2, 1)
  },
  // Standard interactions
  standard: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  },
  // Smooth transitions
  smooth: {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1],
  },
  // Cinematic reveals
  cinematic: {
    duration: 0.8,
    ease: [0.25, 0.46, 0.45, 0.94], // cubic-bezier(0.25, 0.46, 0.45, 0.94)
  },
  // Dramatic entrances
  dramatic: {
    duration: 1.2,
    ease: [0.68, -0.55, 0.265, 1.55], // cubic-bezier(0.68, -0.55, 0.265, 1.55)
  },
};

// Stagger delays for sequential animations
export const staggerDelays = {
  fast: 0.05,
  standard: 0.1,
  smooth: 0.15,
  cinematic: 0.2,
  dramatic: 0.3,
};

// Fade animations
export const fadeAnimations: Record<string, Variants> = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: animationTiming.smooth,
  },
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: animationTiming.smooth,
  },
  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
    transition: animationTiming.smooth,
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
    transition: animationTiming.smooth,
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
    transition: animationTiming.smooth,
  },
};

// Scale animations
export const scaleAnimations: Record<string, Variants> = {
  scaleIn: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    transition: animationTiming.smooth,
  },
  scaleInUp: {
    initial: { scale: 0.8, y: 30, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: { scale: 0.8, y: -30, opacity: 0 },
    transition: animationTiming.smooth,
  },
  scaleInDown: {
    initial: { scale: 0.8, y: -30, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: { scale: 0.8, y: 30, opacity: 0 },
    transition: animationTiming.smooth,
  },
};

// Slide animations
export const slideAnimations: Record<string, Variants> = {
  slideInUp: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
    transition: animationTiming.cinematic,
  },
  slideInDown: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
    transition: animationTiming.cinematic,
  },
  slideInLeft: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
    transition: animationTiming.cinematic,
  },
  slideInRight: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
    transition: animationTiming.cinematic,
  },
};

// Hover animations
export const hoverAnimations: Record<string, Variants> = {
  lift: {
    initial: { y: 0 },
    hover: { y: -8, scale: 1.02 },
    transition: animationTiming.fast,
  },
  scale: {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    transition: animationTiming.fast,
  },
  glow: {
    initial: { boxShadow: '0 0 0 rgba(59, 130, 246, 0)' },
    hover: { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
    transition: animationTiming.fast,
  },
  rotate: {
    initial: { rotate: 0 },
    hover: { rotate: 5 },
    transition: animationTiming.fast,
  },
};

// Text animations
export const textAnimations: Record<string, Variants> = {
  typewriter: {
    initial: { width: 0 },
    animate: { width: '100%' },
    transition: animationTiming.smooth,
  },
  staggerText: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: animationTiming.smooth,
  },
  revealText: {
    initial: { clipPath: 'inset(0 100% 0 0)' },
    animate: { clipPath: 'inset(0 0% 0 0)' },
    transition: animationTiming.cinematic,
  },
};

// Page transition animations
export const pageTransitions: Record<string, Variants> = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: animationTiming.smooth,
  },
  slide: {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '-100%' },
    transition: animationTiming.cinematic,
  },
  scale: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.1, opacity: 0 },
    transition: animationTiming.cinematic,
  },
};

// Loading animations
export const loadingAnimations: Record<string, Variants> = {
  pulse: {
    initial: { opacity: 0.5 },
    animate: { opacity: 1 },
    transition: animationTiming.smooth,
  },
  spin: {
    animate: { rotate: 360 },
    transition: animationTiming.smooth,
  },
  bounce: {
    animate: { y: [0, -10, 0] },
    transition: animationTiming.smooth,
  },
};

// Stagger container animations
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: staggerDelays.standard,
      delayChildren: 0.1,
    },
  },
};

// Intersection Observer animations
export const intersectionAnimations: Record<string, Variants> = {
  fadeInOnScroll: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: animationTiming.smooth,
  },
  slideInOnScroll: {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: animationTiming.cinematic,
  },
  scaleInOnScroll: {
    initial: { scale: 0.8, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: animationTiming.smooth,
  },
};

// Cinematic entrance animations
export const cinematicEntrances: Record<string, Variants> = {
  heroEntrance: {
    initial: { opacity: 0, scale: 1.1, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: animationTiming.dramatic,
  },
  dramaticReveal: {
    initial: { opacity: 0, y: 100, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: animationTiming.dramatic,
  },
  slideInFromBottom: {
    initial: { y: '100vh', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: animationTiming.cinematic,
  },
};

// Utility functions for animation
export const createStaggerAnimation = (
  delay: number = staggerDelays.standard
) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: delay,
      delayChildren: 0.1,
    },
  },
});

export const createHoverAnimation = (scale: number = 1.05, y: number = -5) => ({
  initial: { scale: 1, y: 0 },
  hover: { scale, y },
  transition: animationTiming.fast,
});

export const createScrollAnimation = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up'
) => {
  const baseAnimation = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: animationTiming.smooth,
  };

  switch (direction) {
    case 'up':
      return { ...baseAnimation, initial: { ...baseAnimation.initial, y: 50 } };
    case 'down':
      return {
        ...baseAnimation,
        initial: { ...baseAnimation.initial, y: -50 },
      };
    case 'left':
      return { ...baseAnimation, initial: { ...baseAnimation.initial, x: 50 } };
    case 'right':
      return {
        ...baseAnimation,
        initial: { ...baseAnimation.initial, x: -50 },
      };
    default:
      return baseAnimation;
  }
};

// Performance optimization utilities
export const animationConfig = {
  // Reduce motion for accessibility
  reducedMotion: {
    transition: { duration: 0 },
  },
  // GPU acceleration
  gpuAccelerated: {
    willChange: 'transform',
  },
  // Optimized for performance
  optimized: {
    type: 'tween',
    ease: 'easeOut',
  },
};

// Animation presets for common use cases
export const animationPresets = {
  // Button animations
  button: {
    hover: createHoverAnimation(1.05, -2),
    tap: { scale: 0.95 },
  },
  // Card animations
  card: {
    hover: createHoverAnimation(1.02, -4),
    entrance: fadeAnimations.fadeInUp,
  },
  // Text animations
  text: {
    entrance: textAnimations.staggerText,
    reveal: textAnimations.revealText,
  },
  // Page transitions
  page: {
    entrance: pageTransitions.fade,
    exit: pageTransitions.fade,
  },
  // Loading states
  loading: {
    pulse: loadingAnimations.pulse,
    spin: loadingAnimations.spin,
  },
};
