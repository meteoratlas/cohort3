/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---

const daily = {

    // ***
    // loopStaff - October 21, 2019
    // ***

    loopStaff:(data)=>{
        let emails = [];
        for (let i of data){
            emails.push(daily.makeEmailObj(i));
        }
        return emails;
    },

    // ***
    // More Array Work - October 16-17
    // ***
    arraySlice:(array, begin, end)=>{
        return array.slice(begin, end);
    },
    arraySplice:(array, begin, end, content)=>{
        array.splice(begin, end, content);
        return array;
    },
    arrayForEach:(array) => {
        var count = 0;
        array.forEach(function(i){
            count += i;
        });  
        return count;
    },
    arrayMap:(array, func) => {
        return array.map(func);
    },
    arrayReduce:(array, func) => {
        return array.reduce(func);
    },
    arrayFilter:(array, filter) => {
        return array.filter(filter);
    },
    arraySort:(array, sort) => {
        return array.sort(sort);
    },

    // ***
    // Prepare for Array Work - October 15, 2019 
    // ***
    arrayForLoop:(array) => {
        // sum all the numbers in an array and return it.
        let n = 0;
        for (let i = 0; i < array.length; i++){
            n += array[i];
        }
        return n;
    },
    arrayWhileLoop:(array) => {
        // sum all the numbers in an array and return it.
        let n = 0;
        let i = 0;
        while (i < array.length){
            n += array[i];
            i++;
        }
        return n;
    },
    arrayDoWhileLoop:(array) => {
        let n = 0;
        let i = 0;
        do {
            n += array[i]; 
            i++;
        } while (i < array.length);
        return n;
    },
    arrayForInLoop:(array) => {
        let n = 0;
        for (let i in array) {
            n += array[i];
        }
        return n;
    },
    arrayForOfLoop:(array) => {
        let n = 0;
        for (let i of array) {
            n += i;
        }
        return n;
    },

    // ***
    // makeEmailObj - Oct 11, 2019
    // ***

    makeEmailObj:(obj) => {
        return `${obj['fname'].toLowerCase()}.${obj['lname'].toLowerCase()}@evolveu.ca`;
    },

    // ***
    // makeEmailArr - October 9, 2019
    // ***
    makeEmailArr:(array) => {
        return array[0].toLowerCase() + "." + array[1].toLowerCase() + "@evolveu.ca";
    },

    // ***
    // AssertEquals - October 7, 2019
    // ***
    assertEquals: ((a,b) => {
        if (a === b) {
            return true;
        }
        console.log("*** the two values are not the same:\n" + "p1--> " + a + "\np2--> " + b);
        return false;
    }),
    
}

// and before this comment ---
/*
assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");
*/
export default daily;