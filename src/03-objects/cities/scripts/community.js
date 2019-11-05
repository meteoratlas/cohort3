import { City } from "./city.js";

export class Community {
    constructor(){
        this.currentKey = 0;
        this.cities = [];
    }
    getMostNorthern(){
        if (this.cities.length === 0) {return "No cities are in this community."}
        if (this.cities.length === 1) {return this.cities[0].name;}
        let northmost = this.cities[0];
        for (let city of this.cities){
            if (city.latitude > northmost.latitude) { 
                northmost = city; 
            }
        }
        return northmost.name;
    }
    getMostSouthern(){
        if (this.cities.length === 0) {return "No cities are in this community."}
        if (this.cities.length === 1) {return this.cities[0].name;}
        let southmost = this.cities[0];
        for (let city of this.cities){
            if (city.latitude < southmost.latitude) { 
                southmost = city; 
            }
        }
        return southmost.name;
    }
    getPopulation(){
        return this.cities.reduce((a, n) => a + n.population, 0);
    }
    getCity(name){
        let city = this.cities.map(n => n.name).indexOf(name);
        return this.cities[city];
    }
    createCity(name, lat, long, pop){
        let exists = this.cities.map(n => n.name).indexOf(name);
        if (exists > 0) { return "Please enter a unique city name."; }
        let newCity = new City(name, lat, long, pop, this.currentKey);
        this.cities.push(newCity);
        this.currentKey++;
        return newCity;
    }
    deleteCity(name){
        let exists = this.cities.map(n => n.name).indexOf(name)
        if (exists >= 0) { 
            return this.cities.splice(exists, 1)[0];
        }
        
        else { return `The city ${name} is not part of this community.`; }
    }
}