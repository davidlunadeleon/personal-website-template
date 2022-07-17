import * as licenses from '$lib/data/licenses.json';

export function get() {
	return {
		status: 200,
		body: { licenses }
	};
}
