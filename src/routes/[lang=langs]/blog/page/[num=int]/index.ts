import type { RequestEvent, RequestHandlerOutput } from '@sveltejs/kit/types';
import { posts } from '$lib/blog';
import { sortBlogPosts } from '$lib/types/PostMetadata';

export function get({ params }: RequestEvent): RequestHandlerOutput {
	const page = parseInt(params.num, 10);
	const { lang } = params;

	const pageSize = 10;

	if (isNaN(page) || page < 0 || page >= posts[lang].size / pageSize) {
		return {
			status: 404
		};
	}

	const langPosts = [...posts[lang].values()]
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
