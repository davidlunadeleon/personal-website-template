import type { RequestEvent, RequestHandlerOutput } from '@sveltejs/kit/types';
import { config } from '$lib/config/site';
import { posts } from '$lib/blog';
import { sortBlogPosts } from '$lib/types/PostMetadata';

export function get({ params }: RequestEvent): RequestHandlerOutput {
	const { lang } = params;
	const headers = {
		'Cache-Control': 'max-age=0, s-max-age=600',
		'Content-Type': 'application/xml'
	};
	const langPosts = [...posts[lang].values()]
		.map((post) => {
			return { ...post.metadata };
		})
		.sort(sortBlogPosts);
	const body = `<?xml version="1.0" encoding="UFT-8"?>
<rss version="2.0">
	<channel>
		<title>${config.name}</title>
		<link>${config.baseURL}</link>
		<description>${config.description}</description>
		<language>${lang}</language>
		<lastBuildDate>${new Date().toISOString()}</lastBuildDate>
		${langPosts
			.map(
				(post) => `<item>
<title>${post.title}</title>
<link>${config.baseURL}/${lang}/blog/${post.slug}</link>
<description>${post.summary}</description>
${post.tags?.map((tag) => `<category>${tag}</category>`).join('')}
${post.publishDate ? `<pubDate>${new Date(post.publishDate).toISOString()}</pubDate>` : ``}
</item>`
			)
			.join('')}
	</channel>
</rss>`;

	return {
		status: 200,
		body,
		headers
	};
}
