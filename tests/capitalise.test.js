import { expect } from '@jest/globals';
import capitaliseString from '../code/capitalise';

test('All caps will return only the first letter capitalised', () => {
  expect(capitaliseString('HELLO')).toBe('Hello');
});

test('Lowercase will return only the first letter capitalised', () => {
  expect(capitaliseString('goodbye')).toBe('Goodbye');
});

test('Mixed case will return only the first letter capitalised', () => {
  expect(capitaliseString('lEEtCoDER')).toBe('Leetcoder');
});
