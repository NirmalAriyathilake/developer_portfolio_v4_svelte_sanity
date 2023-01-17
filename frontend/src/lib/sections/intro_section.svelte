<script lang="ts">
	import SocialLinkButton from '$lib/components/social_link_button.svelte';
	import type { IntroData } from '$lib/domain';

	export let styles: string;
	export let data: IntroData;
</script>

<div class={`top-0 flex w-full flex-col items-center bg-base-300 pl-10 lg:flex-row ${styles}`}>
	<div class="ml-10 flex w-full flex-col items-start">
		<h1 class="text-9xl font-bold">
			Hey<span class="text-primary">,</span>
		</h1>

		<div class="dash-title mt-10 text-7xl font-bold">
			I&apos;m {data.name}
		</div>

		<h1 class="mt-10 text-7xl font-semibold">
			{data.profession}
		</h1>

		<h1 class="dash-title mt-5 text-4xl font-semibold">
			{data.yearsOfExperience}+ years of experience
		</h1>

		<div class="mt-10 flex flex-row gap-5">
			<a class="btn-outline btn-primary btn-lg btn" href={'#contact'}> Contact Me </a>
			<a
				class="btn-primary btn-lg btn"
				href={`data:${data.cv}`}
				download="Nirmal Ariyathilake CV"
				type="application/pdf"
			>
				Download CV
			</a>
		</div>

		<div class="mt-10 flex flex-row items-center gap-3 self-center">
			{#each data.socialLinks as socialLink}
				<SocialLinkButton {socialLink} />
			{/each}
		</div>
	</div>

	<div class="mt-10 mr-10">
		<img src={`${data.myPicUrl}?auto=format`} alt="My Pic" width={720} height={946} />
	</div>
</div>
