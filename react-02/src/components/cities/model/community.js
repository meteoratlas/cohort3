import { City } from "./city.js";

export class Community {
    constructor(cities = []) {
        this.currentKey = 0;
        this.cities = cities;
    }
    clone() {
        return new Community(this.cities);
    }
    getMostNorthern() {
        if (this.cities.length === 0) {
            return "No cities are in this community.";
        }
        if (this.cities.length === 1) {
            return this.cities[0].name;
        }
        let northmost = this.cities[0];
        for (let city of this.cities) {
            if (city.latitude > northmost.latitude) {
                northmost = city;
            }
        }
        return northmost.name;
    }
    getMostSouthern() {
        if (this.cities.length === 0) {
            return "No cities are in this community.";
        }
        if (this.cities.length === 1) {
            return this.cities[0].name;
        }
        let southmost = this.cities[0];
        for (let city of this.cities) {
            if (city.latitude < southmost.latitude) {
                southmost = city;
            }
        }
        return southmost.name;
    }
    getPopulation() {
        return this.cities.reduce((a, n) => a + n.population, 0);
    }
    getCity(ID) {
        let city = this.cities.map(n => n.key).indexOf(ID);
        return this.cities[city];
    }
    createCity(name, lat, long, pop) {
        let exists = this.cities.map(n => n.name).indexOf(name);
        if (exists >= 0) {
            return "Please enter a unique city name.";
        }
        let newCity = new City(name, lat, long, pop, this.currentKey);
        this.cities.push(newCity);
        this.currentKey++;
        return newCity;
    }
    deleteCity(city) {
        //let exists = this.cities.map(n => n.key).indexOf(key);
        let exists = this.cities.findIndex(n => n.key === city.key);
        if (exists >= 0) {
            this.cities.splice(exists, 1);
        }
        return this.cities;
    }
}
