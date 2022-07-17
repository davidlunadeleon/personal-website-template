<script lang="ts">
	import { page } from '$app/stores';
	import { locale } from 'svelte-intl-precompile';
	$locale = $page.params.lang;
</script>
