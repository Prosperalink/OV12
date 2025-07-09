// Common interfaces used throughout the application

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export interface Universe {
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

export interface JourneyStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  duration: string;
  outcomes: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  industry: string;
}

export interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  budget: string;
  timeline: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface AnimationObserverProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
} 