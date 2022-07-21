import type { SiteConfig } from '$lib/types/SiteConfig';

export const config: SiteConfig = {
	baseURL: 'https://personal-website-template-showcase.netlify.app',
	description: 'This site is a test.',
	name: 'Test Site',
	sourceRepository: 'https://github.com/davidlunadeleon/personal-website-template',
	socialMedia: [
		{
			link: 'https://mastodon.online',
			description: '@me@mastodon.online'
		},
		{
			link: 'https://pixelfed.social',
			description: '@me@pixelfed.social'
		}
	]
};
