# Orson Vision - UX/UI Specifications for Direct Implementation

## Executive Summary

This document provides highly granular, actionable UX/UI specifications for implementing the Orson Vision website with "Cinematic Humanism" design principles. All specifications are optimized for direct implementation in Next.js, TypeScript, and Tailwind CSS within the Cursor development environment.

**Core Philosophy**: Cinematic Humanism in Digital Innovation
**Design Approach**: Blue backgrounds for dark sections, gold backgrounds for light sections
**Accessibility**: WCAG 2.1 AA compliance
**Performance**: CSS-based animations, Intersection Observer, 60fps smoothness

---

## Phase 1: Strategic Component Breakdown

### Core Reusable Components

1. **GlobalNavigation** - Main navigation with theme toggle
2. **HeroSection** - Cinematic video background with overlay
3. **ServiceCard** - Interactive service showcase cards
4. **TestimonialCard** - Client success stories
5. **ContactForm** - Multi-language contact form
6. **Footer** - Comprehensive site footer
7. **AnimationObserver** - Scroll-triggered animations
8. **ThemeProvider** - Dark/light mode management

### Page-Specific Components

1. **Homepage** - Landing page with hero, services, testimonials
2. **About** - Company story, mission, team
3. **Services** - Detailed service offerings
4. **Contact** - Contact form and information
5. **Blog** - Content marketing section
6. **Careers** - Job opportunities and culture

---

## Phase 2: Detailed Component Specifications

### 1. GlobalNavigation Component

**Purpose**: Main site navigation with responsive design and theme switching

**Structural Requirements**:

```html
<header role="banner" class="fixed top-0 w-full z-50">
  <nav role="navigation" aria-label="Main navigation">
    <div class="container mx-auto px-4">
      <!-- Logo -->
      <div class="flex items-center justify-between h-16">
        <a href="/" aria-label="Orson Vision Home" class="flex items-center">
          <img src="/logo.svg" alt="Orson Vision" class="h-8 w-auto" />
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="/" class="nav-link">Home</a>
          <a href="/about" class="nav-link">About</a>
          <a href="/services" class="nav-link">Services</a>
          <a href="/contact" class="nav-link">Contact</a>
        </div>

        <!-- Theme Toggle -->
        <button
          type="button"
          aria-label="Toggle theme"
          class="theme-toggle-btn"
          onClick="{toggleTheme}"
        >
          <SunIcon className="w-5 h-5" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="md:hidden">
        <button
          type="button"
          aria-label="Toggle mobile menu"
          aria-expanded="false"
          class="mobile-menu-btn"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  </nav>
</header>
```

**Layout & Spacing (Tailwind CSS)**:

```css
/* Navigation Container */
.nav-container {
  @apply fixed top-0 w-full z-50 transition-all duration-300;
  @apply bg-white/90 backdrop-blur-md border-b border-gray-200;
}

[data-theme='dark'] .nav-container {
  @apply bg-gray-900/90 border-gray-700;
}

/* Navigation Links */
.nav-link {
  @apply text-gray-700 hover:text-primary-600 transition-colors duration-200;
  @apply font-medium text-sm;
}

[data-theme='dark'] .nav-link {
  @apply text-gray-300 hover:text-primary-400;
}

/* Theme Toggle Button */
.theme-toggle-btn {
  @apply p-2 rounded-lg transition-all duration-200;
  @apply text-gray-600 hover:text-primary-600;
  @apply hover:bg-gray-100 focus:ring-2 focus:ring-primary-500;
}

[data-theme='dark'] .theme-toggle-btn {
  @apply text-gray-400 hover:text-primary-400 hover:bg-gray-800;
}

/* Mobile Menu */
.mobile-menu-btn {
  @apply p-2 rounded-lg transition-all duration-200;
  @apply text-gray-600 hover:text-primary-600;
  @apply focus:ring-2 focus:ring-primary-500;
}
```

**Color & Typography**:

- **Background**: `bg-white/90` (light), `bg-gray-900/90` (dark)
- **Text**: `text-gray-700` (light), `text-gray-300` (dark)
- **Hover**: `text-primary-600` (light), `text-primary-400` (dark)
- **Font**: Geist Sans, `font-medium text-sm`
- **Backdrop**: `backdrop-blur-md` for glass morphism effect

**Animations & Transitions**:

```css
/* Smooth theme transitions */
.theme-transition {
  @apply transition-all duration-300 ease-in-out;
}

/* Navigation scroll effect */
.nav-scrolled {
  @apply bg-white/95 shadow-lg;
}

[data-theme='dark'] .nav-scrolled {
  @apply bg-gray-900/95;
}
```

**Accessibility Features**:

- ARIA labels for all interactive elements
- Keyboard navigation support
- Focus indicators with `focus:ring-2 focus:ring-primary-500`
- Screen reader announcements for theme changes
- Reduced motion support

### 2. HeroSection Component

**Purpose**: Cinematic hero section with video background and compelling messaging

**Structural Requirements**:

```html
<section
  role="banner"
  class="relative min-h-screen flex items-center justify-center overflow-hidden"
>
  <!-- Video Background -->
  <div class="absolute inset-0 w-full h-full">
    <video
      autoplay
      muted
      loop
      playsinline
      class="w-full h-full object-cover"
      aria-hidden="true"
    >
      <source src="/hero-video.mp4" type="video/mp4" />
    </video>

    <!-- Video Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-primary-800/80 via-primary-600/60 to-secondary-500/40"
    ></div>
  </div>

  <!-- Content Container -->
  <div class="relative z-10 container mx-auto px-4 text-center">
    <div class="max-w-4xl mx-auto">
      <!-- Main Headline -->
      <h1 class="hero-headline">
        <span class="block text-6xl md:text-8xl font-bold text-white mb-4">
          Orson Vision
        </span>
        <span
          class="block text-2xl md:text-4xl font-medium text-secondary-400 mb-8"
        >
          Cinematic Humanism in Digital Innovation
        </span>
      </h1>

      <!-- Description -->
      <p class="hero-description">
        We craft immersive digital experiences that blend cutting-edge
        technology with human-centered design, creating moments that inspire and
        transform.
      </p>

      <!-- CTA Buttons -->
      <div class="hero-cta-buttons">
        <button class="btn-primary">Start Your Journey</button>
        <button class="btn-secondary">Watch Our Story</button>
      </div>

      <!-- Social Proof -->
      <div class="hero-social-proof">
        <div class="flex items-center justify-center space-x-8 text-white/80">
          <span>4.9/5 from 200+ clients</span>
          <span>Trusted by 500+ businesses</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll Indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <div class="scroll-indicator">
      <div class="scroll-arrow"></div>
    </div>
  </div>
</section>
```

**Layout & Spacing (Tailwind CSS)**:

```css
/* Hero Container */
.hero-section {
  @apply relative min-h-screen flex items-center justify-center overflow-hidden;
  @apply bg-gradient-to-br from-primary-800 via-primary-600 to-secondary-500;
}

/* Video Background */
.hero-video {
  @apply absolute inset-0 w-full h-full object-cover;
  @apply opacity-90;
}

/* Video Overlay */
.hero-overlay {
  @apply absolute inset-0;
  background: linear-gradient(
    135deg,
    rgba(30, 58, 138, 0.8) 0%,
    rgba(59, 130, 246, 0.6) 50%,
    rgba(245, 158, 11, 0.4) 100%
  );
}

/* Content Container */
.hero-content {
  @apply relative z-10 container mx-auto px-4 text-center;
  @apply max-w-4xl mx-auto;
}

/* Headline Typography */
.hero-headline {
  @apply mb-8;
}

.hero-headline h1 {
  @apply text-6xl md:text-8xl font-bold text-white mb-4;
  @apply leading-tight tracking-tight;
}

.hero-headline .subtitle {
  @apply text-2xl md:text-4xl font-medium text-secondary-400;
  @apply leading-relaxed;
}

/* Description */
.hero-description {
  @apply text-xl md:text-2xl text-white/90 mb-12;
  @apply max-w-3xl mx-auto leading-relaxed;
}

/* CTA Buttons */
.hero-cta-buttons {
  @apply flex flex-col sm:flex-row items-center justify-center gap-4 mb-12;
}

.btn-primary {
  @apply px-8 py-4 bg-secondary-500 hover:bg-secondary-600;
  @apply text-white font-semibold text-lg rounded-lg;
  @apply transition-all duration-300 transform hover:scale-105;
  @apply focus:ring-4 focus:ring-secondary-500/50;
}

.btn-secondary {
  @apply px-8 py-4 bg-transparent border-2 border-white/30;
  @apply text-white font-semibold text-lg rounded-lg;
  @apply hover:bg-white/10 transition-all duration-300;
  @apply focus:ring-4 focus:ring-white/30;
}

/* Social Proof */
.hero-social-proof {
  @apply mt-12;
}

.hero-social-proof .social-proof-text {
  @apply flex items-center justify-center space-x-8 text-white/80;
  @apply text-sm md:text-base;
}

/* Scroll Indicator */
.scroll-indicator {
  @apply animate-bounce;
}

.scroll-arrow {
  @apply w-6 h-6 border-2 border-white/50 border-t-transparent;
  @apply transform rotate-45;
}
```

**Color & Typography**:

- **Background**: Cinematic gradient overlay
- **Primary Text**: `text-white` with proper contrast
- **Secondary Text**: `text-secondary-400` for subtitle
- **Buttons**: `bg-secondary-500` primary, transparent secondary
- **Font Weights**: `font-bold` for headline, `font-medium` for subtitle

**Animations & Transitions**:

```css
/* Fade-in animation for content */
.hero-content {
  animation: fadeInUp 1s ease-out 0.5s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Button hover effects */
.btn-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(245, 158, 11, 0.3);
}

/* Scroll indicator animation */
.scroll-indicator {
  animation: bounce 2s infinite;
}
```

**Accessibility Features**:

- Video has `aria-hidden="true"` since it's decorative
- High contrast text colors
- Focus indicators on all interactive elements
- Keyboard navigation support
- Screen reader friendly content structure

### 3. ServiceCard Component

**Purpose**: Interactive cards showcasing Orson Vision's service offerings

**Structural Requirements**:

```html
<div class="service-card group" role="article">
  <!-- Card Header -->
  <div class="card-header">
    <div class="icon-container">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 class="card-title">{title}</h3>
  </div>

  <!-- Card Content -->
  <div class="card-content">
    <p class="card-description">{description}</p>

    <!-- Service Features -->
    <ul class="service-features" role="list">
      {features.map((feature, index) => (
      <li key="{index}" class="feature-item">
        <CheckIcon className="w-4 h-4 text-secondary-500" />
        <span>{feature}</span>
      </li>
      ))}
    </ul>
  </div>

  <!-- Card Footer -->
  <div class="card-footer">
    <button class="learn-more-btn" onClick="{handleLearnMore}">
      Learn More
      <ArrowRightIcon className="w-4 h-4 ml-2" />
    </button>
  </div>
</div>
```

**Layout & Spacing (Tailwind CSS)**:

```css
/* Service Card Container */
.service-card {
  @apply bg-white dark:bg-gray-800 rounded-2xl p-8;
  @apply shadow-lg hover:shadow-xl transition-all duration-300;
  @apply hover:-translate-y-2 border border-gray-200 dark:border-gray-700;
  @apply group cursor-pointer;
}

/* Card Header */
.card-header {
  @apply flex items-start space-x-4 mb-6;
}

.icon-container {
  @apply w-16 h-16 bg-primary-600 rounded-xl;
  @apply flex items-center justify-center;
  @apply group-hover:bg-primary-700 transition-colors duration-300;
}

.card-title {
  @apply text-2xl font-bold text-gray-900 dark:text-white;
  @apply group-hover:text-primary-600 transition-colors duration-300;
}

/* Card Content */
.card-content {
  @apply mb-6;
}

.card-description {
  @apply text-gray-600 dark:text-gray-300 mb-6 leading-relaxed;
  @apply text-base;
}

/* Service Features */
.service-features {
  @apply space-y-3;
}

.feature-item {
  @apply flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300;
}

.feature-item svg {
  @apply text-secondary-500 flex-shrink-0;
}

/* Card Footer */
.card-footer {
  @apply pt-6 border-t border-gray-200 dark:border-gray-700;
}

.learn-more-btn {
  @apply flex items-center text-primary-600 hover:text-primary-700;
  @apply font-semibold transition-colors duration-200;
  @apply focus:ring-2 focus:ring-primary-500 rounded;
}
```

**Color & Typography**:

- **Background**: `bg-white` (light), `bg-gray-800` (dark)
- **Border**: `border-gray-200` (light), `border-gray-700` (dark)
- **Title**: `text-gray-900` (light), `text-white` (dark)
- **Description**: `text-gray-600` (light), `text-gray-300` (dark)
- **Icon Background**: `bg-primary-600` with hover state
- **Features**: `text-secondary-500` for checkmarks

**Animations & Transitions**:

```css
/* Card hover effects */
.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Icon color transition */
.icon-container {
  transition: background-color 0.3s ease;
}

/* Title color transition */
.card-title {
  transition: color 0.3s ease;
}

/* Button hover effect */
.learn-more-btn:hover svg {
  transform: translateX(4px);
  transition: transform 0.2s ease;
}
```

**Accessibility Features**:

- Semantic HTML with `role="article"`
- Proper heading hierarchy
- Focus indicators on interactive elements
- Screen reader friendly feature lists
- Keyboard navigation support

### 4. ContactForm Component

**Purpose**: Multi-language contact form with validation and accessibility

**Structural Requirements**:

```html
<form
  onSubmit={handleSubmit}
  className="contact-form"
  aria-label="Contact form"
  noValidate
>
  <!-- Form Header -->
  <div class="form-header">
    <h2 class="form-title">Start Your Project</h2>
    <p class="form-subtitle">
      Ready to transform your digital presence? Let's discuss your vision and create something extraordinary together.
    </p>
  </div>

  <!-- Form Fields -->
  <div class="form-fields">
    <!-- Name Field -->
    <div class="form-field">
      <label for="fullName" class="form-label">
        Full Name *
      </label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        required
        aria-describedby="fullName-error"
        class="form-input"
        placeholder="Enter your full name"
      />
      <div id="fullName-error" class="error-message" role="alert"></div>
    </div>

    <!-- Email Field -->
    <div class="form-field">
      <label for="email" class="form-label">
        Email Address *
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        aria-describedby="email-error"
        class="form-input"
        placeholder="Enter your email address"
      />
      <div id="email-error" class="error-message" role="alert"></div>
    </div>

    <!-- Company Field -->
    <div class="form-field">
      <label for="company" class="form-label">
        Company
      </label>
      <input
        type="text"
        id="company"
        name="company"
        class="form-input"
        placeholder="Enter your company name"
      />
    </div>

    <!-- Service Interest -->
    <div class="form-field">
      <label for="serviceInterest" class="form-label">
        Service Interest *
      </label>
      <select
        id="serviceInterest"
        name="serviceInterest"
        required
        aria-describedby="serviceInterest-error"
        class="form-select"
      >
        <option value="">Select a service</option>
        <option value="digital-innovation">Digital Innovation</option>
        <option value="creative-design">Creative Design</option>
        <option value="content-creation">Content Creation</option>
        <option value="technology-solutions">Technology Solutions</option>
        <option value="strategic-consulting">Strategic Consulting</option>
      </select>
      <div id="serviceInterest-error" class="error-message" role="alert"></div>
    </div>

    <!-- Budget Range -->
    <div class="form-field">
      <label for="budgetRange" class="form-label">
        Budget Range
      </label>
      <select
        id="budgetRange"
        name="budgetRange"
        class="form-select"
      >
        <option value="">Select budget range</option>
        <option value="under-5k">Under $5,000</option>
        <option value="5k-10k">$5,000 - $10,000</option>
        <option value="10k-25k">$10,000 - $25,000</option>
        <option value="25k-50k">$25,000 - $50,000</option>
        <option value="over-50k">Over $50,000</option>
      </select>
    </div>

    <!-- Timeline -->
    <div class="form-field">
      <label for="timeline" class="form-label">
        Timeline
      </label>
      <select
        id="timeline"
        name="timeline"
        class="form-select"
      >
        <option value="">Select timeline</option>
        <option value="asap">ASAP</option>
        <option value="1-2-months">1-2 months</option>
        <option value="3-6-months">3-6 months</option>
        <option value="6-plus-months">6+ months</option>
      </select>
    </div>

    <!-- Project Details -->
    <div class="form-field">
      <label for="projectDetails" class="form-label">
        Project Details *
      </label>
      <textarea
        id="projectDetails"
        name="projectDetails"
        required
        aria-describedby="projectDetails-error"
        class="form-textarea"
        placeholder="Tell us about your project, goals, and vision..."
        rows="5"
      ></textarea>
      <div id="projectDetails-error" class="error-message" role="alert"></div>
    </div>
  </div>

  <!-- Submit Button -->
  <div class="form-submit">
    <button
      type="submit"
      class="submit-btn"
      disabled={isSubmitting}
      aria-describedby="submit-status"
    >
      {isSubmitting ? (
        <>
          <SpinnerIcon className="w-5 h-5 mr-2 animate-spin" />
          Sending...
        </>
      ) : (
        'Send Message'
      )}
    </button>
    <div id="submit-status" class="submit-status" role="status"></div>
  </div>
</form>
```

**Layout & Spacing (Tailwind CSS)**:

```css
/* Form Container */
.contact-form {
  @apply max-w-2xl mx-auto p-8;
  @apply bg-white dark:bg-gray-800 rounded-2xl;
  @apply shadow-xl border border-gray-200 dark:border-gray-700;
}

/* Form Header */
.form-header {
  @apply text-center mb-8;
}

.form-title {
  @apply text-3xl font-bold text-gray-900 dark:text-white mb-4;
}

.form-subtitle {
  @apply text-gray-600 dark:text-gray-300 text-lg;
}

/* Form Fields */
.form-fields {
  @apply space-y-6;
}

.form-field {
  @apply space-y-2;
}

.form-label {
  @apply block text-sm font-semibold text-gray-700 dark:text-gray-300;
  @apply mb-2;
}

.form-input,
.form-select,
.form-textarea {
  @apply w-full px-4 py-3 rounded-lg border;
  @apply bg-white dark:bg-gray-700;
  @apply text-gray-900 dark:text-white;
  @apply border-gray-300 dark:border-gray-600;
  @apply focus:ring-2 focus:ring-primary-500 focus:border-primary-500;
  @apply transition-colors duration-200;
  @apply placeholder-gray-500 dark:placeholder-gray-400;
}

.form-textarea {
  @apply resize-vertical min-h-[120px];
}

/* Error Messages */
.error-message {
  @apply text-sm text-red-600 dark:text-red-400;
  @apply mt-1;
}

/* Submit Section */
.form-submit {
  @apply mt-8 text-center;
}

.submit-btn {
  @apply px-8 py-4 bg-primary-600 hover:bg-primary-700;
  @apply text-white font-semibold text-lg rounded-lg;
  @apply transition-all duration-300 transform hover:scale-105;
  @apply focus:ring-4 focus:ring-primary-500/50;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
  @apply disabled:transform-none;
}

.submit-status {
  @apply mt-4 text-sm;
}

.submit-status.success {
  @apply text-green-600 dark:text-green-400;
}

.submit-status.error {
  @apply text-red-600 dark:text-red-400;
}
```

**Color & Typography**:

- **Background**: `bg-white` (light), `bg-gray-800` (dark)
- **Input Background**: `bg-white` (light), `bg-gray-700` (dark)
- **Border**: `border-gray-300` (light), `border-gray-600` (dark)
- **Focus**: `ring-primary-500` with proper contrast
- **Error**: `text-red-600` (light), `text-red-400` (dark)
- **Success**: `text-green-600` (light), `text-green-400` (dark)

**Animations & Transitions**:

```css
/* Input focus transitions */
.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  transition: all 0.2s ease;
}

/* Button hover effects */
.submit-btn:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(30, 58, 138, 0.3);
}

/* Loading spinner */
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

**Accessibility Features**:

- Proper form labels with `for` attributes
- ARIA describedby for error messages
- Required field indicators
- Disabled state for submit button
- Screen reader announcements for form status
- Keyboard navigation support
- High contrast focus indicators

### 5. AnimationObserver Component

**Purpose**: Scroll-triggered animations using Intersection Observer API

**Structural Requirements**:

```html
<div
  ref={elementRef}
  className={`animation-observer ${animationClass} ${isVisible ? 'visible' : ''}`}
  data-animation-type={animationType}
>
  {children}
</div>
```

**Layout & Spacing (Tailwind CSS)**:

```css
/* Animation Observer Base */
.animation-observer {
  @apply transition-all duration-800 ease-out;
}

/* Fade In Animation */
.animate-fade-in {
  @apply opacity-0 translate-y-8;
}

.animate-fade-in.visible {
  @apply opacity-100 translate-y-0;
}

/* Slide In Left */
.animate-slide-in-left {
  @apply opacity-0 -translate-x-8;
}

.animate-slide-in-left.visible {
  @apply opacity-100 translate-x-0;
}

/* Slide In Right */
.animate-slide-in-right {
  @apply opacity-0 translate-x-8;
}

.animate-slide-in-right.visible {
  @apply opacity-100 translate-x-0;
}

/* Scale In */
.animate-scale-in {
  @apply opacity-0 scale-95;
}

.animate-scale-in.visible {
  @apply opacity-100 scale-100;
}

/* Stagger Animation Delays */
.animate-stagger-1 {
  animation-delay: 0.1s;
}
.animate-stagger-2 {
  animation-delay: 0.2s;
}
.animate-stagger-3 {
  animation-delay: 0.3s;
}
.animate-stagger-4 {
  animation-delay: 0.4s;
}
.animate-stagger-5 {
  animation-delay: 0.5s;
}
```

**Intersection Observer Configuration**:

```typescript
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -10% 0px', // Trigger when 10% of element is visible
  threshold: 0.1, // Trigger when 10% of element is in view
};
```

**Accessibility Features**:

- Respects `prefers-reduced-motion` media query
- No animations for users who prefer reduced motion
- Smooth fallbacks for older browsers

---

## Phase 3: Implementation Guidelines

### Performance Optimization

1. **CSS Animations Only**: Use `transform` and `opacity` for 60fps performance
2. **Intersection Observer**: Efficient scroll detection without scroll listeners
3. **Lazy Loading**: Images and videos load only when needed
4. **Code Splitting**: Automatic with Next.js App Router

### Accessibility Compliance

1. **WCAG 2.1 AA Standards**:
   - Color contrast ratios: 4.5:1 for normal text, 3:1 for large text
   - Focus indicators on all interactive elements
   - Semantic HTML structure
   - Screen reader compatibility

2. **Keyboard Navigation**:
   - Tab order follows visual layout
   - Escape key closes modals/menus
   - Arrow keys for select components

3. **Reduced Motion**:
   - Respect `prefers-reduced-motion`
   - Provide static alternatives

### Theme Implementation

1. **CSS Custom Properties**:

   ```css
   :root {
     --color-primary: #1e3a8a;
     --color-secondary: #f59e0b;
     --color-background: #ffffff;
     --color-foreground: #111827;
   }

   [data-theme='dark'] {
     --color-primary: #3b82f6;
     --color-secondary: #fbbf24;
     --color-background: #111827;
     --color-foreground: #f9fafb;
   }
   ```

2. **Theme Provider**:
   - Context-based theme management
   - Local storage persistence
   - System preference detection

### Responsive Design

1. **Breakpoints**:
   - Mobile: < 768px
   - Tablet: 768px - 1024px
   - Desktop: > 1024px

2. **Mobile-First Approach**:
   - Base styles for mobile
   - Progressive enhancement for larger screens

3. **Touch-Friendly**:
   - Minimum 44px touch targets
   - Adequate spacing between interactive elements

### Quality Assurance

1. **Browser Testing**:
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers (iOS Safari, Chrome Mobile)

2. **Performance Testing**:
   - Lighthouse audits
   - Core Web Vitals monitoring
   - Bundle size analysis

3. **Accessibility Testing**:
   - Screen reader testing
   - Keyboard navigation testing
   - Color contrast validation

---

## Implementation Checklist

### ✅ Pre-Implementation

- [ ] Review all component specifications
- [ ] Set up development environment
- [ ] Configure Tailwind CSS with custom theme
- [ ] Install required dependencies

### ✅ Component Development

- [ ] GlobalNavigation with theme toggle
- [ ] HeroSection with video background
- [ ] ServiceCard with hover effects
- [ ] ContactForm with validation
- [ ] AnimationObserver for scroll effects
- [ ] ThemeProvider for dark/light mode

### ✅ Quality Assurance

- [ ] Accessibility testing
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Mobile responsiveness
- [ ] SEO optimization

### ✅ Documentation

- [ ] Component usage examples
- [ ] Accessibility guidelines
- [ ] Performance benchmarks
- [ ] Deployment instructions

---

**This specification provides comprehensive, actionable guidelines for implementing the Orson Vision website with cinematic humanism principles, ensuring pixel-perfect execution and uncompromising quality.**

_Last Updated: December 2024_
_Version: 1.0_
_Status: Ready for Implementation_
