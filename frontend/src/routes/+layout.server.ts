import { getAssets } from '$lib/infrastructure';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const data = await getAssets();

	if (data) {
		return data;
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
