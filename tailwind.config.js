/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'soft-teal': '#4ECDC4',
        'deep-teal': '#1A535C',
        'sunshine-yellow': '#FFE66D',
        'rose-pink': '#FF6B6B',
        'ivory-white': '#F7FFF7',
        'charcoal-gray': '#2F4550',
        'light-gray': '#E6EEEF',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        rounded: ['M PLUS Rounded 1c', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'wave': 'wave 15s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wave: {
          '0%': { transform: 'translateX(0) translateZ(0) scaleY(1)' },
          '50%': { transform: 'translateX(-25%) translateZ(0) scaleY(0.8)' },
          '100%': { transform: 'translateX(-50%) translateZ(0) scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
};