<script lang="ts">
	import PostListPagination from '$lib/components/PostListPagination.svelte';
	import PostTile from '$lib/components/PostTile.svelte';
	import type PostMetadata from '$lib/types/PostMetadata';
	import { t } from 'svelte-intl-precompile';

	export let numPages: number;
	export let posts: PostMetadata[];

	let title: string;
	$: title = $t('blog.posts');
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>
{#each posts as post}
	<PostTile {post} isInList={true} />
{/each}
<PostListPagination {numPages} resource="blog" />
