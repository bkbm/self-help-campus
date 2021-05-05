const colors = require('tailwindcss/colors');
module.exports = {
    purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.vue'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
        },
        colors: {
            companyMain: {
                light: '#ff475e',
                DEFAULT: '#ff2659',
                dark: '#e61747',
            },
            gray: colors.coolGray,
            white: colors.white,
            black: colors.black,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
