<script lang="ts">
	import type { SocialLinkModel } from '../domain';

	export let socialLink: SocialLinkModel;
</script>

<a
	class="social-btn btn-link btn mb-2 no-underline hover:no-underline lg:mb-5"
	href={socialLink.action}
	target="_blank"
	rel="noreferrer"
>
	{socialLink.label}
</a>
