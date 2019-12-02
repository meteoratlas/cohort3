import { Community } from "./model/community";
import { City } from "./model/city";

export default class Fetcher {
    static getURL(operation) {
        return "http://127.0.0.1:5000/" + operation;
    }
    static async requestFromServer() {
        // use try/catch
        let data = await this.postData(this.getURL("all"));
        return data;
    }
    static async updatePop(city) {
        let request = await this.postData(this.getURL("update"), {
            key: city.key,
            population: city.population,
            name: city.name,
            latitude: city.latitude,
            longitude: city.longitude
        });
        return request;
    }
    static async delete(city) {
        let request = await this.postData(this.getURL("delete"), {
            key: city.key
        });
        return request;
    }
    static async addData(city) {
        let request = await this.postData(this.getURL("add"), city);
        return request;
    }
    static populateCollection(collection) {
        let cities = [];
        for (let c of collection) {
            let cty = new City(
                c["name"],
                c["latitude"],
                c["longitude"],
                c["population"],
                c["key"]
            );
            cities.push(cty);
        }
        return new Community(cities);
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
    static async initPage() {
        let serverInit = await Fetcher.requestFromServer();
        console.log("server init", serverInit);
        if (serverInit.length === 0) {
            // server is empty
            console.log("empty");
        } else {
            // server contains data, populate the state
            const commune = Fetcher.populateCollection(serverInit);
            // loop over data, set com.currentkey to highest key+1
            let highest = 0;
            for (let c of serverInit) {
                if (c.key > highest) highest = c.key;
            }
            //com.currentKey = highest + 1;
            return { com: commune, key: highest + 1 }; // add this to the app state
        }
    }
}
