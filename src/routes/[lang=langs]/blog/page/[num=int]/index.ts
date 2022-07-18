import type { RequestEvent, RequestHandlerOutput } from '@sveltejs/kit/types';
import { posts } from '$lib/blog/blog';

export function get({ params }: RequestEvent): RequestHandlerOutput {
	const page = parseInt(params.num, 10);
	const { lang } = params;

	const pageSize = 10;

	if (isNaN(page) || page < 0 || page >= posts.length / pageSize) {
		return {
			status: 404
		};
	}

	const langPosts = posts.map((post) => {
		return { ...post.metadata };
	});

	return {
		status: 200,
		body: {
			posts: langPosts
		}
	};
}
