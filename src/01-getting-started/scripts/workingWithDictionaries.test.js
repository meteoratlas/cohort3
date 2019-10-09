import dictionaryFunctions from './workingWithDictionaries';

test('Testing lookup function', () => {
    expect(dictionaryFunctions.lookup("AB")).toBe("Alberta");
    expect(dictionaryFunctions.lookup("YT")).toBe("Yukon");
    expect(dictionaryFunctions.lookup("BC")).toBe("British Columbia");
});