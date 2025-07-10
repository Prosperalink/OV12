# AI Prompt Templates for Quality Code Generation

## Overview

This document provides standardized prompt templates for AI code generation that ensure all output meets the project's high quality standards. These templates are designed to be used with natural language while automatically applying all quality rules.

## Component Generation Templates

### Basic Component Template

```
Create a React component named [ComponentName] that [describe functionality].
Make sure it follows our project's quality standards and includes proper tests.
```

### Detailed Component Template

```
Create a React component named [ComponentName] that [describe functionality].
Requirements:
- TypeScript with strict mode
- Proper naming conventions (PascalCase component, I prefix interface)
- Accessibility features (ARIA attributes, keyboard navigation)
- Error handling and loading states
- Comprehensive tests with 90%+ coverage
- Follows our animation patterns with AnimationObserver
```

### Form Component Template

```
Create a form component named [ComponentName] that handles [describe form functionality].
Requirements:
- Multi-step validation if needed
- Proper error handling and user feedback
- Accessibility compliance
- Security best practices (input validation, sanitization)
- Comprehensive tests for all validation scenarios
```

## Utility Function Templates

### Basic Utility Template

```
Create a utility function [functionName] that [describe functionality].
Make sure it's properly typed and tested.
```

### Detailed Utility Template

```
Create a utility function [functionName] that [describe functionality].
Requirements:
- Pure function with explicit TypeScript types
- Comprehensive error handling
- Edge case coverage
- Security considerations (input validation)
- JSDoc documentation for public APIs
- Tests for all edge cases and error scenarios
```

## API Route Templates

### Basic API Route Template

```
Create an API route for [describe endpoint] that [describe functionality].
Follow our security and error handling standards.
```

### Detailed API Route Template

```
Create an API route for [describe endpoint] that [describe functionality].
Requirements:
- Proper input validation and sanitization
- Error handling with appropriate HTTP status codes
- TypeScript with strict mode
- Security best practices
- Comprehensive tests for success and error scenarios
- Rate limiting if needed
```

## Test Generation Templates

### Component Test Template

```
Create comprehensive tests for [ComponentName] following our project's testing patterns.
Include tests for all props, interactions, accessibility, and edge cases.
```

### Utility Test Template

```
Create comprehensive tests for [functionName] utility.
Test all edge cases, error scenarios, and input validation.
```

## Documentation Templates

### API Documentation Template

```
Create API documentation for [ComponentName/functionName] following our documentation standards.
Include usage examples and prop/parameter descriptions.
```

### Technical Documentation Template

```
Create technical documentation for [feature/component] in our docs structure.
Include implementation details, usage examples, and best practices.
```

## Natural Language Examples

### Simple Requests (AI will apply standards automatically)

```
"Create a testimonials component with smooth animations"
"Build a contact form with multi-step validation"
"Add a utility function to format dates"
"Create an API endpoint for user authentication"
```

### More Specific Requests

```
"Create a testimonials component that rotates through client feedback with smooth transitions. It needs to be responsive, accessible, and include proper loading states."
"Build a contact form that handles multi-step validation and shows progress. Include proper error handling and accessibility features."
"Add a utility function to sanitize user input and prevent XSS attacks. Make sure it handles all edge cases."
"Create an API route for user registration with proper validation, error handling, and security measures."
```

## Quality Standards Integration

All templates automatically apply:

### Code Quality

- ESLint compliance (naming, imports, formatting)
- TypeScript strict mode
- Prettier formatting
- Proper naming conventions

### Testing

- Jest + React Testing Library
- 90%+ test coverage
- Proper mocking patterns
- Accessibility tests

### Security

- Input validation and sanitization
- XSS prevention
- Secure coding practices
- Error handling

### Performance

- Proper React patterns
- Memoization where appropriate
- Bundle size optimization
- Performance monitoring

### Accessibility

- ARIA attributes
- Semantic HTML
- Keyboard navigation
- Screen reader support

### Documentation

- JSDoc for public APIs
- Usage examples
- Implementation details
- Best practices

## Usage Guidelines

### For Developers

1. Use natural language to describe what you want
2. AI will automatically apply all quality standards
3. Review generated code and tests before committing
4. Provide feedback to improve future generations

### For AI Assistant

1. Always apply project quality standards
2. Create/update tests for all code changes
3. Update documentation as needed
4. Run quality checks before presenting code
5. Learn from user corrections and feedback

## Example Output Structure

When generating a component, the AI will create:

- `src/components/ComponentName.tsx` - Main component
- `tests/components/ComponentName.test.tsx` - Comprehensive tests
- `docs/technical/component-name-api.md` - API documentation (if new)
- Changelog entry and commit message suggestion

## Success Metrics

- **Quality Compliance**: 100% of generated code passes all checks
- **Test Coverage**: 90%+ coverage for all generated components
- **Documentation**: All new features properly documented
- **Security**: Zero security violations in generated code
- **Performance**: All code meets performance benchmarks

---

_Last Updated: 2024-07-10_
_Version: 1.0_
_Status: Active_
