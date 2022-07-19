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
</style>
