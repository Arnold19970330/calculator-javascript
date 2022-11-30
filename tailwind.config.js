/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      fontFamily: {
        Prospect: ['ProspectModernW00-Reg', 'sans-serif'],
        Montserrat: ['Montserrat','sans-serif']
      },
      backgroundImage: {
        'Numbers': ["url('/src/background.webp')"]
      }
    },
  },
  plugins: [],
}
