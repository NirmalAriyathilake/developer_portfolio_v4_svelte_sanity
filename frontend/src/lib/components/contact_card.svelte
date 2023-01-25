<script lang="ts">
	import type { SocialLinkModel } from '$lib/domain';

	export let data: SocialLinkModel;
	export let className: string = '';
</script>

<a
	class={`flex flex-col items-center justify-center gap-5 rounded-r-lg border-l-4 border-primary bg-base-200 py-7 px-10 shadow-lg lg:basis-1/3 ${className}`}
	href={data.action}
	target="_blank"
	rel="noreferrer"
>
	<img
		src={`${data.iconUrl}?auto=format`}
		alt={`${data.label} contact button`}
		style="width: 48px;"
	/>
	<p class="text-lg">{data.value}</p>
</a>
