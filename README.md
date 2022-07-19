# personal-website-template

This template was created using the starter provided by [Svelte Kit](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

To learn more about Svelte and Svelte Kit, read the following:

- [Svelte](https://svelte.dev/)
- [Svelte kit](https://kit.svelte.dev/)

## View live example

The live example can be found here: https://personal-website-template-showcase.netlify.app/en

## What is the purpose of this template

The template attempts to achieve the following:

- Have a minimal configuration process.
- Use markdown to type blog posts.
- Support multiple languages, again, with minimal effort.
- Support theming, with support for a dark theme.
- Automatic RSS feed creation.

## Developing and running

Changes to the template can be previewed using the run script to start the development server:

```bash
npm run dev
```

## Building

To create a production version of your app:

```bash
npm run build

# run the following to preview the build
npm run preview
```

## Configuration and quick start guide

1. Clone the repo:

```bash
git clone https://github.com/davidlunadeleon/personal-website-template
cd personal-website-template
npm ci
```

2. Change your configuration in the following places:

	- `src/lib/config/site.ts`: this file allows changing the site name shown in the site's header, as well as the social media links.
	- `src/routes/__layout.svelte`: in this file languages can be added or removed, from the locales located in `locales/`.
		- If a locale is missing, you'll have to create it and add it declare it in this layout file.

3. Write some blog posts and update the about page:

All blog posts and the about page are written in markdown, using [mdsvex](https://mdsvex.com/), which allows writing svelte inside markdown files too, in case it's necessary. These markdown files have the `.svx` extension. All files have a frontmatter section, which takes the following parameters:

```ts
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
```

All properties marked with `?` are optional, leaving only the title as a require frontmatter value. Depending on whether these values are present or not, posts may appear different on the website. 

The about page and its different language version are located in the `src/lib/about/` directory.

The blog post are located in `src/lib/blog/posts/[slug]/[language].svx`. The slug is taken from the file's location, so it's not necessary to specify it in the post's frontmatter. The same goes when telling which language of the blog post.
