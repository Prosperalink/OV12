'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ContentCreationPage() {
  const { t } = useLanguage();

  return (
    <main className='min-h-screen bg-[var(--bg-primary)]'>
      {/* Hero Section */}
      <section className='pt-32 pb-16 bg-gradient-to-br from-cinematic-blue to-cinematic-gold'>
        <div className='container mx-auto px-4 text-center text-white'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-5xl md:text-7xl font-bold mb-6'>
              {t('solutions.contentCreation.title')}
            </h1>
            <p className='text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed'>
              {t('solutions.contentCreation.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-16 bg-[var(--bg-secondary)]'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-center'
            >
              <p className='text-lg md:text-xl text-[var(--color-foreground)] leading-relaxed mb-8'>
                {t('solutions.contentCreation.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
