<script lang="ts">
	import type { SocialLinkModel } from '$lib/domain';

	export let data: SocialLinkModel;
	export let className: string = '';
</script>

<a
	class={`flex flex-col items-center justify-center rounded-r-lg border-l-4 border-primary bg-base-200 p-5 shadow-lg lg:basis-1/3 ${className}`}
	href={data.action}
	target="_blank"
	rel="noreferrer"
>
	<img
		src={`${data.iconUrl}?auto=format`}
		alt={`${data.label} contact button`}
		style="width: 48px;"
	/>
	<p class="mt-5 text-lg">{data.value}</p>
</a>
