'use client';

import { Code, Palette, Camera, Globe, Zap, Users } from 'lucide-react';
import AnimationObserver from './AnimationObserver';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
    features: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Performance Optimized']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Cinematic user experiences that blend aesthetics with functionality.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
  },
  {
    icon: Camera,
    title: 'Video Production',
    description: 'Professional video content that tells your story with cinematic quality.',
    features: ['Corporate Videos', 'Product Demos', 'Social Media Content', 'Live Streaming']
  },
  {
    icon: Globe,
    title: 'Digital Marketing',
    description: 'Strategic digital campaigns that drive growth and engagement.',
    features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'Analytics']
  },
  {
    icon: Zap,
    title: 'AI Integration',
    description: 'Intelligent automation and AI-powered solutions for modern businesses.',
    features: ['Chatbots', 'Content Generation', 'Data Analysis', 'Process Automation']
  },
  {
    icon: Users,
    title: 'Consulting',
    description: 'Strategic guidance to transform your digital presence and business growth.',
    features: ['Digital Strategy', 'Technology Audit', 'Growth Planning', 'Team Training']
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-section-dark dark:bg-section-light">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <AnimationObserver animationClass="fade-in" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cinematic-blue dark:text-cinematic-gold">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions that transform businesses and create 
            lasting impact through innovative technology and creative excellence.
          </p>
        </AnimationObserver>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimationObserver
              key={service.title}
              animationClass="fade-in"
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                {/* Icon */}
                <div className="w-16 h-16 bg-cinematic-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-2 h-2 bg-cinematic-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button className="text-cinematic-blue dark:text-cinematic-gold font-semibold hover:underline transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </AnimationObserver>
          ))}
        </div>

        {/* CTA Section */}
        <AnimationObserver animationClass="fade-in" className="text-center mt-16">
          <div className="bg-cinematic-blue rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can bring your vision to life with our comprehensive 
              digital solutions and cinematic approach.
            </p>
            <button className="bg-cinematic-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300">
              Get Started Today
            </button>
          </div>
        </AnimationObserver>
      </div>
    </section>
  );
} 