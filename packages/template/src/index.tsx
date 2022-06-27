import { createSignal } from 'solid-js';

export const createGreeting = (name: string) => {
  const [getGreeting] = createSignal(`Hello ${name}!`);

  return getGreeting;
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test('should do proper greeting', () => {
    const getGreeting = createGreeting('world');

    expect(getGreeting()).toEqual('Hello world!');
  });
}
