// Common interfaces used throughout the application

export interface IThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export interface IUniverse {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  solutions: string[];
  clientNeeds: string[];
}

export interface IJourneyStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  duration: string;
  outcomes: string[];
}

export interface ITestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  industry: string;
}

export interface IFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  budget: string;
  timeline: string;
}

export type IFormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface IAnimationObserverProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
}
