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

    assertEquals: ((a,b) => {
        if (a === b) {
            return true;
        }
        console.log("*** the two values are not the same:\n" + "p1--> " + a + "\np2--> " + b);
        return false;
    }),

    makeEmailArr:(array) => {
        return array[0].toLowerCase() + "." + array[1].toLowerCase() + "@evolveu.ca";
    },

    makeEmailObj:(obj) => {
        return `${obj['fname'].toLowerCase()}.${obj['lname'].toLowerCase()}@evolveu.ca`;
    },

    // Prepare for Array Work - October 15, 2019
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