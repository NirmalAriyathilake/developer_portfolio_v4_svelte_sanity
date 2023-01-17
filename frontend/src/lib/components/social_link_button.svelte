<script lang="ts">
	import type { SocialLink } from '../domain';

	export let socialLink: SocialLink;
</script>

<a
	class="social-btn btn-link btn mb-5 no-underline hover:no-underline"
	href={socialLink.action}
	target="_blank"
	rel="noreferrer"
>
	{socialLink.label}
</a>
