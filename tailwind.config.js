/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgcolor: '#1d2b2b',
      },
      fontFamily:{
        font1: ["Bebas Neue", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

