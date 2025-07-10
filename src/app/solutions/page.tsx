import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solutions - Orson Vision',
  description:
    'Where expertise meets industry. We specialize in crafting digital solutions that are tailored to your specific business needs and industry challenges.',
};

const solutions = [
  {
    id: 'digital-innovation',
    title: 'Digital Innovation',
    subtitle:
      'Building robust digital foundations that drive growth and competitive advantage',
    description:
      'We craft cutting-edge digital solutions that bridge the gap between imagination and implementation, creating seamless user experiences that drive business growth.',
    icon: '🚀',
    color: 'from-blue-600 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-blue-900/20 to-cyan-800/20',
    href: '/solutions/digital-innovation',
  },
  {
    id: 'creative-design',
    title: 'Creative Design',
    subtitle:
      'Crafting compelling visual narratives that connect with your audience and build lasting brand relationships',
    description:
      'We design immersive brand experiences that connect with audiences on an emotional level, building lasting relationships and driving brand loyalty.',
    icon: '🎨',
    color: 'from-purple-600 to-pink-500',
    bgColor: 'bg-gradient-to-br from-purple-900/20 to-pink-800/20',
    href: '/solutions/creative-design',
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    subtitle:
      'Producing engaging content that tells your story and drives meaningful conversations across all channels',
    description:
      'We produce compelling content that tells your story, engages your audience, and drives meaningful conversations across all digital channels.',
    icon: '📹',
    color: 'from-orange-600 to-red-500',
    bgColor: 'bg-gradient-to-br from-orange-900/20 to-red-800/20',
    href: '/solutions/content-creation',
  },
  {
    id: 'technology-solutions',
    title: 'Technology Solutions',
    subtitle:
      'Engineering reliable technology solutions that power your digital operations and ensure seamless performance',
    description:
      'We architect robust technology solutions that scale with your business, ensuring reliability, security, and performance for your digital operations.',
    icon: '⚙️',
    color: 'from-green-600 to-emerald-500',
    bgColor: 'bg-gradient-to-br from-green-900/20 to-emerald-800/20',
    href: '/solutions/technology-solutions',
  },
  {
    id: 'strategic-consulting',
    title: 'Strategic Consulting',
    subtitle:
      'Providing strategic guidance to navigate the digital landscape and achieve sustainable business growth',
    description:
      'We provide strategic guidance to help you navigate the digital landscape, optimize your operations, and achieve sustainable growth.',
    icon: '🎯',
    color: 'from-yellow-600 to-amber-500',
    bgColor: 'bg-gradient-to-br from-yellow-900/20 to-amber-800/20',
    href: '/solutions/strategic-consulting',
  },
];

const industries = [
  'Wedding & Events',
  'Education & Learning',
  'Small Business & Startups',
  'Enterprise & Corporate',
  'Creative & Artisan',
  'Tourism & Hospitality',
];

export default function solutionsPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900'>
          <div className="absolute inset-0 bg-[url('/hero-poster.jpg')] bg-cover bg-center opacity-20"></div>
          <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/80'></div>
        </div>

        <div className='relative z-10 container mx-auto px-4 text-center'>
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>
            Solutions Matrix
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8'>
            Where expertise meets industry. We specialize in crafting digital
            solutions that are tailored to your specific business needs and
            industry challenges.
          </p>
          <p className='text-lg text-gray-400 max-w-3xl mx-auto'>
            Every business has unique challenges. Our expertise spans across
            five core areas, each designed to address specific industry needs
            and drive measurable results.
          </p>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className='py-20 bg-gradient-to-br from-slate-900 to-blue-900'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Our Expertise Areas
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Five specialized domains where creativity meets technology, each
              designed to address your unique challenges and aspirations.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {solutions.map(solution => (
              <Link
                key={solution.id}
                href={solution.href}
                className={`group relative p-8 rounded-2xl border border-white/10 backdrop-blur-sm ${solution.bgColor} hover:border-white/30 transition-all duration-500 hover:scale-105`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                ></div>

                <div className='relative z-10'>
                  <div className='text-4xl mb-4'>{solution.icon}</div>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {solution.title}
                  </h3>
                  <p className='text-gray-300 mb-4'>{solution.subtitle}</p>
                  <p className='text-gray-400 text-sm leading-relaxed'>
                    {solution.description}
                  </p>

                  <div className='mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors'>
                    <span>Learn More</span>
                    <svg
                      className='w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl'></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className='py-20 bg-gradient-to-br from-blue-900 to-slate-900'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Industries We Serve
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              From creative professionals to enterprise corporations, we
              understand the unique challenges and opportunities in every
              industry.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {industries.map(industry => (
              <div
                key={industry}
                className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105'
              >
                <h3 className='text-xl font-semibold text-white mb-2'>
                  {industry}
                </h3>
                <p className='text-gray-300 text-sm'>
                  Customized solutions designed specifically for{' '}
                  {industry.toLowerCase()} professionals and businesses.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className='py-20 bg-gradient-to-br from-slate-900 to-blue-900'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Our Approach
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              A collaborative process designed to transform your vision into
              digital reality, with transparency and excellence at every step.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                step: '01',
                title: 'Discovery & Strategy',
                description:
                  'We dive deep into understanding your business, challenges, and aspirations to craft a tailored digital strategy.',
              },
              {
                step: '02',
                title: 'Design & Prototyping',
                description:
                  'Our creative team transforms your vision into stunning visual concepts and interactive prototypes.',
              },
              {
                step: '03',
                title: 'Development & Integration',
                description:
                  'We build robust, scalable solutions using cutting-edge technologies and best practices.',
              },
              {
                step: '04',
                title: 'Launch & Optimization',
                description:
                  'We ensure a smooth launch and continuously optimize your solution for maximum impact.',
              },
            ].map(process => (
              <div
                key={process.step}
                className='text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10'
              >
                <div className='text-4xl font-bold text-blue-500 mb-4'>
                  {process.step}
                </div>
                <h3 className='text-xl font-bold text-white mb-4'>
                  {process.title}
                </h3>
                <p className='text-gray-300'>{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Ready to Start Your Journey?
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
            Let&apos;s discuss how our solutions can address your specific
            challenges and drive growth for your business.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300'
            >
              Get Started
            </Link>
            <Link
              href='/portfolio'
              className='border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300'
            >
              View Our Work
            </Link>
          </div>
          <p className='text-cinematic-blue/80 max-w-3xl mx-auto'>
            We&apos;re here to help you navigate the digital landscape and
            achieve your goals.
          </p>
        </div>
      </section>
    </div>
  );
}
