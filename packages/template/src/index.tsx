import { createEffect, createSignal } from 'solid-js';

export const createGreeting = (name: string) => {
	const [getGreeting] = createSignal(`Hello ${name}!`);

	createEffect(() => {
		console.log(getGreeting());
	});

	return getGreeting;
};

if (import.meta.vitest) {
	const { test, expect, vi } = import.meta.vitest;

	test('should do proper greeting', () => {
		const consoleSpy = vi.spyOn(console, 'log');
		const getGreeting = createGreeting('world');

		expect(getGreeting()).toEqual('Hello world!');
		expect(consoleSpy).toBeCalledWith('Hello world!');
	});
}
