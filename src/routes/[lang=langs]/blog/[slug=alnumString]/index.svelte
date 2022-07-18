<script lang="ts" context="module">
	import type { LoadEvent, LoadOutput } from '@sveltejs/kit';
	import { posts } from '$lib/blog';

	export function load({ params }: LoadEvent): LoadOutput {
		const { lang, slug } = params;

		if (posts[lang].has(slug)) {
			const post = posts[lang].get(slug);
			return {
				props: {
					post
				}
			};
		} else {
			return {
				status: 404
			};
		}
	}
</script>

<script lang="ts">
	import PostTile from '$lib/components/PostTile.svelte';
	import type { BlogPost } from '$lib/types/BlogPosts';

	export let post: BlogPost;
</script>

<PostTile post={post.metadata} isInList={false} />
<svelte:component this={post.default} />
