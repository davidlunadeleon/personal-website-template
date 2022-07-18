export interface BlogPost {
	author?: string;
	authorURL?: string;
	default: { render: CallableFunction; $$render: CallableFunction };
	editDate?: Date;
	publishDate?: Date;
	slug: string;
	summary: string;
	tags: string[];
	title: string;
	translator?: string;
	translatorURL?: string;
}

export interface BlogPosts {
	// Language as object property
	// Map key is the directory under posts/[dir]/[lang].svx, which serves as
	// a sort of ID to map a translated post when switching languages
	[key: string]: Map<string, BlogPost>;
}
