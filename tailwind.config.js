/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#17696A',
        modal: 'rgba(0,0,0, 0.5)'
      },
      screens: {
        'vsm': '400px',
      }
    },
  },
  plugins: [],
}