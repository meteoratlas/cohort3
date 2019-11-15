global.fetch = require('node-fetch');
import { Fetcher, HTMLGenerator } from './citymain';
import {City} from "./city";
import { Community } from './community';
/*
// https://dev.to/snowleo208/things-i-learned-after-writing-tests-for-js-and-html-page-4lja
describe('Test main.js file', () => {

    const fs = require('fs');
    const path = require('path');
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

    jest.dontMock('fs');

    beforeEach(() => {
        //import entire html file before each test function
        document.documentElement.innerHTML = html.toString();
    });

    afterEach(() => {
        // restore the original func after test
        jest.resetModules();
    });

    test("Fetcher: test GetUrl", ()=>{
        expect(Fetcher.getUrl("all").toBe("http://127.0.0.1:5000/all"));
    });
})
*/
test("HTMLGenerator: make card", ()=>{
    document.body.innerHTML = "<div id='card-holder'></div>";
    let com = new Community();
    com.createCity("Humbrooke", 54, 34, 414,0);
    let html = `<img src="./icon.png"><h2>Humbrooke</h2><p>Humbrooke is a village in this region. It is located at 54°, 34°, in the northern hemisphere. Its current population is 414.</p><input type="number" min="0"><button class="card-add-but">Add citizens</button><button class="card-remove-but">Remove citizens</button><button class="card-del-but">Delete city</button>`;
    const HTMLGen = new HTMLGenerator(com);
    HTMLGen.makeCard(com.cities[0]);
    expect(document.querySelector("#card-holder").children[0].innerHTML).toBe(html);
});

test("create cards from community", () =>{
    document.body.innerHTML = "<div id='card-holder'></div>";
    let com = new Community();
    const HTMLGen = new HTMLGenerator(com);
    com.createCity("Humbrooke", 54, 34, 414,0);
    com.createCity("Ran", -24, 14, 34,12321);
    let expected = "<div id=\"card-holder\"><div class=\"city-card\" data-city=\"Humbrooke\"><img src=\"./icon.png\"><h2>Humbrooke</h2><p>Humbrooke is a village in this region. It is located at 54°, 34°, in the northern hemisphere. Its current population is 414.</p><input type=\"number\" min=\"0\"><button class=\"card-add-but\">Add citizens</button><button class=\"card-remove-but\">Remove citizens</button><button class=\"card-del-but\">Delete city</button></div><div class=\"city-card\" data-city=\"Ran\"><img src=\"./icon.png\"><h2>Ran</h2><p>Ran is a hamlet in this region. It is located at -24°, 14°, in the southern hemisphere. Its current population is 34.</p><input type=\"number\" min=\"0\"><button class=\"card-add-but\">Add citizens</button><button class=\"card-remove-but\">Remove citizens</button><button class=\"card-del-but\">Delete city</button></div></div>";
    HTMLGen.createCardsFromCommunity();
    expect(document.body.innerHTML).toBe(expected);
});

test("create cards from object", () =>{
    document.body.innerHTML = "<div id='card-holder'></div>";
    let obj = [
        {
          "key": 0,
          "latitude": 54,
          "longitude": 34,
          "name": "Humbrooke",
          "population": 414
        },
        {
          "key": 1,
          "latitude": -24,
          "longitude": 14,
          "name": "Ran",
          "population": 12321
        }
      ];
    let com = new Community();
    const HTMLGen = new HTMLGenerator(com);
    com.createCity("Humbrooke", 54, 34, 414,0);
    com.createCity("Ran", -24, 14, 34,12321);
    let expected = "<div id=\"card-holder\"><div class=\"city-card\" data-city=\"Humbrooke\"><img src=\"./icon.png\"><h2>Humbrooke</h2><p>Humbrooke is a village in this region. It is located at 54°, 34°, in the northern hemisphere. Its current population is 414.</p><input type=\"number\" min=\"0\"><button class=\"card-add-but\">Add citizens</button><button class=\"card-remove-but\">Remove citizens</button><button class=\"card-del-but\">Delete city</button></div><div class=\"city-card\" data-city=\"Ran\"><img src=\"./icon.png\"><h2>Ran</h2><p>Ran is a hamlet in this region. It is located at -24°, 14°, in the southern hemisphere. Its current population is 34.</p><input type=\"number\" min=\"0\"><button class=\"card-add-but\">Add citizens</button><button class=\"card-remove-but\">Remove citizens</button><button class=\"card-del-but\">Delete city</button></div></div>";
    HTMLGen.createCardsFromObj(obj);
    expect(document.body.innerHTML).toBe(expected);
});

test("test makeNodeWithText", ()=>{
    let com = new Community();
    const HTMLGen = new HTMLGenerator(com);
    let testDiv1 = document.createElement("p");
    let txt = document.createTextNode("Example text");
    testDiv1.appendChild(txt);
    expect(HTMLGen.makeNodeWithText("p", "Example text")).toStrictEqual(testDiv1);
});

test("test update card", ()=>{
    document.body.innerHTML = "<div id='card-holder'><div id=\"card-holder\"><div class=\"city-card\" data-city=\"Humbrooke\"><img src=\"./icon.png\"><h2>Humbrooke</h2><p>Humbrooke is a village in this region. It is located at 54°, 34°, in the northern hemisphere. Its current population is 414.</p><input type=\"number\" min=\"0\"><button class=\"card-add-but\">Add citizens</button><button class=\"card-remove-but\">Remove citizens</button><button class=\"card-del-but\">Delete city</button></div></div>";
    let com = new Community();
    const HTMLGen = new HTMLGenerator(com);
    com.createCity("Humbrooke", 54, 34, 414,0);
    com.getCity("Humbrooke").population += 1;
    let expected = "<div id=\"card-holder\"><div class=\"city-card\" data-city=\"Humbrooke\"><img src=\"./icon.png\"><h2>Humbrooke</h2><p>Humbrooke is a village in this region. It is located at 54°, 34°, in the northern hemisphere. Its current population is 415.</p><input type=\"number\" min=\"0\"><button class=\"card-add-but\">Add citizens</button><button class=\"card-remove-but\">Remove citizens</button><button class=\"card-del-but\">Delete city</button></div>";
    HTMLGen.updateCard("Humbrooke");
    expect(document.body.innerHTML).toBe(expected);
});

// Fetcher

test("Fetcher: test GetUrl", ()=>{
    expect(Fetcher.getURL("all")).toBe("http://127.0.0.1:5000/all");
    expect(Fetcher.getURL("add")).toBe("http://127.0.0.1:5000/add");
});

/*
test("Test connection to server", async ()=>{
    const clients = [
        {key:1, name:"Larry"},
        {key:2, name:"Lorraine"},
    ]

    // Check that the server is running and clear any data
    let data = await postData(url + 'clear');
    console.log(data);
})

// See api.test.js in reference/src/api repo for detailed documentation
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });

    const json = await response.json();    // parses JSON response into native JavaScript objects
    json.status = response.status;
    json.statusText = response.statusText;
    // console.log(json, typeof(json));
    return json;
}
*/