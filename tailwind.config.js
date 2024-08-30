/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#FFFFFF',
                secondary: '#68778D',
                tBase: ' #1F314F',
                bgPrimary: '#D5E1EF',
            },
            fontFamily: {
                outfit: ['Outfit', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
