# CSS Compilation Guidelines

## Overview

This document outlines the rules and best practices for CSS compilation to prevent build errors and ensure consistent styling across the Orson Vision project.

## Critical CSS Rules

### 1. Import Statement Order

**Rule**: All `@import` statements must come before any other CSS rules except `@charset` and `@layer`.

**Correct Order**:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;
/* All other CSS rules follow */
```

**Incorrect Order**:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
@import url('...'); /* ❌ This will cause compilation errors */
```

### 2. Tailwind Directive Order

**Rule**: Tailwind directives must be in the correct order: `@tailwind base`, `@tailwind components`, `@tailwind utilities`.

### 3. CSS Rule Organization

**Rule**: Organize CSS rules in the following order:

1. `@import` statements
2. `@tailwind` directives
3. CSS custom properties (`:root`)
4. Base styles
5. Component styles
6. Utility classes
7. Media queries
8. Animations and keyframes

## Error Prevention Checklist

### Before Committing CSS Changes

- [ ] All `@import` statements are at the top of the file
- [ ] Tailwind directives are in correct order
- [ ] No duplicate CSS rules
- [ ] All CSS selectors are valid
- [ ] No syntax errors in CSS rules
- [ ] Media queries are properly formatted
- [ ] Custom properties are defined before use

### Common CSS Errors to Avoid

#### 1. Import Order Errors

```css
/* ❌ Wrong */
@tailwind base;
@import url('...');

/* ✅ Correct */
@import url('...');
@tailwind base;
```

#### 2. Invalid Selectors

```css
/* ❌ Wrong */
.selector-with-invalid-chars@ {
  color: red;
}

/* ✅ Correct */
.selector-with-valid-chars {
  color: red;
}
```

#### 3. Missing Semicolons

```css
/* ❌ Wrong */
.property: value
.another-property: value

/* ✅ Correct */
.property: value;
.another-property: value;
```

#### 4. Invalid Property Values

```css
/* ❌ Wrong */
.color: invalid-color;

/* ✅ Correct */
.color: #ff0000;
.color: rgb(255, 0, 0);
.color: red;
```

## Development Workflow

### 1. CSS File Structure

```
src/app/globals.css
├── @import statements
├── @tailwind directives
├── CSS custom properties
├── Base styles
├── Component styles
├── Utility classes
├── Media queries
└── Animations
```

### 2. Validation Commands

```bash
# Check CSS syntax
npm run lint:css

# Type check (includes CSS validation)
npm run type-check

# Full build test
npm run build
```

### 3. Pre-commit Hooks

The project includes pre-commit hooks that automatically:

- Validate CSS syntax
- Check for import order violations
- Ensure proper Tailwind directive order
- Run type checking

## Troubleshooting Common Issues

### 1. CSS Compilation Errors

**Error**: `@import rules must precede all rules aside from @charset and @layer statements`

**Solution**: Move all `@import` statements to the top of the CSS file, before any other rules.

### 2. Tailwind Not Working

**Error**: Tailwind classes not applying

**Solution**: Ensure `@tailwind` directives are in the correct order and present in the main CSS file.

### 3. Font Loading Issues

**Error**: Custom fonts not loading

**Solution**: Verify `@import` statements are at the top and URLs are accessible.

## Best Practices

### 1. CSS Organization

- Use consistent indentation (2 spaces)
- Group related styles together
- Add comments for complex sections
- Use meaningful class names

### 2. Performance

- Minimize CSS bundle size
- Use efficient selectors
- Avoid deep nesting
- Leverage CSS custom properties

### 3. Maintainability

- Follow naming conventions
- Document complex CSS rules
- Use consistent formatting
- Regular code reviews

## Automated Checks

### ESLint Configuration

The project includes CSS-specific ESLint rules:

- `css-property-order`: Ensures consistent property ordering
- `css-import-order`: Validates import statement placement
- `css-no-invalid-property-values`: Prevents invalid property values

### Pre-commit Hooks

```bash
# Install pre-commit hooks
npm run install-hooks

# Run pre-commit checks manually
npm run pre-commit
```

## Monitoring and Alerts

### 1. Build Monitoring

- Automated build testing on every commit
- CSS compilation error alerts
- Performance impact warnings

### 2. Quality Gates

- CSS syntax validation
- Import order verification
- Tailwind directive validation
- Custom property validation

## Emergency Procedures

### 1. Critical CSS Errors

If CSS compilation fails:

1. Check import statement order
2. Verify Tailwind directive placement
3. Validate CSS syntax
4. Test with minimal CSS
5. Rollback to last working version if needed

### 2. Hot Fixes

For urgent CSS fixes:

1. Create a backup of current CSS
2. Apply minimal fix
3. Test compilation
4. Deploy fix
5. Document the issue and solution

---

**Last Updated**: December 2024
**Version**: 1.0
**Status**: Active
**Enforcement**: Required for all CSS changes
