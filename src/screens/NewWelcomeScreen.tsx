import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../components/button';
import WelcomeLogo from '../../assets/welcome-logo.svg';
import { colors, typography, spacing } from '../constants/theme';
import { useState } from 'react';

export default function WelcomeScreen() {
  const [showInstructions, setShowInstructions] = useState(false);

  const handleGetStarted = () => {
    setShowInstructions(true);
  }

  const handleGoBack = () => {
    setShowInstructions(false);
  }

  // Get current date in the format "Friday, August 1"
  const getCurrentDate = () => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    };
    return today.toLocaleDateString('en-US', options);
  };

   const InstructionsComponent = () => {
    return (
      <View style={styles.container}>
        <View style={styles.instructionContainer}>
          {/* Left side element - could be icon or button */}
          <View style={styles.leftElement}>
            {/* Add your left element here, e.g., back button */}
          </View>

          <Text style={styles.instructionsText}>
            ux engineering challenge
          </Text>

          {/* Right side element - could be icon or button */}
          <View style={styles.rightElement}>
            {/* Add your right element here, e.g., menu button */}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Primary Button" variant="primary" onPress={handleGoBack}/>
          <Button title="Disabled Button" disabled />
          <Button title="Secondary Button" variant="secondary" />
        </View>
      </View>
    )
   }

   const WelcomeComponent = () => {
    return (
      <SafeAreaView style={styles.container}>
      {/* Logo at top */}
      <View style={styles.logoContainer}>
        <WelcomeLogo width={97} height={32} />
      </View>

      {/* Text content in middle */}
      <View style={styles.textContainer}>
        <Text style={styles.dateText}>{getCurrentDate()}</Text>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.challengeText}>UX Engineering Challenge</Text>
      </View>

      {/* Button at bottom */}
      <View style={styles.buttonContainer}>
        <Button
          title="Get Started"
          onPress={handleGetStarted} />
      </View>
    </SafeAreaView>
    )
   }

  return showInstructions ? InstructionsComponent() : WelcomeComponent()
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cobalt[900],
    justifyContent: 'space-between',
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xxl,
  },
  logoContainer: {
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
  },
  instructionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
  },
  buttonContainer: {
    alignItems: 'center',
    gap: 16, // 16px spacing between buttons
  },
  dateText: {
    fontFamily: typography.fontFamily.blinker,
    fontWeight: typography.fontWeight.bold, // 700 weight
    fontSize: typography.fontSize.md,
    lineHeight: 24,
    letterSpacing: 0.64, // 4% of 16px
    textTransform: 'uppercase',
    fontVariant: ['lining-nums', 'tabular-nums'],
    color: colors.cyan[300],
    marginBottom: spacing.sm,
  },
  welcomeText: {
    fontFamily: typography.fontFamily.blinker,
    fontWeight: typography.fontWeight.bold, // 700 weight
    fontSize: typography.fontSize.xxl,
    color: colors.text,
    marginBottom: spacing.sm,
    letterSpacing: -1,
  },
  challengeText: {
    fontFamily: typography.fontFamily.blinker,
    fontWeight: typography.fontWeight.regular, // 400 weight
    fontSize: typography.fontSize.lg,
    color: colors.textSecondary,
    letterSpacing: 0.5,
  },
  leftElement: {
    width: 40, // Fixed width to balance the layout
    alignItems: 'flex-start',
  },
  rightElement: {
    width: 40, // Fixed width to balance the layout
    alignItems: 'flex-end',
  },
  instructionsText: {
    color: colors.text,
    fontFamily: typography.fontFamily.blinker,
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSize.md,
    textAlign: 'center',
    letterSpacing: 0.64,
    textTransform: 'uppercase',
    flex: 1, // Takes remaining space, centers the text
  },
})