module.exports = {
  env: {
    node: true,
  },

  extends: ['eslint:recommended', 'prettier', 'plugin:@typescript-eslint/recommended'],

  plugins: ['prettier', '@typescript-eslint'],

  ignorePatterns: [
    // don't ignore dot files so config files get linted
    '!.*.js',
    '!.*.cjs',
    '!.*.mjs',

    // take the place of `.eslintignore`
    'dist/',
    'generated/',
    'node_modules/',
  ],

  // this is a hack to make sure eslint will look at all of the file extensions we
  // care about without having to put it on the command line
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs', '**/*.ts', '**/*.tsx'],
    },
  ],

  parser: '@typescript-eslint/parser',

  rules: {
    'prettier/prettier': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/prefer-as-const': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
