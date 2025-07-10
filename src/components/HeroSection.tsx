'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

import AnimationObserver from './AnimationObserver';

interface IHeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  videoSrc?: string;
  posterSrc?: string;
  backgroundImage?: string;
  overlay?: boolean;
  className?: string;
}

export default function HeroSection({
  title = 'Orson Vision',
  subtitle = 'Cinematic Humanism in Digital Innovation',
  description = 'We craft immersive digital experiences that blend cutting-edge technology with human-centered design, creating moments that inspire and transform.',
  primaryCtaText = 'Start Your Journey',
  secondaryCtaText = 'Watch Our Story',
  videoSrc,
  posterSrc,
  backgroundImage,
  overlay = true,
  className = '',
}: IHeroSectionProps) {
  return (
    <section
      role='banner'
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Video Background */}
      {videoSrc && (
        <div className='absolute inset-0 w-full h-full'>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={posterSrc}
            className='w-full h-full object-cover'
            aria-hidden='true'
          >
            <source src={videoSrc} type='video/mp4' />
            {posterSrc && (
              <Image
                src={posterSrc}
                alt='Hero background'
                fill
                className='object-cover'
                priority
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
        <div className='absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-600 to-secondary-500' />
      )}

      {/* Video Overlay */}
      {overlay && (
        <div className='absolute inset-0 bg-gradient-to-br from-primary-800/80 via-primary-600/60 to-secondary-500/40' />
      )}

      {/* Content Container */}
      <div className='relative z-10 container mx-auto px-4 text-center'>
        <div className='max-w-4xl mx-auto'>
          <AnimationObserver animation='fadeInUp' delay={0.5}>
            {/* Main Headline */}
            <h1 className='hero-headline mb-8'>
              <span className='block text-6xl md:text-8xl font-bold text-white mb-4 leading-tight tracking-tight'>
                {title}
              </span>
              <span className='block text-2xl md:text-4xl font-medium text-secondary-400 leading-relaxed'>
                {subtitle}
              </span>
            </h1>

            {/* Description */}
            <p className='hero-description text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed'>
              {description}
            </p>

            {/* CTA Buttons */}
            <div className='hero-cta-buttons flex flex-col sm:flex-row items-center justify-center gap-4 mb-12'>
              <button className='btn-primary px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-secondary-500/50 shadow-lg hover:shadow-xl'>
                {primaryCtaText}
                <ArrowRight className='ml-2 w-5 h-5' />
              </button>
              <button className='btn-secondary px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold text-lg rounded-lg hover:bg-white/10 transition-all duration-300 focus:ring-4 focus:ring-white/30'>
                {secondaryCtaText}
              </button>
            </div>

            {/* Social Proof */}
            <div className='hero-social-proof mt-12'>
              <div className='flex items-center justify-center space-x-8 text-white/80 text-sm md:text-base'>
                <span>4.9/5 from 200+ clients</span>
                <span>Trusted by 500+ businesses</span>
              </div>
            </div>
          </AnimationObserver>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
        <div className='scroll-indicator animate-bounce'>
          <div className='w-6 h-6 border-2 border-white/50 border-t-transparent transform rotate-45'></div>
        </div>
      </div>
    </section>
  );
}
