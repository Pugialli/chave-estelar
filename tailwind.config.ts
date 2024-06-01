import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2.5rem',
      },
      width: {
        100: '28rem',
        110: '31rem',
        120: '32rem',
        '9/10': '90%',
      },
      height: {
        '9/10': '90%',
      },
      colors: {
        primary: '#884990',
        themeGreen: '#185250',
        themeGreenBorder: '#1C5350',
        background: '#F8F1E6',
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
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      aria: {
        invalid: 'invalid="true"',
      },
      fontSize: {
        xxss: [
          '0.25rem',
          {
            lineHeight: '0.375rem',
          },
        ],
        xxs: [
          '0.5rem',
          {
            lineHeight: '0.75rem',
          },
        ],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
