/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
// import daisyui from 'daisyui'
export default {
  darkMode: 'class', // ডার্ক মোড সক্রিয়
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // DaisyUI এর থিম
  },
 
}

