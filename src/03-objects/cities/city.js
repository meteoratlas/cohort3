export class City {
    constructor(name, lat, long, pop){
        this.name = name;
        this.latitude = lat;
        this.longitude = long;
        this.population = pop;
    }
    show(){ 
        return `${this.name} is a ${this.howBig()} in this region. It is located at
        ${this.latitude}°, ${this.longitude}°, in the ${this.whichSphere()}. Its current population is ${this.population}.`;
    }
    movedIn(citizens){ 
        if (citizens < 0) return;
        this.population += citizens;
        return this.population;
    }
    movedOut(citizens){
        if (citizens < 0) return;
        this.population = Math.max(this.population - citizens, 0);
        return this.population;
    }
    whichSphere(){
        return this.latitude > 0 ? "northern hemisphere" : "southern hemisphere";
    }
    howBig(){
        if (this.population > 100000) return "city";
        if (this.population >= 20000) return "large town";
        if (this.population >= 1000) return "town";
        if (this.population >= 100) return "village";
        return "hamlet";
    }
    
}