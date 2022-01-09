module.exports = {
  content: [
    './app_client/components/**/*.vue',
    './app_client/pages/**/*.vue',
    './app_client/layouts/**/*.vue',
    './app_client/features/**/*.js',
  ],
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
      screens: {
        desktop: '1920px',
      },
    },
  },
};
