/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        rosarivo: ['"Rosarivo"', 'serif'],
      },
      colors: {
        bg: '#0F0F0F',
        bgLight: '#FAF0E6',
        details: '#005B41',
        detLight: '#352F44'
      }
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
  darkMode: "class"
}