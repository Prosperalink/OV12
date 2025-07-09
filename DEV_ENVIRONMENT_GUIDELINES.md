# Orson Vision - Development Environment Guidelines

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

### Next.js 15
- **Purpose**: React framework with built-in optimizations
- **Key Features**: 
  - Fast Refresh for instant updates
  - Automatic code splitting
  - Image optimization
  - API routes
  - **Turbopack**: Next.js 15+ uses Turbopack for ultra-fast dev builds. All Turbopack config is now under the `turbo` key in `next.config.ts`.
- **Development**: `npm run dev` starts with Turbopack
- **Config**: See `next.config.ts` for the latest structure. Deprecated options like `experimental.turbo`, `swcMinify`, and custom webpack config should be removed. Use `turbo` and `bundlePagesRouterDependencies` at the root.

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

#### 2. Slow Compilation
**Symptoms**: Long build times, delayed updates
**Solutions**:
```bash
# Clear all caches
npm run clean:all

# Check for large dependencies
npm ls --depth=0

# Optimize TypeScript
npm run type-check
```

#### 3. TypeScript Errors
**Symptoms**: Type errors in development
**Solutions**:
```bash
# Check TypeScript configuration
npm run type-check

# Fix type issues
npm run type-check:watch

# Update type definitions
npm install @types/react @types/react-dom
```

#### 4. ESLint Errors
**Symptoms**: Linting errors in editor
**Solutions**:
```bash
# Fix auto-fixable issues
npm run lint:fix

# Check specific file
npx eslint src/components/MyComponent.tsx

# Reset ESLint cache
npx eslint --cache-location .eslintcache .
```

#### 5. Tailwind CSS Not Working
**Symptoms**: Styles not applying
**Solutions**:
```bash
# Rebuild Tailwind
npx tailwindcss --watch

# Check configuration
npx tailwindcss --help

# Verify content paths in tailwind.config.ts
```

#### 6. Port Already in Use
**Symptoms**: "Port 3000 is already in use"
**Solutions**:
```bash
# Use different port
npm run dev -- --port 3001

# Kill process on port 3000
npx kill-port 3000
npm run dev
```

### Performance Issues

#### 1. Slow Page Loads
- Check network tab in browser dev tools
- Optimize images and assets
- Use Next.js Image component
- Implement lazy loading

#### 2. Memory Leaks
- Monitor memory usage in dev tools
- Check for event listeners not being cleaned up
- Use React DevTools Profiler

#### 3. Bundle Size Issues
```bash
# Analyze bundle size
npm run analyze

# Check for large dependencies
npm run build:analyze
```

### Port Management
- **Kill dev ports**: If you see errors like `EADDRINUSE` or "Port 3000 is already in use", run:
```bash
npm run kill-ports
```
- **Change dev port**: `npm run dev -- --port 3002`

### Bundle Analysis
- **Analyze bundle size**: To analyze your production bundle, run:
```bash
npm run analyze
```
This uses `@next/bundle-analyzer` for a visual report.

### Troubleshooting: Next.js Config Warnings
- If you see warnings about deprecated or unrecognized config keys (e.g. `experimental.turbo`, `swcMinify`, `bundlePagesExternals`), update your `next.config.ts` to use only supported options. See the latest Next.js docs for details.

## Contributing Guidelines

### Adding New Dependencies
1. **Check if needed**: Avoid adding unnecessary dependencies
2. **Use latest stable**: Prefer latest stable versions
3. **Check bundle size**: Use `npm run analyze` to check impact
4. **Update documentation**: Document new dependencies

### Modifying Configuration Files
1. **Backup**: Create backup before major changes
2. **Test thoroughly**: Ensure changes work in development
3. **Update documentation**: Update this guide if needed
4. **Team review**: Get team approval for major changes

### Code Quality Standards
1. **TypeScript**: Use strict mode, avoid `any`
2. **ESLint**: Follow project rules, zero warnings
3. **Prettier**: Consistent formatting
4. **Tests**: Write tests for new features
5. **Documentation**: Document complex logic

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push and create PR
git push origin feature/new-feature
```

## IDE/Editor Settings

### VS Code (Recommended)

#### Extensions
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
```

#### Settings
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  },
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

#### Keyboard Shortcuts
- `Ctrl+Shift+P`: Command palette
- `Ctrl+Space`: Trigger suggestions
- `F12`: Go to definition
- `Shift+F12`: Find all references
- `Ctrl+Shift+F`: Find in files
- `Ctrl+Shift+H`: Replace in files

### Other IDEs

#### WebStorm
- Enable ESLint and Prettier integration
- Configure TypeScript settings
- Enable Tailwind CSS support

#### Sublime Text
- Install Package Control
- Install ESLint and Prettier packages
- Configure TypeScript support

## Performance Monitoring

### Browser Developer Tools

#### 1. Performance Tab
- **Purpose**: Analyze runtime performance
- **Usage**: Record interactions, analyze bottlenecks
- **Key Metrics**: FPS, CPU usage, memory consumption

#### 2. Network Tab
- **Purpose**: Monitor network requests
- **Usage**: Check load times, optimize assets
- **Key Metrics**: Request size, load time, caching

#### 3. Lighthouse
- **Purpose**: Audit performance, accessibility, SEO
- **Usage**: Run audits in dev tools
- **Key Metrics**: Performance score, Core Web Vitals

### Development Tools

#### 1. Next.js Analytics
```bash
# Enable analytics in development
ANALYZE=true npm run dev
```

#### 2. Bundle Analyzer
```bash
# Analyze production bundle
npm run build:analyze
```

#### 3. TypeScript Performance
```bash
# Monitor TypeScript compilation
npm run type-check:watch
```

### Performance Metrics

#### 1. Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

#### 2. Development Metrics
- **Hot Reload Time**: < 1s
- **Build Time**: < 30s
- **Type Check Time**: < 10s

### Monitoring Commands
```bash
# Check performance
npm run perf

# Analyze bundle
npm run analyze

# Run all checks
npm run check-all
```

## Environment Variables

### Development Variables
```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
ANALYZE=false
```

### Production Variables
```bash
# .env.production
NEXT_PUBLIC_API_URL=https://api.orsonvision.com
NEXT_PUBLIC_SITE_URL=https://orsonvision.com
NODE_ENV=production
```

## Maintenance

### Regular Tasks
1. **Update Dependencies**: Monthly security updates
2. **Clear Caches**: Weekly cache cleanup
3. **Performance Audit**: Monthly performance review
4. **Documentation**: Update as needed

### Cleanup Commands
```bash
# Clear all caches
npm run clean:all

# Update dependencies
npm update

# Security audit
npm audit

# Fix security issues
npm audit fix
```

---

## Quick Reference

### Essential Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Check code quality
npm run test         # Run tests
npm run type-check   # Check TypeScript
npm run format       # Format code
npm run clean        # Clear caches
```

### Troubleshooting Commands
```bash
npm run clean:all    # Complete reset
npm run check-all    # Run all checks
npm run lint:strict  # Zero-warning lint
npm run test:ci      # CI test mode
```

### Performance Commands
```bash
npm run analyze      # Bundle analysis
npm run perf         # Performance test
npm run dev:analyze  # Dev with analysis
```

---

*Last updated: January 2025*
*Version: 1.0.0* 