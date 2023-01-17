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

export type AboutSectionData = {
	infoCards: AboutInfoModel[];
	message: string;
	myPicTwoUrl: string;
};

export type HomePageModel = {
	intro: IntroSectionModel;
};
