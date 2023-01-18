<script lang="ts">
	import type { HomePageModel } from '$lib/domain';
	import AboutSection from '$lib/sections/about_section.svelte';
	import IntroSection from '$lib/sections/intro_section.svelte';

	export let data: HomePageModel;
</script>

<IntroSection data={data.intro} styles={''} />
<AboutSection data={data.about} styles={''} />
