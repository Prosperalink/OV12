#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Orson Vision Workspace Setup...\n');

// Check required directories
const requiredDirs = [
  'src',
  'src/app',
  'src/components',
  'src/lib',
  'src/types',
  'src/styles',
  'src/utils',
  'public',
  'assets',
  'docs',
  'config',
  'scripts',
  'tests',
  '.github',
  '.github/workflows'
];

console.log('📁 Checking directory structure...');
let dirErrors = 0;

requiredDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`  ✅ ${dir}`);
  } else {
    console.log(`  ❌ ${dir} - MISSING`);
    dirErrors++;
  }
});

// Check required files
const requiredFiles = [
  'package.json',
  'README.md',
  'WORKSPACE_GUIDELINES.md',
  '.editorconfig',
  '.prettierrc',
  'eslint.config.mjs',
  'jest.config.js',
  'jest.setup.js',
  '.github/workflows/ci.yml',
  '.vscode/settings.json'
];

console.log('\n📄 Checking required files...');
let fileErrors = 0;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`  ✅ ${file}`);
  } else {
    console.log(`  ❌ ${file} - MISSING`);
    fileErrors++;
  }
});

// Check package.json scripts
console.log('\n🛠️ Checking package.json scripts...');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const requiredScripts = [
    'dev',
    'build',
    'start',
    'lint',
    'lint:fix',
    'format',
    'format:check',
    'type-check',
    'test',
    'test:watch',
    'prepare'
  ];

  let scriptErrors = 0;
  requiredScripts.forEach(script => {
    if (packageJson.scripts && packageJson.scripts[script]) {
      console.log(`  ✅ ${script}`);
    } else {
      console.log(`  ❌ ${script} - MISSING`);
      scriptErrors++;
    }
  });

  // Check lint-staged configuration
  if (packageJson['lint-staged']) {
    console.log('  ✅ lint-staged configuration');
  } else {
    console.log('  ❌ lint-staged configuration - MISSING');
    scriptErrors++;
  }

} catch (error) {
  console.log('  ❌ Error reading package.json');
  fileErrors++;
}

// Check .gitignore
console.log('\n🚫 Checking .gitignore...');
try {
  const gitignore = fs.readFileSync('.gitignore', 'utf8');
  const requiredIgnores = [
    'node_modules',
    '.next',
    'dist',
    'coverage',
    '.env.local'
  ];

  let ignoreErrors = 0;
  requiredIgnores.forEach(item => {
    if (gitignore.includes(item)) {
      console.log(`  ✅ ${item}`);
    } else {
      console.log(`  ❌ ${item} - MISSING`);
      ignoreErrors++;
    }
  });
} catch (error) {
  console.log('  ❌ Error reading .gitignore');
  fileErrors++;
}

// Summary
console.log('\n📊 Summary:');
console.log(`  Directories: ${requiredDirs.length - dirErrors}/${requiredDirs.length} ✅`);
console.log(`  Files: ${requiredFiles.length - fileErrors}/${requiredFiles.length} ✅`);

if (dirErrors === 0 && fileErrors === 0) {
  console.log('\n🎉 All checks passed! Workspace is properly configured.');
  console.log('\n📚 Next steps:');
  console.log('  1. Run "npm install" to install dependencies');
  console.log('  2. Run "npm run prepare" to set up Husky hooks');
  console.log('  3. Run "npm run dev" to start development');
  console.log('  4. Review WORKSPACE_GUIDELINES.md for development standards');
} else {
  console.log('\n⚠️  Some issues found. Please review and fix the missing items.');
  process.exit(1);
} 