<script lang="ts">
	import { hrefConvert } from '$lib/routing';
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
			{ href: hrefConvert($locale, '/'), text: $t('navBar.home') },
			{ href: hrefConvert($locale, '/blog'), text: $t('navBar.blog') },
			{ href: hrefConvert($locale, '/tags/page/0'), text: $t('navBar.tags') },
			{ href: hrefConvert($locale, '/'), text: $t('navBar.about') }
		];
	}
</script>

<Header
	company={config.name}
	bind:isSideNavOpen
	href={hrefConvert($locale, '/')}
	expandedByDefault={false}
>
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
