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
                dark: '#cc005b',
            },
            gray: colors.coolGray,
            white: colors.white,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
