global.fetch = require('node-fetch');

import { Fetcher, HTMLGenerator } from './citymain'

test("Fetcher: test GetUrl", ()=>{
    expect(Fetcher.getUrl("all").toBe("http://127.0.0.1:5000/all"));
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