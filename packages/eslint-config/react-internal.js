const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')
const { prettierConfig } = require('@myshop/eslint-config/prettierConfig')

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'eslint-config-turbo',
  ],
  plugins: ['eslint-plugin-prettier'],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    '*.js',
    'node_modules/',
    'dist/',
  ],
  overrides: [
    // Force ESLint to detect .tsx files
    { files: ['*.js?(x)', '*.ts?(x)'] },
  ],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
}
