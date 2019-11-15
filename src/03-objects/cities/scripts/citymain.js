import { Community } from "./community.js";
import { City } from "./city.js";

const cardHolder = document.querySelector("#card-holder");

export let com = new Community();

export class HTMLGenerator {
    constructor(commune){
        this.com = commune;
    }
    // displays a city's name, properties, and associated data
    makeCard(city) {
        const holder = document.querySelector("#card-holder");

        let div = document.createElement("div");
        div.className = "city-card";
        div.dataset.city = city["name"];

        let image = document.createElement("img");
        image.src = "./icon.png";
        div.appendChild(image);

        div.appendChild(this.makeNodeWithText("h2", city["name"]));
        let desc = this.com.getCity(city["name"]).show();
        div.appendChild(this.makeNodeWithText("p", desc));

        let input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        div.appendChild(input);

        let popUpButton = this.makeNodeWithText("button", "Add citizens");
        popUpButton.className = "card-add-but";
        div.appendChild(popUpButton);

        let popDownButton = this.makeNodeWithText("button", "Remove citizens");
        popDownButton.className = "card-remove-but";
        div.appendChild(popDownButton);

        let delButton = this.makeNodeWithText("button", "Delete city");
        delButton.className = "card-del-but";
        div.appendChild(delButton);

        holder.appendChild(div);
    }
    createCardsFromObj(obj) {
        const arr = obj;
        for (let i of arr) {
            this.makeCard(i);
        }
    }
   createCardsFromCommunity() {
        const arr = this.com.cities;
        for (let i of arr) {
            this.makeCard(i);
        }
    }
    makeNodeWithText(node, text) {
        let el = document.createElement(node);
        let txt = document.createTextNode(text);
        el.appendChild(txt);
        return el;
    }
    updateCard(cityName) {
        const cardHolder = document.querySelector("#card-holder");
        let info = this.com.getCity(cityName);
        let card = [...cardHolder.children].filter(
            n => n.dataset.city === cityName
        )[0];
        card.querySelector("p").innerText = info.show();
    }
}

export class Fetcher {
    static getURL(operation) {
        return "http://127.0.0.1:5000/" + operation;
    }
    static async requestFromServer() {
        // use try/catch
        let data = await this.postData(this.getURL("all")); 
        return data;
    }
    static async updatePop(city){
        let request = await this.postData(
            this.getURL("update"),
            {key: city.key, population:city.population, name:city.name, latitude:city.latitude, longitude:city.longitude}
        );
        return request;
    }
    static async delete(city){
        let request = await this.postData(
            this.getURL("delete"),
            {key: city.key}
        );
        return request;
    }
    static async addData(dataObj) {
        // object with a key
        // use try/catch
        let request = await this.postData(
            this.getURL("add"),
            dataObj
        );
        return request;
    }
    static populateCollection(collection) {
        com.cities = [];
        for (let c of collection) {
            let cty = new City(
                c["name"],
                c["latitude"],
                c["longitude"],
                c["population"],
                c["key"]
            );
            com.cities.push(cty);
        }
    }
    // See api.test.js in reference/src/api repo for detailed documentation
    static async postData(url, data = {}) {
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });

        const json = await response.json(); // parses JSON response into native JavaScript objects
        json.status = response.status;
        json.statusText = response.statusText;
        return json;
    }
}


async function initPage() {
    let serverInit = await Fetcher.requestFromServer();
    console.log(serverInit)
    if (serverInit.length == 0){
        // server is empty
    }
    else {
        // server contains data, populate the page
        Fetcher.populateCollection(serverInit);
        // loop over data, set com.currentkey to highest key+1
        let highest = 0;
        for (let c of serverInit){
            if (c.key > highest) highest = c.key;
        }
        com.currentKey = highest + 1;
        HTMLGen.createCardsFromObj(serverInit);
    }
}
export const HTMLGen = new HTMLGenerator(com);
initPage();