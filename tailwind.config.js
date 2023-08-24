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

        'color-bg-programacao' : '#D9F7E9',
        'color-programacao' : '#57C278',

        'color-bg-front-end' : '#E8F8FF',
        'color-front-end' : '#82CFFA',

        'color-bg-data-science' : '#F0F8E2',
        'color-data-science' : '#A6D157',

        'color-bg-devops' : '#FDE7E8',
        'color-devops' : '#E06B69',

        'color-bg-ux-design' : '#FAE9F5',
        'color-ux-design' : '#DB6EBF',

        'color-bg-mobile' : '#FFF5D9',
        'color-mobile' : '#FFBA05',

        'color-bg-inovacao-gesta' : '#FFEEDF',
        'color-inovacao-gesta' : '#FF8A29',
      },
    },
  },
  plugins: [],
}

