<script lang="ts">
	import PostTile from '$lib/components/PostTile.svelte';
	import type PostMetadata from '$lib/types/PostMetadata';
	import { t } from 'svelte-intl-precompile';

	export let posts: PostMetadata[];
</script>

<h1>{$t('blog.posts')}</h1>
{#each posts as post}
	<PostTile postMetadata={post} />
{/each}
