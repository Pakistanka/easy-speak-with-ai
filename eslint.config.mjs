import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig, globalIgnores } from 'eslint/config';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import _import from 'eslint-plugin-import';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores(['**/node_modules', '**/coverage', '**/build']),
  {
    extends: fixupConfigRules(
      compat.extends(
        'airbnb',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:@next/next/recommended',
        'prettier',
        'plugin:prettier/recommended'
      )
    ),

    plugins: {
      import: fixupPluginRules(_import),
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      'simple-import-sort': simpleImportSort,
      prettier: fixupPluginRules(prettier),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      'import/resolver': {
        typescript: {
          project: '.',
        },
      },

      react: {
        version: 'detect',
      },
    },

    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],

      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'consistent-return': 'error',
      'import/extensions': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/require-default-props': 'off',

      'import/order': [
        'warn',
        {
          'newlines-between': 'always',

          pathGroups: [
            {
              group: 'external',
              pattern: '@/**',
              position: 'after',
            },
          ],
        },
      ],

      'import/prefer-default-export': 'off',

      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          aspects: ['invalidHref', 'preferButton'],
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
        },
      ],

      'jsx-a11y/label-has-associated-control': 'off',
      'no-console': 'warn',
      'no-underscore-dangle': 'off',
      'no-use-before-define': 'error',

      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.ts', '.tsx'],
        },
      ],

      'react/jsx-props-no-spreading': [
        'error',
        {
          custom: 'ignore',
        },
      ],

      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'sort-keys': 'off',
      'no-unused-vars': 'error',

      'react/function-component-definition': [
        2,
        {
          namedComponents: ['arrow-function', 'function-declaration'],
          unnamedComponents: 'arrow-function',
        },
      ],

      camelcase: [
        'error',
        {
          properties: 'never',
          ignoreDestructuring: true,
          allow: ['^UNSAFE_'],
        },
      ],
    },
  },
]);
