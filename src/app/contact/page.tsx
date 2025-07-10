'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const contactMethods = [
    {
      title: 'Email',
      value: 'hello@orsonvision.com',
      description: 'For general inquiries and project discussions',
      icon: '📧',
    },
    {
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'For urgent matters and direct consultations',
      icon: '📞',
    },
    {
      title: 'Office',
      value: '123 Innovation Street, Tech City, TC 12345',
      description: 'Visit us for in-person meetings and collaboration',
      icon: '🏢',
    },
  ];

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer:
        "Project timelines vary based on complexity and scope. A typical website project takes 4-8 weeks, while larger applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: 'Do you work with international clients?',
      answer:
        'Absolutely! We serve clients globally and have experience working across different time zones and cultures. Our multilingual capabilities ensure effective communication regardless of location.',
    },
    {
      question: 'What is your pricing structure?',
      answer:
        "We offer transparent, project-based pricing tailored to your specific needs. We'll provide a detailed proposal after understanding your requirements during our discovery call.",
    },
    {
      question: 'Do you provide ongoing support?',
      answer:
        'Yes, we offer various support and maintenance packages to ensure your digital solution continues to perform optimally and evolves with your business needs.',
    },
    {
      question: 'Can you help with existing projects?',
      answer:
        "Certainly! We can audit, improve, or completely redesign existing digital solutions. We'll assess your current setup and recommend the best approach forward.",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

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
              {t('contact.hero.title')}
            </h1>
            <h2 className='text-xl md:text-2xl font-light mb-8 text-gray-200'>
              {t('contact.hero.subtitle')}
            </h2>
            <p className='text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              {t('contact.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='py-16 bg-[var(--bg-secondary)]'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-4xl md:text-5xl font-bold text-cinematic-blue mb-6'>
                Let&apos;s Start Your Project
              </h2>
              <p className='text-xl text-[var(--color-foreground)]/80 mb-8 leading-relaxed'>
                Tell us about your vision, and we&apos;ll craft a digital
                experience that brings your story to life. Every great project
                starts with a conversation.
              </p>

              <div className='space-y-6'>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-cinematic-blue rounded-full flex items-center justify-center'>
                    <span className='text-white text-xl'>✓</span>
                  </div>
                  <div>
                    <h3 className='font-semibold text-[var(--color-foreground)]'>
                      Free Consultation
                    </h3>
                    <p className='text-[var(--color-foreground)]/70 text-sm'>
                      No obligation, just honest advice
                    </p>
                  </div>
                </div>

                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-cinematic-blue rounded-full flex items-center justify-center'>
                    <span className='text-white text-xl'>✓</span>
                  </div>
                  <div>
                    <h3 className='font-semibold text-[var(--color-foreground)]'>
                      Transparent Pricing
                    </h3>
                    <p className='text-[var(--color-foreground)]/70 text-sm'>
                      Clear, upfront costs with no surprises
                    </p>
                  </div>
                </div>

                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-cinematic-blue rounded-full flex items-center justify-center'>
                    <span className='text-white text-xl'>✓</span>
                  </div>
                  <div>
                    <h3 className='font-semibold text-[var(--color-foreground)]'>
                      Ongoing Support
                    </h3>
                    <p className='text-[var(--color-foreground)]/70 text-sm'>
                      We&apos;re here for you long after launch
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form
                onSubmit={handleSubmit}
                className='bg-[var(--bg-primary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)]'
              >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-[var(--color-foreground)] mb-2'
                    >
                      Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 border border-[var(--color-border)] rounded-lg bg-[var(--bg-secondary)] text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-cinematic-blue'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-[var(--color-foreground)] mb-2'
                    >
                      Email *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 border border-[var(--color-border)] rounded-lg bg-[var(--bg-secondary)] text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-cinematic-blue'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                  <div>
                    <label
                      htmlFor='company'
                      className='block text-sm font-medium text-[var(--color-foreground)] mb-2'
                    >
                      Company
                    </label>
                    <input
                      type='text'
                      id='company'
                      name='company'
                      value={formData.company}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border border-[var(--color-border)] rounded-lg bg-[var(--bg-secondary)] text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-cinematic-blue'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='projectType'
                      className='block text-sm font-medium text-[var(--color-foreground)] mb-2'
                    >
                      Project Type
                    </label>
                    <select
                      id='projectType'
                      name='projectType'
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border border-[var(--color-border)] rounded-lg bg-[var(--bg-secondary)] text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-cinematic-blue'
                    >
                      <option value=''>Select project type</option>
                      <option value='website'>Website</option>
                      <option value='webapp'>Web Application</option>
                      <option value='mobile'>Mobile App</option>
                      <option value='branding'>Branding</option>
                      <option value='consulting'>Consulting</option>
                      <option value='other'>Other</option>
                    </select>
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                  <div>
                    <label
                      htmlFor='budget'
                      className='block text-sm font-medium text-[var(--color-foreground)] mb-2'
                    >
                      Budget Range
                    </label>
                    <select
                      id='budget'
                      name='budget'
                      value={formData.budget}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border border-[var(--color-border)] rounded-lg bg-[var(--bg-secondary)] text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-cinematic-blue'
                    >
                      <option value=''>Select budget range</option>
                      <option value='5k-10k'>$5,000 - $10,000</option>
                      <option value='10k-25k'>$10,000 - $25,000</option>
                      <option value='25k-50k'>$25,000 - $50,000</option>
                      <option value='50k+'>$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor='timeline'
                      className='block text-sm font-medium text-[var(--color-foreground)] mb-2'
                    >
                      Timeline
                    </label>
                    <select
                      id='timeline'
                      name='timeline'
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border border-[var(--color-border)] rounded-lg bg-[var(--bg-secondary)] text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-cinematic-blue'
                    >
                      <option value=''>Select timeline</option>
                      <option value='asap'>ASAP</option>
                      <option value='1-2months'>1-2 months</option>
                      <option value='3-6months'>3-6 months</option>
                      <option value='6months+'>6+ months</option>
                    </select>
                  </div>
                </div>

                <div className='mb-6'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-[var(--color-foreground)] mb-2'
                  >
                    Project Details *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder='Tell us about your project, goals, and vision...'
                    className='w-full px-4 py-3 border border-[var(--color-border)] rounded-lg bg-[var(--bg-secondary)] text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-cinematic-blue resize-none'
                  />
                </div>

                <motion.button
                  type='submit'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full bg-cinematic-blue hover:bg-cinematic-blue/90 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300'
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className='py-16 bg-[var(--bg-primary)]'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-cinematic-blue mb-6'>
              Get in Touch
            </h2>
            <p className='text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto'>
              Choose the method that works best for you. We&apos;re here to help
              bring your vision to life.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className='bg-[var(--bg-secondary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)] text-center'
              >
                <div className='text-4xl mb-4'>{method.icon}</div>
                <h3 className='text-2xl font-bold text-cinematic-blue mb-4'>
                  {method.title}
                </h3>
                <p className='text-lg text-[var(--color-foreground)] mb-4'>
                  {method.value}
                </p>
                <p className='text-[var(--color-foreground)]/70 text-sm'>
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-16 bg-[var(--bg-secondary)]'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-cinematic-blue mb-6'>
              Frequently Asked Questions
            </h2>
            <p className='text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto'>
              Common questions about our process, pricing, and partnership
              approach.
            </p>
          </div>

          <div className='max-w-4xl mx-auto space-y-6'>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className='bg-[var(--bg-primary)] rounded-xl p-6 shadow-lg border border-[var(--color-border)]'
              >
                <h3 className='text-xl font-bold text-[var(--color-foreground)] mb-4'>
                  {faq.question}
                </h3>
                <p className='text-[var(--color-foreground)]/70 leading-relaxed'>
                  {faq.answer}
                </p>
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className='text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed'>
              Let&apos;s discuss your project and create something extraordinary
              together. Every great story starts with a conversation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-white text-cinematic-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300'
            >
              Start Your Project Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
