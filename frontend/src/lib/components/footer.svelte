<script lang="ts">
	import { appAssetsStore } from '$lib/store/app_store';

	export let styles: string = '';

	const appAssetsMap: Record<string, string> = $appAssetsStore;
	const footerImageUrl = appAssetsMap['footer'];
</script>

<footer class={`relative flex h-24 w-full items-center justify-center border-t ${styles}`}>
	Copyright &copy; {`${new Date().getFullYear()}`} - All rights reserved by
	<img src={footerImageUrl} alt="Logo" class="mx-5" width={121} height={16} />
</footer>
