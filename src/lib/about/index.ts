/**
 * @module about
 * @description Handle the processing of the about me pages
 */

import type { BlogPost } from '$lib/types/BlogPosts';
import type About from '$lib/types/About';

const modules = import.meta.globEager('./*.svx');

let pages: About = {};
for (const path in modules) {
	const module = modules[path];
	let [pageLanguage] = path.split('/').reverse();
	if (module.metadata.publishDate) {
		module.metadata.publishDate = new Date(module.metadata.publishDate);
	}
	if (module.metadata.editDate) {
		module.metadata.editDate = new Date(module.metadata.editDate);
	}
	pageLanguage = pageLanguage.slice(0, pageLanguage.indexOf('.'));
	let page = module as BlogPost;

	pages[pageLanguage] = page;
}

export { pages };
