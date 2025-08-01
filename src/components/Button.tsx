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
    borderRadius: spacing.xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSmall: {
    width: 'auto',
    height: 36,
    paddingHorizontal: spacing.sm,
    gap: spacing.xs,
  },
  buttonMedium: {
    width: '100%',
    height: 44,
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
  },
  buttonLarge: {
    width: '100%',
    height: 52,
    paddingHorizontal: spacing.md,
    gap: spacing.md,
  },
  buttonPrimary: {
    backgroundColor: colors.cyan[300],
    shadowColor: colors.cyan[700],
    shadowOffset: {
      width: 0,
      height: spacing.xs,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4, // Android shadow
  },
  buttonSecondary: {
    backgroundColor: colors.cobalt[900],
    borderWidth: 2,
    borderColor: colors.cobalt[500],
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
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonSecondaryPressed: {
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonDisabled: {
    backgroundColor: colors.cobalt[500],
    borderWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    fontFamily: 'Blinker_700Bold',
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
    fontSize: typography.fontSize.mlg,
  },
  buttonTextSecondary: {
    color: colors.text,
  },
  buttonTextDisabled: {
    color: colors.cobalt[200],
  },
});
