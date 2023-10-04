/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      boxShadow: {
        'intense': '5px 5px 0px 0 rgba(0, 0, 0, .7)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

