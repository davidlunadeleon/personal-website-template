<script lang="ts">
	import { hasContext, setContext } from 'svelte';
	import { OrderedList } from 'carbon-components-svelte';

	let isNested = hasContext('isNested');

	if (!isNested) {
		setContext('isNested', true);
	}
</script>

<OrderedList nested={isNested}>
	<slot />
</OrderedList>
