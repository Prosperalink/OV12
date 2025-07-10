'use client';

import { motion } from 'framer-motion';
import { useCallback, useMemo, useState } from 'react';

import AnimationObserver from '@/components/AnimationObserver';

interface IExpertiseArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  industries: IIndustry[];
}

interface IIndustry {
  id: string;
  name: string;
  description: string;
  solutions: string[];
}

// Extracted data to separate file for better maintainability
const EXPERTISE_AREAS: IExpertiseArea[] = [
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
    industries: [
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
      },
    ],
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
    industries: [
      {
        id: 'wedding-events',
        name: 'Wedding & Events',
        description:
          'Romantic, elegant designs that capture the magic of special moments and attract dream couples.',
        solutions: [
          'Wedding Websites',
          'Invitation Design',
          'Brand Identity',
          'Social Media Graphics',
        ],
      },
      {
        id: 'education-learning',
        name: 'Education & Learning',
        description:
          'Engaging, educational designs that make learning accessible and inspiring for students of all ages.',
        solutions: [
          'Educational Graphics',
          'Interactive Design',
          'Brand Guidelines',
          'Marketing Materials',
        ],
      },
      {
        id: 'small-business-startups',
        name: 'Small Business & Startups',
        description:
          'Modern, professional designs that establish credibility and attract your ideal customers.',
        solutions: [
          'Brand Identity',
          'Website Design',
          'Marketing Collateral',
          'Social Media Design',
        ],
      },
      {
        id: 'enterprise-corporate',
        name: 'Enterprise & Corporate',
        description:
          'Sophisticated, trustworthy designs that reflect corporate values and build stakeholder confidence.',
        solutions: [
          'Corporate Branding',
          'Annual Reports',
          'Presentation Design',
          'Internal Communications',
        ],
      },
      {
        id: 'creative-artisan',
        name: 'Creative & Artisan',
        description:
          'Authentic, artistic designs that showcase your unique style and connect with art lovers worldwide.',
        solutions: [
          'Artist Portfolios',
          'Product Photography',
          'Exhibition Design',
          'Online Galleries',
        ],
      },
      {
        id: 'tourism-hospitality',
        name: 'Tourism & Hospitality',
        description:
          'Inviting, destination-focused designs that inspire travel and create memorable guest experiences.',
        solutions: [
          'Destination Branding',
          'Hotel Websites',
          'Travel Brochures',
          'Guest Experience Design',
        ],
      },
    ],
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    subtitle:
      'Creating engaging content that tells your story and connects with your audience on a deeper level',
    description:
      'We produce compelling content that resonates with your audience, builds trust, and drives meaningful engagement across all platforms.',
    icon: '📝',
    color: 'from-green-600 to-emerald-500',
    bgColor: 'bg-gradient-to-br from-green-900/20 to-emerald-800/20',
    industries: [
      {
        id: 'wedding-events',
        name: 'Wedding & Events',
        description:
          'Romantic storytelling and visual content that captures the essence of your special day.',
        solutions: [
          'Wedding Photography',
          'Video Production',
          'Social Media Content',
          'Blog Writing',
        ],
      },
      {
        id: 'education-learning',
        name: 'Education & Learning',
        description:
          'Educational content that makes complex topics accessible and engaging for all learners.',
        solutions: [
          'Educational Videos',
          'Interactive Content',
          'Course Materials',
          'Student Resources',
        ],
      },
      {
        id: 'small-business-startups',
        name: 'Small Business & Startups',
        description:
          'Authentic content that showcases your brand personality and connects with your target audience.',
        solutions: [
          'Brand Storytelling',
          'Social Media Content',
          'Blog Writing',
          'Email Marketing',
        ],
      },
      {
        id: 'enterprise-corporate',
        name: 'Enterprise & Corporate',
        description:
          'Professional content that builds credibility and communicates complex information clearly.',
        solutions: [
          'Corporate Communications',
          'Technical Writing',
          'Case Studies',
          'Thought Leadership',
        ],
      },
      {
        id: 'creative-artisan',
        name: 'Creative & Artisan',
        description:
          'Artistic content that showcases your creative process and connects with art enthusiasts.',
        solutions: [
          'Artist Portfolios',
          'Behind-the-Scenes',
          'Creative Process',
          'Art Documentation',
        ],
      },
      {
        id: 'tourism-hospitality',
        name: 'Tourism & Hospitality',
        description:
          'Compelling travel content that inspires wanderlust and showcases destinations beautifully.',
        solutions: [
          'Travel Photography',
          'Destination Videos',
          'Travel Guides',
          'Hotel Content',
        ],
      },
    ],
  },
  {
    id: 'strategic-consulting',
    title: 'Strategic Consulting',
    subtitle:
      'Providing strategic guidance that aligns your digital presence with your business objectives',
    description:
      'We offer strategic consulting services that help you make informed decisions about your digital strategy, ensuring every initiative supports your business goals.',
    icon: '🎯',
    color: 'from-orange-600 to-red-500',
    bgColor: 'bg-gradient-to-br from-orange-900/20 to-red-800/20',
    industries: [
      {
        id: 'wedding-events',
        name: 'Wedding & Events',
        description:
          'Strategic planning to help you build a sustainable wedding business and attract your ideal clients.',
        solutions: [
          'Business Strategy',
          'Market Analysis',
          'Brand Positioning',
          'Growth Planning',
        ],
      },
      {
        id: 'education-learning',
        name: 'Education & Learning',
        description:
          'Strategic guidance to modernize educational offerings and improve student outcomes.',
        solutions: [
          'Educational Strategy',
          'Technology Integration',
          'Curriculum Development',
          'Student Success',
        ],
      },
      {
        id: 'small-business-startups',
        name: 'Small Business & Startups',
        description:
          'Strategic consulting to help you scale your business and compete effectively in your market.',
        solutions: [
          'Business Strategy',
          'Digital Transformation',
          'Market Entry',
          'Growth Strategy',
        ],
      },
      {
        id: 'enterprise-corporate',
        name: 'Enterprise & Corporate',
        description:
          'Strategic guidance for large organizations undergoing digital transformation and innovation.',
        solutions: [
          'Digital Strategy',
          'Change Management',
          'Innovation Consulting',
          'Technology Roadmap',
        ],
      },
      {
        id: 'creative-artisan',
        name: 'Creative & Artisan',
        description:
          'Strategic advice to help creative professionals build sustainable businesses and reach global markets.',
        solutions: [
          'Creative Business',
          'Market Expansion',
          'Pricing Strategy',
          'Brand Development',
        ],
      },
      {
        id: 'tourism-hospitality',
        name: 'Tourism & Hospitality',
        description:
          'Strategic consulting to help hospitality businesses optimize operations and enhance guest experiences.',
        solutions: [
          'Hospitality Strategy',
          'Guest Experience',
          'Revenue Optimization',
          'Operational Efficiency',
        ],
      },
    ],
  },
  {
    id: 'technology-solutions',
    title: 'Technology Solutions',
    subtitle:
      'Building custom technology solutions that solve your unique business challenges',
    description:
      'We develop custom technology solutions that address your specific business needs, from simple automation to complex enterprise systems.',
    icon: '⚡',
    color: 'from-indigo-600 to-purple-500',
    bgColor: 'bg-gradient-to-br from-indigo-900/20 to-purple-800/20',
    industries: [
      {
        id: 'wedding-events',
        name: 'Wedding & Events',
        description:
          'Custom technology solutions that streamline your wedding business operations and enhance client experiences.',
        solutions: [
          'Custom Booking Systems',
          'Client Portals',
          'Payment Processing',
          'Automation Tools',
        ],
      },
      {
        id: 'education-learning',
        name: 'Education & Learning',
        description:
          'Educational technology solutions that enhance learning experiences and improve student outcomes.',
        solutions: [
          'Learning Platforms',
          'Student Management',
          'Assessment Tools',
          'Analytics Systems',
        ],
      },
      {
        id: 'small-business-startups',
        name: 'Small Business & Startups',
        description:
          'Scalable technology solutions that help small businesses compete with larger organizations.',
        solutions: [
          'E-commerce Platforms',
          'Business Automation',
          'CRM Systems',
          'Analytics Tools',
        ],
      },
      {
        id: 'enterprise-corporate',
        name: 'Enterprise & Corporate',
        description:
          'Enterprise-grade technology solutions that support complex business operations and scale with growth.',
        solutions: [
          'Enterprise Software',
          'System Integration',
          'Data Management',
          'Security Solutions',
        ],
      },
      {
        id: 'creative-artisan',
        name: 'Creative & Artisan',
        description:
          'Technology solutions that help creative professionals showcase their work and reach global audiences.',
        solutions: [
          'Portfolio Platforms',
          'E-commerce Systems',
          'Content Management',
          'Marketing Tools',
        ],
      },
      {
        id: 'tourism-hospitality',
        name: 'Tourism & Hospitality',
        description:
          'Technology solutions that enhance guest experiences and optimize hospitality operations.',
        solutions: [
          'Booking Systems',
          'Guest Management',
          'Revenue Management',
          'Analytics Platforms',
        ],
      },
    ],
  },
];

// Extracted component for individual expertise area
const ExpertiseAreaCard = ({
  area,
  isActive,
  onToggle,
}: {
  area: IExpertiseArea;
  isActive: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      className={`cursor-pointer rounded-lg p-6 transition-all duration-300 ${
        isActive ? area.bgColor : 'bg-gray-50 dark:bg-gray-800'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onToggle}
    >
      <div className='flex items-center mb-4'>
        <span className='text-3xl mr-4'>{area.icon}</span>
        <div>
          <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
            {area.title}
          </h3>
          <p className='text-sm text-gray-600 dark:text-gray-300'>
            {area.subtitle}
          </p>
        </div>
      </div>
      <p className='text-gray-700 dark:text-gray-300 text-sm'>
        {area.description}
      </p>
    </motion.div>
  );
};

// Extracted component for industry solutions
const IndustrySolutions = ({ industry }: { industry: IIndustry }) => {
  return (
    <motion.div
      className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300'
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
        {industry.name}
      </h4>
      <p className='text-gray-600 dark:text-gray-300 mb-4 text-sm'>
        {industry.description}
      </p>
      <div className='space-y-2'>
        {industry.solutions.map((solution, index) => (
          <div
            key={index}
            className='flex items-center text-sm text-gray-700 dark:text-gray-300'
          >
            <span className='w-2 h-2 bg-cinematic-blue dark:bg-cinematic-gold rounded-full mr-3'></span>
            {solution}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Extracted hook for creative universes state management
const useCreativeUniversesState = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const handleAreaToggle = useCallback(
    (areaId: string) => {
      setSelectedArea(selectedArea === areaId ? null : areaId);
    },
    [selectedArea]
  );

  const selectedAreaData = useMemo(() => {
    return selectedArea
      ? EXPERTISE_AREAS.find(area => area.id === selectedArea)
      : null;
  }, [selectedArea]);

  return {
    selectedArea,
    selectedAreaData,
    handleAreaToggle,
  };
};

export default function CreativeUniverses() {
  const { selectedArea, selectedAreaData, handleAreaToggle } =
    useCreativeUniversesState();

  return (
    <section className='py-16 bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <AnimationObserver>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-6'>
              Creative Universes
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
              Explore our expertise areas and discover how we can transform your
              digital presence with our cinematic approach to innovation.
            </p>
          </div>
        </AnimationObserver>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Expertise Areas */}
          <AnimationObserver>
            <div className='space-y-4'>
              <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>
                Our Expertise Areas
              </h3>
              {EXPERTISE_AREAS.map(area => (
                <ExpertiseAreaCard
                  key={area.id}
                  area={area}
                  isActive={selectedArea === area.id}
                  onToggle={() => handleAreaToggle(area.id)}
                />
              ))}
            </div>
          </AnimationObserver>

          {/* Industry Solutions */}
          <AnimationObserver>
            <div>
              <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-6'>
                {selectedAreaData
                  ? `${selectedAreaData.title} Solutions`
                  : 'Select an expertise area to see solutions'}
              </h3>
              {selectedAreaData ? (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {selectedAreaData.industries.map(industry => (
                    <IndustrySolutions key={industry.id} industry={industry} />
                  ))}
                </div>
              ) : (
                <div className='text-center py-12'>
                  <p className='text-gray-500 dark:text-gray-400'>
                    Choose an expertise area to explore industry-specific
                    solutions
                  </p>
                </div>
              )}
            </div>
          </AnimationObserver>
        </div>
      </div>
    </section>
  );
}
