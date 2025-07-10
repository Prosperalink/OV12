'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/contexts/LanguageContext';

interface IHeroSectionProps {
  videoSrc?: string;
}

export default function HeroSection({ videoSrc }: IHeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Video */}
      {videoSrc && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute inset-0 w-full h-full object-cover'
        >
          <source src={videoSrc} type='video/mp4' />
        </video>
      )}

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/50' />

      {/* Content */}
      <div className='relative z-10 text-center text-white px-4 max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-5xl md:text-7xl font-bold mb-6'>
            {t('hero.title')}
          </h1>
          <h2 className='text-xl md:text-2xl font-light mb-8 text-gray-200'>
            {t('hero.subtitle')}
          </h2>
          <p className='text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-cinematic-blue hover:bg-cinematic-blue/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300'
            >
              {t('hero.primaryCta')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300'
            >
              {t('hero.secondaryCta')}
            </motion.button>
          </div>

          {/* Social Proof */}
          <div className='flex flex-col sm:flex-row gap-8 justify-center text-sm text-gray-300'>
            <div className='flex items-center space-x-2'>
              <span className='text-yellow-400'>★★★★★</span>
              <span>{t('hero.socialProof')}</span>
            </div>
            <div className='flex items-center space-x-2'>
              <span className='text-cinematic-blue'>✓</span>
              <span>{t('hero.trustedBy')}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
      >
        <div className='w-6 h-10 border-2 border-white rounded-full flex justify-center'>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='w-1 h-3 bg-white rounded-full mt-2'
          />
        </div>
      </motion.div>
    </section>
  );
}
