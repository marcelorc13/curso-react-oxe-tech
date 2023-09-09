/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      'titulo' : ['Prata', 'serif'],
      'corpo' : ['Montserrat', 'sans-serif']
    },
    extend: {
      colors : {
        'color-form' : '#F2F2F2',
        'color-btn' : '#6278F7',
      },
      backgroundImage: {
        'footer' : "url('/src/assets/bg-footer.png')"
      },
    },
  },
  plugins: [],
}

