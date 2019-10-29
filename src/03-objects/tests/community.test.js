import {Community} from "../community";
import {City} from "../city";

let commune = new Community();
commune.cities.push(new City("Esterville", 64, 32, 32430));
commune.cities.push(new City("Norrland", 87, 43, 104));
commune.cities.push(new City("Grennick", -45, -31, 4504));

test("which city is the furthest north?", ()=>{
    expect(commune.getMostNorthern()).toBe("Norrland");
});

test("which city is the furthest south?", ()=>{
    expect(commune.getMostSouthern()).toBe("Grennick");
});

test("create city", ()=>{
    expect(commune.createCity("Pokiski", 78, 9, 989)).toBe();
    expect(commune.createCity("Pokiski", 22, 1, 2)).toBe("Please enter a unique city name.");
});

test("delete city", ()=>{
    commune.deleteCity("Grennick");
    expect(commune.cities.map((n) => n.name)).toEqual(expect.not.arrayContaining(["Grennick"]));
    commune.deleteCity("Norrland");
    expect(commune.cities.map((n) => n.name)).toEqual(expect.not.arrayContaining(["Norrland"]));
    expect(commune.deleteCity("fakeCity")).toBe("The city fakeCity is not part of this community.");
});