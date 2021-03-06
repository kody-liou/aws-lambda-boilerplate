const env = {
  es2021: true,
  node: true,
};

const rules = {
  'import/prefer-default-export': 'off',
  'no-continue': 'off',
  'no-underscore-dangle': [
    'error',
    {
      allowAfterThis: true,
    },
  ],
  'no-console': 'off',
  'no-restricted-syntax': [
    'error',
    'ForInStatement',
    'LabeledStatement',
    'WithStatement',
  ],
  'import/extensions': [
    'error',
    {
      ts: 'never',
    },
  ],
  'linebreak-style': 0,
  'import/no-unresolved': 'error',
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
      singleQuote: true,
      trailingComma: 'all',
      arrowParens: 'avoid',
      printWidth: 80,
      bracketSpacing: true,
      jsxBracketSameLine: true,
    },
    {
      usePrettierrc: false,
    },
  ],
};

const parserOptions = {
  ecmaVersion: 12,
  sourceType: 'module',
};

module.exports = {
  env,
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions,
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    ...rules,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  overrides: [
    {
      files: ['*.js'],
      env,
      extends: ['airbnb-base'],
      parserOptions,
      rules,
    },
  ],
};
