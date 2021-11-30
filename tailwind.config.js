module.exports = {
  mode: 'jit',
  purge: ['./app_client/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#c8d8c4',
          400: '#bacdb5',
          500: '#acc3a6',
        },
        peach: {
          300: '#fbf0e7',
          500: '#f5d6ba',
        },
        ired: {
          500: '#db5461',
        },
        jet: {
          500: '#363537',
        },
        eggplant: {
          500: '#563440',
        },
        violet: {
          500: '#4200ff',
        },
      },
      boxShadow: {
        'input-idle': '0px 0px 4px rgba(120, 120, 120, 0.4)',
        'input-hover': '0px 0px 4px #4200ff',
        'input-focus': '0px 0px 4px rgba(66, 0, 255, 0.4)',
        idle: '0px 0px 10px rgba(0, 0, 0, 0.15)',
        hover: '0px 0px 10px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// --opb-theme-shadow-input-idle: 0px 0px 4px rgba(120, 120, 120, 0.4);
// --opb-theme-shadow-input-hover: 0px 0px 4px #4200ff;
// --opb-theme-shadow-input-focus: 0px 0px 4px rgba(66, 0, 255, 0.4);
// --opb-theme-shadow-input-error: 0px 0px 4px rgba(255, 56, 80, 0.4);
// --opb-theme-shadow-sm-idle: 0px 0px 5px rgba(0, 0, 0, 0.4);
// --opb-theme-shadow-sm-hover: 0px 0px 5px rgba(66, 0, 255, 0.4);
// --opb-theme-shadow-idle: 0px 0px 10px rgba(0, 0, 0, 0.15);
// --opb-theme-shadow-hover: 0px 0px 10px rgba(66, 0, 255, 0.4);
// --opb-theme-shadow-btn-idle: 0px 0px 10px rgba(0, 0, 0, 0.05);
// --opb-theme-shadow-btn-hover: 0px 0px 10px rgba(0, 0, 0, 0.4);
