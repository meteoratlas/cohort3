import { City } from "./city.js";

export class Community {
    constructor(){
        this.key = 0;
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
    createCity(name, lat, long, pop){
        let exists = this.cities.map(n => n.name).indexOf(name);
        if (exists > 0) { return "Please enter a unique city name."; }
        this.cities.push(new City(name, lat, long, pop));
    }
    deleteCity(name){
        let exists = this.cities.map(n => n.name).indexOf(name)
        if (exists >= 0) { 
            this.cities.splice(exists, 1);
        }
        
        else { return `The city ${name} is not part of this community.`; }
    }
}