<script lang="ts">
	import { DataTable, Pagination, Link } from 'carbon-components-svelte';
	import { goto } from '$app/navigation';
	import { hrefConvert } from '$lib/routing';
	import { locale, t } from 'svelte-intl-precompile';
	import { page } from '$app/stores';

	export let numTags: number;
	export let pageSize: number;
	export let tags: { tag: string; numPosts: number; id: string }[];

	let currPage: number;
	let reportedPage: number;
	$: {
		currPage = Math.max(parseInt($page.params.num, 10) || 0);
		reportedPage = currPage + 1;
	}

	function paginate(isForward: boolean) {
		const url = `/tags/page/${isForward ? currPage + 1 : currPage - 1}`;
		goto(hrefConvert($locale, url));
	}
</script>

<h1>{$t('tags.tags')}</h1>
<p>{$t('tags.description')}</p>
<DataTable
	title={$t('tags.tags')}
	headers={[
		{ key: 'tag', value: $t('tags.tags') },
		{ key: 'numPosts', value: $t('tags.posts') }
	]}
	rows={tags}
	{pageSize}
	page={1}
>
	<svelte:fragment slot="cell" let:cell>
		{#if cell.key === 'tag'}
			<Link href={hrefConvert($locale, `/tags/${cell.value}`)}>{cell.value}</Link>
		{:else}
			{cell.value}
		{/if}
	</svelte:fragment>
</DataTable>
<Pagination
	bind:pageSize
	bind:page={reportedPage}
	totalItems={numTags}
	pageSizeInputDisabled
	on:click:button--next={() => paginate(true)}
	on:click:button--previous={() => paginate(false)}
/>
