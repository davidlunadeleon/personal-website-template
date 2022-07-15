<script lang="ts">
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		HeaderNavMenu,
		SideNav,
		SideNavItems,
		SideNavLink,
		SideNavMenu,
		SideNavMenuItem,
		SkipToContent
	} from 'carbon-components-svelte';
	import { config } from '$lib/config/site';
	import ThemePicker from '$lib/components/ThemePicker.svelte';
	import { t, locale, locales } from 'svelte-intl-precompile';

	let isSideNavOpen = true;
	let items: { href: string; text: string }[] = [];
	$: {
		items = [
			{ href: '/', text: $t('navBar.home') },
			{ href: '/posts', text: $t('navBar.posts') },
			{ href: '/tags', text: $t('navBar.tags') },
			{ href: '/about', text: $t('navBar.about') }
		];
	}
</script>

<Header company={config.name} bind:isSideNavOpen href="/">
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderNav>
		{#each items as item}
			<HeaderNavItem {...item} />
		{/each}
		<HeaderNavMenu text={$t('navBar.language')}>
			{#each $locales as loc}
				<HeaderNavItem text={$t(`langs.${loc}`)} on:click={() => ($locale = loc)} />
			{/each}
		</HeaderNavMenu>
		<ThemePicker />
	</HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
	<SideNavItems>
		{#each items as item}
			<SideNavLink {...item} />
		{/each}
		<SideNavMenu text={$t('navBar.language')}>
			{#each $locales as loc}
				<SideNavMenuItem text={$t(`langs.${loc}`)} on:click={() => ($locale = loc)} />
			{/each}
		</SideNavMenu>
		<ThemePicker />
	</SideNavItems>
</SideNav>
