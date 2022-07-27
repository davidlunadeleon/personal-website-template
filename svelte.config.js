import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { optimizeImports, elements, icons } from 'carbon-preprocess-svelte';
import { mdsvex } from 'mdsvex';
import remarkFootnotes from 'remark-footnotes';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		optimizeImports(),
		elements(),
		icons(),
		mdsvex({
			layout: './src/lib/layouts/default.svelte',
			remarkPlugins: [remarkFootnotes]
		})
	],
	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
			onError: 'continue'
		}
	}
};

export default config;
