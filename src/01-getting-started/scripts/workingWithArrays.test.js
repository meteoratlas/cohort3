import arrayFunctions from './workingWithArrays'

test('Testing add function', () => {
    expect(arrayFunctions.add([], 1)).toContain(1);
    expect(arrayFunctions.add([], 101)).toContain(101);
    expect(arrayFunctions.add([], "eggs")).toContain("eggs"); // no strings, should be false
});

test('Testing show function', () => {
    expect(arrayFunctions.show([1,2,3])).toBe("1,2,3");
    expect(arrayFunctions.show([4,25,9,0])).toBe("4,25,9,0");
});

test('Testing total function', () => {
    expect(arrayFunctions.total([1,2,3])).toBe(6);
    expect(arrayFunctions.total([11,20,300])).toBe(331);
    expect(arrayFunctions.total([10])).toBe(10);
    expect(arrayFunctions.total([1,1,3,1,1,1,2])).toBe(10);
});

test('Testing clear function', () => {
    expect(arrayFunctions.clear()).toStrictEqual([]);
});
