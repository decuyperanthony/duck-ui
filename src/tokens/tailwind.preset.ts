import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export const duckUIPreset: Partial<Config> = {
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--duck-background))',
        foreground: 'hsl(var(--duck-foreground))',
        card: {
          DEFAULT: 'hsl(var(--duck-card))',
          foreground: 'hsl(var(--duck-card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--duck-popover))',
          foreground: 'hsl(var(--duck-popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--duck-primary))',
          foreground: 'hsl(var(--duck-primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--duck-secondary))',
          foreground: 'hsl(var(--duck-secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--duck-muted))',
          foreground: 'hsl(var(--duck-muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--duck-accent))',
          foreground: 'hsl(var(--duck-accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--duck-destructive))',
          foreground: 'hsl(var(--duck-destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--duck-success))',
          foreground: 'hsl(var(--duck-success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--duck-warning))',
          foreground: 'hsl(var(--duck-warning-foreground))',
        },
        info: {
          DEFAULT: 'hsl(var(--duck-info))',
          foreground: 'hsl(var(--duck-info-foreground))',
        },
        border: 'hsl(var(--duck-border))',
        input: 'hsl(var(--duck-input))',
        ring: 'hsl(var(--duck-ring))',
      },
      borderRadius: {
        lg: 'var(--duck-radius)',
        md: 'calc(var(--duck-radius) - 2px)',
        sm: 'calc(var(--duck-radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        shimmer: 'shimmer 2s infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
