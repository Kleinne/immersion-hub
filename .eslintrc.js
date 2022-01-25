module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'airbnb-typescript',
    'vue-global-api',
    'plugin:prettier/recommended',
    '@vue/typescript',
    '@vue/typescript/recommended',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': ['error', 'ignorePackages'],
    'no-unused-vars': 'warn',
    // '@typescript-eslint/no-this-alias': ['off'],
  },
};
