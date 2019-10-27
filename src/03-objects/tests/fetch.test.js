import Fetch from "../fetch.js";

const data = [{"name":"Vanesa","surname":"Oanca","gender":"female","region":"Romania"},{"name":"Tayfur","surname":"Tunç","gender":"male","region":"Turkey"},{"name":"Peter","surname":"Gagnon","gender":"male","region":"Canada"},{"name":"Tudorița","surname":"Sireteanu","gender":"female","region":"Romania"},{"name":"Daraiana","surname":"Muraru","gender":"female","region":"Romania"},{"name":"Constantina","surname":"Datcu","gender":"female","region":"Romania"},{"name":"","surname":"José Antonio Ibáñez","gender":"male","region":"Spain"},{"name":"Münir","surname":"Güler","gender":"male","region":"Turkey"},{"name":"Madan","surname":"Puri","gender":"male","region":"Nepal"},{"name":"Zoltán","surname":"Markovič","gender":"male","region":"Slovakia"}];

test("Get first name", ()=>{
    expect(Fetch.getFirstName(data)).toBe("Vanesa");
});

test("Get array of first names", ()=>{
    expect(Fetch.getAllFirstNames(data)[0]).toBe("Vanesa");
    expect(Fetch.getAllFirstNames(data)[1]).toBe("Tayfur");
    expect(Fetch.getAllFirstNames(data)[data.length - 1]).toBe("Zoltán");
});