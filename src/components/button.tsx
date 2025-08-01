import React from 'react';
import { Pressable, Text, StyleSheet, PressableProps } from 'react-native';
import { colors, typography, spacing } from '../constants/theme';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends Omit<PressableProps, 'style'> {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
}

export default function Button({ title, variant = 'primary', size = 'medium', disabled = false, ...props }: ButtonProps) {
  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.buttonSmall;
      case 'large':
        return styles.buttonLarge;
      default:
        return styles.buttonMedium;
    }
  };

  const getTextSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.buttonTextSmall;
      case 'large':
        return styles.buttonTextLarge;
      default:
        return styles.buttonTextMedium;
    }
  };

  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        getSizeStyle(),
        variant === 'primary' && styles.buttonPrimary,
        variant === 'secondary' && styles.buttonSecondary,
        disabled && styles.buttonDisabled,
        pressed && !disabled && variant === 'primary' && styles.buttonPrimaryPressed,
        pressed && !disabled && variant === 'secondary' && styles.buttonSecondaryPressed,
      ]}
      {...props}
    >
      <Text style={[
        styles.buttonText,
        getTextSizeStyle(),
        variant === 'secondary' && styles.buttonTextSecondary,
        disabled && styles.buttonTextDisabled
      ]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSmall: {
    width: 'auto', // Will be defined later
    height: 36,
    paddingHorizontal: 12,
    gap: 8,
  },
  buttonMedium: {
    width: 361,
    height: 44,
    paddingHorizontal: 16,
    gap: 12,
  },
  buttonLarge: {
    width: 'auto', // Will be defined later
    height: 52,
    paddingHorizontal: 20,
    gap: 16,
  },
  buttonPrimary: {
    backgroundColor: colors.cyan[300],
    // Drop shadow
    shadowColor: colors.cyan[700],
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4, // Android shadow
  },
  buttonSecondary: {
    backgroundColor: colors.cobalt[900],
    borderWidth: 2,
    borderColor: colors.cobalt[500],
    // Drop shadow
    shadowColor: colors.cobalt[500],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 2, // Android shadow
  },
  buttonPrimaryPressed: {
    // Remove drop shadow when pressed
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonSecondaryPressed: {
    // Remove drop shadow when pressed
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonDisabled: {
    backgroundColor: colors.cobalt[500],
    borderWidth: 0,
    // Remove drop shadow when disabled
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    fontWeight: typography.fontWeight.semibold,
    color: colors.cobalt[900],
    textAlign: 'center',
  },
  buttonTextSmall: {
    fontSize: typography.fontSize.sm,
  },
  buttonTextMedium: {
    fontSize: typography.fontSize.md,
  },
  buttonTextLarge: {
    fontSize: typography.fontSize.lg,
  },
  buttonTextSecondary: {
    color: '#FCFBF8',
  },
  buttonTextDisabled: {
    color: colors.cobalt[200],
  },
});
