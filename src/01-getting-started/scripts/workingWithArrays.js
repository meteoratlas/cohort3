const arrayFunctions = {
    add: (array, n) => { 
        array.push(n); 
        return array; 
    },
    show:  (array) => { 
        return array.join();
    },
    total: (array) => { 
        if (array.length == 0) return 0;
        return array.reduce(
            (acc, cur) => acc + cur
        ); 
    },
    clear: () => { 
        return []; 
    }
}

export default arrayFunctions;