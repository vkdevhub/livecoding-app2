module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'airbnb-base',
  ],
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'arrow-parens': 0,
    'comma-dangle': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': ['error', { 'argsIgnorePattern': 'next' }],
    'no-use-before-define': 0,
    'space-before-function-paren': 0,
    radix: 0,
  },
};
