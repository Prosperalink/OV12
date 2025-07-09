'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import AnimationObserver from './AnimationObserver';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-section-light dark:bg-section-dark">
        <AnimationObserver animationClass="fade-in" className="text-center">
          <div className="max-w-md mx-auto">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-cinematic-blue dark:text-cinematic-gold">Thank You!</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We've received your message and will get back to you within 24 hours.
            </p>
          </div>
        </AnimationObserver>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-cinematic-blue">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <AnimationObserver animationClass="slide-in-left">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Create Something Amazing Together
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Ready to transform your digital presence? We're here to help you 
                bring your vision to life with our cinematic approach to digital innovation.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="opacity-80">hello@orsonvision.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="opacity-80">+216 XX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="opacity-80">Tunis, Tunisia</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimationObserver>

          {/* Contact Form */}
          <AnimationObserver animationClass="slide-in-right">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cinematic-blue focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cinematic-blue focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cinematic-blue focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="+216 XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cinematic-blue focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cinematic-blue focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="video-production">Video Production</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="ai-integration">AI Integration</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cinematic-blue focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cinematic-gold text-white py-4 rounded-lg font-semibold hover:bg-cinematic-gold/90 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </AnimationObserver>
        </div>
      </div>
    </section>
  );
} 