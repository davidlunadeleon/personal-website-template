<script lang="ts">
	import { hasContext, setContext } from 'svelte';
	import { UnorderedList } from 'carbon-components-svelte';

	let isNested = hasContext('isNested');

	if (!isNested) {
		setContext('isNested', true);
	}
</script>

<UnorderedList nested={isNested}>
	<slot />
</UnorderedList>
