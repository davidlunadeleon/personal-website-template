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
				<slot />
			</Column>
		</Row>
		<Footer />
	</Grid>
</Content>
