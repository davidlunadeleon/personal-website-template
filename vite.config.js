import { sveltekit } from '@sveltejs/kit/vite';
import precompileIntl from 'svelte-intl-precompile/sveltekit-plugin';
import { optimizeCss } from 'carbon-preprocess-svelte';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		precompileIntl('locales'),
		process.env.NODE_ENV === 'production' && optimizeCss()
	]
};

export default config;
