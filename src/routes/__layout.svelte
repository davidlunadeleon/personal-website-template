<script lang="ts" context="module">
	import { addMessages, init } from 'svelte-intl-precompile';
	import en from '$locales/en';
	import es from '$locales/es';

	addMessages('en', en);
	addMessages('es', es);
	init({ initialLocale: 'en', fallbackLocale: 'en' });
</script>

<slot />
