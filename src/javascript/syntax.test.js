import syntax from './syntax';

test('Test basic vairables', () => {
    expect(syntax.returnVariable("NUMBER")).toBe(17);
    expect(syntax.returnVariable("STRING")).toBe("This is a string!");
    expect(syntax.returnVariable("BOOLEAN")).toBe(true);
    expect(syntax.returnVariable("ARRAY")).toStrictEqual(["a", "b", 12]);
    expect(syntax.returnVariable("OBJECT")).toStrictEqual({age:10, isObject:true, name: "Josh"});
});

test('Test if else', () => {
    expect(syntax.ifElseExample(1)).toBe("A is one");
    expect(syntax.ifElseExample(2)).toBe("A is two");
    expect(syntax.ifElseExample(14)).toBe("a isn't 1 or 2; it is 14");
    expect(syntax.ifElseExample("word")).toBe("a isn't 1 or 2; it is word");
});

test('Test array add to front', () => {
    expect(syntax.addToArrayAtFront([2,3], 1)).toStrictEqual([1,2,3]);
    expect(syntax.addToArrayAtFront([2,3], {})).toStrictEqual([{}, 2,3]);
});

test('Test array add to back', () => {
    expect(syntax.addToArrayAtBack([2,3], 1)).toStrictEqual([2,3,1]);
    expect(syntax.addToArrayAtBack([2,3], null)).toStrictEqual([2,3, null]);
});

test('Test updating array values', () => {
    expect(syntax.updateArrayValues([2,3], n=>n*2)).toStrictEqual([4,6]);
    expect(syntax.updateArrayValues([12,50, 30, "a"], n=>n*2)).toStrictEqual([24,100, 60, NaN]);
});

test('Test for loop', () => {
    expect(syntax.forLoopExample(3)).toBe(6);
    expect(syntax.forLoopExample(1223)).toBe((1223 * 1224) / 2);
});

test('Test for in loop', () => {
    expect(syntax.forInLoopExample()).toBe(6);
});

test('Test while loop', () => {
    expect(syntax.whileLoopExample([1,3,5])).toBe(9);
    expect(syntax.whileLoopExample([11,203,50])).toBe(264);
});

test('Test do while loop', () => {
    expect(syntax.doWhileLoopExample()).toBe(90);
});

test('Test for each loop', () => {
    expect(syntax.forEachLoopExample([1,8])).toBe("18");
    expect(syntax.forEachLoopExample(["egg",22])).toBe("egg22");
    expect(syntax.forEachLoopExample([null,17, "egg"])).toBe("null17egg");
});

test('Test dictionary', () => {
    expect(syntax.getDictionaryValue("name")).toBe("Sarah");
    expect(syntax.getDictionaryValue("job")).toBe("designer");
    expect(syntax.getDictionaryValue("isMale")).toBe(false);
});