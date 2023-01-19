<script lang="ts">
	export let label: string;
	export let link: string;
	export let styles: string = '';
</script>

<a href={link} class={`btn-link btn no-underline hover:no-underline ${styles}`}>
	{label}
</a>
