/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rgba' : 'linear-gradient(90deg, #7E90FE 0%, #9873FF 100%);',
        'background': 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%);',
        'categoryBackground' : 'linear-gradient(90deg, rgba(126, 144, 254, 0.1) 0%, rgba(152, 115, 255, 0.1) 100%);'
      },
      colors: {
        'rgba': 'rgba(126, 144, 254, 1)'
      }
    },
  },
  plugins: [],
}

