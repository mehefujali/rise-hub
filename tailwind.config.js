/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
// import daisyui from 'daisyui'
export default {
  darkMode: 'class', 
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      
    },
    fontFamily:{
      poppins:"Poppins, sans-serif"
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], 
  },
 
}

