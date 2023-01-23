<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import type { WebsiteMetaTagModel } from '$lib/domain';
	import { appAssetsStore } from '$lib/store/app_store';
	import '../app.css';

	export let data;

	const assetsData: Record<string, string> = data['assetData'];
	$appAssetsStore = assetsData;

	const websiteTags: WebsiteMetaTagModel[] = data['websiteData'];
</script>

<svelte:head>
	{#each websiteTags as websiteTag}
		{#if websiteTag.type == 'name'}
			<meta name={websiteTag.label} content={websiteTag.content} />
		{:else if websiteTag.type == 'property'}
			<meta property={websiteTag.label} content={websiteTag.content} />
		{/if}
	{/each}
</svelte:head>

<slot />

<Footer />
