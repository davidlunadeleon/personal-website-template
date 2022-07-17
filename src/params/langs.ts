import { Languages } from '$lib/enums';

export function match(param: string): boolean {
	return Object.values(Languages).includes(param as any);
}
