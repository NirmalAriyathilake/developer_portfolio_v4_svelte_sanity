<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import { appAssetsStore } from '$lib/store/app_store';
	import '../app.css';

	export let data: Record<string, string>;

	$appAssetsStore = data;
</script>

<slot />

<Footer />
