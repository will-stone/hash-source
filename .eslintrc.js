module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser to use TS.
  extends: [
    'eslint:recommended', // Standard eslint rules.
    'plugin:@typescript-eslint/recommended', // Allows for TypeScript-specific linting rules to run.
    'prettier/@typescript-eslint', // Disables ESLint rules that might conflict with prettier.
    'plugin:prettier/recommended', // Runs prettier as an ESLint rule.
  ],
  env: {
    // Global variables:
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true, // Allows "it", "describe" etc.
  },
  plugins: ['@typescript-eslint', 'jest'], // provides extra rules.
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features.
    sourceType: 'module', // Allows for the use of imports.
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        // Your Prettier rules
        proseWrap: 'always',
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 100,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off', // Allows functional components, should be fixed soon: https://github.com/typescript-eslint/typescript-eslint/issues/149
    '@typescript-eslint/explicit-member-accessibility': 'off', // Allows not having to set public/private on class properties.
    'no-var': 'error', // Must use const or let.
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    "@typescript-eslint/no-object-literal-type-assertion": "off" // Allows 'a' payload to be cast.
  },
}