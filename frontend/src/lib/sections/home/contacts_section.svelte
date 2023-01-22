<script lang="ts">
	import ContactCard from '$lib/components/contact_card.svelte';
	import SectionTitle from '$lib/components/section_title.svelte';
	import type { SocialLinkModel } from '$lib/domain';

	export let data: SocialLinkModel[];
	export let className: string = '';
</script>

<div
	class={`section flex w-full flex-col items-center justify-start px-10 pt-5 pb-10 ${className}`}
	id="contact"
>
	<SectionTitle title="Contact Me" />
	<div class="flex flex-col gap-10 lg:w-full lg:flex-row">
		{#each data as contact}
			<ContactCard data={contact} className="lg:basis-1/3" />
		{/each}
	</div>
</div>
