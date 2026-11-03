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
        sans: ['var(--font-jakarta)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['var(--font-syne)', 'var(--font-jakarta)', 'sans-serif'],
      },
      colors: {
        // Pulled from Wordle Finder logo: violet board + teal/amber tiles
        brand: {
          DEFAULT: '#F6F3FF',
          soft: '#FFFFFF',
          deep: '#EDE7FF',
          glow: '#7C3AED',
        },
        mist: '#E4DCF7',
        blush: '#F6F3FF',
        ink: '#1B1640',
        pink: {
          DEFAULT: '#7C3AED',
          soft: '#A78BFA',
          deep: '#5B21B6',
        },
        coral: {
          DEFAULT: '#F59E0B',
          deep: '#D97706',
        },
        violet: {
          DEFAULT: '#7C3AED',
          soft: '#A78BFA',
          deep: '#5B21B6',
        },
        orange: {
          DEFAULT: '#F59E0B',
          soft: '#FBBF24',
          deep: '#D97706',
        },
        emerald: {
          DEFAULT: '#6AAA64',
          soft: '#538D4E',
          deep: '#3A6B36',
        },
        lilac: '#C4B5FD',
        // Primary action color mapped to brand violet (used site-wide as teal-*)
        teal: {
          DEFAULT: '#7C3AED',
          deep: '#5B21B6',
        },
        sky: '#14B8A6',
        gold: '#F59E0B',
        primary: '#F6F3FF',
        secondary: '#FFFFFF',
        accent: '#7C3AED',
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
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
