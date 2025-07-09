'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import AnimationObserver from '../ui/AnimationObserver';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  budget: string;
  timeline: string;
}

const serviceOptions = [
  'Digital Innovation',
  'Creative Design',
  'Content Creation',
  'Technology Solutions',
  'Strategic Consulting',
  'Full-Service Package'
];

const budgetOptions = [
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  '$50,000+',
  'To be discussed'
];

const timelineOptions = [
  'ASAP',
  '1-2 months',
  '3-6 months',
  '6+ months',
  'Flexible'
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data);
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="relative min-h-screen py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900/30 to-slate-900">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <AnimationObserver>
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-4xl font-bold text-white mb-6">Thank You!</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Your message has been received. Our team will get back to you within 24 hours to discuss your project and how we can help bring your vision to life.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-cinematic-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          </AnimationObserver>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900">
        <div className="absolute inset-0 bg-[url('/hero-poster.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <AnimationObserver>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Start Your Project
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your digital presence? Let's discuss your vision and create something extraordinary together.
            </p>
          </div>
        </AnimationObserver>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <AnimationObserver>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2">Full Name *</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <span className="text-red-400 text-sm">{errors.name.message}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-white mb-2">Email Address *</label>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <span className="text-red-400 text-sm">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2">Company</label>
                  <input
                    {...register('company')}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Service Interest *</label>
                  <select
                    {...register('service', { required: 'Please select a service' })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <span className="text-red-400 text-sm">{errors.service.message}</span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2">Budget Range</label>
                    <select
                      {...register('budget')}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select budget</option>
                      {budgetOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white mb-2">Timeline</label>
                    <select
                      {...register('timeline')}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2">Project Details *</label>
                  <textarea
                    {...register('message', { required: 'Please tell us about your project' })}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and vision..."
                  />
                  {errors.message && (
                    <span className="text-red-400 text-sm">{errors.message.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cinematic-gold text-white py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimationObserver>

          {/* Contact Information */}
          <AnimationObserver>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Whether you have a specific project in mind or just want to explore possibilities, we're here to help. Our team is ready to discuss your vision and create a tailored solution that exceeds your expectations.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cinematic-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">+216 XX XXX XXX</p>
                    <p className="text-gray-400 text-sm">Available Mon-Fri, 9AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cinematic-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">hello@orsonvision.com</p>
                    <p className="text-gray-400 text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cinematic-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-300">Tunis, Tunisia</p>
                    <p className="text-gray-400 text-sm">Serving clients worldwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cinematic-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Response Time</h4>
                    <p className="text-gray-300">Within 24 hours</p>
                    <p className="text-gray-400 text-sm">For urgent projects, same day</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-white font-semibold mb-4">Why Choose Orson Vision?</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cinematic-gold rounded-full mr-3"></span>
                    Cinematic approach to digital experiences
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cinematic-gold rounded-full mr-3"></span>
                    Proven track record with 150+ projects
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cinematic-gold rounded-full mr-3"></span>
                    End-to-end service from strategy to launch
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cinematic-gold rounded-full mr-3"></span>
                    Ongoing support and optimization
                  </li>
                </ul>
              </div>
            </div>
          </AnimationObserver>
        </div>
      </div>
    </section>
  );
} 