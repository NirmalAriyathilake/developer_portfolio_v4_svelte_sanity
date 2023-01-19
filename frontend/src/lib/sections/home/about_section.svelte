<script lang="ts">
	import AboutInfoCard from '$lib/components/about_info_card.svelte';
	import SectionTitle from '$lib/components/section_title.svelte';
	import type { AboutSectionModel } from '$lib/domain';

	export let data: AboutSectionModel;
	export let styles: string = '';
</script>

<div
	class={`flex w-full scroll-m-24 flex-col items-start justify-start px-10 py-10 ${styles}`}
	id="about"
>
	<SectionTitle title="About Me" styles={''} />
	<div class="flex flex-row items-center">
		<div class="mr-10 w-3/5">
			<img src={data.myPicTwoUrl} alt="My Pic 2" class="rounded-xl" />
		</div>
		<div class="flex grow flex-col py-6">
			<div class="text-justify text-lg">{data.message}</div>
			<div class="mt-5 grid grid-cols-2 grid-rows-2 gap-4">
				{#each data.infoCards as infoCard}
					<AboutInfoCard aboutInfo={infoCard} styles={''} />
				{/each}
			</div>
		</div>
	</div>
</div>
