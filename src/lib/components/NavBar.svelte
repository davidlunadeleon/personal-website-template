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

	let isSideNavOpen = true;
	const items = [
		{ href: '/', text: 'Home' },
		{ href: '/posts', text: 'Posts' },
		{ href: '/tags', text: 'Tags' },
		{ href: '/about', text: 'About' }
	];
	const languages = ['Spanish', 'English'];
</script>

<Header company={config.name} bind:isSideNavOpen href="/">
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderNav>
		{#each items as item}
			<HeaderNavItem {...item} />
		{/each}
		<HeaderNavMenu text="Language">
			{#each languages as language}
				<HeaderNavItem text={language} />
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
		<SideNavMenu text="Language">
			{#each languages as language}
				<SideNavMenuItem text={language} />
			{/each}
		</SideNavMenu>
		<ThemePicker />
	</SideNavItems>
</SideNav>
