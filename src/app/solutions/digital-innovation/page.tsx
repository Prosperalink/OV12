import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Innovation - Orson Vision',
  description:
    'Building robust digital foundations that drive growth and competitive advantage. Custom solutions for Wedding & Events, Education & Learning, Small Business & Startups, Enterprise & Corporate, Creative & Artisan, and Tourism & Hospitality.',
};

const industries = [
  {
    id: 'wedding-events',
    name: 'Wedding & Events',
    description:
      'Custom booking systems and portfolio websites that showcase your unique style and streamline client management.',
    solutions: [
      'Custom Booking Systems',
      'Portfolio Websites',
      'Client Management',
      'Payment Processing',
    ],
    features: [
      'Automated scheduling',
      'Client portal',
      'Payment integration',
      'Portfolio showcase',
    ],
  },
  {
    id: 'education-learning',
    name: 'Education & Learning',
    description:
      'Interactive learning platforms and student engagement systems that modernize educational experiences.',
    solutions: [
      'Learning Management Systems',
      'Student Portals',
      'Interactive Content',
      'Assessment Tools',
    ],
    features: [
      'Virtual classrooms',
      'Progress tracking',
      'Interactive quizzes',
      'Parent communication',
    ],
  },
  {
    id: 'small-business-startups',
    name: 'Small Business & Startups',
    description:
      'Scalable e-commerce solutions and business automation tools that accelerate growth.',
    solutions: [
      'E-commerce Platforms',
      'Business Automation',
      'CRM Systems',
      'Payment Gateways',
    ],
    features: [
      'Online storefront',
      'Inventory management',
      'Customer database',
      'Analytics dashboard',
    ],
  },
  {
    id: 'enterprise-corporate',
    name: 'Enterprise & Corporate',
    description:
      'Enterprise-grade digital infrastructure and workflow optimization systems.',
    solutions: [
      'Enterprise Software',
      'Workflow Automation',
      'Data Management',
      'System Integration',
    ],
    features: [
      'Scalable architecture',
      'Security compliance',
      'API integration',
      'Performance monitoring',
    ],
  },
  {
    id: 'creative-artisan',
    name: 'Creative & Artisan',
    description:
      'Portfolio platforms and online marketplaces that showcase your craftsmanship and reach global audiences.',
    solutions: [
      'Portfolio Platforms',
      'Online Marketplaces',
      'Inventory Management',
      'Global Shipping',
    ],
    features: [
      'Artist portfolios',
      'Commission system',
      'International shipping',
      'Payment processing',
    ],
  },
  {
    id: 'tourism-hospitality',
    name: 'Tourism & Hospitality',
    description:
      'Booking engines and guest experience platforms that increase conversions and customer satisfaction.',
    solutions: [
      'Booking Systems',
      'Guest Experience',
      'Revenue Management',
      'Customer Analytics',
    ],
    features: [
      'Real-time availability',
      'Guest portal',
      'Revenue optimization',
      'Customer insights',
    ],
  },
];

export default function digitalInnovationPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900'>
          <div className="absolute inset-0 bg-[url('/hero-poster.jpg')] bg-cover bg-center opacity-20"></div>
          <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/80'></div>
        </div>

        <div className='relative z-10 container mx-auto px-4 text-center'>
          <div className='text-6xl mb-6'>🚀</div>
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>
            Digital Innovation
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8'>
            Building robust digital foundations that drive growth and
            competitive advantage
          </p>
          <p className='text-lg text-gray-400 max-w-3xl mx-auto'>
            We craft cutting-edge digital solutions that bridge the gap between
            imagination and implementation, creating seamless user experiences
            that drive business growth.
          </p>
        </div>
      </section>

      {/* Industry Applications */}
      <section className='py-20 bg-gradient-to-br from-slate-900 to-blue-900'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Industry Applications
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Tailored digital solutions for every industry, designed to address
              your unique challenges and drive measurable results.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {industries.map(industry => (
              <div
                key={industry.id}
                className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105'
              >
                <h3 className='text-2xl font-bold text-white mb-4'>
                  {industry.name}
                </h3>
                <p className='text-gray-300 mb-6'>{industry.description}</p>

                <div className='space-y-4'>
                  <h4 className='text-lg font-semibold text-blue-400'>
                    Solutions We Offer:
                  </h4>
                  <ul className='space-y-2'>
                    {industry.solutions.map(solution => (
                      <li
                        key={solution}
                        className='flex items-center text-gray-300'
                      >
                        <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
                        {solution}
                      </li>
                    ))}
                  </ul>

                  <h4 className='text-lg font-semibold text-blue-400 mt-6'>
                    Key Features:
                  </h4>
                  <ul className='space-y-2'>
                    {industry.features.map(feature => (
                      <li
                        key={feature}
                        className='flex items-center text-gray-300'
                      >
                        <span className='w-2 h-2 bg-green-500 rounded-full mr-3'></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20 bg-gradient-to-br from-blue-900 to-slate-900'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Our Digital Innovation Process
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              A systematic approach to digital transformation that ensures
              success at every stage.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description:
                  'We analyze your current digital infrastructure and identify opportunities for improvement.',
              },
              {
                step: '02',
                title: 'Strategy & Planning',
                description:
                  'Develop a comprehensive digital strategy tailored to your business goals and industry requirements.',
              },
              {
                step: '03',
                title: 'Development & Testing',
                description:
                  'Build robust, scalable solutions with rigorous testing to ensure reliability and performance.',
              },
              {
                step: '04',
                title: 'Launch & Optimization',
                description:
                  'Deploy your solution and continuously optimize for maximum impact and ROI.',
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
            Ready to Transform Your Digital Presence?
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
            Let&apos;s discuss how our digital innovation solutions can drive
            growth and competitive advantage for your business.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300'>
              Start Your Project
            </button>
            <button className='border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300'>
              Learn More
            </button>
          </div>
          <p className='text-gray-300'>
            We&apos;re committed to your long-term success and partnership.
          </p>
        </div>
      </section>
    </div>
  );
}
