/**
 * @module blog
 * @description Handle the processing of all blog posts, extracting relevant
 * information from each, such as tags, title, author information, etc.
 */

import type TagsPosts from '$lib/types/TagsPosts';
import type { BlogPost, BlogPosts } from '$lib/types/BlogPosts';

const modules = import.meta.globEager('./posts/**/*.svx');

let posts: BlogPosts = {};
let tags: TagsPosts = {};
for (const path in modules) {
	const module = modules[path];
	let [postLanguage, postDir] = path.split('/').reverse();
	postLanguage = postLanguage.slice(0, postLanguage.indexOf('.'));
	let post = { metadata: module.metadata, default: module.default } as BlogPost;

	post.metadata.tags.forEach((tag) => {
		if (tags[postLanguage]) {
			if (tags[postLanguage].has(tag)) {
				tags[postLanguage].get(tag)?.push(post);
			} else {
				tags[postLanguage].set(tag, [post]);
			}
		} else {
			tags[postLanguage] = new Map([[tag, [post]]]);
		}
	});

	if (posts[postLanguage]) {
		posts[postLanguage].set(postDir, post);
	} else {
		posts[postLanguage] = new Map([[postDir, post]]);
	}
}

export { posts, tags };
