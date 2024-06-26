/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          700: "#146eb4",
          900: "#0e4f82"
        },
        gray:{
          700: "#4d4d4d"
        }
      }
    },
  },
  plugins: [],
}

