import type { RequestEvent, RequestHandlerOutput } from '@sveltejs/kit/types';
import { tags } from '$lib/blog';

export function get({ params }: RequestEvent): RequestHandlerOutput {
	const page = parseInt(params.num, 10);
	const { lang } = params;

	const pageSize = 10;
	const allLangTags = tags[lang];

	if (isNaN(page) || page < 0 || page >= allLangTags.size / pageSize) {
		return {
			status: 404
		};
	}
	const langTags = [...allLangTags.entries()]
		.map(([tag, posts]) => {
			return { tag, numPosts: posts.length, id: tag };
		})
		.sort(({ numPosts: n1 }, { numPosts: n2 }) => n2 - n1)
		.splice(page * pageSize, pageSize);
	const numPages = Math.ceil(allLangTags.size / pageSize);

	return {
		status: 200,
		body: {
			tags: langTags,
			numTags: allLangTags.size,
			pageSize,
			numPages
		}
	};
}
