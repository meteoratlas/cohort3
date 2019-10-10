import daily from './daily';

test('Test the equality', () => {
    // The following line was for an in-class exercise
    // console.log("hello world");
    
    expect(daily.assertEquals(1, 1)).toBe(true); 
    expect(daily.assertEquals("hello", "goodbye")).toBe(false); 
    expect(daily.assertEquals("2", 2)).toBe(false); 
    expect(daily.assertEquals("a", "a")).toBe(true);
    expect(daily.assertEquals("This value","This value")).toBe(true);
    expect(daily.assertEquals({}, null)).toBe(false);
});

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(daily.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(daily.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(daily.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});