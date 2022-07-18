<script lang="ts">
	import { t } from 'svelte-intl-precompile';

	let title: string;
	$: title = $t('navBar.home');
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
