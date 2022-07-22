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
	const body = `<?xml version="1.0" encoding="UTF-8"?>
	<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>${config.name}</title>
		<link>${config.baseURL}</link>
		<description>${config.description}</description>
		<language>${lang}</language>
		<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
		<atom:link href="${config.baseURL}/lang/rss.xml" rel="self" type="application/rss+xml" />
		${langPosts
			.map(
				(post) => `<item>
<title>${post.title}</title>
<link>${config.baseURL}/${lang}/blog/${post.slug}</link>
<guid isPermaLink="true">${config.baseURL}/${lang}/blog/${post.slug}</guid>
<description>${post.summary}</description>
${post.tags?.map((tag) => `<category>${tag}</category>`).join('')}
${post.publishDate ? `<pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>` : ``}
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
