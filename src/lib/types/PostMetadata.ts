export default interface PostMetadata {
	author: string;
	authorURL: string;
	editedDate: Date;
	publishedDate: Date;
	slug: { [key: string]: string };
	title: { [key: string]: string };
	tags: { [key: string]: string[] };
	summary: { [key: string]: string };
}
