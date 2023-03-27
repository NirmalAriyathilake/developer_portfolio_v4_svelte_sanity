<script lang="ts">
	import SocialLinkButton from '$lib/components/social_link_button.svelte';
	import type { IntroSectionModel } from '$lib/domain';

	export let data: IntroSectionModel;
	export let className: string = '';
</script>

<div
	class={`top-0 flex h-screen w-full flex-col items-center justify-around bg-base-300 px-10 text-center ${className}`}
>
	<h1 class="text-5xl font-bold lg:text-8xl">
		Hello<span class="text-primary">,</span>
	</h1>

	<h2 class="mt-auto text-4xl font-bold lg:text-7xl">
		I&apos;m {data.name}
	</h2>

	<h1 class="mt-auto text-4xl font-semibold lg:text-7xl">
		{data.profession}
	</h1>

	<h1 class="mt-5 text-2xl font-semibold lg:text-4xl">
		with <span class="text-3xl lg:text-5xl">{data.yearsOfExperience}+ years</span> of experience
	</h1>

	<div class="mt-auto flex w-full flex-col justify-center gap-5 self-center lg:flex-row">
		<a class="btn-outline btn-primary btn-lg btn" href={'#contact'}> Contact Me </a>
		<a
			class="btn-primary btn-lg btn flex lg:hidden"
			href={data.cv}
			download="Nirmal Ariyathilake CV"
			type="application/pdf"
		>
			Download CV
		</a>

		<!-- Desktop browser needs 'data:' in url to download files -->
		<a
			class="btn-primary btn-lg btn hidden lg:flex"
			href={data.cv}
			download="Nirmal Ariyathilake CV"
			type="application/pdf"
			target="_blank"
			rel="noreferrer"
		>
			Download CV
		</a>
	</div>

	<div class="m-auto flex flex-row flex-wrap items-center justify-center gap-3 self-center">
		{#each data.socialLinks as socialLink}
			<SocialLinkButton {socialLink} />
		{/each}
	</div>
</div>
