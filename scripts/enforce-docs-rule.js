#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Documentation Organization Rule Enforcement Script
 *
 * This script checks for documentation files that are not properly organized
 * according to the project's documentation structure rules.
 */

class DocumentationRuleEnforcer {
  constructor() {
    this.rootDir = process.cwd();
    this.docsDir = path.join(this.rootDir, 'docs');
    this.allowedExtensions = ['.md', '.txt', '.pdf', '.doc', '.docx'];
    this.excludedDirs = [
      'node_modules',
      '.git',
      '.next',
      'out',
      'dist',
      'build',
    ];
    this.violations = [];
  }

  /**
   * Check if a file is documentation
   */
  isDocumentationFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return this.allowedExtensions.includes(ext);
  }

  /**
   * Check if a path should be excluded from checking
   */
  shouldExcludePath(filePath) {
    const relativePath = path.relative(this.rootDir, filePath);
    return this.excludedDirs.some(dir => relativePath.startsWith(dir));
  }

  /**
   * Check if a file is in the correct docs location
   */
  isInCorrectLocation(filePath) {
    const relativePath = path.relative(this.rootDir, filePath);

    // Files in docs/ are correct
    if (relativePath.startsWith('docs/')) {
      return true;
    }

    // Files in root that are documentation are violations
    if (
      path.dirname(filePath) === this.rootDir &&
      this.isDocumentationFile(filePath)
    ) {
      return false;
    }

    return true;
  }

  /**
   * Get the suggested location for a documentation file
   */
  getSuggestedLocation(fileName) {
    const name = fileName.toLowerCase();

    // Technical documentation
    if (
      name.includes('api') ||
      name.includes('technical') ||
      name.includes('development') ||
      name.includes('deployment') ||
      name.includes('troubleshooting') ||
      name.includes('security')
    ) {
      return 'docs/technical/';
    }

    // Project documentation
    if (
      name.includes('project') ||
      name.includes('plan') ||
      name.includes('roadmap') ||
      name.includes('milestone') ||
      name.includes('status') ||
      name.includes('meeting') ||
      name.includes('optimization') ||
      name.includes('implementation')
    ) {
      return 'docs/project/';
    }

    // UX/UI documentation
    if (
      name.includes('design') ||
      name.includes('ui') ||
      name.includes('ux') ||
      name.includes('accessibility') ||
      name.includes('responsive') ||
      name.includes('prototype')
    ) {
      return 'docs/ux-ui/';
    }

    // Copywriting documentation
    if (
      name.includes('copy') ||
      name.includes('content') ||
      name.includes('seo') ||
      name.includes('brand-voice') ||
      name.includes('multilingual') ||
      name.includes('writing')
    ) {
      return 'docs/copywriting/';
    }

    // Brand documentation
    if (
      name.includes('brand') ||
      name.includes('logo') ||
      name.includes('visual') ||
      name.includes('identity') ||
      name.includes('guidelines') ||
      name.includes('palette')
    ) {
      return 'docs/brand/';
    }

    // Asset documentation
    if (
      name.includes('asset') ||
      name.includes('image') ||
      name.includes('video') ||
      name.includes('media') ||
      name.includes('file') ||
      name.includes('storage')
    ) {
      return 'docs/assets/';
    }

    // Default to project if unsure
    return 'docs/project/';
  }

  /**
   * Scan directory for documentation violations
   */
  scanDirectory(dirPath) {
    try {
      const items = fs.readdirSync(dirPath);

      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          if (!this.shouldExcludePath(fullPath)) {
            this.scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          if (
            this.isDocumentationFile(fullPath) &&
            !this.isInCorrectLocation(fullPath)
          ) {
            const relativePath = path.relative(this.rootDir, fullPath);
            const suggestedLocation = this.getSuggestedLocation(item);

            this.violations.push({
              file: relativePath,
              suggestedLocation: suggestedLocation + item,
              reason: 'Documentation file found outside docs/ folder',
            });
          }
        }
      }
    } catch (error) {
      console.error(`Error scanning directory ${dirPath}:`, error.message);
    }
  }

  /**
   * Generate a report of violations
   */
  generateReport() {
    console.log('\n📋 Documentation Organization Rule Check');
    console.log('=====================================\n');

    if (this.violations.length === 0) {
      console.log('✅ No documentation rule violations found!');
      console.log(
        'All documentation is properly organized in the docs/ folder.'
      );
      return true;
    }

    console.log(
      `❌ Found ${this.violations.length} documentation rule violation(s):\n`
    );

    this.violations.forEach((violation, index) => {
      console.log(`${index + 1}. ${violation.file}`);
      console.log(`   Reason: ${violation.reason}`);
      console.log(`   Suggested location: ${violation.suggestedLocation}`);
      console.log('');
    });

    console.log('📝 To fix these violations:');
    console.log('1. Move the files to their suggested locations');
    console.log('2. Update any references to these files');
    console.log('3. Run this script again to verify compliance');
    console.log('\n📚 Documentation structure:');
    console.log('docs/');
    console.log('├── technical/     # Development guidelines, technical specs');
    console.log('├── project/       # Project plans, roadmaps, summaries');
    console.log('├── ux-ui/         # Design guidelines, UI/UX specs');
    console.log('├── copywriting/    # Content guidelines, brand voice');
    console.log('├── brand/         # Brand identity, visual guidelines');
    console.log('└── assets/        # Asset management, media guidelines');

    return false;
  }

  /**
   * Run the enforcement check
   */
  run() {
    console.log('🔍 Checking documentation organization compliance...\n');

    this.scanDirectory(this.rootDir);
    const isCompliant = this.generateReport();

    if (!isCompliant) {
      process.exit(1);
    }

    return isCompliant;
  }
}

// Run the enforcement check if this script is executed directly
if (require.main === module) {
  const enforcer = new DocumentationRuleEnforcer();
  enforcer.run();
}

module.exports = DocumentationRuleEnforcer;
