export const colors = {
  // Dark theme inspired by psmobile
  background: '#1a1a2e',
  surface: '#2d2d44',
  cardHighlight: '#3d3d5c',
  
  // Primary colors
  primary: '#4A90E2', // Keeping the blue from our splash
  primaryDark: '#357ABD',
  accent: '#2AD6FF', // Cyan accent
  
  // Text colors
  text: '#ffffff',
  textSecondary: '#b0b0c0',
  textMuted: '#808090',
  
  // UI colors
  success: '#3FA54D',
  successHover: '#42B75A',
  error: '#FF4D4F',
  warning: '#FFD700',
  
  // Borders and dividers
  border: '#3d3d5c',
  divider: '#2A2D38',
  
  // Special colors
  gold: '#FFD700',
  orange: '#f4511e',
  teal: '#22C6F7',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const typography = {
  fontFamily: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
    xxxl: 48,
    display: 64,
  },
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    heavy: '800' as const,
  },
};

export const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
};

export const borderRadius = {
  small: 8,
  medium: 12,
  large: 16,
  xl: 24,
  round: 9999,
};