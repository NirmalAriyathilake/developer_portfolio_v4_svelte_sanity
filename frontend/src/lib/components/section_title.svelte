<script lang="ts">
	export let title: string;
	export let className: string = '';
</script>

<div class={`section-title mb-10 mt-5 self-center text-3xl font-semibold ${className}`}>
	{title}
</div>
