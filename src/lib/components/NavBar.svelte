<script lang="ts">
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		SideNav,
		SideNavItems,
		SideNavLink,
		SideNavMenu,
		SideNavMenuItem,
		SkipToContent
	} from 'carbon-components-svelte';
	import { config } from '$lib/config/site';
	import ThemePicker from '$lib/components/ThemePicker.svelte';
	import LanguagePicker from './LanguagePicker.svelte';
	import { t, locale, locales } from 'svelte-intl-precompile';

	let isSideNavOpen = false;
	let items: { href: string; text: string }[] = [];
	$: {
		items = [
			{ href: `/${$locale}`, text: $t('navBar.home') },
			{ href: `/${$locale}/blog`, text: $t('navBar.blog') },
			{ href: `/${$locale}/tags`, text: $t('navBar.tags') },
			{ href: `/${$locale}`, text: $t('navBar.about') }
		];
	}
</script>

<Header company={config.name} bind:isSideNavOpen href="/" expandedByDefault={false}>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderNav>
		{#each items as item}
			<HeaderNavItem {...item} />
		{/each}
		<LanguagePicker />
		<ThemePicker />
	</HeaderNav>
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
</Header>
