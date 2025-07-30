const fs = require('fs');
const path = require('path');

// Create a simple SVG icon with "UX" text
const iconSvg = `<svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <rect width="1024" height="1024" fill="#4A90E2" rx="200"/>
  <text x="512" y="600" font-family="Arial, sans-serif" font-size="400" font-weight="bold" text-anchor="middle" fill="white">UX</text>
</svg>`;

// Create splash screen SVG
const splashSvg = `<svg width="1284" height="2778" viewBox="0 0 1284 2778" xmlns="http://www.w3.org/2000/svg">
  <rect width="1284" height="2778" fill="#4A90E2"/>
  <text x="642" y="1389" font-family="Arial, sans-serif" font-size="200" font-weight="bold" text-anchor="middle" fill="white">UX</text>
  <text x="642" y="1589" font-family="Arial, sans-serif" font-size="80" text-anchor="middle" fill="white">Challenge</text>
</svg>`;

// Create adaptive icon SVG (foreground only, background is solid color)
const adaptiveIconSvg = `<svg width="432" height="432" viewBox="0 0 432 432" xmlns="http://www.w3.org/2000/svg">
  <text x="216" y="260" font-family="Arial, sans-serif" font-size="180" font-weight="bold" text-anchor="middle" fill="white">UX</text>
</svg>`;

// Create favicon SVG
const faviconSvg = `<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="#4A90E2" rx="8"/>
  <text x="24" y="33" font-family="Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle" fill="white">UX</text>
</svg>`;

// Create assets directory if it doesn't exist
const assetsDir = path.join(__dirname, '..', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Save SVG files
fs.writeFileSync(path.join(assetsDir, 'icon.svg'), iconSvg);
fs.writeFileSync(path.join(assetsDir, 'splash.svg'), splashSvg);
fs.writeFileSync(path.join(assetsDir, 'adaptive-icon.svg'), adaptiveIconSvg);
fs.writeFileSync(path.join(assetsDir, 'favicon.svg'), faviconSvg);

console.log('✅ Placeholder SVG assets created successfully!');
console.log('\nNext steps:');
console.log('1. Convert these SVG files to PNG using an online converter or design tool');
console.log('2. Replace the existing PNG files in the assets directory');
console.log('\nRecommended sizes:');
console.log('- icon.png: 1024x1024');
console.log('- splash.png: 1284x2778');
console.log('- adaptive-icon.png: 432x432');
console.log('- favicon.png: 48x48');