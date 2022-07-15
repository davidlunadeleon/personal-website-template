interface SocialMedia {
	link: string,
	description: string
}

export interface SiteConfig {
	name: string,
	sourceRepository: string,
	socialMedia: SocialMedia[]
}
