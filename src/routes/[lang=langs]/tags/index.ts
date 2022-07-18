import type { RequestEvent, RequestHandlerOutput } from '@sveltejs/kit/types';
import { tags } from '$lib/blog/blog';

export function get({ params, url }: RequestEvent): RequestHandlerOutput {
	const page = Math.max(parseInt(url.searchParams.get('page') ?? '0', 10), 0);
	const { lang } = params;

	const pageSize = 10;
	const allLangTags = tags[lang];
	const langTags = [...allLangTags.entries()]
		.map(([tag, posts]) => {
			return { tag, numPosts: posts.length, id: tag };
		})
		.sort(({ numPosts: n1 }, { numPosts: n2 }) => n2 - n1)
		.splice(page * pageSize, pageSize);

	return {
		status: 200,
		body: {
			tags: langTags,
			numTags: allLangTags.size,
			pageSize
		}
	};
}
