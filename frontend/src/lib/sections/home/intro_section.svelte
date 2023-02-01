<script lang="ts">
	import SocialLinkButton from '$lib/components/social_link_button.svelte';
	import type { IntroSectionModel } from '$lib/domain';

	export let data: IntroSectionModel;
	export let className: string = '';
</script>

<div
	class={`top-0 flex w-full flex-col items-center justify-between bg-base-300 lg:flex-row ${className}`}
>
	<div class="flex flex-col items-center self-center px-10">
		<div class="flex flex-col items-start">
			<h1 class="text-5xl font-bold lg:text-9xl">
				Hi<span class="text-primary">,</span>
			</h1>

			<h2 class="dash-title mt-10 text-4xl font-bold lg:text-7xl">
				I&apos;m {data.name}
			</h2>

			<img
				src={`${data.myPicUrl}?auto=format`}
				alt="My Pic"
				class="mt-10 flex w-80 self-center lg:hidden"
			/>

			<h1 class="mt-10 text-4xl font-semibold lg:text-7xl">
				{data.profession}
			</h1>

			<h1 class="dash-title mt-5 text-2xl font-semibold lg:text-4xl">
				{data.yearsOfExperience}+ years of experience
			</h1>

			<div class="mt-10 flex w-full flex-col gap-5 self-center lg:flex-row lg:self-start">
				<a class="btn-outline btn-primary btn-lg btn" href={'#contact'}> Contact Me </a>
				<a
					class="btn-primary btn-lg btn flex lg:hidden"
					href={`${data.cv}`}
					download="Nirmal Ariyathilake CV"
					type="application/pdf"
				>
					Download CV
				</a>

				<!-- Desktop browser needs 'data:' in url to download files -->
				<a
					class="btn-primary btn-lg btn hidden lg:flex"
					href={`data:${data.cv}`}
					download="Nirmal Ariyathilake CV"
					type="application/pdf"
				>
					Download CV
				</a>
			</div>
		</div>

		<div class="mt-10 flex flex-row flex-wrap items-center justify-center gap-3 self-center">
			{#each data.socialLinks as socialLink}
				<SocialLinkButton {socialLink} />
			{/each}
		</div>
	</div>

	<img src={`${data.myPicUrl}?auto=format`} alt="My Pic" class="mt-10 mr-10 hidden w-96 lg:flex" />
</div>
