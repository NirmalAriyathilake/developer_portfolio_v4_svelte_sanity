<script lang="ts">
	import SectionTitle from '$lib/components/section_title.svelte';
	import WorkExperienceCard from '$lib/components/work_experience_card.svelte';
	import type { WorkExperienceModel } from '$lib/domain';

	export let data: WorkExperienceModel[];
	export let className: string = '';
</script>

{#if data.length > 0}
	<div
		class={`section flex w-full flex-col items-start justify-start px-10 py-5 ${className}`}
		id="workExperiences"
	>
		<SectionTitle title="My Work Experiences" />
		<div class="flex w-full flex-col flex-wrap items-center justify-center gap-10 lg:flex-row">
			{#each data as workExperience}
				<WorkExperienceCard data={workExperience} />
			{/each}
		</div>
	</div>
{/if}
