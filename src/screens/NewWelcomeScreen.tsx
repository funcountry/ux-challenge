import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../components/Button';
import WelcomeLogo from '../../assets/welcome-logo.svg';
import Table from '../../assets/table.svg';
import { colors, typography, spacing } from '../constants/theme';
import { useState } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS,
} from 'react-native-reanimated';

export default function WelcomeScreen() {
  const [showInstructions, setShowInstructions] = useState(false);

  // Animation values
  const logoOpacity = useSharedValue(1);
  const textOpacity = useSharedValue(1);
  const buttonOpacity = useSharedValue(1);
  const instructionsOpacity = useSharedValue(0);

  const handleGetStarted = () => {
    logoOpacity.value = withTiming(0, {
      duration: 200,
      easing: Easing.out(Easing.quad),
    });

    textOpacity.value = withTiming(0, {
      duration: 200,
      easing: Easing.out(Easing.quad),
    });

    buttonOpacity.value = withTiming(0, {
      duration: 200,
      easing: Easing.out(Easing.quad),
    });

    instructionsOpacity.value = withTiming(1, {
      duration: 200,
      easing: Easing.in(Easing.quad),
    }, () => {
      runOnJS(setShowInstructions)(true);
    });
  }

  const handleGoBack = () => {
    instructionsOpacity.value = withTiming(0, {
      duration: 200,
      easing: Easing.out(Easing.quad),
    }, () => {
      runOnJS(setShowInstructions)(false);

      logoOpacity.value = withTiming(1, {
        duration: 200,
        easing: Easing.in(Easing.quad),
      });

      textOpacity.value = withTiming(1, {
        duration: 200,
        easing: Easing.in(Easing.quad),
      });

      buttonOpacity.value = withTiming(1, {
        duration: 200,
        easing: Easing.in(Easing.quad),
      });
    });
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

  const logoAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: logoOpacity.value,
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
    };
  });

  const instructionsAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: instructionsOpacity.value,
    };
  });

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: buttonOpacity.value,
    };
  });

   const InstructionsComponent = () => {
    return (
      <Animated.View style={[styles.container, instructionsAnimatedStyle]}>
        <View style={styles.instructionContainer}>
          <View style={styles.leftElement}>
          </View>

          <Text style={styles.instructionsText}>
            ux engineering challenge
          </Text>

          <View style={styles.rightElement}>
          </View>
        </View>

        <View style={styles.tableSection}>
          <Table
            width="100%"
            style={styles.table}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Primary Button" variant="primary" onPress={handleGoBack}/>
          <Button title="Disabled Button" disabled />
          <Button title="Secondary Button" variant="secondary" />
        </View>
      </Animated.View>
    )
   }

   const WelcomeComponent = () => {
    return (
      <View style={styles.welcomeContainer}>
        <Animated.View style={[styles.logoContainer, logoAnimatedStyle]}>
          <WelcomeLogo width={97} height={32} />
        </Animated.View>

        {/* Text content in middle */}
        <Animated.View style={[styles.textContainer, textAnimatedStyle]}>
          <Text style={styles.dateText}>{getCurrentDate()}</Text>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.challengeText}>UX Engineering Challenge</Text>
        </Animated.View>

        {/* Button at bottom */}
        <Animated.View style={[styles.buttonContainer, buttonAnimatedStyle]}>
          <Button
            title="Get Started"
            size="large"
            onPress={handleGetStarted} />
        </Animated.View>
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
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
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
    paddingVertical: 0,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    gap: spacing.md,
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
    width: 40,
    alignItems: 'flex-start',
  },
  rightElement: {
    width: 40,
    alignItems: 'flex-end',
  },
  instructionsText: {
    color: colors.text,
    fontFamily: 'Blinker_700Bold',
    fontSize: typography.fontSize.md,
    textAlign: 'center',
    letterSpacing: 0.64,
    textTransform: 'uppercase',
    flex: 1,
  },
  tableSection: {
    flex: 1,
    marginTop: spacing.xl,
    backgroundColor: colors.cobalt[900],
  },
  table: {
    width: '100%',
    height: '100%',
  },
})