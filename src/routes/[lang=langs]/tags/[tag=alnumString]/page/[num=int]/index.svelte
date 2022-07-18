<script lang="ts">
	import PostListPagination from '$lib/components/PostListPagination.svelte';
	import PostTile from '$lib/components/PostTile.svelte';
	import type PostMetadata from '$lib/types/PostMetadata';
	import { t } from 'svelte-intl-precompile';
	import { page } from '$app/stores';

	export let numPages: number;
	export let posts: PostMetadata[];

	let title: string;
	$: title = `${$t('tags.tags', { values: { num: 1 } })}: ${$page.params.tag}`;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>
{#each posts as post}
	<PostTile {post} isInList={true} />
{/each}
<PostListPagination {numPages} resource="tags" />
