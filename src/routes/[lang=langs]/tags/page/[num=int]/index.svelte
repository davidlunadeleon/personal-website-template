<script lang="ts">
	import { DataTable, Pagination, Link, Button } from 'carbon-components-svelte';
	import { ArrowLeft, ArrowRight } from 'carbon-icons-svelte';
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
		return hrefConvert($locale, url);
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
	on:click:button--next={() => goto(paginate(true))}
	on:click:button--previous={() => goto(paginate(false))}
/>
<noscript class="flex-container">
	<div class="buttonMargin">
		{#if currPage > 0}
			<Button icon={ArrowLeft} href={paginate(false)} iconDescription={$t('pagination.previous')} />
		{:else}
			<Button
				icon={ArrowLeft}
				href={paginate(false)}
				iconDescription={$t('pagination.previous')}
				disabled
			/>
		{/if}
	</div>
	<div class="buttonMargin">
		{#if currPage < Math.floor(numTags / pageSize) - 1}
			<Button icon={ArrowRight} href={paginate(true)} iconDescription={$t('pagination.next')} />
		{:else}
			<Button
				icon={ArrowRight}
				href={paginate(true)}
				iconDescription={$t('pagination.next')}
				disabled
			/>
		{/if}
	</div>
</noscript>

<style>
	.flex-container {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		align-content: space-between;
	}

	.buttonMargin {
		margin: 0.25em 0.25em;
	}
</style>
