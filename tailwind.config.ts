import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './tests/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cinematic-blue': '#3b82f6',
        'cinematic-gold': '#f59e0b',
      },
      ringColor: {
        'cinematic-blue': '#3b82f6',
        'cinematic-gold': '#f59e0b',
      },
    },
  },
  plugins: [],
};

export default config;
