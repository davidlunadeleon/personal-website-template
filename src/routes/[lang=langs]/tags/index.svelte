<script lang="ts">
	import { DataTable, Pagination, Link } from 'carbon-components-svelte';
	import { hrefConvert } from '$lib/routing';
	import { locale, t } from 'svelte-intl-precompile';
	import { tags } from '$lib/blog/blog';

	const numberOfTags = tags[$locale].size;
	let rows: { tag: string; posts: number; id: string }[] = [];
	$: {
		rows = [...tags[$locale].entries()].map(([tag, posts]) => {
			return { tag, posts: posts.length, id: tag };
		});
	}
	let pageSize = 10;
	let page = 1;
</script>

<h1>{$t('tags.tags')}</h1>
<p>{$t('tags.description')}</p>
<DataTable
	sortable
	title={$t('tags.tags')}
	headers={[
		{ key: 'tag', value: $t('tags.tags') },
		{ key: 'posts', value: $t('tags.posts') }
	]}
	{rows}
	{pageSize}
	{page}
>
	<svelte:fragment slot="cell" let:cell>
		{#if cell.key === 'tag'}
			<Link href={hrefConvert($locale, `/tags/${cell.value}`)}>{cell.value}</Link>
		{:else}
			{cell.value}
		{/if}
	</svelte:fragment>
</DataTable>
<Pagination bind:pageSize bind:page totalItems={numberOfTags} pageSizeInputDisabled />
