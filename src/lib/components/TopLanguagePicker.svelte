<script lang="ts">
	import { hrefConvert } from '$lib/routing';
	import { HeaderNavItem, HeaderNavMenu } from 'carbon-components-svelte';
	import { t, locale, locales } from 'svelte-intl-precompile';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	function changeLocaleNoScript(loc: string) {
		let url = $page.url.pathname.slice(3);
		if (url.length === 0) {
			url = '/';
		}
		return hrefConvert(loc, url);
	}

	function changeLocale(loc: string) {
		$locale = loc;
		goto(changeLocaleNoScript(loc));
	}
</script>

<HeaderNavMenu text={$t('navBar.language')}>
	{#each $locales as loc}
		<HeaderNavItem text={$t(`langs.${loc}`)} on:click={() => changeLocale(loc)} />
	{/each}
</HeaderNavMenu>
<noscript>
	{#each $locales as loc}
		<HeaderNavItem text={$t(`langs.${loc}`)} href={changeLocaleNoScript(loc)} />
	{/each}
</noscript>
