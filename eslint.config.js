import eslintPluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'reports/**',
      'allure-results/',
      'test-results/',
      'accessibility-report/',
      '.env',
      'package-lock.json',
    ],
    files: ['src/**/*.ts'], // Specify the files to lint
    languageOptions: {
      parser: typescriptEslintParser,
    },
    plugins: {
      prettier: eslintPluginPrettier,
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules: {
      'prettier/prettier': 'warn',
    },
  },
];
