'use client';

import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Cinematic animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const linkVariants = {
    hover: {
      x: 5,
      transition: { duration: 0.2, ease: 'easeOut' },
    },
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: '#',
      color: 'hover:text-blue-600',
    },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#',
      color: 'hover:text-pink-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#',
      color: 'hover:text-blue-700',
    },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' },
  ];

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Content Creation', href: '/services/content-creation' },
        { name: 'Creative Design', href: '/services/creative-design' },
        { name: 'Digital Innovation', href: '/services/digital-innovation' },
        {
          name: 'Strategic Consulting',
          href: '/services/strategic-consulting',
        },
        {
          name: 'Technology Solutions',
          href: '/services/technology-solutions',
        },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Whitepapers', href: '/whitepapers' },
        { name: 'Newsletter', href: '/newsletter' },
      ],
    },
  ];

  return (
    <footer className='relative bg-gray-900 dark:bg-gray-950 text-white overflow-hidden'>
      {/* Enhanced background with cinematic effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-cinematic-blue/20 via-gray-900 to-cinematic-gold/20' />

      {/* Animated background elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-cinematic-gold/5 rounded-full blur-3xl animate-pulse' />
        <div
          className='absolute bottom-0 right-1/4 w-64 h-64 bg-cinematic-blue/5 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '1s' }}
        />
        <div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cinematic-gold/3 to-cinematic-blue/3 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        />
      </div>

      <motion.div
        className='relative z-10 container mx-auto px-4 py-16'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {/* Company Info with enhanced styling */}
          <motion.div variants={itemVariants} className='lg:col-span-1'>
            <motion.div
              className='mb-6'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className='text-2xl font-bold bg-gradient-to-r from-cinematic-gold to-cinematic-blue bg-clip-text text-transparent animate-gradient-x'>
                Orson Vision
              </h3>
            </motion.div>

            <p className='text-gray-300 mb-6 leading-relaxed'>
              We craft digital experiences that blend artistic excellence with
              technical precision, creating moments that inspire, connect, and
              transform.
            </p>

            {/* Enhanced contact info with icons */}
            <div className='space-y-3'>
              <motion.div
                className='flex items-center space-x-3 text-gray-300 hover:text-cinematic-gold transition-colors duration-300'
                variants={linkVariants}
                whileHover='hover'
              >
                <MapPin className='w-4 h-4 text-cinematic-gold' />
                <span>123 Innovation Drive, Tech City, TC 12345</span>
              </motion.div>

              <motion.div
                className='flex items-center space-x-3 text-gray-300 hover:text-cinematic-gold transition-colors duration-300'
                variants={linkVariants}
                whileHover='hover'
              >
                <Phone className='w-4 h-4 text-cinematic-gold' />
                <span>+1 (555) 123-4567</span>
              </motion.div>

              <motion.div
                className='flex items-center space-x-3 text-gray-300 hover:text-cinematic-gold transition-colors duration-300'
                variants={linkVariants}
                whileHover='hover'
              >
                <Mail className='w-4 h-4 text-cinematic-gold' />
                <span>hello@orsonvision.com</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer Links with enhanced animations */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className='space-y-4'
            >
              <h4 className='text-lg font-semibold text-cinematic-gold mb-4'>
                {section.title}
              </h4>

              <ul className='space-y-2'>
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: sectionIndex * 0.1 + linkIndex * 0.05,
                    }}
                    whileHover='hover'
                    variants={linkVariants}
                  >
                    <Link
                      href={link.href}
                      className='text-gray-300 hover:text-cinematic-gold transition-all duration-300 group relative'
                    >
                      <span className='relative z-10'>{link.name}</span>
                      {/* Animated underline */}
                      <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-cinematic-gold group-hover:w-full transition-all duration-300 ease-out'></span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enhanced social media section */}
        <motion.div
          className='border-t border-gray-800 pt-8'
          variants={itemVariants}
        >
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            {/* Copyright with enhanced styling */}
            <motion.div
              className='text-gray-400 text-sm'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className='bg-gradient-to-r from-gray-400 to-cinematic-gold bg-clip-text text-transparent'>
                © {currentYear} Orson Vision. All rights reserved.
              </span>
            </motion.div>

            {/* Enhanced social media icons */}
            <div className='flex space-x-4'>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  variants={socialIconVariants}
                  whileHover='hover'
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className='relative group'
                >
                  {/* Glow effect on hover */}
                  <div className='absolute inset-0 bg-cinematic-gold/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                  <Link
                    href={social.href}
                    className={`relative z-10 w-10 h-10 bg-gray-800 hover:bg-cinematic-gold/20 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} group`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className='w-5 h-5 group-hover:animate-pulse-gold' />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced newsletter signup */}
        <motion.div
          className='mt-8 p-6 bg-gradient-to-r from-cinematic-blue/10 to-cinematic-gold/10 rounded-2xl border border-cinematic-gold/20 backdrop-blur-sm'
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className='text-center'>
            <h4 className='text-lg font-semibold text-cinematic-gold mb-2'>
              Stay Updated
            </h4>
            <p className='text-gray-300 mb-4'>
              Get the latest insights on cinematic humanism and digital
              innovation.
            </p>

            <motion.div
              className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 bg-white/10 border border-cinematic-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cinematic-gold focus:border-transparent transition-all duration-300'
              />
              <motion.button
                className='px-6 py-3 bg-cinematic-gold text-cinematic-blue font-medium rounded-lg hover:bg-cinematic-gold/90 transition-all duration-300 btn-cinematic'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
