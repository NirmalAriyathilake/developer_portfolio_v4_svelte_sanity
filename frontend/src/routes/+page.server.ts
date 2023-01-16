import sanityClient from '@sanity/client';

import { SANITY_STUDIO_DATASET, SANITY_STUDIO_PROJECT_ID } from '$env/static/private';

import type { PageServerLoad } from './$types';

const client = sanityClient({
	projectId: SANITY_STUDIO_PROJECT_ID,
	dataset: SANITY_STUDIO_DATASET,
	apiVersion: '2023-01-16',
	useCdn: false
});

export const load = (async () => {
	const data = await client.fetch(`*[_type == "intro"]`);

	console.log("APPLOG :: data : ", data)
	
	if (data) {
		return {
			name: data[0]['name']
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}) satisfies PageServerLoad;
