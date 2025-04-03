import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astroPlugin from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';

export default [
  // Base configurations
  js.configs.recommended,
  ...astroPlugin.configs.recommended,
  ...tseslint.configs.recommended,

  // Global ignores
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  // Astro files configuration
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      // Custom rules for .astro files (migrated from previous config)
    },
  },

  // TypeScript files configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
    },
    rules: {
      // Custom rules for TypeScript files (migrated from previous config)
    },
  },
];
