// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://srigaurangasamaj108-svg.github.io',
  base: '/vedic-site',

  markdown: {
    syntaxHighlight: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});