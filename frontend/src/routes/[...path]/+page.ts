import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	throw error(404, 'Not Found');
};
