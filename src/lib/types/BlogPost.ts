import type PostMetadata from './PostMetadata';

export default interface BlogPost {
	default: {
		render: CallableFunction;
		$$render: CallableFunction;
	};
	metadata: PostMetadata;
}
