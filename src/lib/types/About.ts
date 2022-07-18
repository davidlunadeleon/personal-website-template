import type { BlogPost } from './BlogPosts';

export default interface About {
	// Language as object property
	[key: string]: BlogPost;
}
