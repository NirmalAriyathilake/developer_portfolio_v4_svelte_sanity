<script lang="ts">
	export let label: string;
	export let link: string;
	export let className: string = '';
</script>

<a href={link} class={`btn-link btn no-underline hover:no-underline ${className}`}>
	{label}
</a>
