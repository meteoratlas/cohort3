import {City} from "../city";

let myCity = new City("Calgary", 53, 72, 1000000);
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
});

test("citizens move in", ()=>{
    expect(myCity.movedIn(400)).toBe(1000400);
});

test("citizens move out", ()=>{
    expect(myCity.movedOut(20000)).toBe(980400);
});

test("how big is the city in english?", ()=>{
    expect(myCity.howBig()).toBe("city");
})