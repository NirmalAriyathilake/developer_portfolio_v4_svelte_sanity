<script lang="ts">
	import type { ServiceModel } from '$lib/domain';

	export let data: ServiceModel;
	export let className: string = '';
</script>

<div
	class={`relative mt-20 flex flex-col items-center rounded-xl bg-base-200 shadow-lg ${className}`}
>
	<img src={data.iconUrl} alt="Mobile dev" class="absolute -top-20 rounded-xl" width={150} />
	<div class="flex flex-col items-center px-5 py-5">
		<div class="mb-2 mt-20 text-xl font-semibold">{data.label}</div>
		<div class="mt-2 text-justify text-base">{data.description}</div>
		<!-- <a
			class="text-primary mt-5 self-end text-right text-lg font-semibold underline-offset-4 hover:underline "
			href={data.seeMorePath}
		>
			See More
		</a> -->
	</div>
</div>
