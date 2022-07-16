import type PostMetadata from './PostMetadata';

export default interface TagsPosts {
	// Language as key
	[key: string]: Map<string, PostMetadata[]>;
}
