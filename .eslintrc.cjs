module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
