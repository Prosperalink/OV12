'use client';

import { useEffect, useState } from 'react';
import AnimationObserver from '../ui/AnimationObserver';

interface ITestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  industry: string;
}

const testimonials: ITestimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'TechFlow Solutions',
    content:
      'Orson Vision transformed our digital presence completely. Their cinematic approach to design and strategic thinking helped us stand out in a crowded market. The results exceeded our expectations.',
    rating: 5,
    avatar: '👩‍💼',
    industry: 'Technology',
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    role: 'Marketing Director',
    company: 'Global Retail Corp',
    content:
      'Working with Orson Vision was a game-changer for our brand. Their understanding of our customer journey and ability to create immersive experiences has driven significant growth in our online sales.',
    rating: 5,
    avatar: '👨‍💼',
    industry: 'Retail',
  },
  {
    id: '3',
    name: 'Emma Thompson',
    role: 'Founder',
    company: 'Creative Studios',
    content:
      "The team at Orson Vision doesn't just build websites - they create digital experiences that tell stories. Their strategic approach and attention to detail made all the difference for our creative agency.",
    rating: 5,
    avatar: '👩‍🎨',
    industry: 'Creative',
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'CTO',
    company: 'Innovate Labs',
    content:
      "Orson Vision's technical expertise combined with their creative vision delivered a solution that not only looks stunning but performs exceptionally well. Their ongoing support has been invaluable.",
    rating: 5,
    avatar: '👨‍💻',
    industry: 'Startup',
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    role: 'Brand Manager',
    company: 'Heritage Brands',
    content:
      'The cinematic approach to our brand redesign was exactly what we needed. Orson Vision helped us modernize while maintaining our heritage values. The results speak for themselves.',
    rating: 5,
    avatar: '👩‍🎯',
    industry: 'Heritage',
  },
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className='relative min-h-screen py-20 overflow-hidden'>
      {/* Cinematic Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900'>
        <div className="absolute inset-0 bg-[url('/hero-poster.jpg')] bg-cover bg-center opacity-15"></div>
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/80'></div>
      </div>

      <div className='relative z-10 container mx-auto px-4'>
        <AnimationObserver>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
              Client Success Stories
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Discover how we've helped businesses transform their digital
              presence and achieve remarkable results.
            </p>
          </div>
        </AnimationObserver>

        {/* Testimonials Carousel */}
        <div className='relative max-w-4xl mx-auto mb-16'>
          <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10'>
            <div className='text-center'>
              {/* Rating Stars */}
              <div className='flex justify-center mb-6'>
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <span key={i} className='text-2xl text-yellow-400 mx-1'>
                      ⭐
                    </span>
                  )
                )}
              </div>

              {/* Testimonial Content */}
              <blockquote className='text-xl text-gray-300 leading-relaxed mb-8 italic'>
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author Info */}
              <div className='flex items-center justify-center space-x-4'>
                <div className='text-4xl'>
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className='text-left'>
                  <h4 className='text-white font-bold text-lg'>
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className='text-gray-400'>
                    {testimonials[currentTestimonial].role} at{' '}
                    {testimonials[currentTestimonial].company}
                  </p>
                  <span className='text-sm text-blue-400'>
                    {testimonials[currentTestimonial].industry} Industry
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className='flex justify-center mt-8 space-x-2'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTestimonial(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-blue-500 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <AnimationObserver>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {[
              { number: '150+', label: 'Projects Completed', icon: '🚀' },
              { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
              { number: '24/7', label: 'Support Available', icon: '🛡️' },
              { number: '5+', label: 'Years Experience', icon: '🎯' },
            ].map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='text-4xl mb-2'>{stat.icon}</div>
                <div className='text-3xl font-bold text-white mb-2'>
                  {stat.number}
                </div>
                <div className='text-gray-300'>{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimationObserver>
      </div>
    </section>
  );
}
