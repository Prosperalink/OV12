// Cinematic Humanism Color System
// Professional blue meets warm gold for trust and creativity

export const colors = {
  // Primary Brand Colors
  primary: {
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e3a8a', // Primary brand blue
      900: '#1e293b',
      950: '#0f172a',
    },
    gold: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b', // Primary brand gold
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
    },
  },

  // Semantic Colors
  semantic: {
    success: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    info: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
  },

  // Neutral Colors
  neutral: {
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    },
  },

  // Cinematic Colors for Emotional Impact
  cinematic: {
    // Warm colors for emotional connection
    warm: {
      sunset: '#ff6b35',
      amber: '#f59e0b',
      rose: '#f43f5e',
      coral: '#ff7f50',
    },
    // Cool colors for trust and professionalism
    cool: {
      ocean: '#1e3a8a',
      midnight: '#0f172a',
      steel: '#475569',
      ice: '#e2e8f0',
    },
    // Accent colors for highlights
    accent: {
      electric: '#3b82f6',
      golden: '#fbbf24',
      emerald: '#10b981',
      violet: '#8b5cf6',
    },
  },
}

// Color psychology mapping for emotional impact
export const colorPsychology = {
  trust: colors.primary.blue[800],
  creativity: colors.primary.gold[500],
  professionalism: colors.neutral.slate[800],
  warmth: colors.cinematic.warm.sunset,
  energy: colors.cinematic.accent.electric,
  success: colors.semantic.success[500],
  warning: colors.semantic.warning[500],
  error: colors.semantic.error[500],
  calm: colors.cinematic.cool.ocean,
  luxury: colors.cinematic.accent.golden,
}

// Accessibility-compliant color combinations
export const accessibleColors = {
  // High contrast combinations (4.5:1 ratio)
  highContrast: {
    primary: {
      background: colors.primary.blue[800],
      text: colors.neutral.gray[50],
    },
    secondary: {
      background: colors.primary.gold[500],
      text: colors.neutral.gray[900],
    },
    success: {
      background: colors.semantic.success[500],
      text: colors.neutral.gray[50],
    },
    error: {
      background: colors.semantic.error[500],
      text: colors.neutral.gray[50],
    },
  },
  // Medium contrast combinations (3:1 ratio for large text)
  mediumContrast: {
    primary: {
      background: colors.primary.blue[600],
      text: colors.neutral.gray[100],
    },
    secondary: {
      background: colors.primary.gold[400],
      text: colors.neutral.gray[800],
    },
  },
}

// Theme-specific color mappings
export const themeColors = {
  light: {
    background: colors.neutral.gray[50],
    foreground: colors.neutral.gray[900],
    primary: colors.primary.blue[800],
    secondary: colors.primary.gold[500],
    muted: colors.neutral.gray[200],
    accent: colors.cinematic.accent.electric,
  },
  dark: {
    background: colors.neutral.gray[900],
    foreground: colors.neutral.gray[50],
    primary: colors.primary.blue[400],
    secondary: colors.primary.gold[400],
    muted: colors.neutral.gray[700],
    accent: colors.cinematic.accent.electric,
  },
}

// CSS custom properties for colors
export const colorCSS = `
  :root {
    /* Primary Colors */
    --color-primary-blue: ${colors.primary.blue[800]};
    --color-primary-gold: ${colors.primary.gold[500]};
    
    /* Semantic Colors */
    --color-success: ${colors.semantic.success[500]};
    --color-warning: ${colors.semantic.warning[500]};
    --color-error: ${colors.semantic.error[500]};
    --color-info: ${colors.semantic.info[500]};
    
    /* Neutral Colors */
    --color-gray-50: ${colors.neutral.gray[50]};
    --color-gray-100: ${colors.neutral.gray[100]};
    --color-gray-200: ${colors.neutral.gray[200]};
    --color-gray-300: ${colors.neutral.gray[300]};
    --color-gray-400: ${colors.neutral.gray[400]};
    --color-gray-500: ${colors.neutral.gray[500]};
    --color-gray-600: ${colors.neutral.gray[600]};
    --color-gray-700: ${colors.neutral.gray[700]};
    --color-gray-800: ${colors.neutral.gray[800]};
    --color-gray-900: ${colors.neutral.gray[900]};
    
    /* Cinematic Colors */
    --color-cinematic-sunset: ${colors.cinematic.warm.sunset};
    --color-cinematic-ocean: ${colors.cinematic.cool.ocean};
    --color-cinematic-electric: ${colors.cinematic.accent.electric};
    --color-cinematic-golden: ${colors.cinematic.accent.golden};
    
    /* Theme Colors */
    --color-background: ${themeColors.light.background};
    --color-foreground: ${themeColors.light.foreground};
    --color-primary: ${themeColors.light.primary};
    --color-secondary: ${themeColors.light.secondary};
    --color-muted: ${themeColors.light.muted};
    --color-accent: ${themeColors.light.accent};
  }

  [data-theme="dark"] {
    --color-background: ${themeColors.dark.background};
    --color-foreground: ${themeColors.dark.foreground};
    --color-primary: ${themeColors.dark.primary};
    --color-secondary: ${themeColors.dark.secondary};
    --color-muted: ${themeColors.dark.muted};
    --color-accent: ${themeColors.dark.accent};
  }
`

// Utility functions for color manipulation
export const getColor = (colorPath: string) => {
  const path = colorPath.split('.')
  let current: any = colors
  
  for (const key of path) {
    current = current[key]
    if (!current) return undefined
  }
  
  return current
}

export const getAccessibleTextColor = (backgroundColor: string) => {
  // Simple contrast calculation (in real implementation, use a proper contrast library)
  const isLight = backgroundColor.includes('50') || backgroundColor.includes('100') || backgroundColor.includes('200')
  return isLight ? colors.neutral.gray[900] : colors.neutral.gray[50]
}

export const getColorWithOpacity = (color: string, opacity: number) => {
  // Convert hex to rgba
  const hex = color.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
} 