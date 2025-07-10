#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class OptimizedSetupVerifier {
  constructor() {
    this.results = {
      devServer: false,
      mockApi: false,
      performance: false,
      debugging: false,
      snippets: false,
      documentation: false,
      qualityTools: false,
    };
  }

  async verifyDevServer() {
    console.log('🔍 Verifying development server...');
    try {
      // Test if dev server can start
      const devProcess = spawn('npm', ['run', 'dev:fast'], {
        stdio: 'pipe',
        env: { ...process.env, PORT: '3001' },
      });

      // Wait a bit for server to start
      await new Promise(resolve => setTimeout(resolve, 5000));

      // Check if server is responding
      const response = await fetch('http://localhost:3001');
      if (response.ok) {
        console.log('✅ Development server is working');
        this.results.devServer = true;
      }

      devProcess.kill();
    } catch (error) {
      console.log('❌ Development server verification failed:', error.message);
    }
  }

  async verifyMockApi() {
    console.log('🔍 Verifying mock API...');
    try {
      const mockProcess = spawn('node', ['mock-api.js'], {
        stdio: 'pipe',
        env: { ...process.env, MOCK_API_PORT: '4001' },
      });

      // Wait for server to start
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Test mock API endpoint
      const response = await fetch('http://localhost:4001/api/hello');
      const data = await response.json();

      if (data.message === 'Hello from the mock API!') {
        console.log('✅ Mock API is working');
        this.results.mockApi = true;
      }

      mockProcess.kill();
    } catch (error) {
      console.log('❌ Mock API verification failed:', error.message);
    }
  }

  async verifyPerformanceTools() {
    console.log('🔍 Verifying performance tools...');
    try {
      // Test performance script
      execSync('npm run performance', { stdio: 'pipe' });
      console.log('✅ Performance monitoring is working');
      this.results.performance = true;
    } catch (error) {
      console.log('❌ Performance tools verification failed:', error.message);
    }
  }

  async verifyDebugging() {
    console.log('🔍 Verifying debugging configuration...');
    try {
      const launchConfig = path.join(__dirname, '../.vscode/launch.json');
      if (fs.existsSync(launchConfig)) {
        const config = JSON.parse(fs.readFileSync(launchConfig, 'utf8'));
        if (config.configurations && config.configurations.length > 0) {
          console.log('✅ VS Code debugging configuration is present');
          this.results.debugging = true;
        }
      }
    } catch (error) {
      console.log('❌ Debugging verification failed:', error.message);
    }
  }

  async verifySnippets() {
    console.log('🔍 Verifying code snippets...');
    try {
      const reactSnippets = path.join(
        __dirname,
        '../.vscode/snippets/react.json'
      );
      const tailwindSnippets = path.join(
        __dirname,
        '../.vscode/snippets/tailwind.json'
      );

      if (fs.existsSync(reactSnippets) && fs.existsSync(tailwindSnippets)) {
        console.log('✅ Code snippets are configured');
        this.results.snippets = true;
      }
    } catch (error) {
      console.log('❌ Snippets verification failed:', error.message);
    }
  }

  async verifyDocumentation() {
    console.log('🔍 Verifying documentation...');
    try {
      const guidelines = path.join(
        __dirname,
        '../docs/technical/dev-environment-guidelines.md'
      );
      if (fs.existsSync(guidelines)) {
        const content = fs.readFileSync(guidelines, 'utf8');
        if (content.includes('Mock API') && content.includes('Lighthouse CI')) {
          console.log('✅ Documentation is up to date');
          this.results.documentation = true;
        }
      }
    } catch (error) {
      console.log('❌ Documentation verification failed:', error.message);
    }
  }

  async verifyQualityTools() {
    console.log('🔍 Verifying quality tools...');
    try {
      // Test ESLint
      execSync('npm run lint', { stdio: 'pipe' });
      console.log('✅ ESLint is working');

      // Test TypeScript
      execSync('npm run type-check', { stdio: 'pipe' });
      console.log('✅ TypeScript checking is working');

      // Test Prettier
      execSync('npm run format:check', { stdio: 'pipe' });
      console.log('✅ Prettier is working');

      this.results.qualityTools = true;
    } catch (error) {
      console.log('❌ Quality tools verification failed:', error.message);
    }
  }

  generateReport() {
    console.log('\n📊 Optimization Verification Report');
    console.log('===================================');

    const totalChecks = Object.keys(this.results).length;
    const passedChecks = Object.values(this.results).filter(Boolean).length;

    Object.entries(this.results).forEach(([check, passed]) => {
      const icon = passed ? '✅' : '❌';
      const status = passed ? 'PASSED' : 'FAILED';
      console.log(`${icon} ${check}: ${status}`);
    });

    console.log(`\n🎯 Overall: ${passedChecks}/${totalChecks} checks passed`);

    if (passedChecks === totalChecks) {
      console.log('🎉 All optimizations are working correctly!');
    } else {
      console.log('⚠️  Some optimizations need attention');
    }

    // Save report
    const reportPath = path.join(
      __dirname,
      '../optimization-verification.json'
    );
    const reportData = {
      timestamp: new Date().toISOString(),
      results: this.results,
      summary: {
        total: totalChecks,
        passed: passedChecks,
        failed: totalChecks - passedChecks,
      },
    };

    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));
    console.log(`\n📄 Report saved to: ${reportPath}`);
  }

  async runAllVerifications() {
    console.log('🚀 Starting optimization verification...\n');

    await this.verifyDevServer();
    await this.verifyMockApi();
    await this.verifyPerformanceTools();
    await this.verifyDebugging();
    await this.verifySnippets();
    await this.verifyDocumentation();
    await this.verifyQualityTools();

    this.generateReport();
  }
}

// Run if called directly
if (require.main === module) {
  const verifier = new OptimizedSetupVerifier();
  verifier.runAllVerifications().catch(console.error);
}

module.exports = OptimizedSetupVerifier;
