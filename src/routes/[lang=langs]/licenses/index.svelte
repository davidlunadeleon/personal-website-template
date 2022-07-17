<script lang="ts">
	import { UnorderedList, ListItem, Link } from 'carbon-components-svelte';
	import { t, locale } from 'svelte-intl-precompile';
	import { hrefConvert } from '$lib/routing';

	export let licenses: {
		default: {
			projectName: {
				licenses: string;
				repository: string;
				publisher: string;
				email: string;
				path: string;
				licenseFile: string;
			};
		};
	};
</script>

<h1>{$t('licenses.openSourceLicenses')}</h1>
<p><strong>{$t('licenses.description')}</strong></p>
<UnorderedList>
	{#each Object.entries(licenses.default) as [packageName, description]}
		<ListItem>
			<strong>{packageName}</strong>
			<UnorderedList nested>
				<ListItem
					>{$t('licenses.publisher')}
					{description.publisher ?? $t('licenses.unspecified')}</ListItem
				>
				<ListItem>{$t('licenses.licenses')} {description.licenses}</ListItem>
				<ListItem>
					{$t('licenses.repository')}
					<Link href={hrefConvert($locale, description.repository)}>{description.repository}</Link>
				</ListItem>
			</UnorderedList>
		</ListItem>
	{/each}
</UnorderedList>
