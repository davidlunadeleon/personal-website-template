<script lang="ts" context="module">
	import type { LoadEvent, LoadOutput } from '@sveltejs/kit';

	export function load({ status }: LoadEvent): LoadOutput {
		return {
			props: {
				status
			}
		};
	}
</script>

<script lang="ts">
	import { t } from 'svelte-intl-precompile';

	export let status: number | null;
</script>

{#if status === 404}
	<h1>{$t('error.404')}</h1>
	<p>{$t('tags.tagNotFound')}</p>
{:else}
	<h1>{$t('error.unknown')}</h1>
{/if}
