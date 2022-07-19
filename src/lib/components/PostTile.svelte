<script lang="ts">
	import type PostMetadata from '$lib/types/PostMetadata';
	import { Calendar, Tag } from 'carbon-icons-svelte';
	import { Link, Button, ClickableTile, Tile } from 'carbon-components-svelte';
	import { hrefConvert } from '$lib/routing';
	import { locale, t } from 'svelte-intl-precompile';
	import { posts } from '$lib/blog';

	export let post: PostMetadata;
	export let isInList: boolean;
</script>

<hr />
{#if isInList}
	<ClickableTile href={hrefConvert($locale, `/blog/${post.slug}`)}>
		<h2>{post.title}</h2>
	</ClickableTile>
{:else}
	<Tile>
		<h1>{post.title}</h1>
	</Tile>
{/if}
<hr />

<p>
	<strong>
		{#if post.publishDate}
			<Calendar />
			{$t('blog.date')}
			{new Date(post.publishDate).toLocaleDateString($locale)}.
			{#if post.editDate && post.publishDate !== post.editDate}
				{$t('blog.editedDate')}
				{new Date(post.editDate).toLocaleDateString($locale)}.
			{/if}
		{/if}
		{#if post.author}
			{$t('blog.by')}
			{#if post.authorURL}
				<Link href={hrefConvert($locale, post.authorURL)}>{post.author}</Link>
			{:else}
				<Link>{post.author}</Link>
			{/if}
		{/if}
	</strong>
</p>
{#if isInList}
	<p>{post.summary}</p>
{/if}
{#if post.tags}
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
{/if}
{#if !isInList}
	<hr />
{/if}

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
