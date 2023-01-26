<script lang="ts">
	import NavBarContainer from '$lib/components/nav_bar_container.svelte';
	import type { HomePageModel } from '$lib/domain';
	import { homeNavBarItems } from '$lib/domain/constants';
	import AboutSection from '$lib/sections/home/about_section.svelte';
	import ContactsSection from '$lib/sections/home/contacts_section.svelte';
	import IntroSection from '$lib/sections/home/intro_section.svelte';
	import ProjectsSection from '$lib/sections/home/projects_section.svelte';
	import ServicesSection from '$lib/sections/home/services_section.svelte';
	import WorkExperiencesSection from '$lib/sections/home/work_experiences_section.svelte';

	export let data: HomePageModel;
</script>

<svelte:head>
	<title>Nirmal Code</title>
</svelte:head>

<NavBarContainer navBarItems={homeNavBarItems} />
<IntroSection data={data.intro} className="pt-24" />
<AboutSection data={data.about} />
{#if data.services.length > 0}
	<ServicesSection data={data.services} />
{/if}
{#if data.featuredProjects.length > 0}
	<ProjectsSection data={data.featuredProjects} />
{/if}
{#if data.workExperiences.length > 0}
	<WorkExperiencesSection data={data.workExperiences} />
{/if}
{#if data.contacts.length > 0}
	<ContactsSection data={data.contacts} />
{/if}
