const daily = {
    // ***
    // Three functions - November 22, 2019
    // ***
    sortFruitAlphabetical(a, b) {
        if (a.str > b.str) return 1;
        else if (b.str > a.str) return -1;
        return 0;
    },

    // ***
    // Callback Exercise (Part 2) - November 21, 2019
    // ***
    getABBCDemographics(arr) {
        const totalAges = arr.reduce((acc, i) => acc + i.age, 0);
        let obj = {
            totalAges: totalAges,
            averageAge: totalAges / arr.length,
            totalPopulation: arr.length
        };
        return obj;
    },
    // ***
    // Callback Exercise (Part 1) - November 8, 2019
    // ***

    filterAlbertaAndBCResidents(arr, callback) {
        let BCABResidents = [];
        for (let o of arr) {
            if (o.province == "BC" || o.province == "AB")
                BCABResidents.push(callback(o));
        }
        return BCABResidents;
    },

    getFirstLastNames(obj) {
        return `${obj.fname} ${obj.lname}`;
    },

    // ***
    // More Array Exercises (Really) - November 6, 2019
    // ***

    totalOver1000(staff) {
        return staff.filter(n => n.balance >= 1000).map(n => n.balance);
    },

    // ***
    // More Array Exercises - October 29, 2019
    // ***
    getTotalBalances(staff) {
        return staff.map(n => n["balance"]).reduce((a, n) => a + n);
    },
    getAverageBalances(staff) {
        return this.getTotalBalances(staff) / staff.length;
    },

    // ***
    // loopStaff each / map - October 25, 2019
    // ***

    loopStaffForEach(staff) {
        let result = [];
        staff.forEach(n => {
            result.push(daily.makeEmailObj(n));
        });
        return result;
    },

    loopStaffMap(staff) {
        return staff.map(n => daily.makeEmailObj(n));
    },

    // ***
    // loopStaff: in / of - October 24, 2019
    // ***

    loopStaffIn(staff) {
        let result = [];
        for (let i in staff) {
            result.push(daily.makeEmailObj(staff[i]));
        }
        return result;
    },
    loopStaffOf(staff) {
        return this.loopStaff(staff);
    },

    // ***
    // loopStaff - October 21, 2019
    // ***

    loopStaff: data => {
        let emails = [];
        for (let i of data) {
            emails.push(daily.makeEmailObj(i));
        }
        return emails;
    },

    // ***
    // More Array Work - October 16-17
    // ***
    arraySlice: (array, begin, end) => {
        return array.slice(begin, end);
    },
    arraySplice: (array, begin, end, content) => {
        array.splice(begin, end, content);
        return array;
    },
    arrayForEach: array => {
        var count = 0;
        array.forEach(function(i) {
            count += i;
        });
        return count;
    },
    arrayMap: (array, func) => {
        return array.map(func);
    },
    arrayReduce: (array, func) => {
        return array.reduce(func);
    },
    arrayFilter: (array, filter) => {
        return array.filter(filter);
    },
    arraySort: (array, sort) => {
        return array.sort(sort);
    },

    // ***
    // Prepare for Array Work - October 15, 2019
    // ***
    arrayForLoop: array => {
        // sum all the numbers in an array and return it.
        let n = 0;
        for (let i = 0; i < array.length; i++) {
            n += array[i];
        }
        return n;
    },
    arrayWhileLoop: array => {
        // sum all the numbers in an array and return it.
        let n = 0;
        let i = 0;
        while (i < array.length) {
            n += array[i];
            i++;
        }
        return n;
    },
    arrayDoWhileLoop: array => {
        let n = 0;
        let i = 0;
        do {
            n += array[i];
            i++;
        } while (i < array.length);
        return n;
    },
    arrayForInLoop: array => {
        let n = 0;
        for (let i in array) {
            n += array[i];
        }
        return n;
    },
    arrayForOfLoop: array => {
        let n = 0;
        for (let i of array) {
            n += i;
        }
        return n;
    },

    // ***
    // makeEmailObj - Oct 11, 2019
    // ***

    makeEmailObj: obj => {
        return `${obj["fname"].toLowerCase()}.${obj[
            "lname"
        ].toLowerCase()}@evolveu.ca`;
    },

    // ***
    // makeEmailArr - October 9, 2019
    // ***
    makeEmailArr: array => {
        return (
            array[0].toLowerCase() +
            "." +
            array[1].toLowerCase() +
            "@evolveu.ca"
        );
    },

    // ***
    // AssertEquals - October 7, 2019
    // ***
    assertEquals: (a, b) => {
        if (a === b) {
            return true;
        }
        /*
        console.log(
            "*** the two values are not the same:\n" +
                "p1--> " +
                a +
                "\np2--> " +
                b
        );*/
        return false;
    }
};

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
