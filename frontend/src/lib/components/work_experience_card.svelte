<script lang="ts">
	import type { WorkExperienceModel } from '$lib/domain';

	export let data: WorkExperienceModel;
	export let className: string = '';
</script>

<div
	class={`relative flex w-full flex-col items-center rounded-xl bg-base-200 shadow-lg md:w-4/5 lg:w-1/4 ${className}`}
>
	<div class="flex w-full items-center justify-center rounded-t-xl bg-base-100">
		<img
			src={`${data.logoUrl}?auto=format`}
			alt={`${data.name}`}
			class="h-36 w-72 object-contain py-2 px-5"
		/>
	</div>
	<div class="flex flex-col items-center gap-5 px-5 py-5">
		<h2 class="text-xl font-semibold text-primary">{data.name}</h2>
		<h3 class="text-justify text-base font-semibold">{data.designation}</h3>
		<h4 class="font-normal">
			{data.from} -
			{data.to}
		</h4>
		<!-- <a
			class="text-primary mt-5 self-end text-right text-lg font-semibold underline-offset-4 hover:underline "
			href={data.seeMorePath}
		>
			See More
		</a> -->
	</div>
</div>
