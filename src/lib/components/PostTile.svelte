<script lang="ts">
	import type PostMetadata from '$lib/types/PostMetadata';
	import { Calendar, Tag } from 'carbon-icons-svelte';
	import { Link, Button, ClickableTile } from 'carbon-components-svelte';
	import { hrefConvert } from '$lib/routing';
	import { locale, t } from 'svelte-intl-precompile';

	export let postMetadata: PostMetadata;
</script>

<hr />
<ClickableTile href={hrefConvert($locale, `/blog/${postMetadata.slug[$locale]}`)}>
	<h2>{postMetadata.title[$locale]}</h2>
</ClickableTile>
<hr />
<p>
	<strong>
		<Calendar />
		{$t('blog.date')}
		{new Date(postMetadata.publishedDate).toLocaleDateString($locale)}.
		{#if postMetadata.publishedDate !== postMetadata.editedDate}
			{$t('blog.editedDate')}
			{new Date(postMetadata.editedDate).toLocaleDateString($locale)}.
		{/if}
		{$t('blog.by')}
		<Link href={hrefConvert($locale, postMetadata.authorURL)}>{postMetadata.author}</Link>
	</strong>
</p>
<p>{postMetadata.summary[$locale]}</p>
<p>
	<strong>
		<div class="flex-container">
			<div>
				<Tag />
				{$t('blog.tags')}
			</div>
			{#each postMetadata.tags[$locale] as tag}
				<div class="buttonMargin">
					<Button href={hrefConvert($locale, `/tags/${tag}`)} size="small">{tag}</Button>
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
