'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';

import ThemeToggle from './ThemeToggle';

const navigationItems = [
  { name: 'nav.home', href: '/' },
  { name: 'nav.about', href: '/about' },
  {
    name: 'nav.solutions',
    href: '/solutions',
    submenu: [
      { name: 'Digital Innovation', href: '/solutions/digital-innovation' },
      { name: 'Creative Design', href: '/solutions/creative-design' },
      { name: 'Content Creation', href: '/solutions/content-creation' },
      { name: 'Technology Solutions', href: '/solutions/technology-solutions' },
      { name: 'Strategic Consulting', href: '/solutions/strategic-consulting' },
    ],
  },
  { name: 'nav.clientJourney', href: '/client-journey' },
  { name: 'nav.testimonials', href: '/testimonials' },
  { name: 'nav.contact', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--color-border)]'
          : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-gradient-to-br from-cinematic-blue to-cinematic-gold rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>O</span>
            </div>
            <span className='text-[var(--color-foreground)] font-bold text-xl'>
              Orson Vision
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navigationItems.map(item => (
              <div key={item.name} className='relative group'>
                <Link
                  href={item.href}
                  className='text-[var(--color-foreground)]/80 hover:text-cinematic-blue transition-colors duration-200'
                  onMouseEnter={() =>
                    item.submenu && setActiveSubmenu(item.name)
                  }
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  {t(item.name)}
                </Link>

                {/* Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className='absolute top-full left-0 mt-2 w-64 bg-[var(--bg-primary)]/95 backdrop-blur-md rounded-lg border border-[var(--color-border)] p-4'
                    onMouseEnter={() => setActiveSubmenu(item.name)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <div className='space-y-2'>
                      {item.submenu.map(subitem => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className='block text-[var(--color-foreground)]/80 hover:text-cinematic-blue transition-colors duration-200 py-2 px-3 rounded hover:bg-[var(--bg-secondary)]'
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Language Toggle, Theme Toggle & Mobile Menu Button */}
          <div className='flex items-center space-x-4'>
            <LanguageToggle />
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='md:hidden text-[var(--color-foreground)]/80 hover:text-cinematic-blue transition-colors duration-200'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='md:hidden bg-[var(--bg-primary)]/95 backdrop-blur-md rounded-lg mt-4 border border-[var(--color-border)]'
            >
              <div className='px-4 py-6 space-y-4'>
                {navigationItems.map(item => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className='block text-[var(--color-foreground)]/80 hover:text-cinematic-blue transition-colors duration-200 py-2'
                      onClick={() => setIsOpen(false)}
                    >
                      {t(item.name)}
                    </Link>

                    {/* Mobile Submenu */}
                    {item.submenu && (
                      <div className='ml-4 mt-2 space-y-2'>
                        {item.submenu.map(subitem => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className='block text-[var(--color-foreground)]/60 hover:text-cinematic-blue transition-colors duration-200 py-1'
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
