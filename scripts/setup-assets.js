const fs = require('fs');
const path = require('path');

// Simple 64x64 blue square PNG as base64
const bluePlaceholderPNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABG0lEQVR4nO3ZQQrCMBCF4TfZunIlnoI7T+Pd3HgKFx7DjVfQE6gLFxYKUqlNMzOZ95//g9kUkk8gTdpEAAAAAAAAYI1Op9PrdrtD51zmnBvVP8MwHDabzZ7GaDabPRCAwWAwiJwzBCAIQRCCIAS5r9UL4L1/931/TwBqFjzP85EAVCwYQlgQgAoFy7JcEoAKBS+XS0IAShYcx3FGAEoUPJ/POwJQ8Ha7HQjAwVKpVF2vVgCl1A7ArVb7B1BKnQDsANzVav8AAMC2/gGKosgIQIm7YJqmMQEocZk9HA6bvu/PeQo8IHDO5VVjjNnGcTwHcNSYzWZ7T/h+vy8AHCtJkkXVgP1+vxX6AQAAAAAAAP6Vd4EJM1i+qGb0AAAAAElFTkSuQmCC',
  'base64'
);

// Create assets directory if it doesn't exist
const assetsDir = path.join(__dirname, '..', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Create all required assets with the same placeholder
const assets = {
  'icon.png': bluePlaceholderPNG,
  'splash.png': bluePlaceholderPNG,
  'adaptive-icon.png': bluePlaceholderPNG,
  'favicon.png': bluePlaceholderPNG,
};

Object.entries(assets).forEach(([filename, data]) => {
  const filepath = path.join(assetsDir, filename);
  fs.writeFileSync(filepath, data);
  console.log(`✅ Created ${filename}`);
});

// Remove SVG files if they exist (cleanup)
const svgFiles = ['icon.svg', 'splash.svg', 'adaptive-icon.svg', 'favicon.svg'];
svgFiles.forEach(filename => {
  const filepath = path.join(assetsDir, filename);
  if (fs.existsSync(filepath)) {
    fs.unlinkSync(filepath);
    console.log(`🗑️  Removed ${filename}`);
  }
});

console.log('\n✨ Assets setup complete! The app is ready to run.');