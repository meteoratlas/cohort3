import {Community} from "./community.js";
import { City } from "./city.js";

class HTMLGenerator {
    // displays a city's name, properties, and associated data
    static makeCard(city){
        const holder = document.querySelector("#card-holder");

        let div = document.createElement("div");
        div.className = "city-card";
        div.dataset.city = city["name"];

        let image = document.createElement("img");
        image.src = "./icon.png";
        div.appendChild(image);

        div.appendChild(this.makeNodeWithText("h2", city["name"]));
        let desc = com.getCity(city["name"]).show();
        div.appendChild(this.makeNodeWithText("p", desc));

        let popUpButton = this.makeNodeWithText("button", "Add citizens");
        popUpButton.className = "card-add-but";
        div.appendChild(popUpButton);

        let popDownButton = this.makeNodeWithText("button", "Remove citizens");
        popDownButton.className = "card-remove-but";
        div.appendChild(popDownButton);

        let delButton = this.makeNodeWithText("button", "Delete city");
        delButton.className = "card-del-but";
        div.appendChild(delButton);

        let input = document.createElement("input")
        input.type = "number";
        div.appendChild(input);

        holder.appendChild(div);
    }
    static createCardsFromObj(obj){
        const arr = obj[0].cities;
        for (let i of arr){
            this.makeCard(i);
        }
    }
    static createCardsFromCommunity(){
        const arr = com.cities;
        for (let i of arr){
            this.makeCard(i);
        }
    }
    static addCard(card){
        document.querySelector("#card-holder").insertBefore(el, card.nextSibling);
    }
    static deleteCard(card){
        document.querySelector("#card-holder").removeChild(card);
    }
    static makeNodeWithText(node, text) {
        let el = document.createElement(node);
        let txt = document.createTextNode(text);
        el.appendChild(txt);
        return el;
    }
}

class Fetcher{
    static getURL(operation){
        return "http://127.0.0.1:5000/" + operation;
    }
    static async requestFromServer(){
        // use try/catch
        let data = await this.postData(this.getURL('all')); // maybe use read instead?
        return data;
    }
    static async sendData(dataObj){ // object with a key
        // use try/catch
        let request = await this.postData(this.getURL('update'), dataObj); /*{key:1, name:"George"}*/
        return request;
    }
    static populateCollection(collection){
        com.cities = [];
        for (let c of collection){
            let cty = new City(c["name"], c["latitude"], c["longitude"], c["population"]);
            com.cities.push(cty);
        }
        console.table(com.cities)
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

let com = new Community();
com.createCity("Grotznei", 23,65, 23948);
async function initPage(){
    let first = await Fetcher.postData("http://127.0.0.1:5000/" + 'add', com);
}
initPage();

document.querySelector("#test-button").addEventListener("click", async ()=>{
    com.createCity("Lomney", 43,35, 1097);
    Fetcher.sendData(com);
    
    let f = await Fetcher.requestFromServer();
    Fetcher.populateCollection(f[0].cities);
    HTMLGenerator.createCardsFromObj(f);
});

const cardHolder = document.querySelector("#card-holder");
cardHolder.addEventListener("click", e=>{
    if (e.target.className === "card-del-but"){
        com.deleteCity(e.target.parentElement.dataset.city);
        Fetcher.sendData(com);
        cardHolder.removeChild(e.target.parentElement);
    }
    if (e.target.className === "card-add-but"){
        let modify = e.target.parentElement.querySelector("input").value;
        if (modify === ""){
            // TODO number needed notice
            console.log("Please enter a number");
            return;
        }
        com.getCity(e.target.parentElement.dataset.city).population += Number(modify);
        Fetcher.sendData(com);
    }
    if (e.target.className === "card-remove-but"){
        console.log("on remove")
    }
});

document.querySelector("#new-city-submit").addEventListener("click", ()=>{
    const response = document.querySelector("#new-city-response");

    let name = document.querySelector("#new-city-name").value; 
    let lat = document.querySelector("#new-city-lat").value; 
    let long = document.querySelector("#new-city-long").value; 
    let pop = document.querySelector("#new-city-pop").value; 
    if (name === "" || lat === "" || long === "" || pop === ""){
        response.innerText = "Please enter all necessary data.";
        return;
    }
    let attempt = com.createCity(name, Number(lat), Number(long), Number(pop));
    if (typeof attempt === "string") {
        response.innerText = attempt;
    }
    // otherwise, success. Update the server
    Fetcher.sendData(com); // try/catch
    response.innerText = `Successfully created your city '${name}'.`
    HTMLGenerator.createCardsFromCommunity();
});