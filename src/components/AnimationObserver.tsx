'use client';

import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Animation variants for cinematic humanism
const cinematicVariants: Record<string, Variants> = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },

  // Scale animations
  scaleIn: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
  scaleInUp: {
    initial: { scale: 0.8, y: 30, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: { scale: 0.8, y: -30, opacity: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },

  // Slide animations
  slideInUp: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  slideInDown: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  slideInLeft: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  slideInRight: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },

  // Cinematic animations
  cinematicEntrance: {
    initial: { opacity: 0, scale: 1.1, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  dramaticReveal: {
    initial: { opacity: 0, y: 100, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: {
      duration: 1.5,
      ease: [0.68, -0.55, 0.265, 1.55],
    },
  },
  heroEntrance: {
    initial: { opacity: 0, y: 100, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: {
      duration: 1.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },

  // Text animations
  textReveal: {
    initial: { clipPath: 'inset(0 100% 0 0)' },
    animate: { clipPath: 'inset(0 0% 0 0)' },
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  textStagger: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },

  // Stagger container
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
};

// Props interface for AnimationObserver
interface IAnimationObserverProps {
  children: React.ReactNode;
  className?: string;
  animation?: keyof typeof cinematicVariants;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

export const AnimationObserver: React.FC<IAnimationObserverProps> = ({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration,
  threshold = 0.1,
  once = true,
  direction = 'up',
  distance = 30,
  stagger = false,
  staggerDelay = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    threshold,
    once,
    margin: '-100px',
  });
  const controls = useAnimation();

  // Custom animation based on direction and distance
  const getCustomAnimation = (): Variants => {
    const baseAnimation = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: {
        duration: duration || 0.8,
        ease: [0.4, 0, 0.2, 1],
        delay,
      },
    };

    switch (direction) {
      case 'up':
        return {
          ...baseAnimation,
          initial: { ...baseAnimation.initial, y: distance },
          animate: { ...baseAnimation.animate, y: 0 },
          exit: { ...baseAnimation.exit, y: -distance },
        };
      case 'down':
        return {
          ...baseAnimation,
          initial: { ...baseAnimation.initial, y: -distance },
          animate: { ...baseAnimation.animate, y: 0 },
          exit: { ...baseAnimation.exit, y: distance },
        };
      case 'left':
        return {
          ...baseAnimation,
          initial: { ...baseAnimation.initial, x: distance },
          animate: { ...baseAnimation.animate, x: 0 },
          exit: { ...baseAnimation.exit, x: -distance },
        };
      case 'right':
        return {
          ...baseAnimation,
          initial: { ...baseAnimation.initial, x: -distance },
          animate: { ...baseAnimation.animate, x: 0 },
          exit: { ...baseAnimation.exit, x: distance },
        };
      default:
        return baseAnimation;
    }
  };

  // Get animation variants
  const getAnimationVariants = (): Variants => {
    if (animation === 'custom') {
      return getCustomAnimation();
    }

    const selectedAnimation = cinematicVariants[animation];
    if (!selectedAnimation) {
      return cinematicVariants.fadeInUp;
    }

    // Add custom delay and duration if provided
    if (delay || duration) {
      return {
        ...selectedAnimation,
        transition: {
          ...selectedAnimation.transition,
          delay: delay || selectedAnimation.transition?.delay,
          duration: duration || selectedAnimation.transition?.duration,
        },
      };
    }

    return selectedAnimation;
  };

  // Handle stagger animations
  const getStaggerVariants = (): Variants => {
    if (!stagger) return getAnimationVariants();

    return {
      initial: {},
      animate: {
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        },
      },
    };
  };

  // Trigger animation when in view
  useEffect(() => {
    if (isInView) {
      controls.start('animate');
    } else if (!once) {
      controls.start('initial');
    }
  }, [isInView, controls, once]);

  // Stagger container wrapper
  if (stagger) {
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={getStaggerVariants()}
        initial='initial'
        animate={controls}
        exit='exit'
      >
        {children}
      </motion.div>
    );
  }

  // Regular animation wrapper
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={getAnimationVariants()}
      initial='initial'
      animate={controls}
      exit='exit'
      whileInView={!once ? 'animate' : undefined}
      viewport={{ once, threshold }}
    >
      {children}
    </motion.div>
  );
};

// Specialized animation components
export const FadeInUp: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='fadeInUp' className={className}>
    {children}
  </AnimationObserver>
);

export const FadeInDown: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='fadeInDown' className={className}>
    {children}
  </AnimationObserver>
);

export const FadeInLeft: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='fadeInLeft' className={className}>
    {children}
  </AnimationObserver>
);

export const FadeInRight: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='fadeInRight' className={className}>
    {children}
  </AnimationObserver>
);

export const ScaleIn: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='scaleIn' className={className}>
    {children}
  </AnimationObserver>
);

export const SlideInUp: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='slideInUp' className={className}>
    {children}
  </AnimationObserver>
);

export const CinematicEntrance: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='cinematicEntrance' className={className}>
    {children}
  </AnimationObserver>
);

export const DramaticReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='dramaticReveal' className={className}>
    {children}
  </AnimationObserver>
);

export const HeroEntrance: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='heroEntrance' className={className}>
    {children}
  </AnimationObserver>
);

export const TextReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='textReveal' className={className}>
    {children}
  </AnimationObserver>
);

export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className, staggerDelay = 0.1 }) => (
  <AnimationObserver
    animation='staggerContainer'
    className={className}
    stagger={true}
    staggerDelay={staggerDelay}
  >
    {children}
  </AnimationObserver>
);

// Performance-optimized animation hook
export const useCinematicAnimation = (
  animation: keyof typeof cinematicVariants
) => {
  const controls = useAnimation();

  const startAnimation = () => {
    controls.start('animate');
  };

  const resetAnimation = () => {
    controls.start('initial');
  };

  return {
    controls,
    startAnimation,
    resetAnimation,
    variants: cinematicVariants[animation],
  };
};
