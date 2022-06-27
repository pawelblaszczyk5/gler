/// <reference types="vitest" />
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export const viteConfig = defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
  test: {
    passWithNoTests: true,
    root: 'src',
    includeSource: ['**/*.{tsx,ts}'],
  },
});
