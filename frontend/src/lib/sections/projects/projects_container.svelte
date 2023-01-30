<script lang="ts">
	import ProjectCard from '$lib/components/project_card.svelte';
	import SectionTitle from '$lib/components/section_title.svelte';
	import type { ProjectModel } from '$lib/domain';

	export let data: ProjectModel[];
	export let title: string;
	export let id: string;
	export let className: string = '';
</script>

<div class={`section flex w-full flex-col items-center justify-start px-10 py-5 ${className}`} {id}>
	<SectionTitle {title} />
	<div class="flex flex-col gap-10 lg:w-5/6 xl:w-2/3">
		{#each data as project}
			<ProjectCard data={project} />
		{/each}
	</div>
</div>
