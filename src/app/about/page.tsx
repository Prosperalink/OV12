'use client';

import { motion } from 'framer-motion';

import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      title: 'Human-Centered Design',
      description:
        'We believe technology should serve humanity, not the other way around. Every solution we create is designed with real people in mind.',
      icon: '❤️',
    },
    {
      title: 'Cinematic Storytelling',
      description:
        'We craft digital experiences that tell compelling stories, creating emotional connections that inspire action and drive results.',
      icon: '🎬',
    },
    {
      title: 'Innovation & Excellence',
      description:
        'We push boundaries and embrace cutting-edge technologies while maintaining the highest standards of quality and craftsmanship.',
      icon: '🚀',
    },
    {
      title: 'Authentic Partnerships',
      description:
        'We build genuine relationships with our clients, becoming true partners in their success and growth journey.',
      icon: '🤝',
    },
  ];

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Creative Director & Founder',
      bio: 'Award-winning filmmaker turned digital strategist, Alex brings cinematic storytelling to every project.',
      expertise: [
        'Creative Direction',
        'Brand Strategy',
        'Visual Storytelling',
      ],
      image: '/team/alex-chen.jpg',
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Technical Lead',
      bio: 'Full-stack developer with a passion for creating seamless user experiences and scalable solutions.',
      expertise: [
        'Full-Stack Development',
        'System Architecture',
        'Performance Optimization',
      ],
      image: '/team/sarah-rodriguez.jpg',
    },
    {
      name: 'Marcus Johnson',
      role: 'UX/UI Designer',
      bio: 'Human-centered designer who believes great design should be invisible, intuitive, and emotionally resonant.',
      expertise: ['User Experience', 'Interface Design', 'Design Systems'],
      image: '/team/marcus-johnson.jpg',
    },
    {
      name: 'Aisha Patel',
      role: 'Content Strategist',
      bio: 'Storyteller and content strategist who helps brands find their authentic voice and connect with their audience.',
      expertise: ['Content Strategy', 'Brand Voice', 'Multilingual Content'],
      image: '/team/aisha-patel.jpg',
    },
  ];

  const milestones = [
    {
      year: '2020',
      title: 'The Beginning',
      description:
        'Founded with a vision to bring cinematic storytelling to digital experiences.',
    },
    {
      year: '2021',
      title: 'First Major Success',
      description:
        'Launched our first award-winning project, establishing our reputation for excellence.',
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description:
        'Expanded our team and began serving clients across multiple continents.',
    },
    {
      year: '2023',
      title: 'Innovation Hub',
      description:
        'Established our innovation lab to explore cutting-edge technologies and creative approaches.',
    },
    {
      year: '2024',
      title: 'Future Forward',
      description:
        'Continuing to push boundaries and create experiences that inspire and transform.',
    },
  ];

  return (
    <main className='min-h-screen bg-[var(--bg-primary)]'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-cinematic-blue to-cinematic-gold' />
        <div className='absolute inset-0 bg-black/40' />

        <div className='relative z-10 text-center text-white px-4 max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-5xl md:text-7xl font-bold mb-6'>
              {t('about.hero.title')}
            </h1>
            <h2 className='text-xl md:text-2xl font-light mb-8 text-gray-200'>
              {t('about.hero.subtitle')}
            </h2>
            <p className='text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              {t('about.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-16 bg-[var(--bg-secondary)]'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-4xl md:text-5xl font-bold text-cinematic-blue mb-6'>
                Our Mission
              </h2>
              <p className='text-xl text-[var(--color-foreground)]/80 mb-6 leading-relaxed'>
                We believe every brand has a unique story waiting to be told.
                Our mission is to unearth these stories and amplify them through
                cinematic digital experiences that resonate deeply with
                audiences and drive meaningful results.
              </p>
              <p className='text-lg text-[var(--color-foreground)]/70 leading-relaxed'>
                Through our human-centered approach and cinematic storytelling
                techniques, we transform ordinary digital interactions into
                extraordinary experiences that inspire, engage, and convert.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='bg-[var(--bg-primary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)]'
            >
              <h3 className='text-2xl font-bold text-cinematic-blue mb-4'>
                What Drives Us
              </h3>
              <ul className='space-y-4'>
                <li className='flex items-start space-x-3'>
                  <span className='text-cinematic-gold text-xl'>✓</span>
                  <span className='text-[var(--color-foreground)]'>
                    Creating experiences that feel human and authentic
                  </span>
                </li>
                <li className='flex items-start space-x-3'>
                  <span className='text-cinematic-gold text-xl'>✓</span>
                  <span className='text-[var(--color-foreground)]'>
                    Building technology that serves people, not the other way
                    around
                  </span>
                </li>
                <li className='flex items-start space-x-3'>
                  <span className='text-cinematic-gold text-xl'>✓</span>
                  <span className='text-[var(--color-foreground)]'>
                    Telling stories that inspire action and create lasting
                    impact
                  </span>
                </li>
                <li className='flex items-start space-x-3'>
                  <span className='text-cinematic-gold text-xl'>✓</span>
                  <span className='text-[var(--color-foreground)]'>
                    Fostering genuine partnerships that drive mutual success
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-16 bg-[var(--bg-primary)]'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-cinematic-blue mb-6'>
              Our Story
            </h2>
            <p className='text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto'>
              From humble beginnings to global impact - discover the journey
              that shaped our philosophy and approach.
            </p>
          </div>

          <div className='space-y-12'>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className='lg:w-1/2'>
                  <div className='bg-[var(--bg-secondary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)]'>
                    <div className='text-3xl font-bold text-cinematic-blue mb-4'>
                      {milestone.year}
                    </div>
                    <h3 className='text-2xl font-bold text-[var(--color-foreground)] mb-4'>
                      {milestone.title}
                    </h3>
                    <p className='text-[var(--color-foreground)]/70 leading-relaxed'>
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className='lg:w-1/2'>
                  <div className='bg-gradient-to-br from-cinematic-blue to-cinematic-gold h-64 rounded-2xl flex items-center justify-center'>
                    <span className='text-white text-6xl font-bold opacity-20'>
                      {milestone.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-16 bg-[var(--bg-secondary)]'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-cinematic-blue mb-6'>
              Our Values
            </h2>
            <p className='text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto'>
              The principles that guide every decision, every design, and every
              interaction we create.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className='bg-[var(--bg-primary)] rounded-2xl p-8 shadow-lg border border-[var(--color-border)]'
              >
                <div className='text-4xl mb-4'>{value.icon}</div>
                <h3 className='text-2xl font-bold text-cinematic-blue mb-4'>
                  {value.title}
                </h3>
                <p className='text-[var(--color-foreground)]/70 leading-relaxed'>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-16 bg-[var(--bg-primary)]'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-cinematic-blue mb-6'>
              Meet Our Team
            </h2>
            <p className='text-xl text-[var(--color-foreground)]/80 max-w-3xl mx-auto'>
              Passionate professionals united by a shared vision of creating
              extraordinary digital experiences.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className='bg-[var(--bg-secondary)] rounded-2xl p-6 shadow-lg border border-[var(--color-border)] text-center'
              >
                <div className='w-24 h-24 bg-gradient-to-br from-cinematic-blue to-cinematic-gold rounded-full mx-auto mb-4 flex items-center justify-center'>
                  <span className='text-white text-2xl font-bold'>
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className='text-xl font-bold text-[var(--color-foreground)] mb-2'>
                  {member.name}
                </h3>
                <p className='text-cinematic-blue font-semibold mb-3'>
                  {member.role}
                </p>
                <p className='text-[var(--color-foreground)]/70 text-sm mb-4 leading-relaxed'>
                  {member.bio}
                </p>
                <div className='space-y-1'>
                  {member.expertise.map((skill, i) => (
                    <div key={i} className='text-xs text-cinematic-blue'>
                      • {skill}
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
              Ready to Work Together?
            </h2>
            <p className='text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed'>
              Let&apos;s discuss your project and see how we can bring your
              vision to life with our cinematic approach.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-white text-cinematic-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300'
              >
                Start a Conversation
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
