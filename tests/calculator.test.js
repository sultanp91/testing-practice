import { expect } from '@jest/globals';
import { calculator } from '../code/calculator';

test('Addition is working correctly', () => {
  expect(calculator.add(3, 4)).toBe(7);
});

test('subtraction is working correctly', () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test('multiply is working correctly', () => {
  expect(calculator.multiply(10, 10)).toBe(100);
});

test('divide is working correctly', () => {
  expect(calculator.divide(16, 4)).toBe(4);
});
