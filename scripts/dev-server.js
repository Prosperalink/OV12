#!/usr/bin/env node

const { spawn } = require('child_process');
const net = require('net');
const os = require('os');

const DEFAULT_PORT = 3000;
const MAX_PORT_ATTEMPTS = 10;

// Performance optimizations
const NODE_OPTIONS = [
  '--max-old-space-size=4096',
  '--optimize-for-size',
  '--gc-interval=100',
].join(' ');

function isPortAvailable(port) {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.once('close', () => {
        resolve(true);
      });
      server.close();
    });
    server.on('error', () => {
      resolve(false);
    });
  });
}

async function findAvailablePort(startPort = DEFAULT_PORT) {
  for (let port = startPort; port < startPort + MAX_PORT_ATTEMPTS; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(
    `No available ports found between ${startPort} and ${startPort + MAX_PORT_ATTEMPTS}`
  );
}

async function startDevServer() {
  try {
    const port = await findAvailablePort();
    console.log(`🚀 Starting optimized development server on port ${port}...`);
    console.log(
      `📊 Node.js Memory: ${Math.round(os.totalmem() / 1024 / 1024 / 1024)}GB available`
    );
    console.log(`⚡ Performance optimizations enabled`);

    const devProcess = spawn('npm', ['run', 'dev'], {
      stdio: 'inherit',
      env: {
        ...process.env,
        PORT: port.toString(),
        NODE_OPTIONS: NODE_OPTIONS,
        // Development optimizations
        NEXT_TELEMETRY_DISABLED: '1',
        NODE_ENV: 'development',
      },
    });

    devProcess.on('error', error => {
      console.error('❌ Failed to start development server:', error.message);
      process.exit(1);
    });

    devProcess.on('close', code => {
      console.log(`\n🛑 Development server stopped with code ${code}`);
      process.exit(code);
    });

    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n🛑 Shutting down development server...');
      devProcess.kill('SIGINT');
    });

    process.on('SIGTERM', () => {
      console.log('\n🛑 Shutting down development server...');
      devProcess.kill('SIGTERM');
    });
  } catch (error) {
    console.error('❌ Error starting development server:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  startDevServer();
}

module.exports = { startDevServer, findAvailablePort };
