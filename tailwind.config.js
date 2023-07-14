/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}
