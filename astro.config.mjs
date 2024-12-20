// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	base: '/',
	integrations: [
		mdx({
			syntaxHighlight: 'prism',
			drafts: true,
		}),
		sitemap(),
		tailwind(),
	],
	output: 'static',
	trailingSlash: 'always',
	build: {
		format: 'directory'
	},
	collections: {
		portfolio: {
			source: 'src/content/portfolio',
		},
	},
});