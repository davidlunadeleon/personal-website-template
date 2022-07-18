import type PostMetadata from './PostMetadata';

export interface BlogPost {
	metadata: PostMetadata;
	default: { render: CallableFunction; $$render: CallableFunction };
}

export interface BlogPosts {
	// Language as object property
	// Map key is the directory under posts/[dir]/[lang].svx, which serves as
	// a sort of ID to map a translated post when switching languages
	[key: string]: Map<string, BlogPost>;
}
