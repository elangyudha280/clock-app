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
        'custom1':'#050201',
        'custom2':'#050505'
      }
    },
  },
  plugins: [],
}
