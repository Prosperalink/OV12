'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface IHeroSectionProps {
  videoSrc?: string;
  posterSrc?: string;
}

export default function HeroSection({
  videoSrc = '/hero-video.mp4',
  posterSrc = '/hero-poster.jpg',
}: IHeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Typewriter effect for main headline
    const typewriterText = 'Cinematic Humanism';
    const typewriterInterval = setInterval(() => {
      setCurrentTextIndex(prev => {
        if (prev < typewriterText.length) {
          return prev + 1;
        }
        clearInterval(typewriterInterval);
        return prev;
      });
    }, 100);
  }, []);

  // Cinematic animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      role='banner'
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-cinematic-blue dark:bg-cinematic-gold'
    >
      {/* Video Background with cinematic overlay */}
      <motion.div
        className='absolute inset-0 w-full h-full'
        variants={videoVariants}
        initial='hidden'
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className='w-full h-full object-cover'
          aria-hidden='true'
          onLoadedData={() => {}}
          poster={posterSrc}
        >
          <source src={videoSrc} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        {/* Accessible hero image for screen readers */}
        <Image
          src={posterSrc}
          alt='Cinematic hero background visual'
          width={1}
          height={1}
          priority
          style={{
            position: 'absolute',
            opacity: 0,
            pointerEvents: 'none',
          }}
          aria-hidden='false'
        />
        {/* Cinematic gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-cinematic-blue/80 via-cinematic-blue/60 to-cinematic-gold/40' />

        {/* Additional cinematic lighting effects */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
        <div className='absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-cinematic-gold/10 to-transparent' />

        {/* Dynamic lighting effects */}
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-cinematic-gold/5 to-transparent animate-pulse' />
      </motion.div>

      {/* Content Container */}
      <motion.div
        className='relative z-10 container mx-auto px-4 text-center'
        variants={containerVariants}
        initial='hidden'
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <div className='max-w-6xl mx-auto'>
          {/* Main Headline with cinematic typography and typewriter effect */}
          <motion.h1
            className='text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-white'
            variants={textVariants}
          >
            <span className='block text-cinematic-gold bg-gradient-to-r from-cinematic-gold via-cinematic-blue to-cinematic-gold bg-clip-text text-transparent animate-gradient-x'>
              {isVisible ? 'Cinematic'.substring(0, currentTextIndex) : ''}
            </span>
            <span className='block text-white bg-gradient-to-r from-white via-cinematic-gold/80 to-white bg-clip-text text-transparent animate-gradient-x'>
              {isVisible
                ? 'Humanism'.substring(0, Math.max(0, currentTextIndex - 9))
                : ''}
            </span>
            <span className='block text-2xl md:text-3xl lg:text-4xl font-medium text-cinematic-gold/80 mt-4 animate-fade-in-up'>
              in Digital Innovation
            </span>
          </motion.h1>

          {/* Subtitle with emotional storytelling */}
          <motion.p
            className='text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed'
            variants={textVariants}
          >
            We craft digital experiences with a cinematic approach that blend
            artistic excellence with technical precision, creating moments that
            inspire, connect, and transform.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
            variants={buttonVariants}
          >
            {/* Primary CTA as button with proper accessibility */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='relative group'
            >
              <button
                aria-label='Get Started - Begin your journey with Orson Vision'
                className='inline-flex items-center px-8 py-4 bg-cinematic-gold text-cinematic-blue font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden'
              >
                <span className='relative z-10'>Get Started</span>
                <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10' />
                {/* Animated underline */}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-cinematic-blue group-hover:w-full transition-all duration-300 ease-out'></span>
              </button>
            </motion.div>

            {/* Secondary CTA as button with proper accessibility */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='relative group'
            >
              <button
                aria-label='Learn More - Discover our story and approach'
                className='inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 group backdrop-blur-sm relative overflow-hidden'
              >
                <Play className='mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200' />
                <span>Learn More</span>
                {/* Animated underline */}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-cinematic-gold group-hover:w-full transition-all duration-300 ease-out'></span>
              </button>
            </motion.div>
          </motion.div>

          {/* Additional navigation links for accessibility */}
          <motion.div
            className='mt-6 flex flex-wrap justify-center items-center gap-4 text-white/70'
            variants={textVariants}
          >
            <a
              href='/services'
              className='text-cinematic-gold hover:text-white transition-colors duration-200 underline-offset-4 hover:underline'
            >
              Our Services
            </a>
            <a
              href='/about'
              className='text-cinematic-gold hover:text-white transition-colors duration-200 underline-offset-4 hover:underline'
            >
              About Us
            </a>
            <a
              href='/contact'
              className='text-cinematic-gold hover:text-white transition-colors duration-200 underline-offset-4 hover:underline'
            >
              Contact
            </a>
          </motion.div>

          {/* Trust indicators with floating animations and glass morphism */}
          <motion.div
            className='mt-12 flex flex-wrap justify-center items-center gap-8 text-white/70'
            variants={textVariants}
          >
            {[
              { text: 'Trusted by 500+ Clients', delay: 0 },
              { text: 'Award-Winning Design', delay: 0.2 },
              { text: '24/7 Support', delay: 0.4 },
            ].map((item, index) => (
              <motion.div
                key={index}
                className='flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20'
                variants={floatingVariants}
                animate='animate'
                style={{ animationDelay: `${item.delay}s` }}
              >
                <div className='w-2 h-2 bg-cinematic-gold rounded-full animate-pulse' />
                <span className='text-sm font-medium'>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm bg-white/10'
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className='w-1 h-3 bg-cinematic-gold rounded-full mt-2'
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      {/* Enhanced cinematic lighting effects */}
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-cinematic-gold/5 rounded-full blur-3xl animate-pulse' />
        <div
          className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-cinematic-blue/5 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '1s' }}
        />
        <div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cinematic-gold/3 to-cinematic-blue/3 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        />
      </div>
    </section>
  );
}
