import type { BlogPost } from './BlogPosts';

export default interface TagsPosts {
	// Language as object property.
	// Map key is the tag itself.
	[key: string]: Map<string, BlogPost[]>;
}
