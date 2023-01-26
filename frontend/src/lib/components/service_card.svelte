<script lang="ts">
	import type { ServiceModel } from '$lib/domain';

	export let data: ServiceModel;
	export let className: string = '';
</script>

<div
	class={`relative mt-20 flex w-full flex-col items-center rounded-xl bg-base-200 shadow-lg md:w-4/5 lg:w-1/4 ${className}`}
>
	<img
		src={`${data.iconUrl}?auto=format`}
		alt={`${data.label} service`}
		class="absolute -top-20 w-40 rounded-xl"
	/>
	<div class="flex flex-col items-center px-5 py-5">
		<h2 class="mb-2 mt-20 text-xl font-semibold">{data.label}</h2>
		<p class="mt-2 text-justify text-base">{data.description}</p>
		<!-- <a
			class="text-primary mt-5 self-end text-right text-lg font-semibold underline-offset-4 hover:underline "
			href={data.seeMorePath}
		>
			See More
		</a> -->
	</div>
</div>
