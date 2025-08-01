import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  interpolate,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import { colors, spacing, typography, shadows, borderRadius } from '../constants/theme';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function WelcomeScreen() {
  const [showInstructions, setShowInstructions] = useState(false);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);
  const instructionsOpacity = useSharedValue(0);
  const buttonScale = useSharedValue(1);
  const titleScale = useSharedValue(1);
  const subtitleOpacity = useSharedValue(1);

  const handleGetStarted = () => {
    'worklet';
    // Move to top with 60px from top of screen
    const targetY = 60 - (SCREEN_HEIGHT * 0.35);
    translateY.value = withSpring(targetY, {
      damping: 20,
      stiffness: 90,
    });
    
    opacity.value = withTiming(0.6, {
      duration: 400,
      easing: Easing.out(Easing.cubic),
    });

    titleScale.value = withTiming(0.6, {
      duration: 400,
      easing: Easing.out(Easing.cubic),
    });

    subtitleOpacity.value = withTiming(0, {
      duration: 300,
      easing: Easing.out(Easing.cubic),
    });

    buttonScale.value = withTiming(0, {
      duration: 300,
      easing: Easing.in(Easing.cubic),
    });

    instructionsOpacity.value = withTiming(1, {
      duration: 600,
      easing: Easing.inOut(Easing.cubic),
    }, () => {
      runOnJS(setShowInstructions)(true);
    });
  };

  const welcomeAnimatedStyle = useAnimatedStyle(() => {
    const isMoving = translateY.value !== 0;
    return {
      transform: [
        { translateY: translateY.value },
        { scale: titleScale.value }
      ],
      opacity: opacity.value,
      backgroundColor: isMoving ? colors.background : 'transparent',
      paddingVertical: isMoving ? 10 : 0,
      paddingHorizontal: isMoving ? 20 : 0,
      width: '100%',
    };
  });

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
      opacity: buttonScale.value,
    };
  });

  const subtitleAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: subtitleOpacity.value,
    };
  });

  const instructionsAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: instructionsOpacity.value,
      transform: [
        {
          translateY: interpolate(
            instructionsOpacity.value,
            [0, 1],
            [50, 0]
          ),
        },
      ],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.background, '#0e1625', colors.background]}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <Animated.View style={[styles.welcomeContainer, welcomeAnimatedStyle]}>
        <Text style={styles.title}>Welcome!</Text>
        <Animated.Text style={[styles.subtitle, subtitleAnimatedStyle]}>
          UX Engineering Challenge
        </Animated.Text>
      </Animated.View>

      <View style={styles.contentContainer}>
        {!showInstructions && (
          <Animated.View style={[styles.buttonContainer, buttonAnimatedStyle]}>
            <Pressable
              style={({ pressed }) => [
                pressed && styles.buttonPressed,
              ]}
              onPress={handleGetStarted}
            >
              <LinearGradient
                colors={[colors.primary, colors.primaryDark]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Get Started</Text>
              </LinearGradient>
            </Pressable>
          </Animated.View>
        )}

        {showInstructions && (
          <Animated.View style={[styles.instructionsContainer, instructionsAnimatedStyle]}>
            <ScrollView 
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.instructionTitle}>Your Challenge</Text>
              
              <View style={styles.instructionCard}>
                <Text style={styles.instructionNumber}>1</Text>
                <Text style={styles.instructionText}>
                  Review the Figma design provided in the email
                </Text>
              </View>

              <View style={styles.instructionCard}>
                <Text style={styles.instructionNumber}>2</Text>
                <Text style={styles.instructionText}>
                  Implement the design as React Native screen(s)
                </Text>
              </View>

              <View style={styles.instructionCard}>
                <Text style={styles.instructionNumber}>3</Text>
                <Text style={styles.instructionText}>
                  Focus on pixel-perfect implementation and smooth interactions
                </Text>
              </View>

              <View style={styles.instructionCard}>
                <Text style={styles.instructionNumber}>4</Text>
                <Text style={styles.instructionText}>
                  Consider edge cases and different device sizes
                </Text>
              </View>

              <Text style={styles.instructionFooter}>
                Replace this screen with your implementation.{'\n'}
                Good luck! 🚀
              </Text>
            </ScrollView>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  welcomeContainer: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.35,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
    elevation: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },
  title: {
    fontSize: typography.fontSize.display,
    fontFamily: 'Blinker_700Bold',
    color: colors.text,
    marginBottom: spacing.md,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: typography.fontSize.xl,
    fontFamily: 'Blinker_400Regular',
    color: colors.textSecondary,
    letterSpacing: 0.5,
    marginBottom: spacing.xl,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: spacing.xxl,
  },
  button: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.round,
    ...shadows.medium,
    overflow: 'hidden',
  },
  buttonPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  buttonText: {
    color: colors.text,
    fontSize: typography.fontSize.lg,
    fontFamily: 'Blinker_700Bold',
    letterSpacing: 0.5,
  },
  instructionsContainer: {
    flex: 1,
    paddingTop: 100,
  },
  scrollContent: {
    paddingBottom: spacing.xxl,
  },
  instructionTitle: {
    fontSize: typography.fontSize.xxl,
    fontFamily: 'Blinker_700Bold',
    color: colors.text,
    marginBottom: spacing.xl,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  instructionCard: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: borderRadius.large,
    marginBottom: spacing.md,
    ...shadows.medium,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  instructionNumber: {
    fontSize: typography.fontSize.xl,
    fontFamily: 'Blinker_700Bold',
    color: colors.accent,
    marginRight: spacing.md,
    width: 30,
  },
  instructionText: {
    flex: 1,
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  instructionFooter: {
    fontSize: typography.fontSize.md,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.xl,
    lineHeight: 26,
  },
});
