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
          <View style={styles.leftElement}>
          </View>

          <Text style={styles.instructionsText}>
            ux engineering challenge
          </Text>

          <View style={styles.rightElement}>
          </View>
        </View>

        {/* Arch and grey section */}
        <View style={styles.middleSection}>
          <View style={styles.archContainer}>
            <View style={styles.archShape} />
          </View>
          <View style={styles.greySection} />
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
      <View style={styles.welcomeContainer}>
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
            size="large"
            onPress={handleGetStarted} />
        </View>
      </View>
    )
   }

  return (
    <SafeAreaView style={styles.container}>
      {showInstructions ? InstructionsComponent() : WelcomeComponent()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cobalt[900],
    paddingTop: spacing.lg,
    paddingBottom: spacing.lg,
  },
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',

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
    width: '100%',
    paddingHorizontal: spacing.md, // 16px margins on left and right
    alignItems: 'center',
    gap: 16, // 16px spacing between buttons
  },
  dateText: {
    fontFamily: 'Blinker_700Bold',
    fontSize: typography.fontSize.md,
    lineHeight: 24,
    letterSpacing: 0.64, // 4% of 16px
    textTransform: 'uppercase',
    fontVariant: ['lining-nums', 'tabular-nums'],
    color: colors.cyan[300],
    marginBottom: spacing.sm,
  },
  welcomeText: {
    fontFamily: 'Blinker_700Bold',
    fontSize: typography.fontSize.xxl,
    color: colors.text,
    marginBottom: spacing.sm,
    letterSpacing: -1,
  },
  challengeText: {
    fontFamily: 'Blinker_400Regular',
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
    fontFamily: 'Blinker_700Bold',
    fontSize: typography.fontSize.md,
    textAlign: 'center',
    letterSpacing: 0.64,
    textTransform: 'uppercase',
    flex: 1, // Takes remaining space, centers the text
  },
  middleSection: {
    flex: 1,
    marginTop: 64, // 64px below the challenge text
  },
  archContainer: {
    height: 120, // Adjust based on desired arch size
    overflow: 'hidden',
  },
  archShape: {
    width: '200%',
    height: 240, // Double the arch container height for proper curve
    borderRadius: 120,
    backgroundColor: '#6B6B6B', // Grey color for the arch
    alignSelf: 'center',
    marginTop: -120, // Position to show only bottom half of circle
  },
  greySection: {
    flex: 1,
    backgroundColor: '#6B6B6B', // Same grey color
    marginBottom: spacing.lg, // Space above buttons
  },
})