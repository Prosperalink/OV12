'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { Suspense, lazy, useEffect, useState } from 'react';

// Dynamic import for performance optimization
const themeToggle = lazy(() => import('./layout/ThemeToggle'));

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { name: 'Home', href: '/', ariaLabel: 'Navigate to home page' },
    {
      name: 'About',
      href: '/about',
      ariaLabel: 'Learn more about Orson Vision',
    },
    { name: 'Services', href: '/services', ariaLabel: 'Explore our services' },
    { name: 'Contact', href: '/contact', ariaLabel: 'Get in touch with us' },
  ];

  // Cinematic animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      filter: 'brightness(1.1)',
      transition: { duration: 0.2, ease: 'easeOut' },
    },
  };

  return (
    <motion.header
      initial='hidden'
      animate='visible'
      variants={navVariants}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50'
          : 'bg-gradient-to-r from-cinematic-blue/90 via-cinematic-blue/80 to-cinematic-gold/90 backdrop-blur-md'
      }`}
    >
      <nav
        className='container mx-auto px-4'
        role='navigation'
        aria-label='Main navigation'
      >
        <div className='flex items-center justify-between h-16'>
          {/* Logo with cinematic styling and animation */}
          <Link
            href='/'
            className='flex items-center group'
            aria-label='Orson Vision Home'
          >
            <motion.span
              className='text-xl font-bold text-cinematic-gold dark:text-cinematic-blue transition-colors duration-300 group-hover:text-cinematic-blue dark:group-hover:text-cinematic-gold relative'
              variants={logoVariants}
              whileHover='hover'
              whileTap={{ scale: 0.95 }}
            >
              <span className='bg-gradient-to-r from-cinematic-gold to-cinematic-blue bg-clip-text text-transparent animate-gradient-x'>
                Orson Vision
              </span>
              {/* Glow effect on hover */}
              <span className='absolute inset-0 bg-gradient-to-r from-cinematic-gold to-cinematic-blue blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300'></span>
            </motion.span>
          </Link>

          {/* Desktop Navigation with cinematic transitions */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className='relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-cinematic-blue dark:hover:text-cinematic-gold transition-all duration-300 font-medium group nav-link-cinematic'
                  aria-label={item.ariaLabel}
                >
                  {item.name}
                  {/* Enhanced cinematic underline effect */}
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cinematic-blue to-cinematic-gold transition-all duration-300 ease-out group-hover:w-full'></span>
                  {/* Glow effect on hover */}
                  <span className='absolute inset-0 bg-cinematic-blue/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm'></span>
                </Link>
              </motion.div>
            ))}

            {/* Theme Toggle with cinematic styling */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className='relative'
            >
              <div className='absolute inset-0 bg-cinematic-gold/20 rounded-lg blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
              <Suspense fallback={<div className='w-8 h-8' />}>
                {React.createElement(themeToggle)}
              </Suspense>
            </motion.div>
          </div>

          {/* Mobile Menu Button with cinematic animation */}
          <motion.button
            type='button'
            className='md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-cinematic-blue dark:hover:text-cinematic-gold transition-colors duration-200 focus:ring-2 focus:outline-none relative group'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle mobile menu'
            aria-expanded={isMenuOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glow effect on hover */}
            <div className='absolute inset-0 bg-cinematic-blue/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

            <AnimatePresence mode='wait'>
              {isMenuOpen ? (
                <motion.div
                  key='close'
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='relative z-10'
                >
                  <X className='w-6 h-6' />
                </motion.div>
              ) : (
                <motion.div
                  key='menu'
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className='relative z-10'
                >
                  <Menu className='w-6 h-6' />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu with enhanced cinematic overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial='closed'
              animate='open'
              exit='closed'
              variants={menuVariants}
              className='md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden'
            >
              {/* Background gradient */}
              <div className='absolute inset-0 bg-gradient-to-br from-cinematic-blue/5 to-cinematic-gold/5'></div>

              <div className='px-4 py-6 space-y-4 relative z-10'>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    initial='closed'
                    animate='open'
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className='block text-gray-700 dark:text-gray-300 hover:text-cinematic-blue dark:hover:text-cinematic-gold transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 relative group'
                      onClick={() => setIsMenuOpen(false)}
                      aria-label={item.ariaLabel}
                    >
                      {item.name}
                      {/* Mobile menu item glow effect */}
                      <span className='absolute inset-0 bg-cinematic-blue/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Theme Toggle with enhanced styling */}
                <motion.div
                  className='pt-4 border-t border-gray-200 dark:border-gray-700'
                  variants={itemVariants}
                  initial='closed'
                  animate='open'
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <div className='relative'>
                    <div className='absolute inset-0 bg-cinematic-gold/20 rounded-lg blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
                    <Suspense fallback={<div className='w-8 h-8' />}>
                      {React.createElement(themeToggle)}
                    </Suspense>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
