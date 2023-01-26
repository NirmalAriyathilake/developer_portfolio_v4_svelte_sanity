import type { AppAssetModel, HomePageModel, WebsiteMetaTagModel } from '../domain';
import { client } from './sanity_client';

export const getHomeData = async (): Promise<HomePageModel> => {
	const query = `*[_type == "home"]{
				intro 
					{
						name,
						profession,
						yearsOfExperience,
						"myPicUrl": myPic.asset->url,
						"cv": cv.asset->url,
						socialLinks[] ->
						{
							label, 
							value,
							action
						}
					},
				about 
					{
						message,
						"myPicTwoUrl": myPicTwo.asset->url,
						infoCards[] -> 
						{
							label,
							value
						}
					},
				services[]
					{
						description,
						label,
						seeMorePath,
						"iconUrl": icon.asset->url
					},
				featuredProjects[] ->
					{
						title,
						shortDescription,
						description,
						language,
						links[]
						{
							type, 
							url
						},
						points[]
						{
							label,
							value
						},
						"thumbnailUrl": thumbnail.asset->url
					},
				workExperiences[] ->
					{
						name,
						designation,
						from,
						to,
						"logoUrl": logo.asset->url
					},
				contacts[] ->
					{
						label,
						action,
						value,
						"iconUrl": icon.asset->url
					}
				}`;

	const data = await client.fetch(query);

	const homeData: HomePageModel = data[0];

	return homeData;
};

export const getAssets = async () => {
	const query = `*[_type == "app_asset"]
		{
			"imageUrl": image.asset->url,
			name
		}`;

	const data = await client.fetch(query);

	const assetMap: Record<string, string> = {};

	data.forEach((asset: AppAssetModel) => {
		assetMap[asset.name] = asset.imageUrl;
	});

	return assetMap;
};

export const getWebsiteData = async () => {
	const query = `*[_type == "website"]
		{
			type,
			label,
			content
		}`;

	const data = await client.fetch(query);

	const websiteData: WebsiteMetaTagModel[] = data;

	return websiteData;
};
