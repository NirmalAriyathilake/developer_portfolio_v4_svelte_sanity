<script lang="ts">
	import type { AboutInfoModel } from '$lib/domain';

	export let className: string = '';
	export let aboutInfo: AboutInfoModel;
</script>

<div
	class={`flex flex-col items-start rounded-r-lg border-l-4 border-solid border-primary bg-base-200 px-3 py-3 shadow-lg ${className}`}
>
	<div class="mb-2 text-xl font-semibold">{aboutInfo.label}</div>
	<div class="text-xl">{aboutInfo.value}</div>
</div>
