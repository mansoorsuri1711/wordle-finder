/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['var(--font-gulkave)', 'var(--font-outfit)', 'sans-serif'],
        gulkave: ['var(--font-gulkave)', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        // Teal + amber brand pulled from Wordle Calculator logo (avoid purple bias)
        brand: {
          DEFAULT: '#F3F7F6',
          soft: '#FFFFFF',
          deep: '#E7F1EF',
          glow: '#0D9488',
        },
        mist: '#DCE8E5',
        blush: '#F3F7F6',
        ink: '#0B1228',
        pink: {
          DEFAULT: '#0D9488',
          soft: '#14B8A6',
          deep: '#0F766E',
        },
        coral: {
          DEFAULT: '#EA8C00',
          deep: '#C2410C',
        },
        violet: {
          DEFAULT: '#0D9488',
          soft: '#14B8A6',
          deep: '#0F766E',
        },
        orange: {
          DEFAULT: '#EA8C00',
          soft: '#F59E0B',
          deep: '#C2410C',
        },
        emerald: {
          DEFAULT: '#6AAA64',
          soft: '#538D4E',
          deep: '#3A6B36',
        },
        lilac: '#5EEAD4',
        teal: {
          DEFAULT: '#0D9488',
          deep: '#0F766E',
        },
        sky: '#14B8A6',
        gold: '#EA8C00',
        primary: '#F3F7F6',
        secondary: '#FFFFFF',
        accent: '#0D9488',
        sunrise: '#EA8C00',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'soft-pulse': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'soft-pulse': 'soft-pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
