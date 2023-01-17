import { AppRepository } from '$lib/infrastructure';

import type { PageServerLoad } from './$types';

export const load = (async () => {
	const data = await new AppRepository().getHomeData();

	if (data) {
		return data;
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}) satisfies PageServerLoad;
