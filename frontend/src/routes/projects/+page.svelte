<script lang="ts">
	import NavBarContainer from '$lib/components/nav_bar_container.svelte';
	import type { ProjectsPageModel } from '$lib/domain';
	import { projectPageNavBarItems } from '$lib/domain/constants';
	import ProjectsContainer from '$lib/sections/projects/projects_container.svelte';

	export let data: ProjectsPageModel;
</script>

<svelte:head>
	<title>Nirmal Code | Projects</title>
</svelte:head>

<NavBarContainer navBarItems={projectPageNavBarItems} />
{#if data.mobileApps !== null && data.mobileApps.length > 0}
	<ProjectsContainer
		title={'Mobile Apps'}
		id={'mobileApps'}
		data={data.mobileApps}
		className="pt-24"
	/>
{/if}
{#if data.webApps !== null && data.webApps.length > 0}
	<ProjectsContainer title={'Web Apps'} id={'webApps'} data={data.webApps} />
{/if}
{#if data.packages !== null && data.packages.length > 0}
	<ProjectsContainer title={'Packages'} id={'packages'} data={data.packages} />
{/if}
{#if data.experiments !== null && data.experiments.length > 0}
	<ProjectsContainer title={'Experiments'} id={'experiments'} data={data.experiments} />
{/if}
