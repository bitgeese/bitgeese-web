module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
  ],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Enable Astro parser
      parser: 'astro-eslint-parser',
      // Allows Astro components to be formatted properly
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // Your custom rules for .astro files
      },
    },
    {
      // Define the configuration for TypeScript files
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        // Your custom rules for TypeScript files
      },
    },
  ],
}; 