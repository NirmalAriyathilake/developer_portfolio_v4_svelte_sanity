<script lang="ts">
	let assetFooterLogoPath = './footer_logo.png';

	export let className: string = '';
</script>

<footer
	class={`relative flex w-full flex-col items-center justify-center gap-5 border-t p-5 lg:flex-row  ${className}`}
>
	Copyright &copy; {`${new Date().getFullYear()}`} - All rights reserved by
	<img src={assetFooterLogoPath} alt="NirmalCode Footer Logo" class="mx-5 w-32" />
</footer>
