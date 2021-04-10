import caesarCipher from '../code/caesar';
//import { expect } from '@jest/globals';

test('a should change to c', () => {
  expect(caesarCipher('a', 2)).toBe('c');
});

test('Wrapping: z should change to b', () => {
  expect(caesarCipher('z', 2)).toBe('b');
});

test('Words: hello should change to Jgnnq', () => {
  expect(caesarCipher('hello', 2)).toBe('jgnnq');
});

test('Capitalisation: Hello should change to Jgnnq', () => {
  expect(caesarCipher('Hello', 2)).toBe('Jgnnq');
});

test('Punctuation should remain intact', () => {
  expect(caesarCipher('Hello!', 2)).toBe('Jgnnq!');
});

test('Negative numbers', () => {
  expect(caesarCipher('d', -2)).toBe('b');
});
