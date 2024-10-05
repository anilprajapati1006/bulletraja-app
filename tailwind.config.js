// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'app-black': '#141718',
        'app-gray': '#6C7275',
        'app-light-gray': '#E8ECEF',
        'app-green': '#38CB89'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};