# Orson Vision - Project Structure

This document outlines the organized file and folder structure following industry standards for a Next.js 15 project.

## 📁 Project Structure

```
orson-vision/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   ├── about/             # About page
│   │   ├── team/              # Team page
│   │   ├── blog/              # Blog pages
│   │   ├── contact/           # Contact page
│   │   ├── careers/           # Careers page
│   │   ├── legal/             # Legal pages
│   │   └── universes/         # Universe pages
│   │       ├── page.tsx       # Universes overview
│   │       └── [slug]/        # Individual universe pages
│   ├── components/            # Reusable components
│   │   ├── ui/               # Base UI components
│   │   │   └── AnimationObserver.tsx
│   │   ├── layout/           # Layout components
│   │   │   ├── ThemeProvider.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/         # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CreativeUniverses.tsx
│   │   │   ├── ClientJourney.tsx
│   │   │   └── TestimonialsSection.tsx
│   │   └── features/         # Feature-specific components
│   │       └── ContactForm.tsx
│   ├── lib/                  # External library integrations
│   │   └── google-workspace.ts
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts
│   ├── constants/            # Application constants
│   │   └── index.ts
│   ├── utils/                # Utility functions
│   │   └── index.ts
│   └── hooks/                # Custom React hooks (future)
├── public/                   # Static assets
│   ├── backgrounds/
│   ├── services/
│   └── hero/
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🏗️ Architecture Principles

### 1. **Component Organization**
- **`ui/`**: Base UI components (buttons, inputs, animations)
- **`layout/`**: Layout components (navigation, footer, theme)
- **`sections/`**: Page sections (hero, testimonials, etc.)
- **`features/`**: Feature-specific components (forms, complex features)

### 2. **Type Safety**
- All TypeScript interfaces centralized in `types/index.ts`
- Consistent type definitions across components
- Shared interfaces for common data structures

### 3. **Constants Management**
- Application-wide constants in `constants/index.ts`
- Configuration values easily maintainable
- Single source of truth for static data

### 4. **Utility Functions**
- Common utilities in `utils/index.ts`
- Reusable helper functions
- Consistent formatting and validation

### 5. **External Integrations**
- Third-party integrations in `lib/`
- API clients and service integrations
- Clean separation of concerns

## 🎨 Design System

### Color Palette
- **Primary**: Blue (`#1e40af`) and Gold (`#f59e0b`)
- **Backgrounds**: Dark mode with blue/gold gradients
- **Text**: White/light gray on dark backgrounds

### Typography
- **Font**: Geist Sans (primary), Geist Mono (code)
- **Headings**: Large, bold, cinematic styling
- **Body**: Clean, readable, accessible

### Animations
- **Framer Motion**: Smooth, cinematic transitions
- **Intersection Observer**: Scroll-triggered animations
- **CSS Transitions**: Hover effects and micro-interactions

## 🚀 Development Guidelines

### Component Structure
```typescript
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimationObserver from '@/components/ui/AnimationObserver';
import { Universe } from '@/types';

interface ComponentProps {
  // Props interface
}

export default function ComponentName({ props }: ComponentProps) {
  // Component logic
  return (
    // JSX with cinematic styling
  );
}
```

### Import Organization
1. React and external libraries
2. Internal components (ui → layout → sections → features)
3. Types and constants
4. Utilities

### Naming Conventions
- **Components**: PascalCase (e.g., `HeroSection`)
- **Files**: kebab-case (e.g., `hero-section.tsx`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `APP_CONFIG`)
- **Types**: PascalCase with descriptive names

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
- Base styles for mobile
- Progressive enhancement for larger screens
- Touch-friendly interactions

## 🎯 Performance Considerations

### Code Splitting
- Route-based code splitting (Next.js App Router)
- Component-level lazy loading where appropriate
- Optimized bundle sizes

### Image Optimization
- Next.js Image component for automatic optimization
- WebP format support
- Responsive image sizing

### Animation Performance
- GPU-accelerated animations
- Reduced motion support
- Efficient re-renders

## 🔧 Development Workflow

### Adding New Components
1. Determine component category (ui/layout/sections/features)
2. Create component with proper TypeScript interfaces
3. Add to appropriate folder
4. Update imports in consuming components

### Adding New Pages
1. Create folder in `app/` directory
2. Add `page.tsx` with proper metadata
3. Update navigation if needed
4. Add to sitemap

### Adding New Types
1. Add interface to `types/index.ts`
2. Export for use across components
3. Maintain consistency with existing patterns

## 🧪 Testing Strategy

### Component Testing
- Unit tests for utility functions
- Component testing for UI elements
- Integration tests for complex features

### E2E Testing
- Critical user journeys
- Form submissions
- Navigation flows

## 📚 Documentation

### Code Comments
- JSDoc for utility functions
- Inline comments for complex logic
- Component prop documentation

### README Files
- Project setup instructions
- Development guidelines
- Deployment procedures

This structure ensures maintainability, scalability, and developer experience while following Next.js 15 and React best practices. 