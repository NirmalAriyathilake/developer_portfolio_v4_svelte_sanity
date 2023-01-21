<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Nirmal Code | {$page.status}</title>
</svelte:head>

<div class="flex h-screen w-full flex-col items-center justify-center font-body">
	<div class="flex grow flex-col items-center justify-center">
		<div class="flex flex-row text-3xl">
			<p class="mr-5 font-bold">{$page.status}</p>
			|{' '}
			<p class="ml-5">{$page.error?.message ?? 'Error occurred'}</p>
		</div>
		{#if $page.status != 500}
			<a href={'/'} class="btn-link btn mt-10 text-xl">Go back Home</a>
		{/if}
	</div>
</div>
