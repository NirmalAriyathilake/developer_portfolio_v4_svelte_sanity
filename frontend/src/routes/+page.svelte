<script lang="ts">
	import NavBarContainer from '$lib/components/nav_bar_container.svelte';
	import type { HomePageModel } from '$lib/domain';
	import { homeNavBarItems } from '$lib/domain/constants';
	import AboutSection from '$lib/sections/home/about_section.svelte';
	import IntroSection from '$lib/sections/home/intro_section.svelte';

	export let data: HomePageModel;
</script>

<NavBarContainer navBarItems={homeNavBarItems} />
<IntroSection data={data.intro} />
<AboutSection data={data.about} />
