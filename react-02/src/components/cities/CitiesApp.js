import React, { Component } from "react";
import CityCreatorForm from "./CityCreatorForm";
import { Community } from "./model/community";
import CityCard from "./CityCard";
import CityReporter from "./CityReporter";

class CitiesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverOkay: true,
            maxKey: 0,
            community: new Community(),
            northMostCity: "N/A",
            southMostCity: "N/A",
            totalPop: 0
        };
    }
    serverStatus() {
        if (this.state.serverOkay) {
            return <div></div>;
        }
        return (
            <p>
                A connection to the server could not be established. Please
                ensure the local server is running, and try again.
            </p>
        );
    }
    updateGlobalCityValues = () => {
        if (this.state.community.cities.length < 1) {
            this.setState({ highestValueAcc: "N/A", lowestValueAcc: "N/A" });
            return;
        }
        this.setState(state => {
            return {
                northMostCity: state.community.getMostNorthern(),
                southMostCity: state.community.getMostSouthern(),
                totalPop: state.community.getPopulation()
            };
        });
    };
    componentDidMount() {
        /*fetch(this.getURL("all"))
            .then(response => response.json())
            .then(data => this.setState({ cities: data }, this.findHighestKey));*/
        // test
        /*
        this.addNewCity(new City("TEST", 23, 32, 213, 0));
        this.addNewCity(new City("TEST2", 2, -6, 22334, 1));
        this.addNewCity(new City("Calgary", 42, 23, 231234, 2));
        */
    }
    findHighestKey = () => {
        let highest = 0;
        for (let c of this.state.community) {
            if (c.key > highest) highest = c.key;
        }
        this.setState({ maxKey: highest + 1 });
    };
    addNewCity = async newCity => {
        //let request = await this.postData(this.getURL("add"), newCity);
        let newCommunity = this.state.community.clone();
        newCommunity.cities.push(newCity);
        this.setState(
            {
                community: newCommunity
            },
            this.updateGlobalCityValues
        );
        // update server
    };
    deleteCity = cityID => {
        let newCities = this.state.community.deleteCity(
            this.state.community.getCity(cityID)
        );
        let newCommunity = new Community();
        newCommunity.cities = newCities;
        this.setState({ community: newCommunity }, this.updateGlobalCityValues);
        // update server
    };
    addCitizens = async (cityID, toAdd) => {
        let newCommunity = this.state.community.clone();
        newCommunity.getCity(cityID).movedIn(toAdd);
        this.setState(
            {
                community: newCommunity
            },
            this.updateGlobalCityValues
        );
        // update server
    };
    removeCitizens = async (cityID, toRemove) => {
        let newCommunity = this.state.community.clone();
        newCommunity.getCity(cityID).movedOut(toRemove);
        this.setState(
            {
                community: newCommunity
            },
            this.updateGlobalCityValues
        );
        // update server
    };
    render() {
        let cards = this.state.community.cities.map(a => {
            return (
                <CityCard
                    key={a.UID}
                    city={a}
                    addCitizensCallback={this.addCitizens}
                    removeCitizensCallback={this.removeCitizens}
                    deleteCallback={this.deleteCity}
                ></CityCard>
            );
        });
        return (
            <div id="cities-app">
                <h2>Cities and Community</h2>
                <CityCreatorForm />
                {this.serverStatus()}
                <div id="card-holder">{cards}</div>
            </div>
        );
    }
    getURL(operation) {
        return "http://127.0.0.1:5000/" + operation;
    }
    async postData(url, data = {}) {
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

export default CitiesApp;
