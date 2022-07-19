<script lang="ts">
	import PostTile from '$lib/components/PostTile.svelte';
	import type PostMetadata from '$lib/types/PostMetadata';
	import { t } from 'svelte-intl-precompile';

	export let posts: PostMetadata[];

	let title: string;
	$: title = $t('navBar.home');
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{$t('home.latestPosts')}</h1>
{#each posts as post}
	<PostTile {post} isInList={true} />
{/each}
