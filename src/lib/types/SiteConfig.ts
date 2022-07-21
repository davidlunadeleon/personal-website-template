interface SocialMedia {
	link: string;
	description: string;
}

export interface SiteConfig {
	baseURL: string;
	description: string;
	name: string;
	socialMedia: SocialMedia[];
	sourceRepository: string;
}
