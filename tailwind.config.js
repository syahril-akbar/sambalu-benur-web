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
          light: '#0c4a6e',
          dark: '#082f49',
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
    },
  },
  plugins: [],
}
