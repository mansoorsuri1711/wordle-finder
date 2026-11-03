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
        display: ['var(--font-sora)', 'var(--font-outfit)', 'sans-serif'],
      },
      colors: {
        // Light theme + indigo/green brand from logo
        brand: {
          DEFAULT: '#F6F6FF',
          soft: '#FFFFFF',
          deep: '#EEF2FF',
          glow: '#6366F1',
        },
        mist: '#E8EAF8',
        blush: '#F6F6FF',
        ink: '#12122B',
        pink: {
          DEFAULT: '#6366F1',
          soft: '#818CF8',
          deep: '#4F46E5',
        },
        coral: {
          DEFAULT: '#F59E0B',
          deep: '#D97706',
        },
        violet: {
          DEFAULT: '#6366F1',
          soft: '#4F46E5',
          deep: '#4338CA',
        },
        orange: {
          DEFAULT: '#F59E0B',
          soft: '#D97706',
          deep: '#B45309',
        },
        emerald: {
          DEFAULT: '#16A34A',
          soft: '#15803D',
          deep: '#166534',
        },
        lilac: '#818CF8',
        teal: {
          DEFAULT: '#16A34A',
          deep: '#15803D',
        },
        sky: '#818CF8',
        gold: '#D97706',
        primary: '#F6F6FF',
        secondary: '#FFFFFF',
        accent: '#6366F1',
        sunrise: '#F59E0B',
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
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
    },
  },
  plugins: [],
}
