# Development Environment Troubleshooting Guide

## Quick Solutions

### Port 3000 Already in Use

**Problem**: `Error: listen EADDRINUSE: address already in use :::3000`

**Solutions**:

1. **Kill existing processes**: `npm run kill-ports`
2. **Use smart dev server**: `npm run dev:smart` (automatically finds available port)
3. **Manual port kill**: `npx kill-port 3000`
4. **Check what's using the port**: `netstat -ano | findstr :3000`

### Turbopack Configuration Issues

**Problem**: `Webpack is configured while Turbopack is not, which may cause problems`

**Solutions**:

1. **Use standard dev server**: `npm run dev` (without turbopack)
2. **Check Next.js config**: Ensure `next.config.ts` has proper Turbopack settings
3. **Clear cache**: `npm run clean` then restart

### Module Resolution Errors

**Problem**: `Next.js package not found` or import errors

**Solutions**:

1. **Reinstall dependencies**: `npm run clean:all`
2. **Check TypeScript config**: Ensure `tsconfig.json` paths are correct
3. **Clear Next.js cache**: `rm -rf .next`
4. **Update dependencies**: `npm update`

### Build Failures

**Problem**: Build process fails with various errors

**Solutions**:

1. **Run all checks**: `npm run check-all`
2. **Fix linting issues**: `npm run lint:fix`
3. **Type checking**: `npm run type-check`
4. **Format code**: `npm run format`

## Development Commands

### Server Management

```bash
# Standard development server
npm run dev

# Smart development server (handles port conflicts)
npm run dev:smart

# Kill all development ports
npm run kill-ports

# Clean and restart
npm run clean && npm run dev
```

### Quality Assurance

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

### Performance & Analysis

```bash
# Performance monitoring
npm run performance

# Bundle analysis
npm run analyze

# Performance testing
npm run perf
```

## Common Issues and Fixes

### 1. Hot Reload Not Working

- **Check**: Browser console for errors
- **Fix**: Clear browser cache or hard refresh (Ctrl+F5)
- **Alternative**: Restart dev server

### 2. TypeScript Errors

- **Check**: `npm run type-check`
- **Fix**: Add proper types or fix import paths
- **Common**: Missing `@types` packages

### 3. Styling Issues

- **Check**: Tailwind CSS compilation
- **Fix**: Restart dev server
- **Alternative**: Clear `.next` cache

### 4. Import Path Issues

- **Check**: `tsconfig.json` path mappings
- **Fix**: Use absolute imports with `@/` prefix
- **Example**: `import { Component } from '@/components/Component'`

### 5. Performance Issues

- **Check**: Bundle size with `npm run analyze`
- **Fix**: Optimize imports and remove unused code
- **Monitor**: Use `npm run performance`

## Environment Variables

### Required Environment Variables

```bash
# Development
NODE_ENV=development
PORT=3000

# Analysis
ANALYZE=true

# Production
NODE_ENV=production
```

### Setting Environment Variables

```bash
# Windows
set NODE_ENV=development

# Linux/Mac
export NODE_ENV=development

# Or use .env file
echo "NODE_ENV=development" > .env.local
```

## Debugging Tips

### 1. Enable Debug Logging

```bash
# Next.js debug
DEBUG=* npm run dev

# TypeScript debug
npm run type-check:watch
```

### 2. Check Dependencies

```bash
# Check for outdated packages
npm outdated

# Check for security issues
npm audit

# Update packages
npm update
```

### 3. Performance Debugging

```bash
# Bundle analysis
npm run analyze

# Performance monitoring
npm run performance

# Lighthouse audit (manual)
# Open Chrome DevTools > Lighthouse tab
```

## Getting Help

### 1. Check Logs

- **Next.js logs**: Check terminal output
- **Browser logs**: Open DevTools console
- **Build logs**: Check for specific error messages

### 2. Common Error Patterns

- **EADDRINUSE**: Port conflict
- **Module not found**: Import path issue
- **Type errors**: Missing types or incorrect imports
- **Build failures**: Linting or TypeScript errors

### 3. Reset Environment

```bash
# Complete reset
npm run clean:all

# Partial reset
npm run clean && npm install
```

---

_Last Updated: December 2024_
_Version: 1.0_
