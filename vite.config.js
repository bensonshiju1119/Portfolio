import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/Portfolio/' : '/',
  publicDir: 'public',
  build: { outDir: 'dist', emptyOutDir: true },
});
