<script lang="ts">
	import SectionTitle from '$lib/components/section_title.svelte';
	import ServiceCard from '$lib/components/service_card.svelte';
	import type { ServiceModel } from '$lib/domain';

	export let data: ServiceModel[];
	export let className: string = '';
</script>

{#if data.length > 0}
	<div
		class={`section flex w-full flex-col items-start justify-start px-10 py-5 ${className}`}
		id="services"
	>
		<SectionTitle title="My Services" />
		<div class="flex w-full flex-col flex-wrap items-center justify-center gap-10 lg:flex-row">
			{#each data as service}
				<ServiceCard data={service} />
			{/each}
		</div>
	</div>
{/if}
