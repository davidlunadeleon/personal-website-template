import type {SiteConfig} from '$lib/types/SiteConfig'

export const config: SiteConfig = {
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
}
