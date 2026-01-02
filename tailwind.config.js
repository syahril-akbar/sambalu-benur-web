/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#075985', // Deep Ocean Blue
          light: '#0ea5e9',
          dark: '#0c4a6e',
        },
        secondary: {
          DEFAULT: '#10b981', // Fresh Emerald
          light: '#34d399',
          dark: '#059669',
        },
        accent: {
          DEFAULT: '#f59e0b', // Golden Sand
          light: '#fbbf24',
          dark: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}