<script lang="ts">
	import { Theme } from 'carbon-components-svelte';
</script>

<div class="container">
	<Theme
		render="toggle"
		toggle={{
			themes: ['g90', 'white'],
			labelA: 'Light mode',
			labelB: 'Dark mode',
			hideLabel: true,
			size: 'sm'
		}}
		theme="g90"
	/>
</div>

<style>
	.container {
		padding: 0 1em;
	}
</style>
