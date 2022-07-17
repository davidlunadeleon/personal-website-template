<script lang="ts" context="module">
	import { locale } from 'svelte-intl-precompile';
	import { get } from 'svelte/store';

	export async function load() {
		return {
			status: 302,
			redirect: `/${get(locale).valueOf() ?? 'en'}`
		};
	}
</script>
