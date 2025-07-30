# UX Engineering Challenge

Welcome to the UX Engineering Challenge! This is a minimal React Native project set up for you to implement a screen design.

## Getting Started

### Prerequisites
- Node.js (v18 or later, v20 recommended)
- npm or yarn
- **For iOS development (Mac only):**
  - Xcode
  - CocoaPods
- **For Android development:**
  - Android Studio (optional)
- **All platforms:**
  - Expo Go app on your phone (optional)

### Platform Notes
- **macOS**: Full iOS and Android support
- **Windows/Linux**: Web and Android only (no iOS simulator)
- See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for platform-specific guidance

### Quick Start

1. Install dependencies (this will also set up placeholder assets automatically):
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Choose your platform:

**iOS Simulator (Mac only):**
```bash
npm run ios
```

**Web Browser (All platforms):**
```bash
npm start
# Then press 'w'
```

**Android Emulator:**
```bash
npm run android
```

**Physical Device:**
- Install Expo Go app
- Run `npm start`
- Scan QR code

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