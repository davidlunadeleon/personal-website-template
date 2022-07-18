<script lang="ts">
	import { DataTable, Pagination, Link, Button } from 'carbon-components-svelte';
	import { ArrowLeft, ArrowRight } from 'carbon-icons-svelte';
	import { goto } from '$app/navigation';
	import { hrefConvert } from '$lib/routing';
	import { locale, t } from 'svelte-intl-precompile';
	import { page } from '$app/stores';

	export let numPages: number;
	export let numTags: number;
	export let pageSize: number;
	export let tags: { tag: string; numPosts: number; id: string }[];

	let currPage: number;
	let reportedPage: number;
	$: {
		currPage = parseInt($page.params.num, 10);
		reportedPage = currPage + 1;
	}

	function paginate(isForward: boolean) {
		const url = `/tags/page/${isForward ? currPage + 1 : currPage - 1}`;
		return hrefConvert($locale, url);
	}

	let title: string;
	$: title = $t('tags.tags');
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>
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
			<Link href={hrefConvert($locale, `/tags/${cell.value}/page/0`)}>{cell.value}</Link>
		{:else}
			{cell.value}
		{/if}
	</svelte:fragment>
</DataTable>
<Pagination
	backwardText={$t('pagination.previous')}
	bind:page={reportedPage}
	bind:pageSize
	forwardText={$t('pagination.next')}
	on:click:button--next={() => goto(paginate(true))}
	on:click:button--previous={() => goto(paginate(false))}
	pageInputDisabled
	pageSizeInputDisabled
	totalItems={numTags}
/>
<noscript class="flex-container">
	<div class="buttonMargin">
		{#if currPage > 0}
			<Button icon={ArrowLeft} href={paginate(false)} iconDescription={$t('pagination.previous')} />
		{:else}
			<Button icon={ArrowLeft} iconDescription={$t('pagination.previous')} disabled />
		{/if}
	</div>
	<div class="buttonMargin">
		{#if reportedPage < numPages}
			<Button icon={ArrowRight} href={paginate(true)} iconDescription={$t('pagination.next')} />
		{:else}
			<Button icon={ArrowRight} iconDescription={$t('pagination.next')} disabled />
		{/if}
	</div>
</noscript>

<style>
	.flex-container {
		width: 100%;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: center;
		align-content: space-between;
	}

	.buttonMargin {
		margin: 0.25em;
	}
</style>
