/**
 * @module blog
 * @description Handle the processing of all blog posts, extracting relevant
 * information from each, such as tags, title, author information, etc.
 */

import type BlogPost from '$lib/types/BlogPost';

const modules = import.meta.globEager('./posts/*.svx');

let posts: BlogPost[] = [];
for (const path in modules) {
	const module = modules[path];
	posts.push(module as BlogPost);
}

export { posts };
