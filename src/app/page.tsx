'use client';

import {
  Camera,
  Code,
  Lightbulb,
  Palette,
  Smartphone,
  Star,
  Users,
} from 'lucide-react';

import ContactForm from '@/components/ContactForm';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';

export default function HomePage() {
  const services = [
    {
      title: 'Digital Innovation',
      description:
        'Building robust digital foundations that drive growth and competitive advantage',
      features: [
        'Custom Software Development',
        'API Integration',
        'Cloud Solutions',
        'Digital Transformation',
      ],
      icon: Code,
      image: '/services/digital-marketing.jpg',
      href: '/services/digital-innovation',
      category: 'digital-innovation',
    },
    {
      title: 'Creative Design',
      description:
        'Crafting compelling visual narratives that connect with your audience',
      features: [
        'Brand Identity Design',
        'UI/UX Design',
        'Visual Storytelling',
        'Interactive Experiences',
      ],
      icon: Palette,
      image: '/services/consulting.jpg',
      href: '/services/creative-design',
      category: 'creative-design',
    },
    {
      title: 'Content Creation',
      description:
        'Producing engaging content that tells your story across all channels',
      features: [
        'Video Production',
        'Photography',
        'Social Media Content',
        'Brand Films',
      ],
      icon: Camera,
      image: '/services/ai-integration.jpg',
      href: '/services/content-creation',
      category: 'content-creation',
    },
    {
      title: 'Technology Solutions',
      description:
        'Engineering reliable technology solutions for seamless performance',
      features: [
        'Web Development',
        'Mobile Apps',
        'E-commerce Solutions',
        'System Integration',
      ],
      icon: Smartphone,
      image: '/services/digital-marketing.jpg',
      href: '/services/technology-solutions',
      category: 'technology-solutions',
    },
    {
      title: 'Strategic Consulting',
      description:
        'Providing strategic guidance to navigate the digital landscape',
      features: [
        'Digital Strategy',
        'Market Analysis',
        'Process Optimization',
        'Growth Planning',
      ],
      icon: Lightbulb,
      image: '/services/consulting.jpg',
      href: '/services/strategic-consulting',
      category: 'strategic-consulting',
    },
  ] as const;

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content:
        'Orson Vision transformed our digital presence with their cinematic approach. The results exceeded our expectations.',
      rating: 5,
      avatar: '/avatars/sarah.jpg',
    },
    {
      name: 'Ahmed Ben Ali',
      role: 'Founder, Tunisian Crafts',
      content:
        'Their human-centered design philosophy perfectly captured our brand essence. Our online sales increased by 300%.',
      rating: 5,
      avatar: '/avatars/ahmed.jpg',
    },
    {
      name: 'Marie Dubois',
      role: 'Marketing Director, École Internationale',
      content:
        'The team at Orson Vision understood our educational mission and created content that truly resonates with our community.',
      rating: 5,
      avatar: '/avatars/marie.jpg',
    },
  ];

  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <section className='section-cinematic bg-cinematic-blue text-cinematic-gold transition-colors duration-500'>
        <HeroSection videoSrc='/hero-video.mp4' posterSrc='/hero-poster.jpg' />
      </section>

      {/* Services Section */}
      <section className='section-cinematic bg-cinematic-gold text-cinematic-blue transition-colors duration-500'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-display-3xl font-bold text-cinematic-blue mb-6'>
              Our Services
            </h2>
            <p className='text-xl text-cinematic-blue/80 max-w-3xl mx-auto'>
              We offer comprehensive digital solutions that blend cutting-edge
              technology with human-centered design.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map(service => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                features={[...service.features]}
                icon={service.icon}
                image={service.image}
                href={service.href}
                category={service.category}
                className='card-cinematic h-full'
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='section-cinematic bg-cinematic-blue text-cinematic-gold transition-colors duration-500'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-display-3xl font-bold text-cinematic-gold mb-6'>
              Client Success Stories
            </h2>
            <p className='text-xl text-cinematic-gold/80 max-w-3xl mx-auto'>
              Discover how we&apos;ve helped businesses transform their digital
              presence and achieve remarkable results.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {testimonials.map(testimonial => (
              <div
                key={testimonial.name}
                className='card-cinematic bg-cinematic-gold text-cinematic-blue rounded-2xl p-8 shadow-cinematic hover:shadow-cinematic-gold transition-all duration-300'
              >
                <div className='flex items-center mb-4'>
                  <div className='flex text-cinematic-gold'>
                    {/* eslint-disable-next-line @typescript-eslint/naming-convention */}
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className='w-5 h-5 fill-current' />
                    ))}
                  </div>
                </div>
                <p className='text-cinematic-blue mb-6 leading-relaxed'>
                  &quot;{testimonial.content}&quot;
                </p>
                <div className='flex items-center'>
                  <div className='w-12 h-12 bg-cinematic-blue rounded-full flex items-center justify-center mr-4'>
                    <Users className='w-6 h-6 text-cinematic-gold' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-cinematic-blue'>
                      {testimonial.name}
                    </h4>
                    <p className='text-sm text-cinematic-blue/70'>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='section-cinematic bg-cinematic-gold text-cinematic-blue transition-colors duration-500'>
        <ContactForm />
      </section>
    </main>
  );
}
