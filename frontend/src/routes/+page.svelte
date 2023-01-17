<script lang="ts">
	import type { HomePageModel } from '$lib/domain';
	import IntroSection from '$lib/sections/intro_section.svelte';

	export let data: HomePageModel;
</script>

<IntroSection data={data.intro} styles={''} />
