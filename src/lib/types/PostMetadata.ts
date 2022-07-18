export default interface PostMetadata {
	editDate?: Date | string;
	publishDate?: Date | string;
	slug?: string;
	summary?: string;
	tags?: string[];
	title: string;
	translator?: string;
	translatorURL?: string;
	author?: string;
	authorURL?: string;
}

export function sortBlogPosts(
	{ publishDate: pd1, title: t1 }: PostMetadata,
	{ publishDate: pd2, title: t2 }: PostMetadata
) {
	if (pd1 && pd2) {
		return new Date(pd2).getTime() - new Date(pd1).getTime();
	} else if (pd2) {
		return 1;
	} else if (pd1) {
		return -1;
	} else {
		return t2.localeCompare(t1);
	}
}
