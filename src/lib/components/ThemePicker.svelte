<script lang="ts">
	import { Theme } from 'carbon-components-svelte';
	import { t } from 'svelte-intl-precompile';
</script>

<div class="container">
	<Theme
		render="toggle"
		toggle={{
			themes: ['g90', 'white'],
			labelA: $t('themePicker.light'),
			labelB: $t('themePicker.dark'),
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
