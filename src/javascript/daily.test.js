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

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(daily.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(daily.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(daily.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});

test('array for loop', () => {
    const arr = [0,1,2,4,8,16];
    expect(daily.arrayForLoop(arr)).toEqual(31);
    expect(daily.arrayForLoop([0,-4,7])).toEqual(3);
    expect(daily.arrayForLoop([-2, 4, "egg"])).toEqual("2egg");
});

test('array while loop', () => {
    const arr = [0,1,2,4,8,16];
    expect(daily.arrayWhileLoop(arr)).toEqual(31);
    expect(daily.arrayWhileLoop([0,-15,8])).toEqual(-7);
    expect(daily.arrayWhileLoop([1, 1, "string"])).toEqual("2string");
});

test('array do while loop', () => {
    const arr = [0,1,2,3];
    expect(daily.arrayDoWhileLoop(arr)).toEqual(6);
    expect(daily.arrayDoWhileLoop([0])).toEqual(0);
    expect(daily.arrayDoWhileLoop([4,44,102])).toEqual(150);
});

test('array for in loop', () => {
    const arr = [0,0,5,5,0,0];
    expect(daily.arrayForInLoop(arr)).toEqual(10);
    expect(daily.arrayForInLoop([-2,-4,-8,-1,0])).toEqual(-15);
    expect(daily.arrayForInLoop([])).toEqual(0);
});

test('array for of loop', () => {
    const arr = [16];
    expect(daily.arrayForOfLoop(arr)).toEqual(16);
    expect(daily.arrayForOfLoop([15,0,1, -4, 4])).toEqual(16);
    expect(daily.arrayForOfLoop([2, 2, 2, 2])).toEqual(8);
});