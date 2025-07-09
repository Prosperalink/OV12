// Application-wide constants

export const APP_CONFIG = {
  name: 'Orson Vision',
  tagline: 'Cinematic Humanism in Digital Innovation',
  description: 'We craft immersive digital experiences that blend cutting-edge technology with human-centered design, creating moments that inspire and transform.',
  email: 'hello@orsonvision.com',
  location: 'Tunisia, Global Reach',
  responseTime: 'Within 24 hours',
} as const;

export const UNIVERSES = [
  {
    id: 'digital-innovation',
    title: 'Digital Innovation',
    subtitle: 'Transforming Ideas into Digital Reality',
    description: 'We craft cutting-edge digital solutions that bridge the gap between imagination and implementation, creating seamless user experiences that drive business growth.',
    icon: '🚀',
    color: 'from-blue-600 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-blue-900/20 to-cyan-800/20',
    solutions: ['Web Applications', 'Mobile Apps', 'Digital Platforms', 'E-commerce Solutions'],
    clientNeeds: ['Digital Transformation', 'Process Automation', 'User Experience Design', 'Technology Integration']
  },
  {
    id: 'brand-experience',
    title: 'Brand Experience',
    subtitle: 'Crafting Memorable Brand Journeys',
    description: 'We design immersive brand experiences that connect with audiences on an emotional level, building lasting relationships and driving brand loyalty.',
    icon: '🎨',
    color: 'from-purple-600 to-pink-500',
    bgColor: 'bg-gradient-to-br from-purple-900/20 to-pink-800/20',
    solutions: ['Brand Identity', 'Visual Design', 'Brand Strategy', 'Marketing Campaigns'],
    clientNeeds: ['Brand Recognition', 'Market Differentiation', 'Customer Engagement', 'Brand Consistency']
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    subtitle: 'Storytelling That Captivates',
    description: 'We produce compelling content that tells your story, engages your audience, and drives meaningful conversations across all digital channels.',
    icon: '📹',
    color: 'from-orange-600 to-red-500',
    bgColor: 'bg-gradient-to-br from-orange-900/20 to-red-800/20',
    solutions: ['Video Production', 'Photography', 'Copywriting', 'Social Media Content'],
    clientNeeds: ['Content Strategy', 'Audience Engagement', 'Storytelling', 'Multi-channel Presence']
  },
  {
    id: 'technology-solutions',
    title: 'Technology Solutions',
    subtitle: 'Building Tomorrow\'s Infrastructure',
    description: 'We architect robust technology solutions that scale with your business, ensuring reliability, security, and performance for your digital operations.',
    icon: '⚙️',
    color: 'from-green-600 to-emerald-500',
    bgColor: 'bg-gradient-to-br from-green-900/20 to-emerald-800/20',
    solutions: ['System Architecture', 'Cloud Infrastructure', 'API Development', 'Data Analytics'],
    clientNeeds: ['Scalable Systems', 'Performance Optimization', 'Security Implementation', 'Data Management']
  },
  {
    id: 'strategic-consulting',
    title: 'Strategic Consulting',
    subtitle: 'Guiding Your Digital Evolution',
    description: 'We provide strategic guidance to help you navigate the digital landscape, optimize your operations, and achieve sustainable growth.',
    icon: '🎯',
    color: 'from-yellow-600 to-amber-500',
    bgColor: 'bg-gradient-to-br from-yellow-900/20 to-amber-800/20',
    solutions: ['Digital Strategy', 'Process Optimization', 'Change Management', 'Performance Analysis'],
    clientNeeds: ['Strategic Planning', 'Operational Efficiency', 'Digital Maturity', 'Competitive Advantage']
  }
] as const;

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/', external: false },
  { name: 'Universes', href: '/universes', external: false },
  { name: 'About', href: '/about', external: false },
  { name: 'Team', href: '/team', external: false },
  { name: 'Blog', href: '/blog', external: false },
  { name: 'Careers', href: '/careers', external: false },
  { name: 'Contact', href: '/contact', external: false },
  { name: 'Legal', href: '/legal', external: false },
] as const;

export const BUDGET_RANGES = [
  { value: '5k-10k', label: '$5K - $10K' },
  { value: '10k-25k', label: '$10K - $25K' },
  { value: '25k-50k', label: '$25K - $50K' },
  { value: '50k+', label: '$50K+' },
] as const;

export const TIMELINES = [
  { value: '1-2-months', label: '1-2 months' },
  { value: '3-6-months', label: '3-6 months' },
  { value: '6+months', label: '6+ months' },
  { value: 'flexible', label: 'Flexible' },
] as const; 