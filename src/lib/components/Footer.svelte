<script lang="ts">
	import { LogoGithub, Code } from 'carbon-icons-svelte';
	import { Row, Column, UnorderedList, ListItem, Link } from 'carbon-components-svelte';
	import { config } from '$lib/config/site';
	import { hrefConvert } from '$lib/routing';
	import { t, locale } from 'svelte-intl-precompile';
</script>

<footer>
	<hr />
	<Row>
		<Column>
			<strong>{$t('footer.sourceCode')}</strong>
			<UnorderedList>
				<ListItem>
					<Link href={hrefConvert($locale, config.sourceRepository)} icon={LogoGithub}
						>{$t('footer.repository')}</Link
					>
				</ListItem>
			</UnorderedList>
			<strong>{$t('footer.openSourceLicenses')}</strong>
			<UnorderedList>
				<ListItem>
					<Link href={hrefConvert($locale, '/licenses')} icon={Code}>{$t('footer.licenses')}</Link>
				</ListItem>
			</UnorderedList>
		</Column>
		<Column>
			<strong>{$t('footer.socialMedia')}</strong>
			<UnorderedList>
				{#each config.socialMedia as account}
					<ListItem>
						<Link href={hrefConvert($locale, account.link)}>{account.description}</Link>
					</ListItem>
				{/each}
			</UnorderedList>
		</Column>
	</Row>
</footer>
