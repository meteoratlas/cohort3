import { Community } from "./community";
import { City } from "./city";

let commune = new Community();
commune.cities.push(new City("Esterville", 64, 32, 32430, 1));
commune.cities.push(new City("Norrland", 87, 43, 104, 2));
commune.cities.push(new City("Grennick", -45, -31, 4504, 3));

let empty = new Community();
let one = new Community();
one.createCity("Eldswidth", 23, 54, 435, 4);

test("which city is the furthest north?", () => {
    expect(commune.getMostNorthern()).toBe("Norrland");
    expect(one.getMostNorthern()).toBe("Eldswidth");
    expect(empty.getMostNorthern()).toBe("No cities are in this community.");
});

test("which city is the furthest south?", () => {
    expect(commune.getMostSouthern()).toBe("Grennick");
    expect(one.getMostSouthern()).toBe("Eldswidth");
    expect(empty.getMostSouthern()).toBe("No cities are in this community.");
});

test("what is the total population of all cities?", () => {
    expect(commune.getPopulation()).toBe(37038);
});

test("create city", () => {
    let commune = new Community();
    let testCity = commune.createCity("Pokiski", 78, 9, 989, 1);
    expect(testCity.population).toBe(989);
    expect(commune.createCity("Pokiski", 22, 1, 2, 1)).toBe(
        "Please enter a unique city name."
    );
});

test("delete city", () => {
    let commune = new Community();
    commune.cities.push(new City("Esterville", 64, 32, 32430, 1));
    commune.cities.push(new City("Norrland", 87, 43, 104, 2));
    commune.cities.push(new City("Grennick", -45, -31, 4504, 3));
    commune.deleteCity(commune.cities[2]);
    expect(commune.cities.map(n => n.name)).toEqual(
        expect.not.arrayContaining(["Grennick"])
    );
    commune.deleteCity(commune.cities[1]);
    expect(commune.cities.map(n => n.name)).toEqual(
        expect.not.arrayContaining(["Norrland"])
    );
    commune.deleteCity(commune.cities[0]);
    expect(commune.cities.map(n => n.name)).toEqual(
        expect.not.arrayContaining(["Esterville"])
    );
    const fakeCity = new City("Fake", 0, 0, 1235, 34);
    // expect the returned array of cities
    expect(commune.deleteCity(fakeCity)).toBe(commune.cities);
});
