'use client';

import { Monitor, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from './layout/ThemeProvider';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const { theme, toggleTheme, isSystemTheme } = useTheme();

  const getIcon = () => {
    if (isSystemTheme) {
      return <Monitor className="w-5 h-5" />;
    }
    return theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />;
  };

  const getAriaLabel = () => {
    if (isSystemTheme) {
      return 'Using system theme - click to set manual theme';
    }
    return `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`;
  };

  const getTooltip = () => {
    if (isSystemTheme) {
      return 'System theme active';
    }
    return theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
  };

  return (
    <div className="relative group">
      <button
        onClick={toggleTheme}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="
          relative
          p-2.5
          rounded-xl
          bg-white/80
          dark:bg-gray-800/80
          backdrop-blur-sm
          border border-gray-200
          dark:border-gray-700
          text-gray-700
          dark:text-gray-300
          hover:bg-white
          dark:hover:bg-gray-800
          hover:text-gray-900
          dark:hover:text-white
          hover:border-gray-300
          dark:hover:border-gray-600
          transition-all
          duration-300
          ease-out
          focus:outline-none
          focus:ring-2
          focus:ring-cinematic-blue
          focus:ring-offset-2
          dark:focus:ring-offset-gray-800
          shadow-sm
          hover:shadow-md
          active:scale-95
        "
        aria-label={getAriaLabel()}
        title={getTooltip()}
      >
        <div className="relative">
          {getIcon()}
          {/* Ripple effect */}
          <div className="
            absolute inset-0
            rounded-lg
            bg-cinematic-gold/20
            scale-0
            transition-transform
            duration-300
            ease-out
            group-hover:scale-100
          " />
        </div>
      </button>

      {/* Tooltip */}
      {isHovered && (
        <div className="
          absolute
          bottom-full
          left-1/2
          transform
          -translate-x-1/2
          mb-2
          px-3
          py-1.5
          bg-gray-900
          dark:bg-gray-100
          text-white
          dark:text-gray-900
          text-sm
          rounded-lg
          shadow-lg
          z-50
          opacity-0
          animate-fade-in-up
          pointer-events-none
        ">
          {getTooltip()}
          <div className="
            absolute
            top-full
            left-1/2
            transform
            -translate-x-1/2
            w-0
            h-0
            border-l-4
            border-r-4
            border-t-4
            border-transparent
            border-t-gray-900
            dark:border-t-gray-100
          " />
        </div>
      )}

      {/* System theme indicator */}
      {isSystemTheme && (
        <div className="
          absolute
          -top-1
          -right-1
          w-3
          h-3
          bg-cinematic-gold
          rounded-full
          border-2
          border-white
          dark:border-gray-800
          animate-pulse
        " />
      )}
    </div>
  );
}
