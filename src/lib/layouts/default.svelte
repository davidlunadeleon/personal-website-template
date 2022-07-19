<script lang="ts" context="module">
	import UnorderedList from '$lib/components/UnorderedList.svelte';
	import OrderedList from '$lib/components/OrderedList.svelte';
	import { ListItem, Link } from 'carbon-components-svelte';

	export { UnorderedList as ul, OrderedList as ol, ListItem as li, Link as a };
</script>

<slot />
