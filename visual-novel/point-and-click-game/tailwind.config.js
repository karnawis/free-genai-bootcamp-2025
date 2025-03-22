/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clockpax-dark': '#fefbe9',
          primary: '#0f1115',
          dark: '#000000',
          light: '#fefbe9',
          completed: '#cf375c',
      },
      theme: {
        extend: {
          fontFamily: {
            sans: ['facade-quest', 'sans-serif'],
          },
        }
      }
    },
  },
  plugins: [],
}

