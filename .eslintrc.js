module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'prettier',
    'vue-global-api',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {},
};
