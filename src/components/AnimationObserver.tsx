'use client';

import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Animation variants for cinematic humanism
const animationObserver = {
  // Animation variants
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  slideInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  cinematicEntrance: {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  dramaticReveal: {
    hidden: { opacity: 0, scale: 0.5, rotateY: 90 },
    visible: { opacity: 1, scale: 1, rotateY: 0 },
  },
  heroEntrance: {
    hidden: { opacity: 0, y: 200, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  textReveal: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

// Props interface for AnimationObserver
interface IAnimationObserverProps {
  children: React.ReactNode;
  className?: string;
  animation?: keyof typeof animationObserver;
  delay?: number;
  duration?: number;
  once?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function AnimationObserver({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration,
  once = true,
  direction = 'up',
  distance = 30,
  stagger = false,
  staggerDelay = 0.1,
}: IAnimationObserverProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    margin: '-100px',
  });
  const controls = useAnimation();

  // Custom animation based on direction and distance
  const getCustomAnimation = (): Variants => {
    const baseAnimation = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    switch (direction) {
      case 'up':
        return {
          ...baseAnimation,
          hidden: { ...baseAnimation.hidden, y: distance },
          visible: { ...baseAnimation.visible, y: 0 },
        };
      case 'down':
        return {
          ...baseAnimation,
          hidden: { ...baseAnimation.hidden, y: -distance },
          visible: { ...baseAnimation.visible, y: 0 },
        };
      case 'left':
        return {
          ...baseAnimation,
          hidden: { ...baseAnimation.hidden, x: -distance },
          visible: { ...baseAnimation.visible, x: 0 },
        };
      case 'right':
        return {
          ...baseAnimation,
          hidden: { ...baseAnimation.hidden, x: distance },
          visible: { ...baseAnimation.visible, x: 0 },
        };
      default:
        return baseAnimation;
    }
  };

  // Get animation variants
  const getAnimationVariants = (): Variants => {
    if (animation && animationObserver[animation]) {
      return animationObserver[animation];
    }
    return getCustomAnimation();
  };

  // Get stagger variants
  const getStaggerVariants = (): Variants => {
    return {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        },
      },
    };
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const variants = stagger ? getStaggerVariants() : getAnimationVariants();
  const transition = {
    duration: duration || 0.8,
    ease: [0.4, 0, 0.2, 1],
    delay,
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial='hidden'
      animate={controls}
      exit='hidden'
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

// Convenience components
/* eslint-disable @typescript-eslint/naming-convention */
export const FadeInUp: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='fadeInUp' className={className || ''}>
    {children}
  </AnimationObserver>
);

export const FadeInDown: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='fadeInDown' className={className || ''}>
    {children}
  </AnimationObserver>
);

export const FadeInLeft: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='fadeInLeft' className={className || ''}>
    {children}
  </AnimationObserver>
);

export const FadeInRight: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='fadeInRight' className={className || ''}>
    {children}
  </AnimationObserver>
);

export const ScaleIn: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='scaleIn' className={className || ''}>
    {children}
  </AnimationObserver>
);

export const SlideInUp: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='slideInUp' className={className || ''}>
    {children}
  </AnimationObserver>
);

export const CinematicEntrance: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='cinematicEntrance' className={className || ''}>
    {children}
  </AnimationObserver>
);

export const DramaticReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='dramaticReveal' className={className || ''}>
    {children}
  </AnimationObserver>
);

export const HeroEntrance: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='heroEntrance' className={className || ''}>
    {children}
  </AnimationObserver>
);

export const TextReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AnimationObserver animation='textReveal' className={className || ''}>
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
    className={className || ''}
    stagger={true}
    staggerDelay={staggerDelay}
  >
    {children}
  </AnimationObserver>
);
/* eslint-enable @typescript-eslint/naming-convention */

// Hook for cinematic animations
export const useCinematicAnimation = (
  animation: keyof typeof animationObserver
) => {
  const controls = useAnimation();

  const startAnimation = () => {
    controls.start('visible');
  };

  const resetAnimation = () => {
    controls.start('hidden');
  };

  return {
    controls,
    startAnimation,
    resetAnimation,
    variants: animationObserver[animation],
  };
};
