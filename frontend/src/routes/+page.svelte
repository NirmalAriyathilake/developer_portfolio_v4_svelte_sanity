<script lang="ts">
	import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1 class="text-3xl font-bold text-orange-600 text-center">
  Hello {data.name}
</h1>
