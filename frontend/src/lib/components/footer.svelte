<script lang="ts">
	import { appAssetsStore } from '$lib/store/app_store';

	const appAssetsMap: Record<string, string> = $appAssetsStore;

	let footerImageUrl = './footer_logo.png';

	export let className: string = '';
</script>

<footer
	class={`relative flex w-full flex-col items-center justify-center gap-5 border-t p-5 lg:flex-row  ${className}`}
>
	Copyright &copy; {`${new Date().getFullYear()}`} - All rights reserved by
	<img src={footerImageUrl} alt="Logo" class="mx-5" width={121} height={16} />
</footer>
