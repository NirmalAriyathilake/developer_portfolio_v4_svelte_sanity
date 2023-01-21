<script lang="ts">
	import { appAssetsStore } from '$lib/store/app_store';

	const appAssetsMap: Record<string, string> = $appAssetsStore;

	const footerImageUrl = appAssetsMap['footer'];

	export let className: string = '';
</script>

<footer class={`relative flex h-24 w-full items-center justify-center border-t ${className}`}>
	Copyright &copy; {`${new Date().getFullYear()}`} - All rights reserved by
	<img src={footerImageUrl} alt="Logo" class="mx-5" width={121} height={16} />
</footer>
