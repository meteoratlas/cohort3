const Fetch = {
    // It's not clear from the assignment what exactly this function should do...
    getFirstName(data){
        return data[0].name;
    },
    getAllFirstNames(data){
        let names = [];
        
        for (let e of data) {
            names.push(e.name);
        }

        return names;
    },
}

export default Fetch;