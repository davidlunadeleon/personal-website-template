<script lang="ts">
	import type PostMetadata from '$lib/types/PostMetadata';
	import { Calendar, Tag } from 'carbon-icons-svelte';
	import { Link, Button, ClickableTile } from 'carbon-components-svelte';
	import { hrefConvert } from '$lib/routing';
	import { locale, t } from 'svelte-intl-precompile';

	export let post: PostMetadata;
</script>

<hr />
<ClickableTile href={hrefConvert($locale, `/blog/${post.slug}`)}>
	<h2>{post.title}</h2>
</ClickableTile>
<hr />
{#if post.publishDate}
	<p>
		<strong>
			<Calendar />
			{$t('blog.date')}
			{new Date(post.publishDate).toLocaleDateString($locale)}.
			{#if post.editDate && post.publishDate !== post.editDate}
				{$t('blog.editedDate')}
				{new Date(post.editDate).toLocaleDateString($locale)}.
			{/if}
			{$t('blog.by')}
			{#if post.author}
				{#if post.authorURL}
					<Link href={hrefConvert($locale, post.authorURL)}>{post.author}</Link>
				{:else}
					<Link>{post.author}</Link>
				{/if}
			{/if}
		</strong>
	</p>
{/if}
<p>{post.summary}</p>
<p>
	<strong>
		<div class="flex-container">
			<div>
				<Tag />
				{$t('blog.tags')}
			</div>
			{#each post.tags as tag}
				<div class="buttonMargin">
					<Button href={hrefConvert($locale, `/tags/${tag}/page/0`)} size="small">{tag}</Button>
				</div>
			{/each}
		</div>
	</strong>
</p>

<style>
	.flex-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		align-content: space-between;
	}

	.buttonMargin {
		margin: 0.25em 0.25em;
	}
</style>
