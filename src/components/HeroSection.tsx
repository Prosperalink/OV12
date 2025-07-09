'use client';

import { typography } from '@/lib/fonts';
import { motion } from 'framer-motion';
import { HeroEntrance, TextReveal } from './AnimationObserver';

interface IHeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  videoSrc?: string;
  posterSrc?: string;
  backgroundImage?: string;
  overlay?: boolean;
  fullHeight?: boolean;
  className?: string;
}

export const HeroSection: React.FC<IHeroSectionProps> = ({
  title = 'Cinematic Humanism in Digital Innovation',
  subtitle = 'Crafting Immersive Digital Experiences',
  description = 'We blend cutting-edge technology with human-centered design to create moments that inspire, transform, and connect.',
  ctaText = 'Start Your Journey',
  ctaLink = '/contact',
  videoSrc,
  posterSrc,
  backgroundImage,
  overlay = true,
  fullHeight = true,
  className = '',
}) => {
  // Cinematic entrance animation variants
  const heroVariants = {
    initial: { opacity: 0, scale: 1.1, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  };

  const textStaggerVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
    transition: {
      duration: 0.6,
      delay: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  };

  return (
    <section
      className={`relative overflow-hidden ${fullHeight ? 'min-h-screen' : 'min-h-[80vh]'} ${className}`}
    >
      {/* Background Video */}
      {videoSrc && (
        <div className='absolute inset-0 w-full h-full'>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={posterSrc}
            className='w-full h-full object-cover'
          >
            <source src={videoSrc} type='video/mp4' />
            {posterSrc && (
              <img
                src={posterSrc}
                alt='Hero background'
                className='w-full h-full object-cover'
              />
            )}
          </video>
        </div>
      )}

      {/* Background Image Fallback */}
      {!videoSrc && backgroundImage && (
        <div
          className='absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Gradient Background Fallback */}
      {!videoSrc && !backgroundImage && (
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700' />
      )}

      {/* Cinematic Overlay */}
      {overlay && (
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-gold-500/40' />
      )}

      {/* Content Container */}
      <div className='relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto text-center'>
          <HeroEntrance>
            <motion.div
              variants={textStaggerVariants}
              initial='initial'
              animate='animate'
              transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
            >
              {/* Subtitle */}
              {subtitle && (
                <motion.p
                  variants={textStaggerVariants}
                  className={`${typography.caption.lg} text-gold-300 mb-4 tracking-wide uppercase font-medium`}
                >
                  {subtitle}
                </motion.p>
              )}

              {/* Main Title */}
              <motion.h1
                variants={textStaggerVariants}
                className={`${typography.display.xl} text-white mb-6 leading-tight`}
              >
                <TextReveal>{title}</TextReveal>
              </motion.h1>

              {/* Description */}
              {description && (
                <motion.p
                  variants={textStaggerVariants}
                  className={`${typography.body.lg} text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed`}
                >
                  {description}
                </motion.p>
              )}

              {/* Call to Action */}
              {ctaText && (
                <motion.div
                  variants={buttonVariants}
                  whileHover='hover'
                  whileTap='tap'
                >
                  <motion.a
                    href={ctaLink}
                    className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
                  >
                    {ctaText}
                    <svg
                      className='ml-2 w-5 h-5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 7l5 5m0 0l-5 5m5-5H6'
                      />
                    </svg>
                  </motion.a>
                </motion.div>
              )}
            </motion.div>
          </HeroEntrance>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='w-1 h-3 bg-white/60 rounded-full mt-2'
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Cinematic Light Effects */}
      <div className='absolute inset-0 pointer-events-none'>
        {/* Top-left light */}
        <div className='absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl' />

        {/* Bottom-right light */}
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gold-400/20 to-transparent rounded-full blur-3xl' />

        {/* Center glow */}
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-gold-500/10' />
      </div>

      {/* Particle Effect (Optional) */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-white/30 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

// Specialized hero variants
export const CinematicHero: React.FC<IHeroSectionProps> = props => (
  <HeroSection
    {...props}
    overlay={true}
    fullHeight={true}
    className='bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700'
  />
);

export const MinimalHero: React.FC<IHeroSectionProps> = props => (
  <HeroSection
    {...props}
    overlay={false}
    fullHeight={false}
    className='bg-white dark:bg-gray-900'
  />
);

export const VideoHero: React.FC<IHeroSectionProps> = props => (
  <HeroSection
    {...props}
    videoSrc={props.videoSrc || '/hero-video.mp4'}
    posterSrc={props.posterSrc || '/hero-poster.jpg'}
    overlay={true}
    fullHeight={true}
  />
);

// Hero with interactive elements
export const InteractiveHero: React.FC<IHeroSectionProps> = props => {
  return (
    <HeroSection {...props} className='cursor-none'>
      {/* Add interactive cursor effect */}
      <div className='fixed inset-0 pointer-events-none z-50'>
        <motion.div
          className='w-4 h-4 bg-white/80 rounded-full fixed'
          animate={{
            x: 0,
            y: 0,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        />
      </div>
    </HeroSection>
  );
};
