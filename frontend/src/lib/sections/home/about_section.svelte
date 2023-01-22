<script lang="ts">
	import AboutInfoCard from '$lib/components/about_info_card.svelte';
	import SectionTitle from '$lib/components/section_title.svelte';
	import type { AboutSectionModel } from '$lib/domain';

	export let data: AboutSectionModel;
	export let className: string = '';
</script>

<div
	class={`section flex w-full flex-col items-start justify-start px-10 pt-10 pb-5 ${className}`}
	id="about"
>
	<SectionTitle title="About Me" />
	<div class="flex flex-col items-center lg:flex-row lg:gap-10">
		<img src={data.myPicTwoUrl} alt="My Pic 2" class="w-80 rounded-xl" />
		<div class="flex grow flex-col py-6">
			<div class="text-justify text-lg">{data.message}</div>
			<div class="mt-5 flex grid-cols-2 grid-rows-2 flex-col gap-4 lg:grid">
				{#each data.infoCards as infoCard}
					<AboutInfoCard aboutInfo={infoCard} />
				{/each}
			</div>
		</div>
	</div>
</div>
