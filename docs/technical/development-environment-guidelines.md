# Orson Vision - Development Environment Guidelines

## Project Documentation Rule

**All documentation (guidelines, reports, implementation plans, etc.) must be stored inside the `docs/` folder in the appropriate section:**

- `docs/technical/` - Development guidelines, technical specifications, API docs
- `docs/project/` - Project plans, roadmaps, implementation summaries
- `docs/ux-ui/` - Design guidelines, UI/UX specifications
- `docs/copywriting/` - Content guidelines, brand voice, copy standards
- `docs/brand/` - Brand identity, visual guidelines, assets
- `docs/assets/` - Asset management, media guidelines

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Setup Instructions](#setup-instructions)
3. [Key Tools Overview](#key-tools-overview)
4. [Fast Refresh/HMR Usage](#fast-refreshhmr-usage)
5. [Performance Tips](#performance-tips)
6. [Troubleshooting](#troubleshooting)
7. [Contributing Guidelines](#contributing-guidelines)
8. [IDE/Editor Settings](#ideeditor-settings)
9. [Performance Monitoring](#performance-monitoring)
10. [Code Quality Standards](#code-quality-standards)
11. [Development Workflow](#development-workflow)
12. [Optimization Status](#optimization-status)

## Prerequisites

### Required Software

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher
- **Git**: Latest stable version
- **VS Code** (recommended) or your preferred IDE

### System Requirements

- **RAM**: Minimum 8GB, recommended 16GB
- **Storage**: At least 2GB free space
- **OS**: Windows 10+, macOS 10.15+, or Linux

### Browser Requirements

- **Chrome**: Version 90+
- **Firefox**: Version 88+
- **Safari**: Version 14+
- **Edge**: Version 90+

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd orson-vision
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

```bash
# Copy environment template
cp env.example .env.local

# Edit environment variables as needed
nano .env.local
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 5. Verify Setup

- ✅ Development server starts without errors
- ✅ Hot Module Replacement (HMR) is working
- ✅ TypeScript compilation is successful
- ✅ ESLint and Prettier are configured
- ✅ Tests are passing

## Key Tools Overview

### Next.js 15 with Turbopack

- **Purpose**: React framework with built-in optimizations
- **Key Features**:
  - Fast Refresh for instant updates
  - Automatic code splitting
  - Image optimization
  - API routes
  - **Turbopack**: Next.js 15+ uses Turbopack for ultra-fast dev builds
- **Development**: `npm run dev` starts with Turbopack
- **Config**: See `next.config.ts` for the latest structure

### TypeScript

- **Purpose**: Static type checking and enhanced developer experience
- **Configuration**: `tsconfig.json` with strict mode enabled
- **Commands**:
  - `npm run type-check`: One-time type checking
  - `npm run type-check:watch`: Continuous type checking

### Tailwind CSS v4

- **Purpose**: Utility-first CSS framework
- **Features**: JIT compilation, custom design system
- **Configuration**: `tailwind.config.ts` with Orson Vision theme

### ESLint

- **Purpose**: Code linting and quality enforcement
- **Configuration**: `eslint.config.mjs` with Next.js and TypeScript rules
- **Commands**:
  - `npm run lint`: Check for issues
  - `npm run lint:fix`: Auto-fix issues
  - `npm run lint:strict`: Zero-warning mode

### Prettier

- **Purpose**: Code formatting
- **Configuration**: `.prettierrc` with project-specific rules
- **Commands**:
  - `npm run format`: Format all files
  - `npm run format:check`: Check formatting

### Jest

- **Purpose**: Unit testing framework
- **Configuration**: `jest.config.js` with TypeScript support
- **Commands**:
  - `npm run test`: Run tests once
  - `npm run test:watch`: Watch mode
  - `npm run test:coverage`: Generate coverage report

## Fast Refresh/HMR Usage

### How It Works

Next.js Fast Refresh provides instant updates to your React components without losing component state.

### Supported File Types

- ✅ React components (`.tsx`, `.jsx`)
- ✅ CSS files (`.css`, `.scss`)
- ✅ Tailwind CSS changes
- ✅ TypeScript files (`.ts`)
- ✅ Utility functions
- ✅ Configuration files (with server restart)

### Best Practices

1. **Component Updates**: Changes to component logic update instantly
2. **State Preservation**: Component state is preserved during updates
3. **Error Boundaries**: Use error boundaries to catch runtime errors
4. **Console Logs**: Use `console.log` for debugging (removed in production)

### Common Patterns

```typescript
// ✅ Good: Component updates instantly
function MyComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// ✅ Good: CSS changes update instantly
const styles = {
  button: 'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
};

// ⚠️ Note: Some changes require full page reload
// - Changes to _app.tsx or _document.tsx
// - Changes to next.config.ts
// - Changes to environment variables
```

## Performance Tips

### Development Server Performance

1. **Use Turbopack**: Already enabled with `--turbopack` flag
2. **Limit File Watching**: Avoid watching unnecessary directories
3. **Optimize Imports**: Use specific imports instead of wildcards
4. **Lazy Loading**: Use dynamic imports for large components

### Code Organization

```typescript
// ✅ Good: Specific imports
import { Button } from '@/components/ui/Button';
import { formatDate } from '@/utils/date';

// ❌ Avoid: Wildcard imports
import * as utils from '@/utils';
```

### Asset Optimization

1. **Images**: Use Next.js Image component for optimization
2. **Fonts**: Use `next/font` for web font optimization
3. **Icons**: Use Lucide React for consistent iconography
4. **Videos**: Optimize video files for web delivery

### Memory Management

1. **Close Unused Tabs**: Browser tabs consume memory
2. **Restart Dev Server**: If experiencing slowdowns
3. **Clear Cache**: Use `npm run clean` when needed
4. **Monitor Resources**: Use browser dev tools to monitor performance

## Troubleshooting

### Common Issues and Solutions

#### 1. Fast Refresh Not Working

**Symptoms**: Changes require manual refresh
**Solutions**:

```bash
# Restart development server
npm run dev

# Clear Next.js cache
rm -rf .next
npm run dev

# Check for syntax errors
npm run lint
```

#### 2. Slow Build Times

**Symptoms**: Development server takes too long to start
**Solutions**:

```bash
# Clear all caches
npm run clean:all

# Restart with fresh dependencies
npm install
npm run dev

# Check for large dependencies
npm run analyze
```

#### 3. TypeScript Errors

**Symptoms**: Type checking fails or is slow
**Solutions**:

```bash
# Run type check separately
npm run type-check

# Check for configuration issues
npx tsc --noEmit --listFiles

# Restart TypeScript server in IDE
```

#### 4. ESLint Errors

**Symptoms**: Many linting errors preventing builds
**Solutions**:

```bash
# Auto-fix linting issues
npm run lint:fix

# Check specific files
npx eslint src/components/MyComponent.tsx

# Temporarily disable rules for development
# Add /* eslint-disable */ to problematic files
```

## Contributing Guidelines

### Code Standards

1. **Naming Conventions**:
   - React Components: PascalCase (e.g., `MyComponent`)
   - Functions: camelCase (e.g., `handleClick`)
   - Interfaces: PascalCase with 'I' prefix (e.g., `IComponentProps`)
   - Constants: UPPER_CASE (e.g., `API_ENDPOINTS`)

2. **Import Organization**:

   ```typescript
   // Built-in modules
   import React from 'react';
   import { useState } from 'react';

   // External libraries
   import { motion } from 'framer-motion';
   import { Button } from '@headlessui/react';

   // Internal modules
   import { AnimationObserver } from '@/components/AnimationObserver';
   import { formatDate } from '@/utils/date';
   ```

3. **File Structure**:
   ```
   src/
   ├── app/           # Next.js app router pages
   ├── components/    # Reusable React components
   ├── lib/          # Utility libraries
   ├── types/        # TypeScript type definitions
   ├── utils/        # Helper functions
   └── constants/    # Application constants
   ```

### Git Workflow

1. **Pre-commit Hooks**: Automatic linting and formatting
2. **Branch Naming**: `feature/component-name` or `fix/issue-description`
3. **Commit Messages**: Use conventional commits format
4. **Code Review**: All changes require review before merge

## IDE/Editor Settings

### VS Code Extensions (Recommended)

- **ESLint**: JavaScript linting
- **Prettier**: Code formatting
- **TypeScript Importer**: Auto-import TypeScript modules
- **Tailwind CSS IntelliSense**: Tailwind class suggestions
- **Auto Rename Tag**: HTML/JSX tag renaming
- **Bracket Pair Colorizer**: Visual bracket matching
- **GitLens**: Enhanced Git capabilities

### VS Code Settings

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html"
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

## Performance Monitoring

### Built-in Monitoring

```bash
# Performance measurement
npm run performance

# Bundle analysis
npm run analyze

# Memory usage monitoring
# Use browser dev tools Performance tab
```

### Browser Dev Tools

1. **Performance Tab**: Monitor rendering and JavaScript performance
2. **Memory Tab**: Track memory usage and leaks
3. **Network Tab**: Analyze loading times and bundle sizes
4. **Lighthouse**: Run performance audits

### Metrics to Track

- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

## Code Quality Standards

### ESLint Rules

- **Naming Conventions**: Enforced for consistency
- **Import Order**: Organized and grouped
- **React Hooks**: Proper usage enforced
- **TypeScript**: Strict type checking
- **Accessibility**: ARIA attributes and semantic HTML

### Prettier Configuration

- **Semicolons**: Required
- **Single Quotes**: Preferred
- **Trailing Commas**: ES5 compatible
- **Line Length**: 80 characters
- **Tab Width**: 2 spaces

### TypeScript Standards

- **Strict Mode**: Enabled
- **No Implicit Any**: Enforced
- **Unused Variables**: Warned
- **Explicit Returns**: Required
- **Interface Prefix**: 'I' prefix for interfaces

## Development Workflow

### Daily Development

1. **Start Development**: `npm run dev`
2. **Make Changes**: Use Hot Module Replacement
3. **Quality Checks**: `npm run standards`
4. **Testing**: `npm run test:watch`
5. **Performance**: Monitor with browser tools

### Pre-commit Process

```bash
# Run all quality checks
npm run check-all

# Fix formatting issues
npm run format

# Fix linting issues
npm run lint:fix

# Run tests
npm run test:ci
```

### Deployment Preparation

```bash
# Build for production
npm run build

# Analyze bundle size
npm run analyze

# Performance testing
npm run performance

# Start production server
npm run start:prod
```

## Optimization Status

### ✅ Completed Optimizations

- [x] Next.js 15 with Turbopack configuration
- [x] TypeScript strict mode setup
- [x] Tailwind CSS v4 with JIT compilation
- [x] ESLint and Prettier configuration
- [x] Jest testing framework setup
- [x] Performance monitoring scripts
- [x] Git hooks and pre-commit setup

### 🔄 In Progress

- [ ] ESLint rule refinements for development speed
- [ ] Component naming convention standardization
- [ ] Import organization fixes
- [ ] Interface naming pattern updates
- [ ] Unused variable cleanup

### 📋 Planned Optimizations

- [ ] Bundle size optimization
- [ ] Image optimization pipeline
- [ ] Advanced caching strategies
- [ ] Performance monitoring dashboard
- [ ] Automated testing expansion

### 🎯 Performance Targets

- **Build Time**: < 30 seconds
- **Type Check Time**: < 5 seconds
- **Lint Time**: < 3 seconds
- **Test Time**: < 10 seconds
- **Hot Module Replacement**: < 1 second
- **Memory Usage**: < 500MB

## Quick Reference

### Essential Commands

```bash
# Development
npm run dev              # Start development server
npm run dev:fast         # Start with optimized settings
npm run dev:debug        # Start with debugging enabled

# Quality Checks
npm run standards        # Run all quality checks
npm run lint:fix         # Fix linting issues
npm run format           # Format all files
npm run type-check       # TypeScript checking

# Testing
npm run test             # Run tests once
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Generate coverage report

# Performance
npm run performance      # Performance measurement
npm run analyze          # Bundle analysis
npm run clean            # Clear build cache
```

### File Structure

```
orson-vision/
├── src/
│   ├── app/            # Next.js app router
│   ├── components/     # React components
│   ├── lib/           # Utility libraries
│   ├── types/         # TypeScript types
│   └── utils/         # Helper functions
├── public/            # Static assets
├── tests/             # Test files
├── docs/              # Documentation
└── scripts/           # Build and utility scripts
```

## Development Server

### Automatic Free Port Detection

The development server automatically finds an available port when the default port (3000) is busy. This feature is built into the `npm run dev` command and eliminates the need to manually specify ports.

**Features:**

- Automatically detects if port 3000 is in use
- Searches for the next available port (3001, 3002, etc.)
- Provides clear console output showing which port is being used
- Includes performance optimizations for faster development

**Usage:**

```bash
npm run dev          # Uses smart server with free port detection
npm run dev:fast     # Same as dev, with performance optimizations
npm run dev:debug    # Development with debugging enabled
```

**Console Output Example:**

```
🚀 Starting optimized development server on port 3001...
📊 Node.js Memory: 16GB available
⚡ Performance optimizations enabled
```

### Development Scripts

| Script                | Description                                       |
| --------------------- | ------------------------------------------------- |
| `npm run dev`         | Smart development server with free port detection |
| `npm run dev:fast`    | Optimized development server                      |
| `npm run dev:debug`   | Development with debugging enabled                |
| `npm run dev:analyze` | Development with bundle analysis                  |

## Build Manifest Error Resolution

### Problem

When running `npm run dev`, you may encounter ENOENT errors related to build manifest files:

```
⨯ [Error: ENOENT: no such file or directory, open '.next\static\development\_buildManifest.js.tmp.xxx']
```

### Solution

1. **Clean the build cache**:

   ```bash
   npm run clean
   ```

2. **If the above doesn't work, manually remove the .next directory**:

   ```bash
   # Windows
   if exist .next rmdir /s /q .next

   # Unix/Linux/Mac
   rm -rf .next
   ```

3. **Clear npm cache**:

   ```bash
   npm cache clean --force
   ```

4. **Reinstall dependencies if needed**:
   ```bash
   npm install --legacy-peer-deps
   ```

### Windows Compatibility

The project has been updated to use cross-platform commands:

- **Clean scripts**: Now use `rimraf` instead of `rm -rf`
- **Port detection**: Uses Windows-compatible commands
- **File operations**: All scripts work on Windows, Linux, and macOS

### Development Server Commands

```bash
# Standard development server
npm run dev

# Fast development server with optimizations
npm run dev:fast

# Development server with debugging
npm run dev:debug

# Smart development server with auto-port detection
npm run dev:smart
```

### Troubleshooting

#### Common Issues

1. **Build manifest errors**: Use `npm run clean` to clear cache
2. **Port conflicts**: Use `npm run kill-ports` to free up ports
3. **Dependency conflicts**: Use `--legacy-peer-deps` flag
4. **Memory issues**: The dev server is optimized for 24GB+ systems

#### Performance Optimization

The development server includes:

- Automatic free port detection
- Turbopack support for faster builds
- Memory optimization for large systems
- Performance monitoring capabilities

### Quality Assurance

Run these commands to ensure code quality:

```bash
# Run all quality checks
npm run standards

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Type checking
npm run type-check
```

---

_Last Updated: December 2024_
_Version: 1.0_
