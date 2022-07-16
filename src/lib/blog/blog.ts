/**
 * @module blog
 * @description Handle the processing of all blog posts, extracting relevant
 * information from each, such as tags, title, author information, etc.
 */

import type BlogPost from '$lib/types/BlogPost';
import type TagsPosts from '$lib/types/TagsPosts';
import type PostMetadata from '$lib/types/PostMetadata';

const modules = import.meta.globEager('./posts/*.svx');

let posts: BlogPost[] = [];
let tags: TagsPosts = {};
for (const path in modules) {
	const module = modules[path];
	const metadata = module.metadata as PostMetadata;

	posts.push(module as BlogPost);
	Object.entries(metadata.tags).map(([lang, tagsInPost]) => {
		tagsInPost.forEach((tag) => {
			if (tags[lang]) {
				if (tags[lang].has(tag)) {
					// Add ?. operator to avoid warnings. But the check is in place
					tags[lang].get(tag)?.push(metadata);
				} else {
					tags[lang].set(tag, [metadata]);
				}
			} else {
				tags[lang] = new Map([[tag, [metadata]]]);
			}
		});
	});
}

export { posts, tags };
