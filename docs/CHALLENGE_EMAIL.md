# UX Engineering Challenge Email Template

Subject: UX Engineering Challenge - React Native Screen Implementation

---

Hi [Candidate Name],

We're excited to move forward with your interview process! As part of our technical evaluation, we'd like you to complete a short React Native implementation challenge.

## The Challenge 🎨

You'll be implementing a single screen design from a Figma mockup (link to be provided separately). This is an opportunity to showcase your attention to visual detail, React Native skills, and ability to create smooth, polished interactions.

## Getting Started 🚀

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd ux-challenge
   ```

2. **Create your working branch:**
   ```bash
   git checkout -b yourname-result
   ```
   (Please replace "yourname" with your actual name)

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up the app:**
   - The project includes placeholder icons. Run `node scripts/create-temp-assets.js` if needed
   - For iOS: `npx expo prebuild --platform ios` (if ios folder doesn't exist)
   - Start the app: `npm start` then press `i` for iOS simulator

5. **Complete the challenge:**
   - Replace the Welcome screen with your Figma implementation
   - The existing Welcome screen shows sample instructions when you click "Get Started"
   - Focus on matching the design as closely as possible

6. **Push your work:**
   ```bash
   git add .
   git commit -m "Implement [screen name] design"
   git push origin yourname-result
   ```

## Important Notes 📝

- **Time expectation:** Please spend no more than 1 hour on this challenge
- **Scope:** Focus on implementing the visual design accurately - don't worry about backend integration or complex state management
- **Creativity welcome:** Feel free to add subtle animations or interactions that enhance the user experience, as long as the core design remains faithful to the Figma
- **Pixel perfection:** We're particularly interested in your attention to spacing, typography, and visual hierarchy

## Need Help? 🤝

If you run into any environment setup issues or can't access the Figma file, please don't hesitate to reach out immediately. We want you to spend your time showcasing your skills, not debugging configuration issues!

## What We're Looking For 👀

- Accurate implementation of the design
- Clean, maintainable code structure
- Smooth interactions and animations (where appropriate)
- Consideration for different screen sizes
- React Native best practices

Looking forward to seeing your implementation! Good luck!

Best regards,
[Your Team]

---

P.S. The app currently shows a fun sliding animation when you tap "Get Started" - you're welcome to keep it, modify it, or replace it entirely with your implementation!