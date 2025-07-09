# Documentation Organization Rule Enforcement Guide

## Overview

This guide explains how to enforce the documentation organization rule across all project participants using multiple layers of enforcement.

## Enforcement Layers

### 1. Cursor Rules (`.cursorrules`)

**What it does**: Provides AI assistance with project-specific rules
**How to use**: Cursor automatically reads `.cursorrules` and applies the rules during AI interactions

**Benefits**:

- AI assistants will suggest proper documentation placement
- Automatic guidance when creating new documentation
- Consistent recommendations across all team members

### 2. Automated Script (`scripts/enforce-docs-rule.js`)

**What it does**: Scans the project for documentation violations
**How to use**: Run `npm run check-docs` or `npm run enforce-docs`

**Benefits**:

- Automated detection of misplaced documentation
- Suggests correct locations for files
- Can be integrated into CI/CD pipelines

### 3. Pre-commit Hooks (`.husky/pre-commit`)

**What it does**: Prevents commits with documentation violations
**How to use**: Automatically runs before every commit

**Benefits**:

- Catches violations before they reach the repository
- Forces compliance at the commit level
- Provides immediate feedback to developers

### 4. GitHub Actions (`.github/workflows/docs-compliance.yml`)

**What it does**: Checks compliance on pull requests and pushes
**How to use**: Automatically runs on GitHub events

**Benefits**:

- CI/CD level enforcement
- Automatic PR comments for violations
- Team-wide visibility of compliance issues

### 5. VS Code Settings (`.vscode/settings.json`)

**What it does**: Editor-level configuration for consistency
**How to use**: Automatically applied when using VS Code

**Benefits**:

- Consistent editor behavior across team
- Enhanced markdown support
- Proper file associations

## Implementation Steps

### For Project Administrators

1. **Set up the enforcement system**:

   ```bash
   # Install dependencies
   npm install

   # Set up Git hooks
   npm run prepare

   # Test the enforcement script
   npm run check-docs
   ```

2. **Configure team access**:
   - Ensure all team members have access to the repository
   - Share the `.cursorrules` file with the team
   - Provide VS Code settings to team members

3. **Set up monitoring**:
   - Monitor GitHub Actions for compliance failures
   - Review PR comments for documentation issues
   - Regular audits of documentation structure

### For Team Members

1. **Install required tools**:
   - Install Cursor or VS Code
   - Clone the repository
   - Run `npm install` to set up hooks

2. **Follow the workflow**:

   ```bash
   # Before creating documentation
   # 1. Identify the appropriate category
   # 2. Create file in correct location
   # 3. Use proper naming convention

   # Before committing
   npm run check-docs  # Check for violations
   git add .
   git commit -m "Add documentation"  # Hooks will run automatically
   ```

3. **Use the enforcement tools**:
   - Run `npm run check-docs` to verify compliance
   - Check GitHub Actions for CI/CD results
   - Review PR comments for guidance

## Enforcement Commands

### Local Development

```bash
# Check documentation compliance
npm run check-docs

# Run all quality checks (includes docs check)
npm run standards

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

### Pre-commit (Automatic)

```bash
# Hooks run automatically on commit
git commit -m "Your commit message"
# Pre-commit hook will:
# 1. Check documentation organization
# 2. Fix linting issues
# 3. Format code
```

### CI/CD (Automatic)

```bash
# GitHub Actions runs on:
# - Pull requests to main/develop
# - Pushes to main/develop
# - Provides feedback via PR comments
```

## Troubleshooting

### Common Issues

1. **Pre-commit hook not running**:

   ```bash
   # Reinstall hooks
   npm run prepare
   ```

2. **Documentation violations found**:

   ```bash
   # Check what violations exist
   npm run check-docs

   # Move files to correct locations
   # Update any references
   # Run check again
   npm run check-docs
   ```

3. **GitHub Actions failing**:
   - Check the Actions tab in GitHub
   - Review the error messages
   - Fix violations locally and push again

### Getting Help

1. **Check the documentation**:
   - `docs/README.md` - Complete documentation guide
   - `docs/project/project-rules.md` - Official project rules
   - `docs/technical/development-environment-guidelines.md` - Development setup

2. **Run diagnostic commands**:

   ```bash
   # Check current status
   npm run check-docs
   npm run standards

   # Check Git hooks
   ls -la .husky/

   # Check GitHub Actions
   # Visit: https://github.com/[repo]/actions
   ```

## Best Practices

### For Creating Documentation

1. **Choose the right category**:
   - Technical → `docs/technical/`
   - Project → `docs/project/`
   - UX/UI → `docs/ux-ui/`
   - Copywriting → `docs/copywriting/`
   - Brand → `docs/brand/`
   - Assets → `docs/assets/`

2. **Use proper naming**:
   - kebab-case: `development-environment-guidelines.md`
   - Descriptive names: `api-documentation.md`
   - Consistent patterns within categories

3. **Follow the structure**:
   - Clear title and description
   - Table of contents for long documents
   - Consistent heading hierarchy
   - Last updated date and version

### For Maintaining Documentation

1. **Regular reviews**:
   - Monthly technical documentation review
   - Quarterly project documentation review
   - Annual structure review

2. **Update process**:
   - Identify when updates are needed
   - Make changes following standards
   - Update metadata (dates, versions)
   - Commit with clear messages

3. **Quality checks**:
   - Run `npm run check-docs` regularly
   - Review GitHub Actions results
   - Address any violations promptly

## Success Metrics

### Compliance Metrics

- 100% documentation in `docs/` folder
- 0 documentation files in root directory
- Consistent naming conventions
- Proper categorization

### Quality Metrics

- Regular documentation reviews completed
- Up-to-date documentation across categories
- Clear and accessible structure
- Team adoption of standards

### Efficiency Metrics

- Reduced time to find documentation
- Improved documentation maintenance
- Streamlined onboarding process
- Enhanced collaboration effectiveness

---

_Last Updated: December 2024_
_Version: 1.0_
_Status: Active_
_Enforcement: Multi-layer Implementation_
