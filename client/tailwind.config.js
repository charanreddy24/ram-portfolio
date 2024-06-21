/** @type {import('tailwindcss').Config} */
const flowbite = require('flowbite-react/tailwind');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    screens: {
      sm: '853px', // Small screens (mobile)
      md: '1024px', // Medium screens (tablets)
      lg: '1366px', // Large screens (laptops and desktops)
    },
    extend: {
      colors: {
        blueToGreenStart: '#3b82f6',
        blueToGreenEnd: '#10b981',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
