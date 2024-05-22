/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },

      height: {
        'card': '527px',
      },
      colors: {
        'title': '#181833',
        'text': '#2D2D2D',
      },
      width: {
        'card': '424px',
      },
    },
  },
  plugins: [],
}
