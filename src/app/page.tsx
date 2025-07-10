'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { useLanguage } from '@/contexts/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  const solutions = [
    {
      key: 'digitalInnovation',
      href: '/solutions/digital-innovation',
      icon: '🚀',
    },
    {
      key: 'creativeDesign',
      href: '/solutions/creative-design',
      icon: '🎨',
    },
    {
      key: 'contentCreation',
      href: '/solutions/content-creation',
      icon: '📹',
    },
    {
      key: 'technologySolutions',
      href: '/solutions/technology-solutions',
      icon: '⚙️',
    },
    {
      key: 'strategicConsulting',
      href: '/solutions/strategic-consulting',
      icon: '💡',
    },
  ];

  const industries = [
    {
      name: 'Wedding & Events',
      description:
        'Custom booking systems and portfolio websites that showcase your unique style and streamline client management.',
      solutions: [
        'Custom Booking Systems',
        'Portfolio Websites',
        'Client Management',
        'Payment Processing',
      ],
      icon: '💒',
    },
    {
      name: 'Education & Learning',
      description:
        'Interactive learning platforms and student engagement systems that modernize educational experiences.',
      solutions: [
        'Learning Management Systems',
        'Student Portals',
        'Interactive Content',
        'Assessment Tools',
      ],
      icon: '🎓',
    },
    {
      name: 'Small Business & Startups',
      description:
        'Scalable e-commerce solutions and business automation tools that accelerate growth.',
      solutions: [
        'E-commerce Platforms',
        'Business Automation',
        'CRM Systems',
        'Payment Gateways',
      ],
      icon: '🚀',
    },
    {
      name: 'Enterprise & Corporate',
      description:
        'Enterprise-grade digital infrastructure and workflow optimization systems.',
      solutions: [
        'Enterprise Software',
        'Workflow Automation',
        'Data Management',
        'System Integration',
      ],
      icon: '🏢',
    },
    {
      name: 'Creative & Artisan',
      description:
        'Portfolio platforms and online marketplaces that showcase your craftsmanship and reach global audiences.',
      solutions: [
        'Portfolio Platforms',
        'Online Marketplaces',
        'Inventory Management',
        'Global Shipping',
      ],
      icon: '🎨',
    },
    {
      name: 'Tourism & Hospitality',
      description:
        'Booking engines and guest experience platforms that increase conversions and customer satisfaction.',
      solutions: [
        'Booking Systems',
        'Guest Experience',
        'Revenue Management',
        'Customer Analytics',
      ],
      icon: '🏨',
    },
  ];

  const journeySteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description:
        'We dive deep into understanding your business, challenges, and aspirations to craft a tailored digital strategy.',
      icon: '🔍',
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description:
        'Our creative team transforms your vision into stunning visual concepts and interactive prototypes.',
      icon: '🎨',
    },
    {
      step: '03',
      title: 'Development & Integration',
      description:
        'We build robust, scalable solutions using cutting-edge technologies and best practices.',
      icon: '⚙️',
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description:
        'We ensure a smooth launch and continuously optimize your solution for maximum impact.',
      icon: '🚀',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content:
        'Orson Vision transformed our digital presence with their cinematic approach. The results exceeded our expectations - our conversion rates increased by 250% within the first quarter.',
      company: 'TechStart',
    },
    {
      name: 'Ahmed Ben Ali',
      role: 'Founder, Tunisian Crafts',
      content:
        'Their human-centered design philosophy perfectly captured our brand essence. Our online sales increased by 300% and we now reach customers worldwide while maintaining our authentic Tunisian heritage.',
      company: 'Tunisian Crafts',
    },
    {
      name: 'Marie Dubois',
      role: 'Marketing Director, École Internationale',
      content:
        'The team at Orson Vision understood our educational mission and created content that truly resonates with our community. Our student engagement increased by 180% and parent satisfaction scores are at an all-time high.',
      company: 'École Internationale',
    },
  ];

  return (
    <main className='min-h-screen bg-[var(--bg-primary)]'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        {/* Solid background for light/dark mode */}
        <div className='absolute inset-0 z-0 bg-cinematic-blue dark:bg-[#101825] transition-colors duration-500' />
        {/* Cinematic blurred image overlay */}
        <div className='absolute inset-0 z-10'>
          <Image
            src='/assets/homepage/hero_section/images/homepage_hero_section_cinematic_office_01.jpg'
            alt='Cinematic Office'
            fill
            priority
            className='object-cover object-center opacity-60 blur-md scale-105 select-none pointer-events-none'
            style={{ filter: 'blur(16px) brightness(0.7)' }}
            aria-hidden='true'
          />
        </div>
        {/* Glassmorphic content card */}
        <div className='relative z-20 flex flex-col items-center justify-center w-full px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='backdrop-blur-lg bg-white/20 dark:bg-[#101825]/40 rounded-3xl shadow-2xl p-10 md:p-16 max-w-3xl mx-auto text-center border border-white/10 dark:border-[#1A237E]/10'
            style={{ boxShadow: '0 8px 32px 0 rgba(16,24,37,0.25)' }}
          >
            <h1 className='text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg'>
              {t('hero.title')}
            </h1>
            <h2 className='text-xl md:text-2xl font-light mb-8 text-gray-200'>
              {t('hero.subtitle')}
            </h2>
            <p className='text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              {t('hero.description')}
            </p>
            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
              <motion.button
                whileHover={{
                  scale: 1.07,
                  boxShadow: '0 6px 24px 0 rgba(26,35,126,0.25)',
                  y: -2,
                }}
                whileTap={{ scale: 0.97, y: 1 }}
                className='bg-cinematic-blue hover:bg-cinematic-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cinematic-gold focus:ring-offset-2'
                style={{ perspective: '600px' }}
              >
                {t('hero.primaryCta')}
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.07,
                  boxShadow: '0 6px 24px 0 rgba(26,35,126,0.15)',
                  y: -2,
                }}
                whileTap={{ scale: 0.97, y: 1 }}
                className='border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-cinematic-blue transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-cinematic-gold focus:ring-offset-2'
                style={{ perspective: '600px' }}
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
        {/* Gradient fade to next section */}
        <div
          className='absolute bottom-0 left-0 w-full h-32 z-30 pointer-events-none'
          style={{
            background:
              'linear-gradient(to bottom, rgba(26,35,126,0.0) 0%, var(--bg-primary) 100%)',
          }}
        />
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40'
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

      {/* Solutions Matrix */}
      <section className='py-16 bg-[var(--bg-secondary)]'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-cinematic-blue mb-6'>
              What We Do
            </h2>
            <p className='text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto'>
              We unearth and amplify your unique story through cinematic digital
              experiences that resonate deeply, transform perceptions, and
              inspire meaningful action.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link href={solution.href}>
                  <div className='bg-[var(--bg-primary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105 h-full'>
                    <div className='text-4xl mb-4'>{solution.icon}</div>
                    <h3 className='text-2xl font-bold text-cinematic-blue mb-4'>
                      {t(`solutions.${solution.key}.title`)}
                    </h3>
                    <p className='text-[var(--color-foreground)]/80 mb-4'>
                      {t(`solutions.${solution.key}.subtitle`)}
                    </p>
                    <p className='text-[var(--color-foreground)]/60 text-sm leading-relaxed'>
                      {t(`solutions.${solution.key}.description`)}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className='py-16 bg-[var(--bg-primary)]'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-cinematic-blue mb-6'>
              Who We Help
            </h2>
            <p className='text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto'>
              From creative professionals to enterprise corporations, we unearth
              the unique human stories within every industry and amplify them
              through cinematic digital experiences.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className='bg-[var(--bg-secondary)] rounded-xl p-6 border border-[var(--color-border)] hover:border-cinematic-blue transition-all duration-300'
              >
                <div className='text-3xl mb-4'>{industry.icon}</div>
                <h3 className='text-xl font-semibold text-[var(--color-foreground)] mb-3'>
                  {industry.name}
                </h3>
                <p className='text-[var(--color-foreground)]/70 text-sm mb-4'>
                  {industry.description}
                </p>
                <div className='space-y-1'>
                  {industry.solutions.map((solution, i) => (
                    <div key={i} className='text-xs text-cinematic-blue'>
                      • {solution}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Journey */}
      <section className='py-16 bg-[var(--bg-secondary)]'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-cinematic-blue mb-6'>
              {t('clientJourney.title')}
            </h2>
            <p className='text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto'>
              {t('clientJourney.subtitle')}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className='text-center'
              >
                <div className='bg-[var(--bg-primary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)]'>
                  <div className='text-4xl font-bold text-cinematic-blue mb-4'>
                    {step.step}
                  </div>
                  <div className='text-3xl mb-4'>{step.icon}</div>
                  <h3 className='text-xl font-bold text-[var(--color-foreground)] mb-4'>
                    {step.title}
                  </h3>
                  <p className='text-[var(--color-foreground)]/70'>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-16 bg-[var(--bg-primary)]'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-cinematic-blue mb-6'>
              {t('testimonials.title')}
            </h2>
            <p className='text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto'>
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className='bg-[var(--bg-secondary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)] h-full'>
                  <div className='flex items-center mb-4'>
                    <div className='flex text-cinematic-gold'>
                      {(() => {
                        const stars = [];
                        for (let i = 0; i < 5; i++) {
                          stars.push(
                            <span key={i} className='text-xl'>
                              ★
                            </span>
                          );
                        }
                        return stars;
                      })()}
                    </div>
                  </div>
                  <p className='text-[var(--color-foreground)] mb-6 leading-relaxed italic'>
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className='flex items-center'>
                    <div className='w-12 h-12 bg-cinematic-blue rounded-full flex items-center justify-center mr-4'>
                      <span className='text-white font-bold text-lg'>
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className='font-semibold text-[var(--color-foreground)]'>
                        {testimonial.name}
                      </h4>
                      <p className='text-sm text-[var(--color-foreground)]/70'>
                        {testimonial.role}
                      </p>
                      <p className='text-xs text-cinematic-blue'>
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-16 bg-gradient-to-br from-cinematic-blue to-cinematic-gold'>
        <div className='container mx-auto px-4 text-center text-white'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Ready to Transform Your Story?
            </h2>
            <p className='text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed'>
              Let&apos;s discuss your vision and create something extraordinary
              together. Every great story starts with a conversation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-white text-cinematic-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300'
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cinematic-blue transition-all duration-300'
              >
                See Our Process
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
