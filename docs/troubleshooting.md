# Troubleshooting Guide

## Platform-Specific Issues

### Windows Users

**iOS Simulator Not Available**
- iOS development requires macOS. Windows users can only test on:
  - Web browser: `npm start` then press `w`
  - Android emulator (if set up)
  - Physical Android device via Expo Go app

**Recommended Approach for Windows:**
1. Use web preview for initial development
2. Test responsive design in browser developer tools
3. Note in your submission that you developed on Windows

**Common Windows Issues:**
- Path length limitations: Clone repo close to root (e.g., `C:\ux-challenge`)
- Line ending issues: Git may convert LF to CRLF
- Node.js installation: Use Node.js installer from nodejs.org, not WSL

### Linux Users

**iOS Simulator Not Available**
- Same limitation as Windows - iOS development requires macOS
- Use web preview or Android emulator

**Common Linux Issues:**
- Watchman not installed: `sudo apt-get install watchman` (Ubuntu/Debian)
- Android Studio setup required for Android emulator
- May need to install additional build tools

### All Platforms

**Node Version Issues**
```bash
# Check your Node version
node --version

# Should be v18 or higher (v20 recommended)
# Use nvm to manage versions:
# Windows: nvm-windows
# Mac/Linux: nvm
```

**NPM Install Failures**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

**Expo CLI Issues**
```bash
# If 'expo' command not found:
npx expo --version

# Always use npx to run expo commands:
npx expo start
npx expo prebuild
```

**Metro Bundler Issues**
```bash
# Reset Metro cache
npx expo start -c

# Or manually:
rm -rf .expo
watchman watch-del-all  # If watchman installed
```

## Development Alternatives

### Option 1: Web Development (All Platforms)
```bash
npm start
# Press 'w' for web

# Note: Some React Native components may render differently on web
# Focus on layout, styling, and component structure
```

### Option 2: Expo Go App (All Platforms)
1. Install Expo Go on your physical device
2. Run `npm start`
3. Scan QR code with Expo Go app
4. Develop on actual device

### Option 3: Android Emulator (Windows/Linux)
1. Install Android Studio
2. Set up Android Virtual Device (AVD)
3. Run `npm start` then press `a`

### Option 4: Online Development
Use Expo Snack (snack.expo.dev) for quick prototyping:
- Copy core components
- Test ideas quickly
- Note: Limited compared to local development

## Common Error Messages

### "Unable to resolve module"
```bash
# Solution:
npm install
npx expo start -c
```

### "error Invalid regular expression"
```bash
# Windows path issue, solution:
# Move project to shorter path like C:\ux
```

### "EMFILE: too many open files"
```bash
# macOS/Linux solution:
ulimit -n 4096
# Or install watchman
```

### "Could not connect to development server"
```bash
# Firewall/network issue:
# 1. Check firewall settings
# 2. Use same network for device and computer
# 3. Try using tunnel: npx expo start --tunnel
```

## Submission Notes for Non-Mac Users

If you developed without iOS simulator access, please note in your submission:
- Which platform you used for development
- Any platform-specific considerations
- Screenshots/recordings from your test environment
- Any React Native Web vs Native differences you noticed

We understand platform limitations and will evaluate your code quality, component structure, and attention to detail regardless of the testing platform used.

## Need Help?

If you encounter issues not covered here:
1. Check Expo documentation: docs.expo.dev
2. Search the specific error message
3. Contact us with error details and your environment info

Remember: We're evaluating your React Native skills, not your ability to configure development environments!