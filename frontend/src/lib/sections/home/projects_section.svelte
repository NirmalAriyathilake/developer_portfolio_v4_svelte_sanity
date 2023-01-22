<script lang="ts">
	import ProjectCard from '$lib/components/project_card.svelte';
	import SectionTitle from '$lib/components/section_title.svelte';
	import type { ProjectModel } from '$lib/domain';

	export let data: ProjectModel[];
	export let className: string = '';
</script>

<div
	class={`section flex w-full flex-col items-center justify-start px-10 py-5 ${className}`}
	id="projects"
>
	<SectionTitle title="My Projects" />
	<div class="flex flex-col gap-10">
		{#each data as project}
			<ProjectCard data={project} />
		{/each}
	</div>
	<a href={'projects'} class="btn-outline btn-primary btn-lg btn mt-8 ">MORE PROJECTS</a>
</div>
