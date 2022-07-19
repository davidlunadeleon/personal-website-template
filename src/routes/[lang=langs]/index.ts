import type { RequestEvent, RequestHandlerOutput } from '@sveltejs/kit/types';
import { posts } from '$lib/blog';
import { sortBlogPosts } from '$lib/types/PostMetadata';

export function get({ params }: RequestEvent): RequestHandlerOutput {
	const numPosts = 5;
	const { lang } = params;

	const langPosts = [...posts[lang].values()]
		.map((post) => {
			return { ...post.metadata };
		})
		.sort(sortBlogPosts)
		.splice(0, numPosts);
	return {
		status: 200,
		body: {
			posts: langPosts
		}
	};
}
