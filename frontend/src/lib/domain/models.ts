export type AboutInfoModel = {
	label: string;
	value: string;
};

export type AboutSectionModel = {
	infoCards: AboutInfoModel[];
	message: string;
	myPicTwoUrl: string;
};

export type AppAssetModel = {
	imageUrl: string;
	name: string;
};

export type IntroSectionModel = {
	cv: string;
	myPicUrl: string;
	name: string;
	profession: string;
	socialLinks: SocialLinkModel[];
	yearsOfExperience: number;
};

export type NavBarItemModel = {
	label: string;
	link: string;
};

export type ProjectLinkModel = {
	type: string;
	url: string;
};

export type ProjectPointModel = {
	label: string;
	value: string;
};

export type ProjectModel = {
	description: string;
	language: string;
	links: ProjectLinkModel[];
	points: ProjectPointModel[];
	shortDescription: string;
	thumbnailUrl: string;
	title: string;
};

export type ServiceModel = {
	description: string;
	iconUrl: string;
	label: string;
	seeMorePath: string;
};

export type SocialLinkModel = {
	action: string;
	label: string;
	value: string;
};

export type HomePageModel = {
	about: AboutSectionModel;
	contacts: SocialLinkModel[];
	intro: IntroSectionModel;
	featuredProjects: ProjectModel[];
	services: ServiceModel[];
};
