/// <reference types="vitest" />
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export const sharedConfigWithPlaywright = {
	plugins: [solidPlugin()],
	build: {
		target: 'esnext',
		polyfillDynamicImport: false,
	},
	define: {
		'import.meta.vitest': 'undefined',
	},
};

export const viteConfig = defineConfig({
	...sharedConfigWithPlaywright,
	root: process.env['VITEST'] === 'true' ? 'src' : 'dev',
	test: {
		passWithNoTests: true,
		root: 'src',
		include: [],
		includeSource: ['**/*.{tsx,ts}'],
		transformMode: {
			web: [/.[jt]sx?/],
		},
		deps: {
			inline: [/solid-js/],
		},
		watch: false,
	},
});
