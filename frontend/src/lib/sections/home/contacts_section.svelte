<script lang="ts">
	import ContactCard from '$lib/components/contact_card.svelte';
	import SectionTitle from '$lib/components/section_title.svelte';
	import type { SocialLinkModel } from '$lib/domain';

	export let data: SocialLinkModel[];
	export let className: string = '';
</script>

<div
	class={`flex w-full scroll-m-24 flex-col items-center justify-start px-10 py-10 ${className}`}
	id="contact"
>
	<SectionTitle title="Contact Me" />
	<div class="mt-5 flex flex-col gap-10 lg:w-full lg:flex-row ">
		{#each data as contact}
			<ContactCard data={contact} className="lg:basis-1/3" />
		{/each}
	</div>
</div>
