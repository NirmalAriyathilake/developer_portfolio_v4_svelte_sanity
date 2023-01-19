export type SocialLinkModel = {
	label: string;
	value: string;
	action: string;
};

export type IntroSectionModel = {
	name: string;
	profession: string;
	yearsOfExperience: number;
	myPicUrl: string;
	socialLinks: SocialLinkModel[];
	cv: string;
};

export type AboutInfoModel = {
	label: string;
	value: string;
};

export type AboutSectionModel = {
	infoCards: AboutInfoModel[];
	message: string;
	myPicTwoUrl: string;
};

export type HomePageModel = {
	intro: IntroSectionModel;
	about: AboutSectionModel;
};

export type NavBarItemModel = {
	label: string;
	link: string;
};

export type AppAssetModel = {
	name: string;
	imageUrl: string;
};
