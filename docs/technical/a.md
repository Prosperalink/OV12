# Orson Vision – AI Quality Context

_Last updated: 2024-07-01_
_Version: 1.0_

---

## Core Quality Principles

- Cinematic Humanism: blend artistry & tech, human-centered
- Performance First: fast, responsive, optimized
- Accessibility: WCAG 2.1 AA minimum
- Security by Design: no unsafe patterns
- Consistency: design system, naming, structure

## Code Standards

- **Naming:**
  - React components: `PascalCase`
  - Functions/vars: `camelCase`
  - Interfaces: `IPascalCase`
  - Constants: `UPPER_SNAKE_CASE`
  - Files: `kebab-case`
- **Imports:**
  - Built-in, external, internal (in order)
- **TypeScript:**
  - `strict` mode ON
  - No `any`, no implicit `any`, no `@ts-ignore`
- **Complexity:**
  - Functions: ≤ 40 lines, ≤ 4 params, ≤ 2 levels nesting
  - Components: ≤ 150 lines, split if larger
- **Readability:**
  - Self-documenting, clear, no magic numbers

## Test-First Workflow

- Write/update tests before/with code
- All new/changed code must have tests
- Use Testing Library, Jest, and coverage tools
- Sync tests with code changes

## Testing Requirements

- **Coverage:** 100% for new code, no <90% overall
- **Patterns:**
  - Unit, integration, accessibility tests
  - Test edge cases, error states, async flows
- **Accessibility:**
  - Test ARIA, roles, keyboard nav
- **Performance:**
  - Test for slow paths, large data, UI lag

## Performance Targets

- **Page load:** <1.5s (desktop), <2.5s (mobile)
- **Bundle:** <250KB critical path
- **Techniques:**
  - Memoization, code splitting, lazy load, image opt
  - Avoid re-renders, debounce expensive ops

## Security Principles

- No eval, no inline scripts, no direct DOM XSS
- Validate/sanitize all user input
- Use HTTPS, secure cookies, no secrets in client
- Follow OWASP Top 10

## Accessibility Standards

- WCAG 2.1 AA
- All interactive elements: ARIA, roles, labels
- Keyboard nav, focus states, color contrast
- Alt text for images, semantic HTML

## Design System & Architecture

- **Color palette:**
  - Light bg: `#F9FAFB`
  - Dark bg: `#101825`
- **Typography:** Use system font stack, scale per design
- **Spacing:** 4/8/16/24/32px increments
- **Components:** Reuse, no duplication, follow atomic design
- **Responsiveness:** Mobile-first, test breakpoints

## Documentation Standards

- All docs in `docs/` (kebab-case, categorized)
- Each file: title, description, last updated, version
- Update docs with code changes
- Use markdown, code blocks, tables for structure

## Git Hygiene

- Descriptive commit messages
- No WIP, no broken code in main
- Branch: feature/-, fix/-, chore/-
- PRs: pass all checks, linked to issues/tasks
- No force push to main/master

---

**@a: Use this file as your primary reference for all code generation. All code must conform to these standards and pass all tests.**
