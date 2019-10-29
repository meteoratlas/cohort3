import daily from './daily';

// ***
// More Array Exercises - October 29, 2019
// ***

test("Get staff balances", ()=>{
    expect(daily.getTotalBalances(data.staff)).toBe(3823);
});

test("Get average balances", ()=>{
    expect(daily.getAverageBalances(data.staff)).toBeCloseTo(546.142);
});

// ***
// loopStaff each / map - October 25, 2019
// ***

test("Email builder with forEach", () => {
    const staffEmail = daily.loopStaffForEach(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test("Email builder with map", () => {
    const staffEmail = daily.loopStaffMap(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

// ***
// loopStaff: in / of - October 24, 2019
// ***

test("Email builder with forOf", () => {
    const staffEmail = daily.loopStaffOf(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test("Email builder with forIn",() => {
    const staffEmail = daily.loopStaffIn(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

// ***
// loopStaff - October 21, 2019
// ***

const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

test('email builder for company', () => {
    const staffEmail = daily.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

// ***
// More Array Work - October 16-17 
// ***

test('array slice', () => {
    const arr = [16, 22, 3, 17, 65, 2];
    expect(daily.arraySlice(arr, 2)).toStrictEqual([3, 17, 65, 2]);
    expect(daily.arraySlice(arr, 3)).toStrictEqual([17, 65, 2]);
    expect(daily.arraySlice(arr, 1, 4)).toStrictEqual([22, 3, 17]);
    expect(daily.arraySlice(arr, 0,arr.length)).toStrictEqual(arr);
});

test('array splice', () => {
    expect(daily.arraySplice([16, 22, 3, 17], 0, 0, "test")).toStrictEqual(["test", 16, 22, 3, 17]);
    expect(daily.arraySplice([16, 22, 3, 17], 1, 3, "end")).toStrictEqual([16, "end"]);
    expect(daily.arraySplice([16, 22, 3, 17], 0, 4, {})).toStrictEqual([{}]);
});

test('array foreach', () => {
    let arr1 = [6, 2, 3, 11];
    let arr2 = [5, 10, -7, 12];
    expect(daily.arrayForEach(arr1)).toBe(22);
    expect(daily.arrayForEach(arr2)).toBe(20);
});

test('array map', () => {
    const arr = [7, 4, 0, 1];
    expect(daily.arrayMap(arr, n => n * 2)).toStrictEqual([14, 8, 0,2]);
    expect(daily.arrayMap(arr, n => n + 3)).toStrictEqual([10, 7, 3, 4]);
    expect(daily.arrayMap(arr, n => String(n * 3 - 1))).toStrictEqual(["20", "11", "-1", "2"]);
});


test('array reduce', () => {
    let arr = [6, 2, 3, 11];
    expect(daily.arrayReduce(arr, (acc, n) => acc + n)).toBe(22);
    expect(daily.arrayReduce(arr, (acc, n) => acc + (n * 2))).toBe(38); // should skip first element and use it as acc init value
});

test('array filter', () => {
    let arr = [6, 2, 3, 11];
    expect(daily.arrayFilter(arr, n=> n > 5)).toStrictEqual([6,11]);
    expect(daily.arrayFilter(arr, n=> n < 3)).toStrictEqual([2]);
    expect(daily.arrayFilter(arr, n=> n % 2 === 0)).toStrictEqual([6,2]);
});


test('array sort', () => {
    let arr = [6, 2, 3, 11];
    expect(daily.arraySort(arr, (a,b)=>a-b)).toStrictEqual([2,3,6,11]);
    expect(daily.arraySort(arr, (a,b)=>b-a)).toStrictEqual([11, 6, 3, 2]);
});

// ***
// Prepare for Array Work - October 15, 2019 
// ***

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

test('array for of loop', () => {
    const arr = [16];
    expect(daily.arrayForOfLoop(arr)).toEqual(16);
});

// ***
// makeEmailObj - Oct 11, 2019
// ***

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(daily.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(daily.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(daily.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});

// ***
// makeEmailArr - October 9, 2019
// ***

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(daily.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(daily.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(daily.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

// ***
// AssertEquals - October 7, 2019
// ***

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