'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="
        p-2 
        rounded-lg 
        bg-gray-100 
        dark:bg-gray-800 
        text-gray-900 
        dark:text-white 
        hover:bg-gray-200 
        dark:hover:bg-gray-700 
        transition-colors 
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-cinematic-blue
        focus:ring-offset-2
        dark:focus:ring-offset-gray-800
      "
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
} 