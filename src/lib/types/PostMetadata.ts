export default interface PostMetadata {
	editDate?: Date | string;
	publishDate?: Date | string;
	slug: string;
	summary: string;
	tags: string[];
	title: string;
	translator?: string;
	translatorURL?: string;
	author?: string;
	authorURL?: string;
}
