/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter':["'Inter'",'sans-serif']
      },
      colors:{
        'custom1':'rgb(5, 2, 1)',
        'custom2':'rgb(5, 5, 5)'
      }
    },
  },
  plugins: [],
}
