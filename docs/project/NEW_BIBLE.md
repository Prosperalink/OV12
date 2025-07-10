# ORSON VISION - PROJECT BIBLE

## 📖 TABLE OF CONTENTS

1. [Project Overview](#project-overview)
2. [Technical Architecture](#technical-architecture)
3. [Design System](#design-system)
4. [Development Guidelines](#development-guidelines)
5. [Content Strategy](#content-strategy)
6. [Performance Standards](#performance-standards)
7. [Security Protocols](#security-protocols)
8. [Deployment Strategy](#deployment-strategy)
9. [Maintenance Procedures](#maintenance-procedures)
10. [Troubleshooting Guide](#troubleshooting-guide)
11. [Google Workspace Integration](#google-workspace-integration)
12. [Visual Asset Management](#visual-asset-management)
13. [Theme System](#theme-system)

---

## 🎬 PROJECT OVERVIEW

### **Mission**

Orson Vision crafts immersive digital experiences through cinematic humanism, blending cutting-edge technology with human-centered design to create moments that inspire, transform, and connect.

### **Core Values**

- **Cinematic Excellence**: Every interaction is crafted like a film scene
- **Human-Centered**: Technology serves humanity, not replaces it
- **Performance First**: Speed and efficiency in everything we build
- **Accessibility**: Inclusive design for all users in both themes
- **Innovation**: Pushing boundaries while maintaining reliability
- **Google Workspace Native**: Full utilization of paid services

### **Target Audience**

- **Primary**: Small to medium businesses in Tunisia
- **Secondary**: International clients seeking quality
- **Tertiary**: Startups and entrepreneurs

---

## 🏗️ TECHNICAL ARCHITECTURE

### **Frontend Stack**

```typescript
// Core Technologies
- Next.js 15 (React framework with App Router)
- TypeScript (Type safety and developer experience)
- Tailwind CSS (Utility-first styling)
- Lucide React (Beautiful, consistent icons)
- React Hook Form (Form handling and validation)

// Theme System
- Dark/Light Mode (Native support from the beginning)
- CSS Variables (Dynamic color schemes)
- Tailwind Dark Variants (dark: prefix for theme-specific styles)
- System Preference (Automatic theme detection)
- Manual Toggle (User-controlled theme switching)

// Animation System (Free Alternative to Framer Motion)
- CSS Keyframes (Custom animations)
- Intersection Observer (Scroll-triggered effects)
- CSS Transitions (Smooth state changes)
- Performance optimized (No heavy JavaScript libraries)
```

### **Backend Strategy (Phase 2)**

```typescript
// Google Workspace API - Comprehensive Integration
- Gmail API (Automated email notifications and client communication)
- Google Drive API (Asset storage and project file management)
- Google Calendar API (Scheduling and meeting management)
- Google Sheets API (CRM, lead tracking, and analytics)
- Google Docs API (Collaborative proposal and document creation)
- Google Meet API (Video consultation integration)

// Additional Infrastructure
- Supabase (Free-tier database and authentication)
- Vercel (Zero-config deployment and hosting)
- Cloudinary (Free-tier media management)
```

### **AI Integration (Phase 2)**

```typescript
// AI Services
- OpenAI API (Content generation and automation)
- Hugging Face (Free AI models for specific tasks)
- Custom Prompts (Tailored for Orson Vision's voice)
- Cost Optimization (Smart token usage and caching)
```

### **Visual Asset Strategy**

```typescript
// Asset Management
- Free Content Libraries (Unsplash, Pexels, Pixabay, Coverr)
- Asset Organization (Curated collections by section)
- License Compliance (Proper attribution and usage rights)
- Quality Standards (High-resolution, professional-grade assets)
- Thematic Relevance (Creative agency, digital innovation, cinematic storytelling)
```

### **Project Structure**

```
orson-vision/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Main page component
│   ├── components/
│   │   ├── AnimationObserver.tsx # Scroll animation component
│   │   ├── HeroSection.tsx      # Hero section with video
│   │   ├── ServicesSection.tsx  # Services showcase
│   │   ├── ContactForm.tsx      # Contact form
│   │   └── ThemeProvider.tsx    # Theme context and provider
│   ├── lib/
│   │   ├── google-workspace.ts  # Google Workspace API integration
│   │   ├── ai-integration.ts    # AI services integration
│   │   └── asset-management.ts  # Visual asset management
│   └── types/
│       └── index.ts             # TypeScript type definitions
├── public/
│   ├── images/                  # Optimized images
│   ├── videos/                  # Video assets
│   └── documents/               # Static documents
└── package.json
```

---

## 🎨 DESIGN SYSTEM

### **Color Palette**

```css
/* Light Mode Colors */
:root {
  --primary-blue: #111827; /* Dark blue for text */
  --primary-blue-bg: #1e3a8a; /* Dark blue for backgrounds */
  --primary-blue-light: #3b82f6; /* Lighter blue for accents */
  --accent-gold: #f59e0b; /* Primary gold/orange */
  --accent-gold-light: #fbbf24; /* Lighter gold for highlights */
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
}

/* Dark Mode Colors */
[data-theme='dark'] {
  --primary-blue: #3b82f6;
  --primary-blue-bg: #1e3a8a;
  --primary-blue-light: #60a5fa;
  --accent-gold: #fbbf24;
  --accent-gold-light: #fcd34d;
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --bg-primary: #111827;
  --bg-secondary: #1f2937;
}

/* Gradient Classes */
.bg-cinematic-blue {
  background: linear-gradient(
    135deg,
    var(--primary-blue-bg) 0%,
    var(--primary-blue-light) 100%
  );
}

.bg-cinematic-gold {
  background: linear-gradient(
    135deg,
    var(--accent-gold) 0%,
    var(--accent-gold-light) 100%
  );
}
```

### **Logo Iconography & Brand Elements**

```css
/* Logo Element Styling */
.logo-orson {
  /* Stylized "O" with camera lens/focus ring */
  /* Primary blue: #111827 or #1e3a8a */
}

.logo-vision {
  /* "VISION" text in accent gold: #F59E0B or #FBBF24 */
}

.logo-play-button {
  /* Triangular play button with inner circle (eye/lens) */
  /* Outer triangle: blue (#1e3a8a), inner circle: gold (#F59E0B) */
}
```

### **Brand Identity Guidelines**

- **"O" in Orson**: The stylized camera lens or focus ring within the letter "O" in "ORSON" reinforces the "Vision" aspect, cinematic connection, and precision
- **Play Button Triangle**: The triangular play button icon containing a circular element (eye/lens) directly symbolizes video, motion, and cinematic output
- **Color Symbolism**:
  - Dark Blue (#111827/#1e3a8a): Trust, professionalism, reliability, stability, digital realm
  - Gold/Orange (#F59E0B/#FBBF24): Creativity, innovation, warmth, premium quality, cinematic golden hour glow
- **Visual Language**: Logo elements embody "Cinematic Humanism" and "Digital Innovation," creating a visual language that speaks to both technical expertise and human-centered approach

### **Typography**

```css
/* Font Stack */
font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Font Weights */
font-weight: 400;  /* Regular */
font-weight: 600;  /* Semibold */
font-weight: 700;  /* Bold */

/* Font Sizes */
text-xs;    /* 12px */
text-sm;    /* 14px */
text-base;  /* 16px */
text-lg;    /* 18px */
text-xl;    /* 20px */
text-2xl;   /* 24px */
text-4xl;   /* 36px */
text-6xl;   /* 60px */
```

### **Animation System**

```css
/* Fade In Animation */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Slide In Animations */
.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-in-right {
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Scale Animation */
.scale-in {
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.6s ease-out;
}

.scale-in.visible {
  opacity: 1;
  transform: scale(1);
}

/* Theme Transition */
* {
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}
```

### **Component Patterns**

```tsx
// Standard Component Structure with Theme Support
import { ReactNode } from 'react';
import AnimationObserver from './AnimationObserver';

interface ComponentProps {
  children?: ReactNode;
  className?: string;
  // Add specific props
}

export default function ComponentName({
  children,
  className = '',
}: ComponentProps) {
  return (
    <AnimationObserver animationClass='fade-in' className={className}>
      <div className='bg-white dark:bg-gray-800 text-gray-900 dark:text-white'>
        {/* Component content */}
      </div>
    </AnimationObserver>
  );
}
```

---

## 🔧 DEVELOPMENT GUIDELINES

### **Code Standards**

```typescript
// TypeScript Configuration
- Strict mode enabled
- No implicit any
- Explicit return types for functions
- Interface over type when possible

// Naming Conventions
- Folders: kebab-case (hero-section, client-journey)
- React Components: PascalCase (HeroSection.tsx)
- TypeScript Files: kebab-case (hero-section.ts)
- CSS Files: kebab-case (hero-section.css)
- Functions: camelCase (handleSubmit)
- Constants: UPPER_SNAKE_CASE (API_URL)
- Interfaces: PascalCase (HeroSectionProps)
- Assets: kebab-case (hero-bg-1.jpg)
- CSS Classes: kebab-case (fade-in)

// Enforcement Rules
- ALL folders must use kebab-case
- NO mixed naming styles at the same level
- NO duplicate names with different cases
- Consistent naming across entire project

// File Organization
- One component per file
- Related components in same directory
- Shared utilities in utils/
- Types in types/ or with components
- Google Workspace integration in lib/google-workspace.ts
```

### **Component Guidelines**

```tsx
// Component Template with Theme Support
'use client'; // If using hooks or browser APIs

import { useState, useEffect } from 'react';
import { IconName } from 'lucide-react';
import AnimationObserver from './AnimationObserver';

interface ComponentProps {
  title: string;
  description?: string;
  className?: string;
}

export default function ComponentName({
  title,
  description,
  className = '',
}: ComponentProps) {
  const [state, setState] = useState(false);

  useEffect(() => {
    // Side effects
  }, []);

  const handleAction = () => {
    // Event handlers
  };

  return (
    <AnimationObserver animationClass='fade-in' className={className}>
      <div className='bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg'>
        <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
          {title}
        </h2>
        {description && (
          <p className='text-gray-600 dark:text-gray-300'>{description}</p>
        )}
      </div>
    </AnimationObserver>
  );
}
```

### **Form Handling**

```typescript
// Form Validation Pattern with Google Workspace Integration
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  message: string;
  service: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // 1. Validate data
      const validated = validateForm(data);

      // 2. Send to Google Sheets (CRM)
      await updateLeadSheet(validated);

      // 3. Send confirmation email via Gmail
      await sendClientEmail(validated);

      // 4. Schedule follow-up in Google Calendar
      await scheduleFollowUp(validated);

      // 5. Track analytics
      trackEvent('lead_submitted', { service: validated.service });

      // 6. Show success state
      reset();
      setSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('name', { required: 'Name is required' })}
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cinematic-blue focus:border-transparent dark:bg-gray-700 dark:text-white"
        placeholder="Your full name"
      />
      {errors.name && (
        <span className="text-red-500 text-sm">{errors.name.message}</span>
      )}
    </form>
  );
}
```

---

## 📝 CONTENT STRATEGY

### **Voice & Tone**

- **Professional**: Confident and trustworthy
- **Approachable**: Friendly and accessible
- **Innovative**: Forward-thinking and creative
- **Local**: Tunisian market understanding
- **Global**: International appeal and reach

### **Content Guidelines**

```markdown
# Headlines

- Use action words
- Keep under 60 characters
- Include keywords naturally
- Work in both light and dark themes

# Body Copy

- Write in active voice
- Use short paragraphs (2-3 sentences)
- Include specific benefits
- Add social proof where relevant
- Consider theme-specific readability

# Call-to-Actions

- Clear and specific
- Use action verbs
- Create urgency when appropriate
- Test different variations
- Ensure contrast in both themes
```

### **SEO Content Structure**

```html
<!-- Page Structure -->
<h1>Main Page Title (One per page)</h1>
<h2>Section Headers (2-3 per page)</h2>
<h3>Subsection Headers (As needed)</h3>

<!-- Meta Tags -->
<title>Orson Vision - Cinematic Humanism in Digital Innovation</title>
<meta name="description" content="We craft immersive digital experiences..." />
<meta name="keywords" content="web development, UI/UX design, Tunisia" />
```

---

## ⚡ PERFORMANCE STANDARDS

### **Lighthouse Targets**

```javascript
// Performance Metrics
{
  performance: 95,      // Core Web Vitals
  accessibility: 100,   // WCAG 2.1 AA
  bestPractices: 100,  // Security & standards
  seo: 100            // Technical SEO
}
```

### **Loading Performance**

```typescript
// Performance Budgets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms
- Speed Index: < 3.4s
```

### **Image Optimization**

```tsx
// Next.js Image Component
import Image from 'next/image';

<Image
  src='/hero-image.jpg'
  alt='Orson Vision Hero'
  width={1200}
  height={630}
  priority={true} // For above-the-fold images
  placeholder='blur'
  blurDataURL='data:image/jpeg;base64,...'
/>;
```

### **Animation Performance**

```css
/* Performance-Optimized Animations */
.animate-element {
  /* Use transform and opacity for GPU acceleration */
  transform: translateY(30px);
  opacity: 0;
  transition:
    transform 0.8s ease-out,
    opacity 0.8s ease-out;

  /* Avoid animating layout properties */
  /* Don't animate: width, height, padding, margin */
}

.animate-element.visible {
  transform: translateY(0);
  opacity: 1;
}
```

---

## 🔒 SECURITY PROTOCOLS

### **Frontend Security**

```typescript
// Content Security Policy
const csp = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self';
  connect-src 'self' https://api.openai.com https://www.googleapis.com;
`;

// Input Validation
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// XSS Prevention
const sanitizeInput = (input: string): string => {
  return input.replace(/[<>]/g, '');
};
```

### **Environment Variables**

```env
# Production Environment
NEXT_PUBLIC_SITE_URL=https://orsonvision.com
OPENAI_API_KEY=sk-...
GOOGLE_WORKSPACE_CREDENTIALS=...
GOOGLE_DRIVE_FOLDER_ID=your_folder_id
GOOGLE_CALENDAR_ID=your_calendar_id
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
```

### **API Security**

```typescript
// Rate Limiting
const rateLimit = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
};

// Authentication
const authenticateRequest = (req: Request) => {
  const token = req.headers.get('Authorization');
  if (!token) throw new Error('Unauthorized');
  // Verify token logic
};
```

---

## 🚀 DEPLOYMENT STRATEGY

### **Vercel Deployment**

```bash
# Deployment Commands
npm run build    # Build for production
npm run start    # Start production server

# Environment Setup
vercel env add NEXT_PUBLIC_SITE_URL
vercel env add OPENAI_API_KEY
vercel env add GOOGLE_WORKSPACE_CREDENTIALS
vercel env add GOOGLE_DRIVE_FOLDER_ID
vercel env add GOOGLE_CALENDAR_ID
vercel env add GOOGLE_SHEETS_SPREADSHEET_ID
```

### **Domain Configuration**

```dns
# DNS Records
A     @     76.76.19.19
CNAME www    orsonvision.com
TXT   @     google-site-verification=...
TXT   @     v=spf1 include:_spf.google.com ~all
```

### **SSL Certificate**

- **Automatic**: Vercel provides free SSL
- **Custom Domain**: SSL certificate included
- **Security Headers**: Automatic security headers

---

## 🔧 MAINTENANCE PROCEDURES

### **Regular Maintenance**

```bash
# Weekly Tasks
npm audit          # Security audit
npm update         # Update dependencies
npm run lint       # Code quality check
npm run build      # Test build process

# Monthly Tasks
- Review performance metrics
- Update content and images
- Check for broken links
- Review analytics data
- Update Google Workspace integrations
```

### **Monitoring Setup**

```typescript
// Error Tracking
const trackError = (error: Error, context: string) => {
  console.error(`[${context}]`, error);
  // Send to error tracking service
};

// Performance Monitoring
const trackPerformance = (metric: string, value: number) => {
  // Send to analytics service
  analytics.track('performance', { metric, value });
};

// Google Workspace Monitoring
const monitorGoogleWorkspaceUsage = () => {
  // Monitor API quotas and usage
  // Track integration performance
  // Alert on service disruptions
};
```

### **Backup Strategy**

```bash
# Database Backups (Phase 2)
- Daily automated backups
- Weekly manual verification
- Monthly disaster recovery test

# Code Backups
- Git repository with GitHub
- Vercel deployment history
- Local development backups

# Google Workspace Backups
- Regular export of important data
- Document version control
- Asset backup to multiple locations
```

---

## 🛠️ TROUBLESHOOTING GUIDE

### **Common Issues**

#### **Build Errors**

```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Clear npm cache
npm cache clean --force
rm -rf node_modules
npm install
```

#### **Performance Issues**

```typescript
// Check bundle size
npm run build
# Look for large dependencies

// Optimize images
# Use Next.js Image component
# Compress images before upload
# Use appropriate formats (WebP, AVIF)
```

#### **Animation Issues**

```css
/* Check for animation conflicts */
.animate-element {
  /* Ensure only transform and opacity are animated */
  transform: translateY(30px);
  opacity: 0;
  /* Don't animate: width, height, padding, margin */
}

/* Check for reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .animate-element {
    animation: none;
    transition: none;
  }
}
```

#### **Theme Issues**

```css
/* Check theme switching */
[data-theme='dark'] {
  /* Ensure all dark mode styles are applied */
}

/* Check color contrast */
/* Ensure sufficient contrast in both themes */
```

#### **Google Workspace Integration Issues**

```typescript
// Debug Google Workspace API
const debugGoogleWorkspace = async () => {
  try {
    // Test Gmail API
    const gmail = google.gmail({ version: 'v1', auth });
    const profile = await gmail.users.getProfile({ userId: 'me' });
    console.log('Gmail API working:', profile.data);

    // Test Drive API
    const drive = google.drive({ version: 'v3', auth });
    const files = await drive.files.list({ pageSize: 1 });
    console.log('Drive API working:', files.data);

    // Test Calendar API
    const calendar = google.calendar({ version: 'v3', auth });
    const calendars = await calendar.calendarList.list();
    console.log('Calendar API working:', calendars.data);
  } catch (error) {
    console.error('Google Workspace API error:', error);
  }
};
```

#### **Form Issues**

```typescript
// Debug form validation
const { errors } = useForm();
console.log('Form errors:', errors);

// Check network requests
const handleSubmit = async data => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Form submission error:', error);
  }
};
```

### **Debugging Tools**

```typescript
// Development Debugging
const DEBUG = process.env.NODE_ENV === 'development';

const debugLog = (message: string, data?: any) => {
  if (DEBUG) {
    console.log(`[DEBUG] ${message}`, data);
  }
};

// Performance Debugging
const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start}ms`);
};

// Google Workspace Debugging
const debugGoogleWorkspaceQuota = async () => {
  // Check API quotas and usage
  // Monitor rate limits
  // Track authentication status
};
```

---

## 🔗 GOOGLE WORKSPACE INTEGRATION

### **Gmail API**

```typescript
// Automated Email Notifications
const sendClientEmail = async (clientData: ClientData) => {
  const gmail = google.gmail({ version: 'v1', auth });

  await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: createEmailMessage(clientData),
    },
  });
};

// Email Templates
const createEmailMessage = (clientData: ClientData) => {
  // Create HTML email with Orson Vision branding
  // Include project details and next steps
  // Add tracking and analytics
};
```

### **Google Drive API**

```typescript
// Asset Storage and Management
const uploadProjectAsset = async (file: File, projectId: string) => {
  const drive = google.drive({ version: 'v3', auth });

  const response = await drive.files.create({
    requestBody: {
      name: file.name,
      parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
    },
    media: {
      body: file.stream(),
    },
  });

  return response.data;
};

// File Organization
const organizeProjectFiles = (projectId: string) => {
  // Create project-specific folders
  // Organize assets by type
  // Set up sharing permissions
};
```

### **Google Calendar API**

```typescript
// Meeting Scheduling
const scheduleClientMeeting = async (meetingData: MeetingData) => {
  const calendar = google.calendar({ version: 'v3', auth });

  await calendar.events.insert({
    calendarId: process.env.GOOGLE_CALENDAR_ID,
    requestBody: {
      summary: meetingData.title,
      description: meetingData.description,
      start: { dateTime: meetingData.startTime },
      end: { dateTime: meetingData.endTime },
      attendees: meetingData.attendees,
    },
  });
};

// Calendar Management
const manageCalendarAvailability = () => {
  // Set up business hours
  // Block unavailable times
  // Create recurring meetings
};
```

### **Google Sheets API**

```typescript
// CRM and Lead Tracking
const updateLeadSheet = async (leadData: LeadData) => {
  const sheets = google.sheets({ version: 'v4', auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    range: 'Leads!A:Z',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values: [
        [
          leadData.name,
          leadData.email,
          leadData.service,
          new Date().toISOString(),
        ],
      ],
    },
  });
};

// Analytics and Reporting
const generateClientReport = async (clientId: string) => {
  // Pull data from multiple sheets
  // Generate performance metrics
  // Create visual reports
};
```

### **Google Docs API**

```typescript
// Collaborative Document Creation
const createProjectProposal = async (projectData: ProjectData) => {
  const docs = google.docs({ version: 'v1', auth });

  const document = await docs.documents.create({
    requestBody: {
      title: `Proposal - ${projectData.name}`,
    },
  });

  // Add content to document
  await docs.documents.batchUpdate({
    documentId: document.data.documentId,
    requestBody: {
      requests: [
        // Document formatting and content
      ],
    },
  });

  return document.data;
};
```

### **Google Meet API**

```typescript
// Video Consultation Integration
const scheduleVideoConsultation = async (
  consultationData: ConsultationData
) => {
  const calendar = google.calendar({ version: 'v3', auth });

  const event = await calendar.events.insert({
    calendarId: process.env.GOOGLE_CALENDAR_ID,
    requestBody: {
      summary: consultationData.title,
      description: consultationData.description,
      start: { dateTime: consultationData.startTime },
      end: { dateTime: consultationData.endTime },
      attendees: consultationData.attendees,
      conferenceData: {
        createRequest: {
          requestId: `meet-${Date.now()}`,
          conferenceSolutionKey: {
            type: 'hangoutsMeet',
          },
        },
      },
    },
  });

  return event.data;
};
```

---

## 🎨 VISUAL ASSET MANAGEMENT

### **Asset Sources**

```typescript
// Free Content Libraries
- Unsplash (High-quality photos)
- Pexels (Photos and videos)
- Pixabay (Photos, videos, illustrations)
- Coverr (Free video backgrounds)
- Mixkit (Free video content)

// Asset Categories
- Hero backgrounds (Cinematic, professional)
- Service illustrations (Technology, creativity)
- Team photos (Professional, approachable)
- Office environments (Modern, inspiring)
- Client testimonials (Authentic, diverse)
```

### **Asset Organization**

```bash
# File Structure
public/
├── images/
│   ├── hero/
│   │   ├── hero-bg-1.jpg
│   │   ├── hero-bg-2.jpg
│   │   └── hero-video.mp4
│   ├── services/
│   │   ├── web-development.jpg
│   │   ├── ui-ux-design.jpg
│   │   ├── video-production.jpg
│   │   ├── digital-marketing.jpg
│   │   ├── ai-integration.jpg
│   │   └── consulting.jpg
│   ├── team/
│   │   ├── team-photo-1.jpg
│   │   └── office-environment.jpg
│   └── backgrounds/
│       ├── abstract-bg-1.jpg
│       └── texture-bg-1.jpg
├── videos/
│   ├── hero/
│   │   └── cinematic-hero.mp4
│   ├── services/
│   │   └── service-demo.mp4
│   └── testimonials/
│       └── client-testimonial.mp4
└── documents/
    └── asset_licenses.md
```

### **License Compliance**

```markdown
# Asset Licensing Documentation

## Unsplash

- License: Unsplash License
- Attribution: Required
- Usage: Commercial use allowed

## Pexels

- License: Pexels License
- Attribution: Not required
- Usage: Commercial use allowed

## Pixabay

- License: Pixabay License
- Attribution: Not required
- Usage: Commercial use allowed

## Coverr

- License: Coverr License
- Attribution: Required
- Usage: Commercial use allowed
```

### **Quality Standards**

```typescript
// Image Requirements
- Resolution: Minimum 1920x1080 for hero images
- Format: WebP preferred, JPEG fallback
- Compression: Optimized for web
- Color Profile: sRGB
- File Size: Under 500KB for images, 5MB for videos

// Video Requirements
- Resolution: 1920x1080 minimum
- Format: MP4 with H.264 codec
- Duration: 10-30 seconds for hero videos
- File Size: Under 10MB
- Compression: Optimized for web streaming
```

### **Asset Integration**

```tsx
// Next.js Image Component with Theme Support
import Image from 'next/image';

<Image
  src="/images/hero/hero-bg-1.jpg"
  alt="Orson Vision Hero Background"
  width={1920}
  height={1080}
  priority={true}
  className="object-cover w-full h-full"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>

// Video Component
<video
  autoPlay
  muted
  loop
  playsInline
  className="object-cover w-full h-full"
  poster="/images/hero/hero-poster.jpg"
>
  <source src="/videos/hero/cinematic-hero.mp4" type="video/mp4" />
</video>
```

---

## 🌙 THEME SYSTEM

### **Theme Context**

```typescript
// Theme Context and Provider
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check system preference
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    setTheme(savedTheme || systemTheme);
  }, []);

  useEffect(() => {
    // Update document attribute
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
```

### **Theme Toggle Component**

```tsx
// Theme Toggle Button
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className='
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
      '
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className='w-5 h-5' />
      ) : (
        <Sun className='w-5 h-5' />
      )}
    </button>
  );
}
```

### **Theme-Aware Components**

```tsx
// Component with Theme Support
export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div
      className='
      bg-white 
      dark:bg-gray-800 
      rounded-2xl 
      p-8 
      shadow-lg 
      hover:shadow-xl 
      transition-all 
      duration-300 
      hover:-translate-y-2 
      border 
      border-gray-200 
      dark:border-gray-700
    '
    >
      <div
        className='
        w-16 
        h-16 
        bg-cinematic-blue 
        rounded-xl 
        flex 
        items-center 
        justify-center 
        mb-6
      '
      >
        <Icon className='w-8 h-8 text-white' />
      </div>

      <h3
        className='
        text-2xl 
        font-bold 
        mb-4 
        text-gray-900 
        dark:text-white
      '
      >
        {title}
      </h3>

      <p
        className='
        text-gray-600 
        dark:text-gray-300 
        mb-6 
        leading-relaxed
      '
      >
        {description}
      </p>
    </div>
  );
}
```

### **CSS Variables for Themes**

```css
/* Theme Variables */
:root {
  /* Light Theme */
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --bg-tertiary: #f3f4f6;
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --text-tertiary: #9ca3af;
  --border-primary: #e5e7eb;
  --border-secondary: #d1d5db;
  --shadow-primary: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  --shadow-secondary: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

[data-theme='dark'] {
  /* Dark Theme */
  --bg-primary: #111827;
  --bg-secondary: #1f2937;
  --bg-tertiary: #374151;
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --text-tertiary: #9ca3af;
  --border-primary: #374151;
  --border-secondary: #4b5563;
  --shadow-primary: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  --shadow-secondary: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
}

/* Component Classes */
.theme-card {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
  box-shadow: var(--shadow-primary);
}

.theme-text-primary {
  color: var(--text-primary);
}

.theme-text-secondary {
  color: var(--text-secondary);
}
```

---

## 📚 RESOURCES

### **Documentation**

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Hook Form](https://react-hook-form.com/)
- [Google Workspace APIs](https://developers.google.com/workspace)

### **Tools**

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)

### **Inspiration**

- [Awwwards](https://www.awwwards.com/)
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)
- [CSS Design Awards](https://www.cssdesignawards.com/)

---

**This bible serves as the definitive guide for all Orson Vision development, ensuring consistency, quality, and excellence in everything we build.**

**Last Updated: January 2025**
**Version: 2.0**
**Status: Active**
