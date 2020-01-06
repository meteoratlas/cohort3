const syntax = {
    // Variables
    // This function returns a different variable type based on the input.
    returnVariable(type) {
        let requested = type.toUpperCase();
        if (requested == "NUMBER") {
            return 17;
        }
        if (requested == "STRING") {
            return "This is a string!";
        }
        if (requested == "BOOLEAN") {
            return true;
        }
        if (requested == "ARRAY") {
            return ["a", "b", 12];
        }
        if (requested == "DICTIONARY" || requested == "OBJECT") {
            return { age: 10, isObject: true, name: "Josh" };
        }
    },

    // If/else
    ifElseExample: a => {
        if (a == 1) {
            return "A is one";
        } else if (a == 2) {
            return "A is two";
        } else {
            return "a isn't 1 or 2; it is " + a;
        }
    },

    // Arrays
    array: [1, 2, 3],
    addToArrayAtFront: (array, n) => {
        array.unshift(n);
        return array;
    },
    addToArrayAtBack: (array, n) => {
        array.push(n);
        return array;
    },
    // Use the array map() function to update each value in the array using that function.
    updateArrayValues: (array, func) => {
        return array.map(func);
    },

    // Loops
    // Sum the total of the numbers making up the user's input.
    forLoopExample: max => {
        if (max == null) {
            return "Must enter a number.";
        }
        let sum = 0;
        for (let i = 0; i <= max; i++) {
            sum += i;
        }
        return sum;
    },
    // Basic object for the forIn example.
    iterables: { a: 1, b: 2, c: 3 },

    // Add each value in the iterables object to a collective sum.
    forInLoopExample: () => {
        let result = 0;
        for (let i in syntax.iterables) {
            result += syntax.iterables[i];
        }
        return result;
    },
    // Add all the values in an array using a while loop.
    whileLoopExample: array => {
        let i = 0;
        let n = 0;
        while (i < array.length) {
            n += array[i];
            i++;
        }
        return n;
    },
    // Sum the values in the linear sequence leading up to 10, and multiple each by 2.
    doWhileLoopExample: () => {
        let i = 0;
        let n = 0;
        do {
            n += i * 2;
            i++;
        } while (i < 10);
        return n;
    },
    // Return a string of each value in the passed array.
    forEachLoopExample: array => {
        let n = "";
        array.forEach(element => {
            n += element;
        });
        return n;
    },

    // Dictionaries
    exampleDictionary: {
        name: "Sarah",
        age: "28",
        job: "designer",
        isMale: false
    },
    // Return the corresponding dictionary value given the key.
    getDictionaryValue: key => {
        if (syntax.exampleDictionary.hasOwnProperty(key)) {
            return syntax.exampleDictionary[key];
        } else {
            return "Key was not valid in this dictionary.";
        }
    }
};

export default syntax;
