<script lang="ts">
	import type { ProjectModel } from '$lib/domain';
	import { appAssetsStore, theme } from '$lib/store/app_store';

	const appAssetsMap: Record<string, string> = $appAssetsStore;

	export let data: ProjectModel;
	export let className: string = '';

	$: imageNameSuffix = $theme === 'dark' ? 'Dark' : '';
</script>

<div
	class={`flex flex-col-reverse items-center gap-5 rounded-r-lg rounded-l-none border-l-4 border-solid border-primary bg-base-200 px-8 py-5 shadow-lg lg:flex-row ${className}`}
>
	<div
		class="h-full w-full bg-contain bg-center bg-no-repeat"
		style={`background-image: url(${appAssetsMap[data.language + 'Backdrop']})`}
	>
		<h2 class="card-title">{data.title}</h2>
		<h3 class="dash-title">{data.shortDescription}</h3>
		<p class="my-5">{data.description}</p>
		<div class="flex flex-col justify-between gap-6 lg:flex-row">
			<div class="flex flex-col gap-2">
				{#each data.points as point}
					<p>
						<span class="font-semibold">{point.label} :</span>{' '}
						{point.value}
					</p>
				{/each}
			</div>
			<div class="card-actions flex flex-col items-center justify-end gap-5">
				{#each data.links as link}
					<a class="shadow-lg" href={link.url} target="_blank" rel="noreferrer">
						<img
							src={appAssetsMap[link.type + imageNameSuffix]}
							alt={`${link.type} button`}
							class="w-36 lg:w-52"
						/>
					</a>
				{/each}
			</div>
		</div>
	</div>
	<img src={data.thumbnailUrl} alt="Thumbnail" placeholder="blur" class="w-72 lg:w-80" />
</div>
