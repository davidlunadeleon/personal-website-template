<script lang="ts">
	import 'carbon-components-svelte/css/all.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import en from '$locales/en';
	import es from '$locales/es';
	import { addMessages, init } from 'svelte-intl-precompile';

	addMessages('en', en);
	addMessages('es', es);
	init({ initialLocale: 'en', fallbackLocale: 'en' });
</script>

<NavBar />
<slot />
