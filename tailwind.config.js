module.exports = {
  mode: 'jit',
  purge: ['./app_client/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#9df9ef',
        },
        secondary: {
          500: '#ffa8b6',
        },
        blue: {
          500: '#51e2f5',
        },
        sand: {
          500: '#edf7f6',
        },
        brown: {
          500: '#a28089',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
