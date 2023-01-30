import { getProjectsData } from '$lib/infrastructure';

import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	const data = await getProjectsData();

	if (data) {
		return data;
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
