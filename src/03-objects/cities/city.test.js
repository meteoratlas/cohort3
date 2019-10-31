import {City} from "./city";

let myCity = new City("Calgary", 53, 72, 1000000);
let southCity = new City("Pelaskiwin", -20, -23, 123024);
test("City constructor", ()=>{
    expect(myCity.name).toBe("Calgary");
    expect(myCity.latitude).toBe(53);
    expect(myCity.longitude).toBe(72);
    expect(myCity.population).toBe(1000000);
});

test("show city info", ()=>{
    expect(myCity.show()).toBe("Calgary's vital statistics:\nPopulation:1000000\nLatitude:53\nLongitude:72");
})

test("which hemisphere is this city in", ()=>{
    expect(myCity.whichSphere("Calgary")).toBe("northern hemisphere");
    expect(southCity.whichSphere("Pelaskiwin")).toBe("southern hemisphere");
});

test("citizens move in", ()=>{
    expect(myCity.movedIn(400)).toBe(1000400);
    expect(myCity.movedIn(-2)).toBe(undefined);
});

test("citizens move out", ()=>{
    expect(myCity.movedOut(20000)).toBe(980400);
    expect(myCity.movedOut(-2)).toBe(undefined);
});

test("how big is the city in english?", ()=>{
    expect(myCity.howBig()).toBe("city");
    myCity.population = 22340;
    expect(myCity.howBig()).toBe("large town");
    myCity.population = 1504;
    expect(myCity.howBig()).toBe("town");
    myCity.population = 209;
    expect(myCity.howBig()).toBe("village");
    myCity.population = 43;
    expect(myCity.howBig()).toBe("hamlet");
})