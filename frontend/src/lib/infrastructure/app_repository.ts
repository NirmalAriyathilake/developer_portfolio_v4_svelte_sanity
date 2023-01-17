import type { HomeData, IAppRepository } from '../domain';
import { client } from './sanity_client';

class AppRepository implements IAppRepository {
	getHomeData = async (): Promise<HomeData> => {
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
					}
				}`
		);

		console.log('APPLOG :: AppRepository  :: data : ', data);

		const homeData: HomeData = data[0];

		return homeData;
	};
}

export default AppRepository;
