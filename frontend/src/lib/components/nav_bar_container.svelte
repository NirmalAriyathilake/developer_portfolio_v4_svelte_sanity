<script lang="ts">
	import type { NavBarItemModel } from '$lib/domain';
	import { appAssetsStore } from '$lib/store/app_store';
	import NavBarItem from './nav_bar_item.svelte';

	export let navBarItems: NavBarItemModel[];
	export let className: string = '';

	$: isNavBarFloating = false;

	const menuClick = () => {
		const menu = document.querySelector('#app-menu');
		const nav = document.querySelector('#HeaderSection');

		menu?.classList.toggle('hidden');

		if (!isNavBarFloating) {
			nav?.classList.toggle('shadow-xl');
		}
	};

	const appAssetsMap: Record<string, string> = $appAssetsStore;
	const logoUrl = appAssetsMap['logo'];
</script>

<div
	class={`top-0 left-0 right-0 z-50 flex w-full flex-wrap items-center bg-base-300 p-3 ${className}`}
	id="HeaderSection"
>
	<a href={'/'} class="mr-4 inline-flex items-center p-2 ">
		<img
			src={logoUrl}
			class="btn-square btn-lg btn border-none"
			width={64}
			height={64}
			alt="Logo"
		/>
	</a>

	{#if navBarItems.length > 0}
		<div
			class="hidden flex-row gap-10 text-lg font-semibold text-primary lg:inline-flex lg:w-auto lg:flex-grow"
		>
			<div class="ml-auto inline-flex h-auto w-auto flex-row items-center">
				{#each navBarItems as navBarItem}
					<NavBarItem label={navBarItem.label} link={navBarItem.link} className="header-item" />
				{/each}
			</div>
		</div>
	{/if}
	<div class="ml-auto inline-flex">
		{#if navBarItems.length > 0}
			<button
				class="rounded p-3 text-primary outline-none ring-primary hover:text-primary hover:ring-2 lg:hidden "
				on:click={menuClick}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		{/if}
	</div>
	{#if navBarItems.length > 0}
		<div class="hidden w-full lg:hidden" id="app-menu">
			<div class="flex w-full  flex-col items-center gap-2">
				{#each navBarItems as navBarItem}
					<NavBarItem
						label={navBarItem.label}
						link={navBarItem.link}
						className="hover:bg-white btn-block header-item-mobile"
					/>
				{/each}
			</div>
		</div>
	{/if}
</div>
