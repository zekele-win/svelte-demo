import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import sveltePlugin from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import babelParser from '@babel/eslint-parser';

export default [
  { files: ["src/*.{js,mjs,cjs,ts}"] },
  { ignores: ["dist", "node_modules"] },
  { languageOptions: { globals: globals.browser } },

  pluginJs.configs.recommended,

  ...tseslint.configs.recommended,

  ...sveltePlugin.configs["flat/recommended"],

  {
    files: ["src/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: {
          ts: "@typescript-eslint/parser",
        },
        extraFileExtensions: [".svelte"],
      },
    }
  },

  {
    files: ["src/*.js", "**/*.mjs"],
    languageOptions: {
      parser: babelParser,
    }
  },

  {
    rules: {
        "no-unused-vars": "error",
        "no-undef": "error"
    }
  },  
];
