<script>
	import NavBarContainer from '$lib/components/nav_bar_container.svelte';
</script>

<svelte:head>
	<title>Nirmal Code</title>
</svelte:head>

<div class="-mb-24 flex min-h-screen w-full flex-col items-center justify-center font-body">
	<NavBarContainer navBarItems={[]} />
	<main class="flex grow flex-col items-center justify-center">
		<p class="text-2xl font-semibold text-primary">PAGE UNDER MAINTENANCE</p>
		<a href={'/'} class="btn-link btn mt-10 text-xl"> Go back Home </a>
	</main>
</div>
