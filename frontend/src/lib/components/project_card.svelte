<script lang="ts">
	import type { ProjectModel } from '$lib/domain';
	import { appAssetsStore } from '$lib/store/app_store';

	const appAssetsMap: Record<string, string> = $appAssetsStore;

	export let data: ProjectModel;
	export let className: string = '';
</script>

<div
	class={`card rounded-r-lg rounded-l-none border-l-4 border-solid border-primary bg-base-200 shadow-lg lg:card-side ${className}`}
>
	<div
		class="card-body my-5 h-full w-full bg-contain bg-center bg-no-repeat"
		style={`background-image: url(${appAssetsMap[data.language + 'Backdrop']})`}
	>
		<h2 class="card-title">{data.title}</h2>
		<h3 class="dash-title">{data.shortDescription}</h3>
		<p class="my-5">{data.description}</p>
		<div class="flex flex-row justify-between">
			<div class="flex flex-col gap-2">
				{#each data.points as point}
					<p>
						<span class="font-semibold">{point.label} :</span>{' '}
						{point.value}
					</p>
				{/each}
			</div>
			<div class="card-actions flex flex-col items-end justify-end gap-5">
				{#each data.links as link}
					<a class="shadow-lg" href={link.url} target="_blank" rel="noreferrer">
						<img
							src={appAssetsMap[link.type]}
							alt={`${link.type} button`}
							placeholder="blur"
							width={211}
						/>
					</a>
				{/each}
			</div>
		</div>
	</div>
	<figure class="mx-5" style="width: 500px;">
		<img src={data.thumbnailUrl} alt="Thumbnail" placeholder="blur" />
	</figure>
</div>
