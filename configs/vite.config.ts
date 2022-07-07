/// <reference types="vitest" />
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import checker from 'vite-plugin-checker';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export const sharedConfigWithPlaywright = {
	plugins: [
		solidPlugin(),
		checker({
			typescript: { tsconfigPath: '../../tsconfig.json' },
			eslint: { lintCommand: 'eslint "../**/*.{ts,tsx}"' },
		}),
		vanillaExtractPlugin(),
	],
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
