export type SocialLink = {
	label: string;
	value: string;
	action: string;
};

export type IntroData = {
	name: string;
	profession: string;
	yearsOfExperience: number;
	myPicUrl: string;
	socialLinks: SocialLink[];
	cv: string;
};

export type HomeData = {
	intro: IntroData;
};
