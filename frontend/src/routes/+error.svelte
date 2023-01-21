<script lang="ts">
	import { page } from '$app/stores';
	import NavBarContainer from '$lib/components/nav_bar_container.svelte';
</script>

<svelte:head>
	<title>Nirmal Code | {$page.status}</title>
</svelte:head>

<div class="-mb-24 flex min-h-screen w-full flex-col items-center justify-center font-body">
	<NavBarContainer navBarItems={[]} />
	<div class="flex h-full w-full grow flex-col items-center justify-center pt-24">
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
