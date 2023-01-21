<script lang="ts">
	import { browser } from '$app/environment';
	import type { NavBarItemModel } from '$lib/domain';
	import { appAssetsStore } from '$lib/store/app_store';
	import { onMount } from 'svelte';
	import NavBarItem from './nav_bar_item.svelte';

	export let navBarItems: NavBarItemModel[];
	export let className: string = '';

	$: isNavBarFloating = false;

	const menuClick = () => {
		const menu = document.querySelector('#mobile-nav-bar');
		const nav = document.querySelector('#NavBarContainer');

		menu?.classList.toggle('hidden');

		if (!isNavBarFloating) {
			nav?.classList.toggle('shadow-xl');
		}
	};

	const appAssetsMap: Record<string, string> = $appAssetsStore;
	const logoUrl = appAssetsMap['logo'];

	const onScroll = () => {
		const { pageYOffset, scrollY } = window;

		const nav = document.querySelector('#NavBarContainer');
		let menu = document.querySelector('#mobile-nav-bar');

		menu?.classList.add('hidden');

		if (pageYOffset > 0) {
			nav?.classList.add('shadow-xl');
		} else {
			nav?.classList.remove('shadow-xl');
		}

		const navLinks = document.querySelectorAll('.navbar-item');
		const mobileNavLinks = document.querySelectorAll('.navbar-item-mobile');

		navLinks.forEach((link) => {
			if (link instanceof HTMLAnchorElement) {
				const target = document.querySelector(link.hash);

				if (
					target != null &&
					target instanceof HTMLElement &&
					target.offsetTop - 100 <= pageYOffset &&
					target.offsetTop + target.offsetHeight - 100 > pageYOffset
				) {
					link.classList.add('navbar-item-active');
				} else {
					link.classList.remove('navbar-item-active');
				}
			}
		});

		mobileNavLinks.forEach((link) => {
			if (link instanceof HTMLAnchorElement) {
				const target = document.querySelector(link.hash);

				if (
					target != null &&
					target instanceof HTMLElement &&
					target.offsetTop - 100 <= pageYOffset &&
					target.offsetTop + target.offsetHeight - 100 > pageYOffset
				) {
					link.classList.add('bg-white');
				} else {
					link.classList.remove('bg-white');
				}
			}
		});
	};

	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', onScroll, { passive: true });

			return () => {
				window.removeEventListener('scroll', onScroll);
			};
		}
	});
</script>

<div
	class={`fixed top-0 left-0 right-0 z-50 flex w-full flex-wrap items-center bg-base-300 p-3 ${className}`}
	id="NavBarContainer"
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
					<NavBarItem label={navBarItem.label} link={navBarItem.link} className="navbar-item" />
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
		<div class="hidden w-full lg:hidden" id="mobile-nav-bar">
			<div class="flex w-full  flex-col items-center gap-2">
				{#each navBarItems as navBarItem}
					<NavBarItem
						label={navBarItem.label}
						link={navBarItem.link}
						className="hover:bg-white btn-block navbar-item-mobile"
					/>
				{/each}
			</div>
		</div>
	{/if}
</div>
