import type { HomePageModel, IAppRepository } from '../domain';
import { client } from './sanity_client';

class AppRepository implements IAppRepository {
	getHomeData = async (): Promise<HomePageModel> => {
		const data = await client.fetch(
			`*[_type == "home"]{
				intro 
					{
						...,
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
						...,
						"myPicTwoUrl": myPicTwo.asset->url,
						infoCards[] -> 
						{
							label,
							value
						}
					}
				}`
		);

		console.log('APPLOG :: AppRepository  :: data : ', data);

		const homeData: HomePageModel = data[0];

		return homeData;
	};
}

export default AppRepository;
