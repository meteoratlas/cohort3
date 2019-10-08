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