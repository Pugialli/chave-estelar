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
        card: '37rem',
        100: '28rem',
        a4: '794px',
        a5: '560px',
        '9/10': '90%',
      },
      height: {
        a4: '1119px',
        a5: '790px',
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
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
