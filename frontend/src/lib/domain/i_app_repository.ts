import type { HomePageModel } from '.';

export interface IAppRepository {
	getHomeData(): Promise<HomePageModel>;
}
