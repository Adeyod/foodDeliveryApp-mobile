/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6F61',
        secondary: '#0C513F',
        // secondary: '#1CA6A6',
      },
    },
  },
  plugins: [],
};
