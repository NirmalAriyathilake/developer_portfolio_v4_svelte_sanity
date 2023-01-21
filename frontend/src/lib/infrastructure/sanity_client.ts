import sanityClient from '@sanity/client';

import {
	SANITY_STUDIO_DATASET,
	SANITY_STUDIO_PROJECT_ID,
	SANITY_STUDIO_USE_CDN
} from '$env/static/private';

export const client = sanityClient({
	projectId: SANITY_STUDIO_PROJECT_ID,
	dataset: SANITY_STUDIO_DATASET,
	apiVersion: '2023-01-16',
	useCdn: SANITY_STUDIO_USE_CDN == 'true'
});
