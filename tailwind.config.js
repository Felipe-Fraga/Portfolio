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
        bgLight: '#EBF3E8',
        details: '#005B41',
        detLight: '#86A789',
      }
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
  darkMode: "class"
}