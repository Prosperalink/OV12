'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import AnimationObserver from './ui/AnimationObserver';

interface IServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  href: string;
  features: string[];
  category:
    | 'content-creation'
    | 'creative-design'
    | 'digital-innovation'
    | 'strategic-consulting'
    | 'technology-solutions';
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  image,
  href,
  features,
  category,
}: IServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Cinematic animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const badgeVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2, ease: 'easeOut' },
    },
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'content-creation':
        return 'from-cinematic-gold to-cinematic-gold/80';
      case 'creative-design':
        return 'from-cinematic-blue to-cinematic-blue/80';
      case 'digital-innovation':
        return 'from-cinematic-gold to-cinematic-blue';
      case 'strategic-consulting':
        return 'from-cinematic-blue to-cinematic-gold';
      case 'technology-solutions':
        return 'from-cinematic-gold/80 to-cinematic-blue/80';
      default:
        return 'from-cinematic-blue to-cinematic-gold';
    }
  };

  return (
    <motion.div
      className='group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500 card-cinematic'
      variants={cardVariants}
      initial='initial'
      animate='animate'
      whileHover='hover'
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Enhanced background gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(category)} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}
      />

      {/* Animated gradient border */}
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-cinematic-blue via-cinematic-gold to-cinematic-blue opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm'></div>

      {/* Image container with enhanced zoom effect */}
      <div className='relative h-48 overflow-hidden'>
        <motion.div variants={imageVariants} className='w-full h-full'>
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-110'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </motion.div>

        {/* Enhanced image overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

        {/* Animated category badge */}
        <motion.div
          className='absolute top-4 left-4'
          variants={badgeVariants}
          whileHover='hover'
        >
          <span className='px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-xs font-medium text-gray-700 dark:text-gray-300 rounded-full backdrop-blur-sm border border-white/20 animate-pulse-gold'>
            {category
              ? category
                  .replace('-', ' ')
                  .replace(/\b\w/g, l => l.toUpperCase())
              : ''}
          </span>
        </motion.div>
      </div>

      {/* Content with enhanced animations */}
      <motion.div className='p-6 relative z-10' variants={contentVariants}>
        {/* Icon and title with enhanced styling */}
        <div className='flex items-start justify-between mb-4'>
          <div className='flex items-center space-x-3'>
            <motion.div
              className='w-12 h-12 bg-cinematic-blue/10 dark:bg-cinematic-gold/10 rounded-lg flex items-center justify-center group-hover:bg-cinematic-blue/20 dark:group-hover:bg-cinematic-gold/20 transition-colors duration-300'
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {React.createElement(icon, {
                className:
                  'w-6 h-6 group-hover:animate-pulse-gold text-cinematic-blue dark:text-cinematic-gold',
              })}
            </motion.div>
            <h3 className='text-xl font-bold text-gray-900 dark:text-white group-hover:text-cinematic-blue dark:group-hover:text-cinematic-gold transition-colors duration-300 bg-gradient-to-r from-gray-900 to-cinematic-blue dark:from-white dark:to-cinematic-gold bg-clip-text'>
              {title}
            </h3>
          </div>

          {/* Enhanced external link indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
            className='group-hover:animate-glow'
          >
            <ExternalLink className='w-5 h-5 text-gray-400 group-hover:text-cinematic-gold transition-colors duration-300' />
          </motion.div>
        </div>

        {/* Description with enhanced typography */}
        <p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300'>
          {description}
        </p>

        {/* Enhanced features list with staggered animations */}
        <div className='mb-6'>
          <ul className='space-y-2'>
            {features.slice(0, 3).map((feature, index) => (
              <motion.li
                key={index}
                className='flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300'
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <motion.div
                  className='w-1.5 h-1.5 bg-cinematic-gold rounded-full group-hover:animate-pulse-gold'
                  whileHover={{ scale: 1.5 }}
                />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Enhanced CTA Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className='relative overflow-hidden rounded-lg'
        >
          <Link
            href={href}
            className='inline-flex items-center justify-between w-full px-4 py-3 bg-cinematic-blue dark:bg-cinematic-gold text-white dark:text-cinematic-blue font-medium rounded-lg hover:bg-cinematic-blue/90 dark:hover:bg-cinematic-gold/90 transition-all duration-300 group relative overflow-hidden'
          >
            <span className='relative z-10'>Learn More</span>
            <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 relative z-10' />
            {/* Animated background gradient */}
            <div className='absolute inset-0 bg-gradient-to-r from-cinematic-blue to-cinematic-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Enhanced hover effect overlay */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-br from-cinematic-blue/5 to-cinematic-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      {/* Animated border glow */}
      <div className='absolute inset-0 rounded-2xl border border-transparent group-hover:border-cinematic-gold/30 transition-colors duration-500'></div>
    </motion.div>
  );
}

// Styled wrapper component with animations
export function AnimatedServiceCard(props: IServiceCardProps) {
  return (
    <AnimationObserver animationClass='scale-in'>
      <ServiceCard {...props} />
    </AnimationObserver>
  );
}

// Service card with hover effects
export function InteractiveServiceCard(props: IServiceCardProps) {
  return (
    <div className='transform transition-all duration-300 hover:-translate-y-2'>
      <ServiceCard {...props} />
    </div>
  );
}

// Service card with glass morphism effect
export function GlassServiceCard(props: IServiceCardProps) {
  return (
    <div className='backdrop-blur-md bg-white/10 border border-white/20'>
      <ServiceCard {...props} />
    </div>
  );
}
