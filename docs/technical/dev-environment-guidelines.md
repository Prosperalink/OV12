# Development Environment Guidelines

## Overview

This document provides comprehensive guidelines for the Orson Vision development environment, optimized for maximum performance and developer productivity.

## Prerequisites

### Required Software

- **Node.js**: v18.0.0 or higher (recommended: v22.16.0+)
- **npm**: v9.0.0 or higher
- **Git**: Latest stable version
- **VS Code**: Latest stable version with recommended extensions

### System Requirements

- **RAM**: Minimum 8GB, recommended 16GB+
- **Storage**: At least 10GB free space
- **CPU**: Multi-core processor recommended

## Quick Setup

### 1. Clone and Install

```bash
git clone <repository-url>
cd orson-vision
npm install
```

### 2. Environment Configuration

```bash
# Copy environment template
cp env.example .env.local

# Edit environment variables as needed
# See Environment Variables section below
```

### 3. Start Development Server

```bash
# Standard development server
npm run dev

# Fast development server (no linting/type checking)
npm run dev:fast

# Smart development server (handles port conflicts)
npm run dev:smart

# Debug development server
npm run dev:debug
```

## Development Commands

### Server Management

```bash
# Start development server
npm run dev                    # Standard with Turbopack
npm run dev:fast              # Fast mode (no lint/type-check)
npm run dev:smart             # Smart port management
npm run dev:debug             # With debugging enabled
npm run dev:analyze           # With bundle analysis

# Kill development ports
npm run kill-ports            # Kill ports 3000, 3001, 3002
```

### Quality Assurance

```bash
# Run all quality checks
npm run standards             # Lint + Type check + Format
npm run quality-gate          # Full quality gate
npm run check-all             # All checks including tests

# Individual checks
npm run lint                  # ESLint check
npm run lint:fix              # ESLint with auto-fix
npm run type-check            # TypeScript check
npm run format                # Prettier format
npm run format:check          # Prettier check only
```

### Testing

```bash
# Run tests
npm run test                  # Run tests once
npm run test:watch            # Run tests in watch mode
npm run test:coverage         # Generate coverage report
npm run test:ci               # CI-optimized test run
```

### Performance & Analysis

```bash
# Performance monitoring
npm run performance           # Performance measurement
npm run analyze               # Bundle analysis
npm run perf                  # Performance testing

# Security
npm run security-scan         # Security audit
npm run test:security         # Security tests
```

### Maintenance

```bash
# Clean and reset
npm run clean                 # Clear build cache
npm run clean:all             # Full reset (node_modules + cache)

# Documentation
npm run check-docs            # Verify documentation structure
npm run enforce-docs          # Enforce documentation rules
```

## Environment Variables

### Required Variables

```bash
# Development
NODE_ENV=development
PORT=3000

# Analysis
ANALYZE=true

# Performance
NEXT_TELEMETRY_DISABLED=1
```

### Optional Variables

```bash
# Debugging
NODE_OPTIONS='--inspect'

# Performance
NODE_OPTIONS='--max-old-space-size=4096'

# Custom ports
PORT=3001
```

## Performance Optimizations

### Development Server

- **Turbopack**: Enabled for faster builds
- **Memory**: 4GB allocation for Node.js
- **Port Management**: Automatic port finding
- **Hot Reload**: Optimized for React components

### TypeScript Configuration

- **Incremental Compilation**: Enabled
- **Isolated Modules**: For faster builds
- **Path Mapping**: Optimized for imports
- **Strict Mode**: Enabled for quality

### Tailwind CSS

- **JIT Mode**: Just-in-time compilation
- **Content Scanning**: Optimized paths
- **Purge**: Automatic unused CSS removal

### ESLint & Prettier

- **Real-time Feedback**: Editor integration
- **Auto-fix**: On save formatting
- **Performance**: Cached results
- **Rules**: Optimized for React/TypeScript

## VS Code Configuration

### Recommended Extensions

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "ms-vscode.vscode-eslint",
    "sonarqube.sonarlint-vscode",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "eamodio.gitlens",
    "orta.vscode-jest"
  ]
}
```

### Workspace Settings

- **Format on Save**: Enabled
- **ESLint Auto-fix**: Enabled
- **TypeScript Memory**: 4GB allocation
- **File Watching**: Optimized exclusions

## Real-time Development Best Practices

### Hot Module Replacement (HMR)

- **React Components**: Instant updates
- **CSS Changes**: Immediate reflection
- **TypeScript**: Fast type checking
- **Tailwind Classes**: Real-time compilation

### Common Workflows

1. **Component Development**: Use `npm run dev:fast` for rapid iteration
2. **Type Safety**: Use `npm run type-check:watch` in separate terminal
3. **Code Quality**: Use `npm run standards` before commits
4. **Performance**: Use `npm run performance` for optimization

### Troubleshooting HMR Issues

```bash
# Clear cache and restart
npm run clean && npm run dev

# Hard refresh browser
Ctrl+F5 (Windows) / Cmd+Shift+R (Mac)

# Check for TypeScript errors
npm run type-check
```

## Performance Tips

### Development Speed

- Use `npm run dev:fast` for rapid iteration
- Keep TypeScript checking in separate terminal
- Use VS Code's built-in TypeScript checking
- Enable ESLint caching

### Memory Management

- Monitor memory usage with `npm run performance`
- Restart dev server if memory usage exceeds 2GB
- Use `npm run clean` to clear build cache

### Bundle Optimization

- Use `npm run analyze` to identify large dependencies
- Monitor bundle size with performance script
- Remove unused imports and dependencies

## Troubleshooting Guide

### Common Issues

#### Port Already in Use

```bash
# Solution 1: Use smart dev server
npm run dev:smart

# Solution 2: Kill ports manually
npm run kill-ports

# Solution 3: Use different port
PORT=3001 npm run dev
```

#### TypeScript Errors

```bash
# Check for type errors
npm run type-check

# Fix import issues
npm run lint:fix

# Clear TypeScript cache
rm -rf .next tsconfig.tsbuildinfo
```

#### Build Failures

```bash
# Run all checks
npm run check-all

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Clean and rebuild
npm run clean:all
```

#### Performance Issues

```bash
# Monitor performance
npm run performance

# Analyze bundle
npm run analyze

# Check memory usage
node scripts/performance-monitor.js
```

### Error Patterns

| Error              | Cause              | Solution                    |
| ------------------ | ------------------ | --------------------------- |
| `EADDRINUSE`       | Port conflict      | Use `npm run dev:smart`     |
| `Module not found` | Import path issue  | Check `tsconfig.json` paths |
| `Type errors`      | TypeScript issues  | Run `npm run type-check`    |
| `Build failures`   | Linting/formatting | Run `npm run standards`     |

## Contributing to Dev Environment

### Adding Dependencies

1. **Development Dependencies**: Use `npm install --save-dev`
2. **Production Dependencies**: Use `npm install --save`
3. **Update package.json**: Add to appropriate section
4. **Update scripts**: Add relevant npm scripts

### Modifying Configurations

1. **TypeScript**: Update `tsconfig.json`
2. **ESLint**: Update `eslint.config.mjs`
3. **Prettier**: Update `.prettierrc`
4. **Tailwind**: Update `tailwind.config.ts`

### Adding Scripts

1. **Development**: Add to `scripts` section in `package.json`
2. **Quality**: Add to quality gate scripts
3. **Performance**: Add to performance monitoring
4. **Documentation**: Update this guide

## Security Considerations

### Development Security

- **Environment Variables**: Never commit `.env.local`
- **Dependencies**: Regular security audits
- **Code Quality**: ESLint security rules enabled
- **Access Control**: Proper Git permissions

### Production Security

- **Build Process**: Secure build pipeline
- **Deployment**: Environment-specific configs
- **Monitoring**: Security scanning enabled
- **Updates**: Regular dependency updates

## Performance Benchmarks

### Target Metrics

- **Cold Start**: < 10 seconds
- **Hot Reload**: < 1 second
- **Type Check**: < 5 seconds
- **Build Time**: < 30 seconds
- **Memory Usage**: < 2GB

### Monitoring

```bash
# Performance measurement
npm run performance

# Bundle analysis
npm run analyze

# Memory usage
node scripts/performance-monitor.js
```

## Support and Maintenance

### Regular Maintenance

- **Weekly**: Update dependencies
- **Monthly**: Review performance metrics
- **Quarterly**: Update development tools
- **Annually**: Review and optimize configurations

### Getting Help

1. **Check this guide** for common solutions
2. **Run diagnostics**: `npm run check-all`
3. **Review logs**: Check terminal output
4. **Team support**: Contact development team

## New Tools & Scripts

### Mock API Server

- **Start mock API**: `npm run mock-api`
- **Default port**: 4000
- **Example endpoint**: `GET /api/hello`
- **Usage**: Use for local data simulation and frontend development without backend dependencies.

### Lighthouse CI (Performance Metrics)

- **Collect metrics**: `npm run lhci:collect`
- **Assert metrics**: `npm run lhci:assert`
- **Report metrics**: `npm run lhci:report`
- **Full run**: `npm run lhci`
- **Config**: `lighthouserc.json` (edit URLs as needed)
- **Results**: `lhci-results/`

### Debugging

- **VS Code launch config**: `.vscode/launch.json` for Next.js and Node.js debugging
- **How to use**: Open Run & Debug panel, select config, and start debugging

### Code Snippets

- **React/Next.js**: `.vscode/snippets/react.json`
- **Tailwind CSS**: `.vscode/snippets/tailwind.json`
- **How to use**: Type snippet prefix (e.g., `rfc`, `tw-btn`) and expand

---

**Last Updated**: December 2024
**Version**: 1.0
**Maintainer**: Development Team
