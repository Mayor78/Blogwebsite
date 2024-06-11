/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#6f6af8',
        'primary-light': '#000000',
        'primary-dark': '#000000',
        'secondary': '#000000',
        'white-50': 'rgba(255, 255, 255, 0.5)', // Custom semi-transparent color
      },
      spacing: {
        'section-margin-top': '6rem', // Custom margin for sections
      },
    },
  },
  plugins: [],
}
