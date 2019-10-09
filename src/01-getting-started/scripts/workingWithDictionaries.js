import provinces from "./provinces.js";

const dictionaryFunctions = {
    lookup: (abbr) => {
        return provinces[abbr];
    }
};

export default dictionaryFunctions;