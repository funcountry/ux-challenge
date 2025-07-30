import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  interpolate,
  Easing,
  runOnJS,
} from 'react-native-reanimated';

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
    const targetY = 60 - (SCREEN_HEIGHT * 0.4);
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
      backgroundColor: isMoving ? '#f5f5f5' : 'transparent',
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
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleGetStarted}
            >
              <Text style={styles.buttonText}>Get Started</Text>
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
                  Review the Figma design provided by your interviewer
                </Text>
              </View>

              <View style={styles.instructionCard}>
                <Text style={styles.instructionNumber}>2</Text>
                <Text style={styles.instructionText}>
                  Implement the design as a React Native screen
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
    backgroundColor: '#f5f5f5',
  },
  welcomeContainer: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.4,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
    elevation: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#666',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonPressed: {
    backgroundColor: '#357ABD',
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  instructionsContainer: {
    flex: 1,
    paddingTop: 100,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  instructionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  instructionCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    alignItems: 'center',
  },
  instructionNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginRight: 16,
    width: 30,
  },
  instructionText: {
    flex: 1,
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
  instructionFooter: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 30,
    lineHeight: 24,
  },
});