import { expect } from '@jest/globals';
import reverseString from '../code/reverseString';

test('Reversing a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
