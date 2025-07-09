#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      startTime: Date.now(),
      buildTime: 0,
      typeCheckTime: 0,
      lintTime: 0,
      testTime: 0,
      memoryUsage: 0,
      bundleSize: 0
    };
  }

  async measureBuildTime() {
    console.log('🏗️  Measuring build time...');
    const start = Date.now();
    try {
      execSync('npm run build', { stdio: 'pipe' });
      this.metrics.buildTime = Date.now() - start;
      console.log(`✅ Build completed in ${this.metrics.buildTime}ms`);
    } catch (error) {
      console.error('❌ Build failed:', error.message);
    }
  }

  async measureTypeCheckTime() {
    console.log('🔍 Measuring TypeScript check time...');
    const start = Date.now();
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      this.metrics.typeCheckTime = Date.now() - start;
      console.log(`✅ Type check completed in ${this.metrics.typeCheckTime}ms`);
    } catch (error) {
      console.error('❌ Type check failed:', error.message);
    }
  }

  async measureLintTime() {
    console.log('🧹 Measuring lint time...');
    const start = Date.now();
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      this.metrics.lintTime = Date.now() - start;
      console.log(`✅ Lint completed in ${this.metrics.lintTime}ms`);
    } catch (error) {
      console.error('❌ Lint failed:', error.message);
    }
  }

  async measureTestTime() {
    console.log('🧪 Measuring test time...');
    const start = Date.now();
    try {
      execSync('npm run test:ci', { stdio: 'pipe' });
      this.metrics.testTime = Date.now() - start;
      console.log(`✅ Tests completed in ${this.metrics.testTime}ms`);
    } catch (error) {
      console.error('❌ Tests failed:', error.message);
    }
  }

  async measureMemoryUsage() {
    console.log('💾 Measuring memory usage...');
    try {
      const usage = process.memoryUsage();
      this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024);
      console.log(`✅ Memory usage: ${this.metrics.memoryUsage}MB`);
    } catch (error) {
      console.error('❌ Memory measurement failed:', error.message);
    }
  }

  async measureBundleSize() {
    console.log('📦 Measuring bundle size...');
    try {
      // This would require bundle analyzer to be implemented
      console.log('ℹ️  Bundle size measurement requires bundle analyzer setup');
    } catch (error) {
      console.error('❌ Bundle size measurement failed:', error.message);
    }
  }

  generateReport() {
    const totalTime = Date.now() - this.metrics.startTime;
    
    console.log('\n📊 Performance Report');
    console.log('===================');
    console.log(`Total execution time: ${totalTime}ms`);
    console.log(`Build time: ${this.metrics.buildTime}ms`);
    console.log(`Type check time: ${this.metrics.typeCheckTime}ms`);
    console.log(`Lint time: ${this.metrics.lintTime}ms`);
    console.log(`Test time: ${this.metrics.testTime}ms`);
    console.log(`Memory usage: ${this.metrics.memoryUsage}MB`);
    
    // Performance thresholds
    const thresholds = {
      buildTime: 30000, // 30 seconds
      typeCheckTime: 5000, // 5 seconds
      lintTime: 3000, // 3 seconds
      testTime: 10000, // 10 seconds
      memoryUsage: 500 // 500MB
    };

    console.log('\n🎯 Performance Analysis');
    console.log('=====================');
    
    if (this.metrics.buildTime > thresholds.buildTime) {
      console.log('⚠️  Build time is slow (>30s)');
    } else {
      console.log('✅ Build time is acceptable');
    }

    if (this.metrics.typeCheckTime > thresholds.typeCheckTime) {
      console.log('⚠️  Type check time is slow (>5s)');
    } else {
      console.log('✅ Type check time is acceptable');
    }

    if (this.metrics.lintTime > thresholds.lintTime) {
      console.log('⚠️  Lint time is slow (>3s)');
    } else {
      console.log('✅ Lint time is acceptable');
    }

    if (this.metrics.testTime > thresholds.testTime) {
      console.log('⚠️  Test time is slow (>10s)');
    } else {
      console.log('✅ Test time is acceptable');
    }

    if (this.metrics.memoryUsage > thresholds.memoryUsage) {
      console.log('⚠️  Memory usage is high (>500MB)');
    } else {
      console.log('✅ Memory usage is acceptable');
    }

    // Save report to file
    const reportPath = path.join(__dirname, '../performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.metrics, null, 2));
    console.log(`\n📄 Report saved to: ${reportPath}`);
  }

  async runAllMeasurements() {
    console.log('🚀 Starting performance measurements...\n');
    
    await this.measureBuildTime();
    await this.measureTypeCheckTime();
    await this.measureLintTime();
    await this.measureTestTime();
    await this.measureMemoryUsage();
    await this.measureBundleSize();
    
    this.generateReport();
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.runAllMeasurements().catch(console.error);
}

module.exports = PerformanceMonitor; 