export default interface PostMetadata {
	editDate?: Date;
	publishDate?: Date;
	slug: string;
	summary: string;
	tags: string[];
	title: string;
	translator?: string;
	translatorURL?: string;
	author?: string;
	authorURL?: string;
}
