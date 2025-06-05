import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alrubinger.github.io',
  base: '/mic-check',
  output: 'static',
  outDir: './dist',
});