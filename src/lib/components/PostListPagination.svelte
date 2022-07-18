<script lang="ts">
	import { ArrowLeft, ArrowRight } from 'carbon-icons-svelte';
	import { PaginationNav, Button } from 'carbon-components-svelte';
	import { goto } from '$app/navigation';
	import { hrefConvert } from '$lib/routing';
	import { page } from '$app/stores';
	import { t, locale } from 'svelte-intl-precompile';

	export let numPages: number;
	export let resource: string;

	const shownPages = Math.min(numPages, 1);
	let currPage: number;
	let reportedPage: number;
	$: {
		currPage = parseInt($page.params.num, 10);
		reportedPage = currPage + 1;
	}

	function paginate(isForward: boolean) {
		const url = `/${resource}/page/${isForward ? currPage + 1 : currPage - 1}`;
		return hrefConvert($locale, url);
	}
</script>

<div class="flex-container">
	<PaginationNav
		forwardText={$t('pagination.next')}
		backwardText={$t('pagination.previous')}
		on:click:button--next={() => goto(paginate(true))}
		on:click:button--previous={() => goto(paginate(false))}
		total={numPages}
		page={currPage}
		shown={shownPages}
	/>
</div>
<noscript>
	<div class="flex-container">
		<div class="buttonMargin">
			{#if currPage > 0}
				<Button
					icon={ArrowLeft}
					href={paginate(false)}
					iconDescription={$t('pagination.previous')}
				/>
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
	</div>
</noscript>

<style>
	.flex-container {
		width: 100%;
		display: flex;
		flex-wrap: row wrap;
		align-items: center;
		justify-content: center;
		align-content: space-between;
	}

	.buttonMargin {
		margin: 0.25em;
	}
</style>
