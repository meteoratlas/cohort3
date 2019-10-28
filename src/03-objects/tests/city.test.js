import City from "../city";

let myCity = new City("Calgary", 54, 72, 1000000);
test("City constructor", ()=>{
    expect(myCity.name).toBe("Calgary");
    expect(myCity.latitude).toBe(54);
    expect(myCity.longitude).toBe(72);
    expect(myCity.population).toBe(1000000);
});

test("show city info", ()=>{
    expect(myCity.show()).toBe("Calgary's vital statistics:\nPopulation:1000000\nLatitude:53\nLongitude:72")''
})

test("citizens move in", ()=>{
    expect(myCity.moveIn(400)).toBe(1000400);
});

test("citizens move out", ()=>{
    expect(myCity.moveOut(20000)).toBe(980400);
});

test("how big is the city in english?", ()=>{
    expect(myCity.howBig()).toBe("city");
})