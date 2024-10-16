import globals from 'globals';
import pluginJs from '@eslint/js';
import sveltePlugin from 'eslint-plugin-svelte';

export default [
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error'
    }
  },

  {
    files: [
      '*.{js,jsx,tsx}'
    ]
  },

  {
    // The default patterns are ['**/node_modules/', '.git/'].
    ignores: [
      'dist'
    ],
  },

  {
    languageOptions: {
      // An object specifying additional objects that should be added to the global scope during linting.
      // globals: globals.browser,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
      // The type of JavaScript source code.
      // 'module' for ECMAScript modules (ESM).
      // default: 'module' for .js and .mjs files.
      sourceType: 'module',
      // The version of ECMAScript to support.
      // May be any year (i.e., 2022) or version (i.e., 5).
      ecmaVersion: 2022,
    },
  },

  pluginJs.configs.recommended,

  ...sveltePlugin.configs['flat/recommended'],
];