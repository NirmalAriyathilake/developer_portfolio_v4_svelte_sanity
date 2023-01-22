<script lang="ts">
	export let label: string;
	export let link: string;
	export let className: string = '';
</script>

<a href={link} class={`btn-link btn no-underline hover:no-underline ${className}`}>
	{label}
</a>

<style>
	.navbar-item {
		@apply relative;
		@apply transition-all duration-200 ease-in-out;
	}

	.navbar-item::before {
		@apply absolute bottom-2 left-3 right-0 h-1 w-0 rounded-lg bg-primary content-[""];
		@apply transition-all duration-200 ease-in-out;
	}

	.navbar-item:hover::before {
		@apply w-1/2;
	}

	.navbar-item-active {
		@apply relative;
	}

	.navbar-item-active::before {
		@apply absolute bottom-2 left-3 right-0 h-1 w-1/2 rounded-lg bg-primary content-[""];
	}
</style>
