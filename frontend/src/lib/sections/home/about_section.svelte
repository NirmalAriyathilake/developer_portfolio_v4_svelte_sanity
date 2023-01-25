<script lang="ts">
	import DotsSvg from '$lib/assets/dots_svg.svelte';
	import AboutInfoCard from '$lib/components/about_info_card.svelte';
	import SectionTitle from '$lib/components/section_title.svelte';
	import type { AboutSectionModel } from '$lib/domain';

	export let data: AboutSectionModel;
	export let className: string = '';
</script>

<div
	class={`section flex w-full flex-col items-start justify-start px-10 py-5 ${className}`}
	id="about"
>
	<SectionTitle title="About Me" />
	<div class="flex flex-col items-center gap-10 lg:flex-row">
		<div class="relative h-full w-full md:w-3/5 lg:w-1/4 xl:w-1/5">
			<div class="absolute -top-4 -left-4 -z-10">
				<DotsSvg />
			</div>
			<img src={`${data.myPicTwoUrl}?auto=format`} alt="My Pic 2" class="rounded-xl shadow-xl" />
			<div class="absolute -bottom-4 -right-4 -z-10">
				<DotsSvg />
			</div>
		</div>
		<div class="flex w-full grow flex-col py-6 md:w-2/3">
			<div class="text-justify text-lg">{data.message}</div>
			<div class="mt-10 flex grid-cols-2 grid-rows-2 flex-col gap-4 lg:grid">
				{#each data.infoCards as infoCard}
					<AboutInfoCard aboutInfo={infoCard} />
				{/each}
			</div>
		</div>
	</div>
</div>
