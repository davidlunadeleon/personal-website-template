import type { RequestEvent, RequestHandlerOutput } from '@sveltejs/kit/types';
import { posts } from '$lib/blog';

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
		.sort(({ publishDate: pd1, title: t1 }, { publishDate: pd2, title: t2 }) => {
			if (pd1 && pd2) {
				return pd1.getTime() - pd2.getTime();
			} else if (pd1) {
				return 1;
			} else if (pd2) {
				return -1;
			} else {
				return t2.localeCompare(t1);
			}
		})
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
