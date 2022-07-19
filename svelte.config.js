import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { optimizeImports } from 'carbon-preprocess-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		optimizeImports(),
		mdsvex({
			layout: './src/lib/layouts/default.svelte'
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
