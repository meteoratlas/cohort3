import {add, sub, multiply, divide} from './calculator.js';

test('Calculate the sum of two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(100, 144)).toBe(244);
    expect(add(-1, 2)).toBe(1);
});

test('Calculate the difference of two numbers', () => {
    expect(sub(1, 2)).toBe(-1);
    expect(sub(100, 40)).toBe(60);
    expect(sub(200, 77)).toBe(123);
});

test('Calculate the product of two numbers', () => {
    expect(multiply(1, 2)).toBe(2);
    expect(multiply(-2, 8)).toBe(-16);
    expect(multiply(-8, -8)).toBe(64);
    expect(multiply(2389, 0)).toBe(0);
});

test('Calculate the divisor of two numbers', () => {
    expect(divide(1, 2)).toBe(0.5);
    expect(divide(-8, 2)).toBe(-4);
    expect(divide(100, 1)).toBe(100);
    expect(divide(123, 0)).toBe(Infinity);
});