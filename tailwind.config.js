/** @type {import('tailwindcss').Config} */

const { heroui } = require('@heroui/react');

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Monomakh', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#03045e',
              foreground: '#ffffff',
            },
            focus: '#03045e',
          },
        },
      },
    }),
  ],
};
