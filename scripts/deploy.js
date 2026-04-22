#!/usr/bin/env node

/**
 * Deployment script with cache busting
 */

const fs = require('fs');
const path = require('path');

// Generate build timestamp
const buildTimestamp = Date.now().toString();

// Update environment variables for build
process.env.VITE_BUILD_TIMESTAMP = buildTimestamp;

console.log(`🚀 Starting deployment with build timestamp: ${buildTimestamp}`);

// Create a cache manifest file
const cacheManifest = {
  buildTimestamp,
  version: require('../package.json').version,
  deployedAt: new Date().toISOString()
};

// Write cache manifest to public folder
fs.writeFileSync(
  path.join(__dirname, '../public/cache-manifest.json'),
  JSON.stringify(cacheManifest, null, 2)
);

console.log('✅ Cache manifest created');
console.log('📦 Run your build command now with the updated timestamp');