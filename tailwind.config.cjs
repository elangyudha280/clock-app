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
        'custom2':'rgb(5, 5, 5)',
        'circle-btn-more':'hsl(0, 0%, 19%)'
      },
      screens:{
        'xs':'520px'
      },
      animation:{
        'rotate': 'Rotate 0.3s linear forwards',
        'show':'show 0.8s linear forwards'
      },
      keyframes:{
        Rotate:{
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        show:{
          '0%':{opacity:'0'},
          '100%':{opacity:'1'}
        }
      }
    },
  },
  plugins: [],
}
