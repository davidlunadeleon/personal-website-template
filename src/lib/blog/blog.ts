/**
* @module blog
* @description Handle the processing of all blog posts, extracting relevant
* information from each, such as tags, title, author information, etc.
*/

const modules = import.meta.glob('./posts/*.svx');

let posts = [];
for (const path in modules) {
	const module = await modules[path]();
	posts.push(module);
}

export {posts}
