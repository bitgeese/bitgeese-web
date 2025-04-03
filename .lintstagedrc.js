export default {
  // Lint astro, ts, tsx files
  '**/*.{astro,ts,tsx}': ['eslint --fix'],

  // Format various file types
  '**/*.{astro,ts,tsx,js,jsx,json,md,mdx,css}': ['prettier --write'],
};
