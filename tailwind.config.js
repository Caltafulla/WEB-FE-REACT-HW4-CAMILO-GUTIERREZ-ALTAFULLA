/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hfcolor': '#474747',
        'txtcolor': '#f4f4f4'
      },
      fontFamily: { 
        "Montserrat": ['Montserrat'] 
    }
    },
  },
  plugins: [],
}

