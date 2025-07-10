'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { useLanguage } from '@/contexts/LanguageContext';

export default function SolutionsPage() {
  const { t } = useLanguage();

  const services = [
    {
      key: 'digitalInnovation',
      href: '/solutions/digital-innovation',
      icon: '🚀',
      color: 'from-blue-500 to-purple-600',
    },
    {
      key: 'creativeDesign',
      href: '/solutions/creative-design',
      icon: '🎨',
      color: 'from-pink-500 to-red-600',
    },
    {
      key: 'contentCreation',
      href: '/solutions/content-creation',
      icon: '📹',
      color: 'from-green-500 to-teal-600',
    },
    {
      key: 'technologySolutions',
      href: '/solutions/technology-solutions',
      icon: '⚙️',
      color: 'from-gray-500 to-blue-600',
    },
    {
      key: 'strategicConsulting',
      href: '/solutions/strategic-consulting',
      icon: '💡',
      color: 'from-yellow-500 to-orange-600',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Research',
      description:
        'We dive deep into understanding your business, audience, and goals to create a strategic foundation.',
      icon: '🔍',
      activities: [
        'Market Analysis',
        'User Research',
        'Competitive Analysis',
        'Goal Setting',
      ],
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description:
        'We develop a comprehensive roadmap that aligns your digital presence with your business objectives.',
      icon: '📋',
      activities: [
        'Content Strategy',
        'Technical Architecture',
        'Timeline Planning',
        'Resource Allocation',
      ],
    },
    {
      step: '03',
      title: 'Design & Development',
      description:
        'Our team creates stunning visuals and robust functionality that bring your vision to life.',
      icon: '🎨',
      activities: [
        'UI/UX Design',
        'Frontend Development',
        'Backend Integration',
        'Quality Assurance',
      ],
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description:
        'We ensure a smooth launch and continuously optimize for maximum performance and results.',
      icon: '🚀',
      activities: [
        'Performance Testing',
        'SEO Optimization',
        'Analytics Setup',
        'Ongoing Support',
      ],
    },
  ];

  const caseStudies = [
    {
      title: 'TechStart E-commerce Platform',
      industry: 'E-commerce',
      challenge: 'Needed a scalable online platform to handle 10x growth',
      solution:
        'Built a custom e-commerce solution with advanced inventory management and analytics',
      results: [
        '250% increase in conversion rates',
        '40% reduction in cart abandonment',
        '300% growth in monthly revenue',
      ],
      image: '/case-studies/techstart.jpg',
    },
    {
      title: 'École Internationale Learning Portal',
      industry: 'Education',
      challenge:
        'Required an engaging platform for remote learning and student collaboration',
      solution:
        'Developed an interactive learning management system with real-time collaboration features',
      results: [
        '180% increase in student engagement',
        '95% parent satisfaction rate',
        '50% reduction in administrative workload',
      ],
      image: '/case-studies/ecole-internationale.jpg',
    },
    {
      title: 'Tunisian Crafts Global Marketplace',
      industry: 'Artisan & Crafts',
      challenge:
        'Wanted to reach global markets while preserving authentic cultural heritage',
      solution:
        'Created a multilingual marketplace with advanced shipping and payment systems',
      results: [
        '300% increase in online sales',
        'Expansion to 15+ countries',
        'Preserved cultural authenticity',
      ],
      image: '/case-studies/tunisian-crafts.jpg',
    },
  ];

  const technologies = [
    {
      category: 'Frontend',
      tools: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
      ],
    },
    {
      category: 'Backend',
      tools: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      category: 'Cloud & DevOps',
      tools: ['AWS', 'Vercel', 'Docker', 'GitHub Actions', 'CI/CD'],
    },
    {
      category: 'Design & Content',
      tools: [
        'Figma',
        'Adobe Creative Suite',
        'Cinema 4D',
        'After Effects',
        'Premiere Pro',
      ],
    },
  ];

  return (
    <main className='min-h-screen bg-[var(--bg-primary)]'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-cinematic-blue to-cinematic-gold' />
        <div className='absolute inset-0 bg-black/30' />

        <div className='relative z-10 text-center text-white px-4 max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-5xl md:text-7xl font-bold mb-6'>
              {t('solutions.hero.title')}
            </h1>
            <h2 className='text-xl md:text-2xl font-light mb-8 text-gray-200'>
              {t('solutions.hero.subtitle')}
            </h2>
            <p className='text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              {t('solutions.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className='py-16 bg-[var(--bg-secondary)]'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-cinematic-blue mb-6'>
              Our Services
            </h2>
            <p className='text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto'>
              Comprehensive digital solutions that transform your vision into
              reality, from concept to launch and beyond.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <div className='bg-[var(--bg-primary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 hover:scale-105 h-full'>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <span className='text-3xl'>{service.icon}</span>
                    </div>
                    <h3 className='text-2xl font-bold text-cinematic-blue mb-4'>
                      {t(`solutions.${service.key}.title`)}
                    </h3>
                    <p className='text-[var(--color-foreground)]/80 mb-4'>
                      {t(`solutions.${service.key}.subtitle`)}
                    </p>
                    <p className='text-[var(--color-foreground)]/60 text-sm leading-relaxed'>
                      {t(`solutions.${service.key}.description`)}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-16 bg-[var(--bg-primary)]'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-cinematic-blue mb-6'>
              Our Process
            </h2>
            <p className='text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto'>
              A proven methodology that ensures every project delivers
              exceptional results and exceeds expectations.
            </p>
          </div>

          <div className='space-y-12'>
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className='lg:w-1/2'>
                  <div className='bg-[var(--bg-secondary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)]'>
                    <div className='flex items-center mb-6'>
                      <div className='text-4xl font-bold text-cinematic-blue mr-4'>
                        {step.step}
                      </div>
                      <div className='text-3xl'>{step.icon}</div>
                    </div>
                    <h3 className='text-2xl font-bold text-[var(--color-foreground)] mb-4'>
                      {step.title}
                    </h3>
                    <p className='text-[var(--color-foreground)]/70 mb-6 leading-relaxed'>
                      {step.description}
                    </p>
                    <div className='space-y-2'>
                      {step.activities.map((activity, i) => (
                        <div key={i} className='flex items-center space-x-2'>
                          <span className='text-cinematic-blue'>•</span>
                          <span className='text-sm text-[var(--color-foreground)]/70'>
                            {activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='lg:w-1/2'>
                  <div className='bg-gradient-to-br from-cinematic-blue to-cinematic-gold h-64 rounded-2xl flex items-center justify-center'>
                    <div className='text-center text-white'>
                      <div className='text-6xl font-bold opacity-20 mb-4'>
                        {step.step}
                      </div>
                      <div className='text-4xl'>{step.icon}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className='py-16 bg-[var(--bg-secondary)]'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-cinematic-blue mb-6'>
              Success Stories
            </h2>
            <p className='text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto'>
              Real projects, real results. See how we&apos;ve helped businesses
              transform their digital presence.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className='bg-[var(--bg-primary)] rounded-2xl shadow-lg border border-[var(--color-border)] overflow-hidden'
              >
                <div className='bg-gradient-to-br from-cinematic-blue to-cinematic-gold h-48 flex items-center justify-center'>
                  <div className='text-white text-center'>
                    <div className='text-4xl mb-2'>📊</div>
                    <div className='text-sm opacity-80'>{study.industry}</div>
                  </div>
                </div>

                <div className='p-6'>
                  <h3 className='text-xl font-bold text-[var(--color-foreground)] mb-3'>
                    {study.title}
                  </h3>

                  <div className='mb-4'>
                    <h4 className='font-semibold text-cinematic-blue mb-2'>
                      Challenge
                    </h4>
                    <p className='text-sm text-[var(--color-foreground)]/70'>
                      {study.challenge}
                    </p>
                  </div>

                  <div className='mb-4'>
                    <h4 className='font-semibold text-cinematic-blue mb-2'>
                      Solution
                    </h4>
                    <p className='text-sm text-[var(--color-foreground)]/70'>
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className='font-semibold text-cinematic-blue mb-2'>
                      Results
                    </h4>
                    <ul className='space-y-1'>
                      {study.results.map((result, i) => (
                        <li
                          key={i}
                          className='text-sm text-[var(--color-foreground)]/70 flex items-start space-x-2'
                        >
                          <span className='text-cinematic-gold text-xs mt-1'>
                            ✓
                          </span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className='py-16 bg-[var(--bg-primary)]'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-cinematic-blue mb-6'>
              Technologies We Use
            </h2>
            <p className='text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto'>
              Cutting-edge tools and technologies that power exceptional digital
              experiences.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className='bg-[var(--bg-secondary)] rounded-2xl p-6 shadow-lg border border-[var(--color-border)]'
              >
                <h3 className='text-xl font-bold text-cinematic-blue mb-4'>
                  {tech.category}
                </h3>
                <div className='space-y-2'>
                  {tech.tools.map((tool, i) => (
                    <div
                      key={i}
                      className='text-sm text-[var(--color-foreground)]/70'
                    >
                      • {tool}
                    </div>
                  ))}
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
              Ready to Start Your Project?
            </h2>
            <p className='text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed'>
              Let&apos;s discuss your vision and create a digital solution that
              transforms your business and delights your audience.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-white text-cinematic-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300'
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cinematic-blue transition-all duration-300'
              >
                View Our Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
