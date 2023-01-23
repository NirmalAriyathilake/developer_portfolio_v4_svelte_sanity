import { getAssets, getWebsiteData } from '$lib/infrastructure';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const assetData = await getAssets();
	const websiteData = await getWebsiteData();

	if (assetData && websiteData) {
		return {
			assetData: assetData,
			websiteData: websiteData
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
};
