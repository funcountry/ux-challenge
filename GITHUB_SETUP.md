# GitHub Repository Setup Instructions

Follow these steps to create a public GitHub repository and push the ux-challenge project:

## 1. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `ux-challenge`
3. Description: "React Native UX Engineering Challenge - Implement a screen design"
4. Set to **Public**
5. Do NOT initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## 2. Initialize Git and Push

Run these commands from the project directory:

```bash
cd /Users/kingtaj/dev/src/ux-challenge

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: React Native UX challenge setup"

# Add your GitHub repository as origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/ux-challenge.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 3. Verify Upload

After pushing, verify that your repository includes:
- ✅ Source code (App.tsx, src/screens/WelcomeScreen.tsx)
- ✅ Configuration files (package.json, app.json, etc.)
- ✅ README.md with setup instructions
- ✅ Scripts folder with asset generation scripts
- ✅ .gitignore file

## 4. Update the Challenge Email

Once published, update the CHALLENGE_EMAIL.md file with your repository URL:
```bash
git clone https://github.com/YOUR_USERNAME/ux-challenge.git
```

## 5. Optional: Add Topics

On GitHub, add topics to make it discoverable:
- `react-native`
- `ux-challenge`
- `interview-challenge`
- `expo`

## Notes

- The `ios/` and `android/` folders are gitignored and won't be uploaded (this is intentional)
- The `node_modules/` folder is also gitignored
- Candidates will generate their own native folders using `expo prebuild`
- The placeholder assets are included as minimal PNGs

## Repository Structure
```
ux-challenge/
├── App.tsx
├── README.md
├── CHALLENGE_EMAIL.md
├── package.json
├── app.json
├── babel.config.js
├── tsconfig.json
├── metro.config.js
├── .gitignore
├── src/
│   └── screens/
│       └── WelcomeScreen.tsx
├── assets/
│   ├── icon.png
│   ├── splash.png
│   ├── adaptive-icon.png
│   └── favicon.png
└── scripts/
    ├── generate-placeholder-assets.js
    └── create-temp-assets.js
```