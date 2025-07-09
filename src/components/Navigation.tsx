'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

// Dynamic import for performance optimization
const ThemeToggle = lazy(() => import('./ThemeToggle'));

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Add safety check for theme context
  let theme = 'light'; // default fallback
  try {
    const themeContext = useTheme();
    theme = themeContext.theme;
  } catch (error) {
    // Theme context not available yet, use default
    console.log('Theme context not available, using default theme');
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className="
        fixed top-0 left-0 right-0 z-50 
        bg-white/80 dark:bg-gray-900/80 
        backdrop-blur-md border-b border-gray-200 dark:border-gray-700
        transition-all duration-300
      "
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="flex items-center space-x-2"
              aria-label="Orson Vision - Home"
            >
              <div className="w-8 h-8 bg-cinematic-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OV</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Orson Vision
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8" role="menubar">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="
                    text-gray-700 dark:text-gray-300 
                    hover:text-cinematic-blue dark:hover:text-cinematic-gold
                    px-3 py-2 rounded-md text-sm font-medium
                    transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-cinematic-blue focus:ring-offset-2
                  "
                  role="menuitem"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Suspense fallback={<div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>}>
              <ThemeToggle />
            </Suspense>
            <button 
              className="
                bg-cinematic-blue hover:bg-cinematic-blue/90
                text-white px-4 py-2 rounded-lg text-sm font-medium
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
              "
              aria-label="Get started with Orson Vision"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Suspense fallback={<div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>}>
              <ThemeToggle />
            </Suspense>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                p-2 rounded-lg
                text-gray-700 dark:text-gray-300
                hover:bg-gray-100 dark:hover:bg-gray-800
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-cinematic-blue focus:ring-offset-2
              "
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu" role="menu">
          <div className="
            px-2 pt-2 pb-3 space-y-1 
            bg-white dark:bg-gray-900
            border-t border-gray-200 dark:border-gray-700
          ">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  block px-3 py-2 rounded-md text-base font-medium
                  text-gray-700 dark:text-gray-300
                  hover:text-cinematic-blue dark:hover:text-cinematic-gold
                  hover:bg-gray-100 dark:hover:bg-gray-800
                  transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-cinematic-blue focus:ring-offset-2
                "
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <button 
                className="
                  w-full bg-cinematic-blue hover:bg-cinematic-blue/90
                  text-white px-4 py-2 rounded-lg text-sm font-medium
                  transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
                "
                aria-label="Get started with Orson Vision"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 