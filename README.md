# UX Engineering Challenge

Welcome to the UX Engineering Challenge! This is a minimal React Native project set up for you to implement a screen design.

## Initial Setup

### Generate Placeholder Assets
First, you'll need to create the required app icons. We've provided a script to help:

```bash
node scripts/generate-placeholder-assets.js
```

This will create placeholder SVG files that you'll need to convert to PNG format. You can use any online SVG to PNG converter or design tool to create:
- `icon.png` (1024x1024) - App icon
- `splash.png` (1284x2778) - Splash screen  
- `adaptive-icon.png` (432x432) - Android adaptive icon
- `favicon.png` (48x48) - Web favicon

Alternatively, you can create your own simple icons using any design tool.

## Getting Started

### Prerequisites
- Node.js (v20 or later)
- npm or yarn
- Xcode (for iOS development)
- CocoaPods

### Installation

1. Install dependencies:
```bash
npm install
```

2. Install iOS dependencies (if the ios folder exists):
```bash
cd ios && pod install && cd ..
```

Note: If you need to regenerate the iOS folder, run:
```bash
npx expo prebuild --platform ios
```

3. Start the development server:
```bash
npm start
```

4. Run on iOS simulator:
```bash
npm run ios
```

## Project Structure

```
ux-challenge/
├── App.tsx                 # Main app component
├── src/
│   └── screens/
│       └── WelcomeScreen.tsx  # Placeholder welcome screen
├── assets/                 # Image assets
├── ios/                    # iOS-specific files
└── android/               # Android-specific files
```

## Your Task

Replace the `WelcomeScreen` component with your implementation of the provided Figma design. You're free to:
- Create additional components as needed
- Organize files how you see fit
- Add any necessary dependencies
- Use any styling approach you prefer

## Tips
- Focus on matching the design as closely as possible
- Pay attention to spacing, typography, and interactions
- Consider edge cases and different screen sizes
- Write clean, maintainable code

Good luck!