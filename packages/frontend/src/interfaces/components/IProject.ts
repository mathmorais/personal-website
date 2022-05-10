export interface IProject {
	title: string;
	description: string;
	tags: string[];
	photoUrl: string;
	redirects: {
		label: string;
		url: string;
	}[];
}
