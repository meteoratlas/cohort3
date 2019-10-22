import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(100)).toBe("large");
    expect(functions.size(101)).toBe("extra large");
    expect(functions.size(2000000)).toBe("extra large");
});

test('Does the add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test('Does the sub function work?', () => {
    expect(functions.subtract(1,2)).toBe(-1);
    expect(functions.subtract(70,12)).toBe(58);
});