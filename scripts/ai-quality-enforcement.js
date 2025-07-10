#!/usr/bin/env node

/**
 * AI Quality Enforcement Script
 * Automatically applies all project quality standards to generated code
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Project quality standards
const QUALITY_STANDARDS = {
  naming: {
    components: 'PascalCase',
    functions: 'camelCase',
    interfaces: 'I prefix + PascalCase',
    constants: 'UPPER_CASE',
    variables: 'camelCase',
  },
  imports: {
    order: ['built-in', 'external', 'internal', 'relative'],
    organization: 'React → External → Internal → Relative',
  },
  typescript: {
    strict: true,
    noImplicitAny: true,
    explicitTypes: true,
  },
  testing: {
    framework: 'Jest + React Testing Library',
    coverage: '90%+',
    location: 'tests/components/',
    naming: 'ComponentName.test.tsx',
  },
  documentation: {
    location: 'docs/',
    naming: 'kebab-case',
    structure: 'Clear titles, consistent headings',
  },
  security: {
    forbidden: ['eval()', 'innerHTML', 'document.write'],
    required: ['input validation', 'sanitization'],
  },
  performance: {
    bundleSize: 'monitored',
    lighthouse: 'compliance required',
  },
  accessibility: {
    required: ['ARIA attributes', 'semantic HTML', 'keyboard navigation'],
  },
};

// Quality check functions
const qualityChecks = {
  // Check naming conventions
  checkNaming: code => {
    const issues = [];

    // Check component naming (PascalCase)
    const componentMatches = code.match(/const\s+([a-zA-Z][a-zA-Z0-9]*)\s*=/g);
    if (componentMatches) {
      componentMatches.forEach(match => {
        const name = match.match(/const\s+([a-zA-Z][a-zA-Z0-9]*)/)?.[1];
        if (name && name[0] === name[0].toLowerCase()) {
          issues.push(`Component "${name}" should use PascalCase`);
        }
      });
    }

    // Check interface naming (I prefix)
    const interfaceMatches = code.match(/interface\s+([A-Z][a-zA-Z0-9]*)/g);
    if (interfaceMatches) {
      interfaceMatches.forEach(match => {
        const name = match.match(/interface\s+([A-Z][a-zA-Z0-9]*)/)?.[1];
        if (name && !name.startsWith('I')) {
          issues.push(`Interface "${name}" should start with "I" prefix`);
        }
      });
    }

    return issues;
  },

  // Check import organization
  checkImports: code => {
    const issues = [];
    const importLines = code.match(/import.*from.*['"]/g);

    if (importLines && importLines.length > 1) {
      const groupOrder = ['react', 'external', 'internal', 'relative'];
      let currentGroup = '';
      const groupIndex = 0;

      for (const importLine of importLines) {
        let group = '';

        if (importLine.includes('react')) {
          group = 'react';
        } else if (
          importLine.includes('@/') ||
          importLine.includes('./') ||
          importLine.includes('../')
        ) {
          group = 'internal';
        } else if (
          importLine.includes("from '") ||
          importLine.includes('from "')
        ) {
          group = 'external';
        } else {
          group = 'relative';
        }

        if (groupOrder.indexOf(group) < groupOrder.indexOf(currentGroup)) {
          issues.push(
            `Import organization: ${group} imports should come before ${currentGroup}`
          );
        }

        currentGroup = group;
      }
    }

    return issues;
  },

  // Check TypeScript compliance
  checkTypeScript: code => {
    const issues = [];

    // Check for implicit any
    if (code.includes(': any') || code.includes('any[]')) {
      issues.push('Avoid explicit any, use proper TypeScript types');
    }

    // Check for proper typing
    if (code.includes('function ') && !code.includes(': ')) {
      issues.push('Add explicit return types to functions');
    }

    return issues;
  },

  // Check security patterns
  checkSecurity: code => {
    const issues = [];

    // Check for forbidden patterns
    const forbiddenPatterns = [
      { pattern: 'eval(', message: 'Avoid eval() for security reasons' },
      { pattern: 'innerHTML', message: 'Avoid innerHTML, use React patterns' },
      { pattern: 'document.write', message: 'Avoid document.write' },
    ];

    forbiddenPatterns.forEach(({ pattern, message }) => {
      if (code.includes(pattern)) {
        issues.push(message);
      }
    });

    // Check for input validation
    if (code.includes('onSubmit') && !code.includes('validate')) {
      issues.push('Add input validation for form submissions');
    }

    return issues;
  },

  // Check accessibility
  checkAccessibility: code => {
    const issues = [];

    // Check for semantic HTML
    if (
      code.includes('<div') &&
      code.includes('onClick') &&
      !code.includes('role=')
    ) {
      issues.push('Add role attribute for clickable divs');
    }

    // Check for ARIA attributes
    if (code.includes('aria-')) {
      // Validate ARIA usage
    }

    return issues;
  },

  // Check performance patterns
  checkPerformance: code => {
    const issues = [];

    // Check for expensive operations in render
    if (code.includes('useEffect') && code.includes('setState')) {
      issues.push('Consider using useCallback for event handlers');
    }

    // Check for proper cleanup
    if (
      code.includes('addEventListener') &&
      !code.includes('removeEventListener')
    ) {
      issues.push('Add cleanup for event listeners');
    }

    return issues;
  },
};

// Test synchronization functions
const testSync = {
  // Generate test file path
  getTestPath: componentPath => {
    const componentName = path.basename(componentPath, '.tsx');
    return path.join('tests', 'components', `${componentName}.test.tsx`);
  },

  // Generate test template
  generateTestTemplate: (componentName, props = {}) => {
    return `import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ${componentName} } from './${componentName}';

// Mock dependencies
jest.mock('@/components/AnimationObserver', () => {
  return function MockAnimationObserver(props) {
    return (
      <div data-testid="animation-observer" {...props}>
        {props.children}
      </div>
    );
  };
});

describe('${componentName}', () => {
  const defaultProps = ${JSON.stringify(props, null, 2)};

  beforeEach(() => {
    render(<${componentName} {...defaultProps} />);
  });

  describe('Rendering', () => {
    it('renders without crashing', () => {
      expect(screen.getByTestId('${componentName.toLowerCase()}')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const element = screen.getByTestId('${componentName.toLowerCase()}');
      expect(element).toHaveClass('test-class');
    });
  });

  describe('Interactions', () => {
    it('handles user interactions', () => {
      // Add interaction tests based on component behavior
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      // Add accessibility tests
    });
  });
});`;
  },

  // Update existing test
  updateTest: (testPath, componentChanges) => {
    if (fs.existsSync(testPath)) {
      // Read existing test and update based on component changes
      const testContent = fs.readFileSync(testPath, 'utf8');

      // Update props if needed
      if (componentChanges.props) {
        // Update defaultProps in test
      }

      // Update test cases if needed
      if (componentChanges.newProps) {
        // Add tests for new props
      }

      fs.writeFileSync(testPath, testContent);
    }
  },
};

// Documentation functions
const documentation = {
  // Update API documentation
  updateApiDocs: (componentName, props) => {
    const docPath = path.join(
      'docs',
      'technical',
      `${componentName.toLowerCase()}-api.md`
    );

    const docContent = `# ${componentName} API Documentation

## Props

${Object.entries(props)
  .map(([prop, type]) => `- \`${prop}\`: ${type}`)
  .join('\n')}

## Usage

\`\`\`tsx
import { ${componentName} } from '@/components/${componentName}';

<${componentName} />
\`\`\`

## Examples

### Basic Usage

\`\`\`tsx
<${componentName} />
\`\`\`
`;

    fs.writeFileSync(docPath, docContent);
  },

  // Create changelog entry
  createChangelogEntry: (componentName, changes) => {
    const changelogPath = path.join('docs', 'technical', 'changelog.md');

    const entry = `## ${new Date().toISOString().split('T')[0]} - ${componentName}

- Added ${componentName} component
- ${changes.join('\n- ')}

`;

    if (fs.existsSync(changelogPath)) {
      const content = fs.readFileSync(changelogPath, 'utf8');
      fs.writeFileSync(changelogPath, entry + content);
    } else {
      fs.writeFileSync(changelogPath, entry);
    }
  },
};

// Main quality enforcement function
function enforceQualityStandards(generatedCode, componentName, options = {}) {
  // console.log('🔍 Enforcing quality standards...');

  const issues = [];
  const fixes = [];

  // Run all quality checks
  Object.entries(qualityChecks).forEach(([checkName, checkFunction]) => {
    const checkIssues = checkFunction(generatedCode);
    issues.push(
      ...checkIssues.map(issue => ({ type: checkName, message: issue }))
    );
  });

  // Auto-fix common issues
  if (issues.length > 0) {
    // console.log('🔧 Applying auto-fixes...');

    // Fix naming issues
    issues
      .filter(issue => issue.type === 'naming')
      .forEach(issue => {
        if (issue.message.includes('should use PascalCase')) {
          // Auto-fix component naming
          generatedCode = generatedCode.replace(
            /const\s+([a-z][a-zA-Z0-9]*)\s*=/g,
            (match, name) => {
              const pascalCase = name.charAt(0).toUpperCase() + name.slice(1);
              return match.replace(name, pascalCase);
            }
          );
          fixes.push(`Fixed component naming: ${issue.message}`);
        }
      });

    // Fix import organization
    if (issues.some(issue => issue.type === 'imports')) {
      // Reorganize imports
      const importLines = generatedCode.match(/import.*from.*['"]/g) || [];
      const organizedImports = organizeImports(importLines);
      generatedCode = generatedCode.replace(/import.*from.*['"]/g, '').trim();
      generatedCode = organizedImports + '\n\n' + generatedCode;
      fixes.push('Reorganized imports according to project standards');
    }
  }

  // Generate/update test file
  const testPath = testSync.getTestPath(`${componentName}.tsx`);
  const testContent = testSync.generateTestTemplate(
    componentName,
    options.props || {}
  );
  fs.writeFileSync(testPath, testContent);
  // console.log(`✅ Generated test file: ${testPath}`);

  // Update documentation
  if (options.updateDocs) {
    documentation.updateApiDocs(componentName, options.props || {});
    documentation.createChangelogEntry(componentName, [
      'Initial implementation',
    ]);
    // console.log('✅ Updated documentation');
  }

  // Run final quality checks
  // console.log('✅ Running final quality checks...');
  const finalIssues = [];
  Object.entries(qualityChecks).forEach(([checkName, checkFunction]) => {
    const checkIssues = checkFunction(generatedCode);
    finalIssues.push(
      ...checkIssues.map(issue => ({ type: checkName, message: issue }))
    );
  });

  return {
    code: generatedCode,
    issues: finalIssues,
    fixes,
    testPath,
    qualityScore: Math.max(0, 100 - finalIssues.length * 10),
  };
}

// Helper function to organize imports
function organizeImports(importLines) {
  const groups = {
    react: [],
    external: [],
    internal: [],
    relative: [],
  };

  importLines.forEach(line => {
    if (line.includes('react')) {
      groups.react.push(line);
    } else if (
      line.includes('@/') ||
      line.includes('./') ||
      line.includes('../')
    ) {
      groups.internal.push(line);
    } else if (line.includes("from '") || line.includes('from "')) {
      groups.external.push(line);
    } else {
      groups.relative.push(line);
    }
  });

  return [
    ...groups.react,
    ...groups.external,
    ...groups.internal,
    ...groups.relative,
  ].join('\n');
}

// Export for use in other scripts
module.exports = {
  enforceQualityStandards,
  qualityChecks,
  testSync,
  documentation,
  QUALITY_STANDARDS,
};

// Run if called directly
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    // console.log(
    //   'Usage: node ai-quality-enforcement.js <component-name> [options]'
    // );
    process.exit(1);
  }

  const componentName = args[0];
  const options = {
    updateDocs: args.includes('--docs'),
    props: args.includes('--props') ? {} : undefined,
  };

  // Example usage
  const sampleCode = `import React from 'react';
import { useState } from 'react';

interface componentProps {
  children?: ReactNode;
  className?: string;
}

const componentName = ({ children, className = '' }: componentProps) => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};

export default componentName;`;

  const result = enforceQualityStandards(sampleCode, componentName, options);

  // console.log('\n📊 Quality Enforcement Results:');
  // console.log(`Quality Score: ${result.qualityScore}/100`);
  // console.log(`Issues Found: ${result.issues.length}`);
  // console.log(`Auto-fixes Applied: ${result.fixes.length}`);
  // console.log(`Test File: ${result.testPath}`);

  if (result.issues.length > 0) {
    // console.log('\n⚠️ Remaining Issues:');
    result.issues.forEach(issue => {
      // console.log(`- ${issue.type}: ${issue.message}`);
    });
  }

  if (result.fixes.length > 0) {
    // console.log('\n✅ Auto-fixes Applied:');
    result.fixes.forEach(fix => {
      // console.log(`- ${fix}`);
    });
  }
}
