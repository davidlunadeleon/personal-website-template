<script lang="ts">
	import { Link, Tag } from 'carbon-components-svelte';
	import { Calendar } from 'carbon-icons-svelte';
	import { locale, t } from 'svelte-intl-precompile';
	import { posts } from '$lib/blog/blog';
</script>

<h1>{$t('blog.posts')}</h1>
{#each posts as post}
	<hr />
	<h2>{post.metadata.title[$locale]}</h2>
	<hr />
	<p>
		<strong>
			<Calendar />
			{$t('blog.date')}
			{new Date(post.metadata.publishedDate).toLocaleDateString($locale)}.
			{#if post.metadata.publishedDate !== post.metadata.updatedDate}
				{$t('blog.editedDate')}
				{new Date(post.metadata.editedDate).toLocaleDateString($locale)}.
			{/if}
			{$t('blog.by')}
			<Link href={post.metadata.authorURL}>{post.metadata.author}</Link>
		</strong>
	</p>
	<p>{post.metadata.summary[$locale]}</p>
	<p><strong>{$t('blog.tags')} {post.metadata.tags[$locale]}</strong></p>
{/each}

<slot />
