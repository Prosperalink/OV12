'use client';

import { useState } from 'react';
import AnimationObserver from '../ui/AnimationObserver';

interface ExpertiseArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  industries: Industry[];
}

interface Industry {
  id: string;
  name: string;
  description: string;
  solutions: string[];
}

const expertiseAreas: ExpertiseArea[] = [
  {
    id: 'digital-innovation',
    title: 'Digital Innovation',
    subtitle: 'Building robust digital foundations that drive growth and competitive advantage',
    description: 'We craft cutting-edge digital solutions that bridge the gap between imagination and implementation, creating seamless user experiences that drive business growth.',
    icon: '🚀',
    color: 'from-blue-600 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-blue-900/20 to-cyan-800/20',
    industries: [
      {
        id: 'wedding-events',
        name: 'Wedding & Events',
        description: 'Custom booking systems and portfolio websites that showcase your unique style and streamline client management.',
        solutions: ['Custom Booking Systems', 'Portfolio Websites', 'Client Management', 'Payment Processing']
      },
      {
        id: 'education-learning',
        name: 'Education & Learning',
        description: 'Interactive learning platforms and student engagement systems that modernize educational experiences.',
        solutions: ['Learning Management Systems', 'Student Portals', 'Interactive Content', 'Assessment Tools']
      },
      {
        id: 'small-business-startups',
        name: 'Small Business & Startups',
        description: 'Scalable e-commerce solutions and business automation tools that accelerate growth.',
        solutions: ['E-commerce Platforms', 'Business Automation', 'CRM Systems', 'Payment Gateways']
      },
      {
        id: 'enterprise-corporate',
        name: 'Enterprise & Corporate',
        description: 'Enterprise-grade digital infrastructure and workflow optimization systems.',
        solutions: ['Enterprise Software', 'Workflow Automation', 'Data Management', 'System Integration']
      },
      {
        id: 'creative-artisan',
        name: 'Creative & Artisan',
        description: 'Portfolio platforms and online marketplaces that showcase your craftsmanship and reach global audiences.',
        solutions: ['Portfolio Platforms', 'Online Marketplaces', 'Inventory Management', 'Global Shipping']
      },
      {
        id: 'tourism-hospitality',
        name: 'Tourism & Hospitality',
        description: 'Booking engines and guest experience platforms that increase conversions and customer satisfaction.',
        solutions: ['Booking Systems', 'Guest Experience', 'Revenue Management', 'Customer Analytics']
      }
    ]
  },
  {
    id: 'creative-design',
    title: 'Creative Design',
    subtitle: 'Crafting compelling visual narratives that connect with your audience and build lasting brand relationships',
    description: 'We design immersive brand experiences that connect with audiences on an emotional level, building lasting relationships and driving brand loyalty.',
    icon: '🎨',
    color: 'from-purple-600 to-pink-500',
    bgColor: 'bg-gradient-to-br from-purple-900/20 to-pink-800/20',
    industries: [
      {
        id: 'wedding-events',
        name: 'Wedding & Events',
        description: 'Romantic, elegant designs that capture the magic of special moments and attract dream couples.',
        solutions: ['Wedding Websites', 'Invitation Design', 'Brand Identity', 'Social Media Graphics']
      },
      {
        id: 'education-learning',
        name: 'Education & Learning',
        description: 'Engaging, educational designs that make learning accessible and inspiring for students of all ages.',
        solutions: ['Educational Graphics', 'Interactive Design', 'Brand Guidelines', 'Marketing Materials']
      },
      {
        id: 'small-business-startups',
        name: 'Small Business & Startups',
        description: 'Modern, professional designs that establish credibility and attract your ideal customers.',
        solutions: ['Brand Identity', 'Website Design', 'Marketing Collateral', 'Social Media Design']
      },
      {
        id: 'enterprise-corporate',
        name: 'Enterprise & Corporate',
        description: 'Sophisticated, trustworthy designs that reflect corporate values and build stakeholder confidence.',
        solutions: ['Corporate Branding', 'Annual Reports', 'Presentation Design', 'Internal Communications']
      },
      {
        id: 'creative-artisan',
        name: 'Creative & Artisan',
        description: 'Authentic, artistic designs that showcase your unique style and connect with art lovers worldwide.',
        solutions: ['Artist Portfolios', 'Product Photography', 'Exhibition Design', 'Online Galleries']
      },
      {
        id: 'tourism-hospitality',
        name: 'Tourism & Hospitality',
        description: 'Inviting, destination-focused designs that inspire travel and create memorable guest experiences.',
        solutions: ['Destination Branding', 'Hotel Websites', 'Travel Brochures', 'Guest Experience Design']
      }
    ]
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    subtitle: 'Producing engaging content that tells your story and drives meaningful conversations across all channels',
    description: 'We produce compelling content that tells your story, engages your audience, and drives meaningful conversations across all digital channels.',
    icon: '📹',
    color: 'from-orange-600 to-red-500',
    bgColor: 'bg-gradient-to-br from-orange-900/20 to-red-800/20',
    industries: [
      {
        id: 'wedding-events',
        name: 'Wedding & Events',
        description: 'Cinematic wedding videos and photography that capture the emotion and beauty of your special day.',
        solutions: ['Wedding Videos', 'Event Photography', 'Social Media Content', 'Client Testimonials']
      },
      {
        id: 'education-learning',
        name: 'Education & Learning',
        description: 'Educational videos and interactive content that make complex topics accessible and engaging.',
        solutions: ['Educational Videos', 'Interactive Content', 'Course Materials', 'Student Resources']
      },
      {
        id: 'small-business-startups',
        name: 'Small Business & Startups',
        description: 'Brand storytelling and marketing content that builds awareness and drives customer action.',
        solutions: ['Brand Videos', 'Marketing Content', 'Social Media', 'Case Studies']
      },
      {
        id: 'enterprise-corporate',
        name: 'Enterprise & Corporate',
        description: 'Professional corporate communications and thought leadership content that builds industry authority.',
        solutions: ['Corporate Videos', 'Thought Leadership', 'Internal Communications', 'Industry Reports']
      },
      {
        id: 'creative-artisan',
        name: 'Creative & Artisan',
        description: 'Artistic portfolios and behind-the-scenes content that showcases your creative process and craftsmanship.',
        solutions: ['Artist Videos', 'Process Documentation', 'Portfolio Content', 'Behind-the-Scenes']
      },
      {
        id: 'tourism-hospitality',
        name: 'Tourism & Hospitality',
        description: 'Destination videos and travel content that inspires bookings and creates wanderlust.',
        solutions: ['Destination Videos', 'Travel Content', 'Hotel Tours', 'Guest Experiences']
      }
    ]
  },
  {
    id: 'technology-solutions',
    title: 'Technology Solutions',
    subtitle: 'Engineering reliable technology solutions that power your digital operations and ensure seamless performance',
    description: 'We architect robust technology solutions that scale with your business, ensuring reliability, security, and performance for your digital operations.',
    icon: '⚙️',
    color: 'from-green-600 to-emerald-500',
    bgColor: 'bg-gradient-to-br from-green-900/20 to-emerald-800/20',
    industries: [
      {
        id: 'wedding-events',
        name: 'Wedding & Events',
        description: 'Client management systems and automated workflows that streamline your wedding planning process.',
        solutions: ['Client Management', 'Automated Workflows', 'Payment Processing', 'Calendar Integration']
      },
      {
        id: 'education-learning',
        name: 'Education & Learning',
        description: 'Learning management systems and student tracking tools that enhance educational outcomes.',
        solutions: ['LMS Platforms', 'Student Tracking', 'Assessment Tools', 'Parent Portals']
      },
      {
        id: 'small-business-startups',
        name: 'Small Business & Startups',
        description: 'Business automation tools and CRM systems that scale with your growing business.',
        solutions: ['Business Automation', 'CRM Systems', 'Inventory Management', 'Analytics Tools']
      },
      {
        id: 'enterprise-corporate',
        name: 'Enterprise & Corporate',
        description: 'Enterprise software integration and data management systems that optimize operations.',
        solutions: ['System Integration', 'Data Management', 'Security Solutions', 'Performance Monitoring']
      },
      {
        id: 'creative-artisan',
        name: 'Creative & Artisan',
        description: 'E-commerce platforms and inventory management systems that expand your market reach.',
        solutions: ['E-commerce Platforms', 'Inventory Management', 'Payment Gateways', 'Shipping Integration']
      },
      {
        id: 'tourism-hospitality',
        name: 'Tourism & Hospitality',
        description: 'Booking management systems and guest experience platforms that maximize revenue.',
        solutions: ['Booking Systems', 'Guest Experience', 'Revenue Management', 'Customer Analytics']
      }
    ]
  },
  {
    id: 'strategic-consulting',
    title: 'Strategic Consulting',
    subtitle: 'Providing strategic guidance to navigate the digital landscape and achieve sustainable business growth',
    description: 'We provide strategic guidance to help you navigate the digital landscape, optimize your operations, and achieve sustainable growth.',
    icon: '🎯',
    color: 'from-yellow-600 to-amber-500',
    bgColor: 'bg-gradient-to-br from-yellow-900/20 to-amber-800/20',
    industries: [
      {
        id: 'wedding-events',
        name: 'Wedding & Events',
        description: 'Digital strategy for wedding professionals to expand their reach and increase bookings.',
        solutions: ['Digital Strategy', 'Market Expansion', 'Brand Positioning', 'Revenue Optimization']
      },
      {
        id: 'education-learning',
        name: 'Education & Learning',
        description: 'Technology integration strategies that enhance learning outcomes and student engagement.',
        solutions: ['Technology Strategy', 'Learning Optimization', 'Student Engagement', 'Institutional Growth']
      },
      {
        id: 'small-business-startups',
        name: 'Small Business & Startups',
        description: 'Growth strategies and digital transformation roadmaps for scaling businesses.',
        solutions: ['Growth Strategy', 'Digital Transformation', 'Market Entry', 'Scaling Plans']
      },
      {
        id: 'enterprise-corporate',
        name: 'Enterprise & Corporate',
        description: 'Digital innovation strategies and change management for large organizations.',
        solutions: ['Innovation Strategy', 'Change Management', 'Digital Maturity', 'Competitive Analysis']
      },
      {
        id: 'creative-artisan',
        name: 'Creative & Artisan',
        description: 'Market expansion strategies and brand positioning for creative professionals.',
        solutions: ['Market Strategy', 'Brand Development', 'Audience Growth', 'Revenue Diversification']
      },
      {
        id: 'tourism-hospitality',
        name: 'Tourism & Hospitality',
        description: 'Digital marketing strategies and guest experience optimization for tourism businesses.',
        solutions: ['Marketing Strategy', 'Guest Experience', 'Revenue Management', 'Competitive Positioning']
      }
    ]
  }
];

export default function SolutionsMatrix() {
  const [selectedExpertise, setSelectedExpertise] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900">
        <div className="absolute inset-0 bg-[url('/hero-poster.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <AnimationObserver>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Solutions Matrix
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Where expertise meets industry. We specialize in crafting digital solutions that are tailored to your specific business needs and industry challenges.
            </p>
          </div>
        </AnimationObserver>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertiseAreas.map((expertise, index) => (
            <AnimationObserver key={expertise.id}>
              <div
                className={`relative group cursor-pointer transition-all duration-500 hover:scale-105`}
                onClick={() => setSelectedExpertise(selectedExpertise === expertise.id ? null : expertise.id)}
              >
                <div className={`relative p-8 rounded-2xl border border-white/10 backdrop-blur-sm ${expertise.bgColor} hover:border-white/30 transition-all duration-500`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${expertise.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{expertise.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{expertise.title}</h3>
                    <p className="text-gray-300 mb-4">{expertise.subtitle}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{expertise.description}</p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>
            </AnimationObserver>
          ))}
        </div>

        {/* Detailed View */}
        {selectedExpertise && (
          <AnimationObserver>
            <div className="mt-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Industry Applications</h3>
                    <div className="space-y-4">
                      {expertiseAreas.find(e => e.id === selectedExpertise)?.industries.map((industry, index) => (
                        <div
                          key={industry.id}
                          className="cursor-pointer p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                          onClick={() => setSelectedIndustry(selectedIndustry === industry.id ? null : industry.id)}
                        >
                          <h4 className="text-lg font-semibold text-white mb-2">{industry.name}</h4>
                          <p className="text-gray-300 text-sm">{industry.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    {selectedIndustry && (
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Solutions We Offer</h3>
                        <ul className="space-y-2">
                          {expertiseAreas.find(e => e.id === selectedExpertise)?.industries.find(i => i.id === selectedIndustry)?.solutions.map((solution, index) => (
                            <li
                              key={index}
                              className="flex items-center text-gray-300"
                            >
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </AnimationObserver>
        )}
      </div>
    </section>
  );
} 