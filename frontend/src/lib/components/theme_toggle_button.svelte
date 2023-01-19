<script lang="ts">
	import { theme } from '$lib/store/app_store';

	const toggleDark = () => {
		$theme = $theme === 'dark' ? 'light' : 'dark';
		console.log('APPLOG : theme : ', $theme);
	};
</script>

<button
	class="btn-link btn-square btn ml-auto mr-5 inline-flex rounded p-3 text-primary outline-none  "
	on:click={toggleDark}
>
	THeme
</button>
