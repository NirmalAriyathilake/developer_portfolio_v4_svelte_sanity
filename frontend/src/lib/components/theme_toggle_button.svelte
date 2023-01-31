<script lang="ts">
	import { browser } from '$app/environment';
	import { systemTheme, theme, userTheme } from '$lib/store/app_store';
	import { onMount } from 'svelte/internal';

	const setTheme = (theme: UserTheme) => {
		$userTheme = theme;

		if (theme === 'dark') {
			$theme = 'dark';
		} else if (theme === 'light') {
			$theme = 'light';
		} else {
			$theme = $systemTheme;
		}
	};

	const onSystemThemeChange = (value: MediaQueryListEvent) => {
		$systemTheme = value.matches ? 'dark' : 'light';

		if ($userTheme === 'system') {
			$theme = $systemTheme;
		}
	};

	onMount(() => {
		if (browser) {
			const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');

			themeQuery.addEventListener('change', onSystemThemeChange);

			// Update system theme store value
			$systemTheme = themeQuery.matches ? 'dark' : 'light';

			// Get saved theme
			const storageTheme = localStorage.getItem('theme');

			if (storageTheme === 'dark' || storageTheme === 'light') {
				setTheme(storageTheme);
			} else {
				setTheme('system');
			}

			let themeUnSub = userTheme.subscribe((value) => {
				document.documentElement.setAttribute('data-theme', value);
				localStorage.setItem('theme', value);
			});

			return () => {
				themeUnSub();

				themeQuery.removeEventListener('change', onSystemThemeChange);
			};
		}
	});
</script>

<ul class="menu menu-horizontal z-50 px-1">
	<li>
		<button
			class="btn-link btn-square btn ml-auto mr-5 inline-flex rounded p-3 text-primary outline-none"
		>
			{#if $theme === 'dark'}
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
						d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
					/>
				</svg>
			{:else}
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
						d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
					/>
				</svg>
			{/if}
		</button>
		<ul class="-left-16 max-h-96 w-max gap-1 overflow-y-auto bg-base-100 p-2 shadow-xl">
			<li>
				<button
					class={$userTheme === 'light' ? 'text-primary' : ''}
					on:click={() => setTheme('light')}
					><svg
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
							d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
						/>
					</svg>
					<p class="font-semibold">Light</p>
				</button>
			</li>
			<li>
				<button
					class={$userTheme === 'dark' ? 'text-primary' : ''}
					on:click={() => setTheme('dark')}
					><svg
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
							d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
						/>
					</svg>
					<p class="font-semibold">Dark</p>
				</button>
			</li>
			<li>
				<button
					class={$userTheme === 'system' ? 'text-primary' : ''}
					on:click={() => setTheme('system')}
					><svg
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
							d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
						/>
					</svg>
					<p class="font-semibold">System</p>
				</button>
			</li>
		</ul>
	</li>
</ul>
