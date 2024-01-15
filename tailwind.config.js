/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'madera-regular': ['"madera-regular", "sans-serif"'],
        'madera-bold': ['"madera-bold", "sans-serif"'],
      },
      colors: {
        primary: '#713434',
      },
    },
  },
  plugins: [],
};
