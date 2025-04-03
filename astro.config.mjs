// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bitgeese.io',
  vite: {
    plugins: [tailwindcss()],
  },

  // Add image configuration to allow remote image optimization
  image: {
    domains: ['source.unsplash.com', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
    ],
  },

  integrations: [mdx(), sitemap()],
});
