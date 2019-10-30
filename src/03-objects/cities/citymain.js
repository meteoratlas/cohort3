import {Community} from "./community.js";

// Set up some example data for testing
let firstPush = false;
let com = new Community();
com.createCity("Almandy", 50.34, -75.34, 3240);
com.createCity("Polinia", 34.213, 5.234, 134843);
document.querySelector("#test-button").addEventListener("click", async ()=>{
    if (!firstPush) {
        firstPush = true;
        let data = await Fetcher.postData(Fetcher.getURL('add'), com /*{key:0, name:"push from js?"}*/);
        data = await Fetcher.postData(Fetcher.getURL('all'));
        console.log(data);
    }
    else {
        com.createCity("Lomney", 43,35, 1097);
        Fetcher.sendData(com);
        com.createCity("Grotznei", 23,65, 23948);
        Fetcher.sendData(com);
    }
});

class HTMLGenerator {
    // displays a city's name, properties, and associated data
    makeCard(city){
        let id; // set id of card to city name (should be unique)
        let thisCard = document.querySelector(".city-card " + id);
        document.querySelector(".city-card " + id + " " + p).innerText = 
        `${city.name} is a ${city.howBig()}.`
    }
}

class Fetcher{
    static getURL(operation){
        return "http://127.0.0.1:5000/" + operation;
    }

    static async requestFromServer(){
        // use try/catch
        let data = await this.postData(this.getURL('all'));
        return data;
    }
    static async sendData(dataObj){ // object with a key
        // use try/catch
        let request = await this.postData(this.getURL('update'), dataObj); /*{key:1, name:"George"}*/
    }

    // See api.test.js in reference/src/api repo for detailed documentation
    static async postData(url = '', data = {}) {
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
}