<script lang="ts">
	import { HeaderNavItem, HeaderNavMenu } from 'carbon-components-svelte';
	import { t, locale, locales } from 'svelte-intl-precompile';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	function changeLocale(loc: string) {
		const pathArray = $page.url.pathname.split('/');
		$locale = pathArray[1] = loc;
		goto(pathArray.join('/'));
	}
</script>

<HeaderNavMenu text={$t('navBar.language')}>
	{#each $locales as loc}
		<HeaderNavItem text={$t(`langs.${loc}`)} on:click={() => changeLocale(loc)} />
	{/each}
</HeaderNavMenu>
