import type { RequestEvent, RequestHandlerOutput } from '@sveltejs/kit/types';
import { sortBlogPosts } from '$lib/types/PostMetadata';
import { tags } from '$lib/blog';

export function get({ params }: RequestEvent): RequestHandlerOutput {
	const page = parseInt(params.num, 10);
	const { lang, tag } = params;

	const pageSize = 10;
	const langTag = tags[lang].get(tag);

	if (!langTag) {
		return {
			status: 404
		};
	}

	if (isNaN(page) || page < 0 || page >= langTag.length / pageSize) {
		return {
			status: 404
		};
	}

	const langPosts = langTag
		.map((post) => {
			return { ...post.metadata };
		})
		.sort(sortBlogPosts)
		.splice(page * pageSize, pageSize);
	const numPages = Math.ceil(langPosts.length / pageSize);

	return {
		status: 200,
		body: {
			posts: langPosts,
			numPages
		}
	};
}
