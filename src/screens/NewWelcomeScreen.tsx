import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../components/button';
import WelcomeLogo from '../../assets/welcome-logo.svg';

export default function WelcomeScreen() {
  const handleGetStarted = () => {

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

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo at top */}
      <View style={styles.logoContainer}>
        <WelcomeLogo width={200} height={100} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e1625',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  dateText: {
    fontSize: 16,
    color: '#b0b0c0',
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 48,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 8,
    letterSpacing: -1,
  },
  challengeText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#b0b0c0',
    letterSpacing: 0.5,
  },
})