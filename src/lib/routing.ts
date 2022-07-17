export function hrefConvert(locale: string, url: string) {
	if (url.startsWith('/')) {
		url = `/${locale}${url}`;
	}
	return url;
}
