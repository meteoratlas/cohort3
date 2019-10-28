import Community from "../community"

let commune = new Community();
commune.cities.push(new City("Esterville", 64, 32, 32430));
commune.cities.push(new City("Norrland", 87, 43, 104));
commune.cities.push(new City("Grennick", -45, -31, 4504));

test("which hemisphere is this city in", ()=>{
    expect(commune.whichSphere("Esterville")).toBe("northern hemisphere");
});

test("which city is the furthest north?", ()=>{
    expect(commune.getMostNorthern()).toBe("Norrland");
});

test("which city is the furthest south?", ()=>{
    expect(commune.getMostSouthern()).toBe("Grennick");
});

test("create city", ()=>{
    expect(commune.createCity("Pokiski", 78, 9, 989)).toBe();
});

test("delete city", ()=>{
    expect(commune.deleteCity("Pokiski")).toBe();
});