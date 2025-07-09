'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeProvider';

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
    <nav className="
      fixed top-0 left-0 right-0 z-50 
      bg-white/80 dark:bg-gray-900/80 
      backdrop-blur-md border-b border-gray-200 dark:border-gray-700
      transition-all duration-300
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2">
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
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="
                    text-gray-700 dark:text-gray-300 
                    hover:text-cinematic-blue dark:hover:text-cinematic-gold
                    px-3 py-2 rounded-md text-sm font-medium
                    transition-colors duration-200
                  "
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <button className="
              bg-cinematic-blue hover:bg-cinematic-blue/90
              text-white px-4 py-2 rounded-lg text-sm font-medium
              transition-colors duration-200
            ">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                p-2 rounded-lg
                text-gray-700 dark:text-gray-300
                hover:bg-gray-100 dark:hover:bg-gray-800
                transition-colors duration-200
              "
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
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
                "
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <button className="
                w-full bg-cinematic-blue hover:bg-cinematic-blue/90
                text-white px-4 py-2 rounded-lg text-sm font-medium
                transition-colors duration-200
              ">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 