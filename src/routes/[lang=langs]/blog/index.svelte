<script lang="ts">
	import PostTile from '$lib/components/PostTile.svelte';
	import { posts } from '$lib/blog/blog';
	import { t } from 'svelte-intl-precompile';
</script>

<h1>{$t('blog.posts')}</h1>
{#each posts as post}
	<PostTile postMetadata={post.metadata} />
{/each}
