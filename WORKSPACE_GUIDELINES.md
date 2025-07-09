# Orson Vision - Workspace Guidelines

## Overview

This document defines the standardized workspace structure, naming conventions, and best practices for the Orson Vision project. These guidelines ensure consistency, maintainability, and scalability across all project contributions.

## 📁 Folder Structure

### Root Directory
```
orson-vision/
├── src/                       # Source code
│   ├── app/                   # Next.js App Router pages
│   │   ├── about/
│   │   ├── services/
│   │   ├── contact/
│   │   └── blog/
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/                 # React components
│   ├── ui/                    # Reusable UI components
│   ├── sections/              # Page sections
│   ├── features/              # Feature components
│   └── layout/                # Layout components
├── lib/                       # Utility libraries
│   ├── utils.ts               # General utilities
│   ├── constants.ts           # Application constants
│   └── validations.ts         # Form validations
├── types/                     # TypeScript definitions
│   └── index.ts               # Type exports
├── styles/                    # Additional styles
│   └── components.css         # Component-specific styles
└── utils/                     # Helper functions
    ├── animations.ts          # Animation utilities
    ├── formatting.ts          # Text formatting
    └── seo.ts                 # SEO utilities
```

### Detailed Structure

#### `src/` - Source Code
```
src/
├── app/                       # Next.js App Router
│   ├── (routes)/              # Route groups
│   │   ├── about/
│   │   ├── services/
│   │   ├── contact/
│   │   └── blog/
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/                 # React components
│   ├── ui/                    # Reusable UI components
│   ├── sections/              # Page sections
│   ├── features/              # Feature components
│   └── layout/                # Layout components
├── lib/                       # Utility libraries
│   ├── utils.ts               # General utilities
│   ├── constants.ts           # Application constants
│   └── validations.ts         # Form validations
├── types/                     # TypeScript definitions
│   └── index.ts               # Type exports
├── styles/                    # Additional styles
│   └── components.css         # Component-specific styles
└── utils/                     # Helper functions
    ├── animations.ts          # Animation utilities
    ├── formatting.ts          # Text formatting
    └── seo.ts                 # SEO utilities
```

#### `public/` - Static Assets
```
public/
├── images/                    # Optimized images
│   ├── hero/
│   ├── services/
│   └── about/
├── videos/                    # Video files
├── icons/                     # Icon files
└── fonts/                     # Custom fonts
```

#### `assets/` - Source Media Files
```
assets/
├── images/                    # Raw image files
│   ├── hero/
│   ├── services/
│   └── about/
├── videos/                    # Source video files
├── designs/                   # Design files (Figma, Sketch)
└── documents/                 # Source documents
```

#### `docs/` - Documentation
```
docs/
├── brand/                     # Brand guidelines
├── development/               # Development guides
├── deployment/                # Deployment guides
├── api/                       # API documentation
└── assets/                    # Documentation assets
```

## 📝 Naming Conventions

### Folders
- **Use kebab-case**: `my-folder-name`
- **Be descriptive**: `user-authentication` not `auth`
- **Use lowercase**: `components` not `Components`

### Source Code Files

#### React Components
- **Use PascalCase**: `MyComponent.tsx`
- **Be descriptive**: `HeroSection.tsx` not `Hero.tsx`
- **Include type**: `Button.tsx`, `Card.tsx`

#### Utility Files
- **Use camelCase**: `formatDate.ts`, `useLocalStorage.ts`
- **Be descriptive**: `userValidation.ts` not `validation.ts`
- **Include purpose**: `animationUtils.ts`, `seoHelpers.ts`

#### CSS Files
- **Use kebab-case**: `button-styles.css`
- **Be descriptive**: `hero-section.css` not `hero.css`
- **Include scope**: `global-styles.css`, `component-styles.css`

### Asset Files

#### Images
- **Use kebab-case**: `hero-background-desktop.jpg`
- **Include dimensions**: `logo-small-dark-mode.svg`
- **Include purpose**: `service-card-illustration.png`
- **Include format**: `.jpg`, `.png`, `.svg`, `.webp`

#### Videos
- **Use kebab-case**: `intro-animation-short.mp4`
- **Include duration**: `hero-video-30s.mp4`
- **Include quality**: `demo-video-hd.mp4`

#### Documents
- **Use Title_Case.md**: `README.md`, `CONTRIBUTING.md`
- **Use kebab-case.md**: `development-guide.md`
- **Include version**: `api-v2-documentation.md`

### Configuration Files
- **Use standard names**: `.env`, `.gitignore`, `package.json`
- **Include environment**: `.env.local`, `.env.production`
- **Include purpose**: `eslint.config.js`, `tailwind.config.js`

## 📋 File Placement Guidelines

### Where to Place New Files

#### New Pages
- **Location**: `src/app/(routes)/page-name/`
- **Example**: `src/app/(routes)/about/page.tsx`

#### New Components
- **Reusable UI**: `src/components/ui/`
- **Page Sections**: `src/components/sections/`
- **Features**: `src/components/features/`
- **Layout**: `src/components/layout/`

#### New Utilities
- **General**: `src/lib/utils.ts`
- **Specific**: `src/utils/domain-specific.ts`
- **Constants**: `src/lib/constants.ts`

#### New Assets
- **Static (processed)**: `public/images/`
- **Source (raw)**: `assets/images/`
- **Design files**: `assets/designs/`

#### New Documentation
- **Brand**: `docs/brand/`
- **Development**: `docs/development/`
- **API**: `docs/api/`

## 🧹 Temporary Files & Development Artifacts

### Files to Ignore
- `.next/` - Next.js build output
- `node_modules/` - Dependencies
- `.env.local` - Local environment variables
- `*.log` - Log files
- `*.tmp` - Temporary files

### Development Artifacts
- **Build outputs**: Automatically generated
- **Cache files**: IDE and tool caches
- **Test coverage**: Generated reports
- **Bundle analysis**: Build analysis files

## 🔧 Version Control Guidelines

### Git Best Practices
- **Branch naming**: `feature/component-name`, `fix/issue-description`
- **Commit messages**: Conventional commits format
- **File size**: Keep assets under 10MB in repo
- **Dependencies**: Use exact versions in package.json

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
**Scope**: `component`, `page`, `util`, `config`

### Branch Strategy
- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - New features
- `fix/*` - Bug fixes
- `hotfix/*` - Critical fixes

## 🗑️ When to Delete

### Criteria for File Deletion
1. **Unused code**: Components not imported anywhere
2. **Duplicate assets**: Identical files with different names
3. **Outdated documentation**: Superseded by newer versions
4. **Temporary files**: Development artifacts
5. **Build artifacts**: Generated files in wrong locations

### Safe Deletion Process
1. **Check usage**: Search for imports/references
2. **Test functionality**: Ensure no broken dependencies
3. **Update documentation**: Remove references
4. **Commit changes**: Use descriptive commit message

## 🔄 Proposing Structural Changes

### Change Request Process
1. **Create issue**: Describe the proposed change
2. **Discuss impact**: Consider dependencies and implications
3. **Update guidelines**: Modify this document if needed
4. **Implement change**: Follow migration checklist
5. **Update documentation**: Reflect changes in all docs

### Migration Checklist
- [ ] Update import paths
- [ ] Test all functionality
- [ ] Update documentation
- [ ] Update CI/CD pipelines
- [ ] Notify team members

## 🛠️ Development Environment Setup

### Editor Configuration
Create `.editorconfig` in project root:
```ini
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
indent_style = space
indent_size = 2

[*.{js,jsx,ts,tsx,json,css,scss,md}]
indent_size = 2

[*.md]
trim_trailing_whitespace = false
```

### ESLint Configuration
Add to `eslint.config.mjs`:
```javascript
// File naming rules
{
  rules: {
    'filename-rules/match': ['error', {
      '.tsx$': 'PascalCase',
      '.ts$': 'camelCase',
      '.css$': 'kebab-case'
    }]
  }
}
```

### Pre-commit Hooks
Install `husky` and `lint-staged`:
```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{css,scss,md,json}": [
      "prettier --write"
    ]
  }
}
```

## 📊 Quality Assurance

### Automated Checks
- **File naming**: ESLint rules for naming conventions
- **Import paths**: TypeScript path validation
- **Asset optimization**: Image and video compression
- **Code formatting**: Prettier configuration
- **Type safety**: TypeScript strict mode

### Manual Reviews
- **Code review**: Peer review for all changes
- **Documentation**: Keep docs up to date
- **Performance**: Regular performance audits
- **Accessibility**: WCAG compliance checks

## 📞 Contact & Support

### Questions & Issues
- **Structural changes**: Create GitHub issue
- **Naming conflicts**: Discuss in team meetings
- **Guideline updates**: Submit pull request
- **Emergency changes**: Contact project lead

### Resources
- **Next.js docs**: https://nextjs.org/docs
- **React patterns**: https://reactpatterns.com
- **TypeScript guide**: https://www.typescriptlang.org/docs
- **Git workflow**: https://guides.github.com/introduction/flow

---

**Last Updated**: January 2025
**Version**: 1.0.0
**Maintainer**: Orson Vision Development Team 