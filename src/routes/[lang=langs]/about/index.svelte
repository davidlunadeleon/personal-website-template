<script lang="ts" context="module">
	import type { LoadEvent, LoadOutput } from '@sveltejs/kit';
	import { pages } from '$lib/about';

	export function load({ params }: LoadEvent): LoadOutput {
		const { lang } = params;

		return {
			props: {
				page: pages[lang]
			}
		};
	}
</script>

<script lang="ts">
	import PostTile from '$lib/components/PostTile.svelte';
	import type { BlogPost } from '$lib/types/BlogPosts';

	export let page: BlogPost;

	let title: string;
	$: title = page.metadata.title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<PostTile post={page.metadata} isInList={false} />
<svelte:component this={page.default} />
