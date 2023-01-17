<script lang="ts">
	import SocialLinkButton from '$lib/components/social_link_button.svelte';
	import type { IntroData } from '$lib/domain';

	export let styles: string;
	export let data: IntroData;
</script>

<div class={`flex lg:flex-row flex-col w-full top-0 bg-base-300 items-center pl-10 ${styles}`}>
	<div class="flex flex-col w-full items-start ml-10">
		<h1 class="text-9xl font-bold">
			Hey<span class="text-primary">,</span>
		</h1>

		<div class="text-7xl dash-title font-bold mt-10">
			I&apos;m {data.name}
		</div>

		<h1 class="text-7xl font-semibold mt-10">
			{data.profession}
		</h1>

		<h1 class="text-4xl dash-title font-semibold mt-5">
			{data.yearsOfExperience}+ years of experience
		</h1>

		<div class="flex flex-row gap-5 mt-10">
			<a class="btn btn-outline btn-primary btn-lg" href={'#contact'}> Contact Me </a>
			<a
				class="btn btn-primary btn-lg"
				href={`data:${data.cv}`}
				download="Nirmal Ariyathilake CV"
				type="application/pdf"
			>
				Download CV
			</a>
		</div>

		<div class="flex flex-row mt-10 items-center self-center gap-3">
			{#each data.socialLinks as socialLink}
				<SocialLinkButton {socialLink} />
			{/each}
		</div>
	</div>

	<div class="mt-10 mr-10">
		<img src={`${data.myPicUrl}?auto=format`} alt="My Pic" width={720} height={946} />
	</div>
</div>
