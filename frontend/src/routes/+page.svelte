<script lang="ts">
	import type { HomeData } from '$lib/domain';
	import IntroSection from '$lib/sections/intro_section.svelte';

	export let data: HomeData;
</script>

<IntroSection data={data.intro} styles={''} />
