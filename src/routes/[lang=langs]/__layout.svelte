<script lang="ts">
	import { Content, Grid, Row, Column } from 'carbon-components-svelte';
	import 'carbon-components-svelte/css/all.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import { locale } from 'svelte-intl-precompile';

	$locale = $page.params.lang;
</script>

<NavBar />
<Content>
	<Grid>
		<Row>
			<Column>
				<div class="content">
					<slot />
				</div>
			</Column>
		</Row>
		<Footer />
	</Grid>
</Content>

<style>
	.content {
		margin: 0 auto;
		max-width: 1250px;
		padding-bottom: 2rem;
	}

	:global(p) {
		padding: 0.5rem;
	}
	:global(li) {
		padding: 0.2rem;
	}
	:global(pre) {
		padding: 1rem;
	}
	@media screen and (min-width: 1250px) {
		:global(html) {
			font-size: 1.2rem;
		}
	}
</style>
