import type { HomeData } from '.';

export interface IAppRepository {
	getHomeData(): Promise<HomeData>;
}
