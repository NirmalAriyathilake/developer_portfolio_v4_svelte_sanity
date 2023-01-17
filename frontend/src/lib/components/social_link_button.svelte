<script lang="ts">
	import type { SocialLink } from "../domain";


    export let socialLink: SocialLink
</script>

<a class="btn btn-link no-underline hover:no-underline social-btn mb-5"  
    href={socialLink.action}
    target="_blank" 
    rel="noreferrer">
    {socialLink.label}
</a>
