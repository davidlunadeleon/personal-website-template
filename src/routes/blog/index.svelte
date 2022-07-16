<script lang="ts">
	import { Link, Button, ClickableTile } from 'carbon-components-svelte';
	import { Calendar, Tag } from 'carbon-icons-svelte';
	import { locale, t } from 'svelte-intl-precompile';
	import { posts } from '$lib/blog/blog';
</script>

<h1>{$t('blog.posts')}</h1>
{#each posts as post}
	<hr />
	<ClickableTile href={`/blog/${post.metadata.slug[$locale]}`}>
		<h2>{post.metadata.title[$locale]}</h2>
	</ClickableTile>
	<hr />
	<p>
		<strong>
			<Calendar />
			{$t('blog.date')}
			{new Date(post.metadata.publishedDate).toLocaleDateString($locale)}.
			{#if post.metadata.publishedDate !== post.metadata.editedDate}
				{$t('blog.editedDate')}
				{new Date(post.metadata.editedDate).toLocaleDateString($locale)}.
			{/if}
			{$t('blog.by')}
			<Link href={post.metadata.authorURL}>{post.metadata.author}</Link>
		</strong>
	</p>
	<p>{post.metadata.summary[$locale]}</p>
	<p>
		<strong>
			<div class="flex-container">
				<div>
					<Tag />
					{$t('blog.tags')}
				</div>
				{#each post.metadata.tags[$locale] as tag}
					<div class="buttonMargin">
						<Button href={`/tags/${tag}`} size="small">{tag}</Button>
					</div>
				{/each}
			</div>
		</strong>
	</p>
{/each}

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
