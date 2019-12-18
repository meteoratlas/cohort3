import React, { Component } from "react";
import CityCreatorForm from "./CityCreatorForm";
import { Community } from "./model/community";
import CityCard from "./CityCard";
import CityReporter from "./CityReporter";
import Fetcher from "./Fetcher";
import { Context } from "../../ThemeContextProvider";

class CitiesApp extends Component {
    componentMounted = false;
    constructor(props) {
        super(props);

        this.state = {
            serverError: false,
            maxKey: 0,
            community: new Community(),
            northMostCity: "N/A",
            southMostCity: "N/A",
            totalPop: 0
        };
    }
    static contextType = Context;
    serverStatus() {
        if (this.state.serverError) {
            return (
                <p>
                    A connection to the server could not be established. Please
                    ensure the local server is running, and refresh.
                </p>
            );
        }
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
        this.componentMounted = true;
        fetch("http://127.0.0.1:5000/all")
            .then(response => {
                if (this.componentMounted) {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Server could not be contacted.");
                    }
                }
            })
            .then(d => {
                const c = Fetcher.populateCollection(d);
                if (this.componentMounted) {
                    this.setState({ community: c }, () => {
                        this.findHighestKey();
                        this.updateGlobalCityValues();
                    });
                }
            })
            .catch(error => {
                if (this.componentMounted) {
                    this.setState({
                        error,
                        serverError: true
                    });
                }
            });
    }
    componentWillUnmount() {
        this.componentMounted = false;
    }
    findHighestKey = () => {
        let highest = 0;
        for (let c of this.state.community.cities) {
            if (c.key > highest) highest = c.key;
        }
        this.setState({ maxKey: highest + 1 });
    };
    addNewCity = async newCity => {
        let newCities = [...this.state.community.cities, newCity];
        let newCommunity = this.state.community.clone();
        newCommunity.cities = newCities;
        this.setState(
            {
                community: newCommunity,
                maxKey: this.state.maxKey + 1
            },
            this.updateGlobalCityValues
        );
        // update server
        Fetcher.addData(newCity);
    };
    deleteCity = cityID => {
        let city = this.state.community.getCity(cityID);
        let newCities = this.state.community.deleteCity(city);
        let newCommunity = new Community();
        newCommunity.cities = newCities;
        this.setState({ community: newCommunity }, this.updateGlobalCityValues);
        // update server
        Fetcher.delete(city);
    };
    addCitizens = async (cityID, toAdd) => {
        let newCommunity = this.state.community.clone();
        let city = newCommunity.getCity(cityID);
        city.movedIn(toAdd);
        this.setState(
            {
                community: newCommunity
            },
            this.updateGlobalCityValues
        );
        // update server
        Fetcher.updatePop(city);
    };
    removeCitizens = async (cityID, toRemove) => {
        let newCommunity = this.state.community.clone();
        let city = newCommunity.getCity(cityID);
        city.movedOut(toRemove);
        this.setState(
            {
                community: newCommunity
            },
            this.updateGlobalCityValues
        );
        // update server
        Fetcher.updatePop(city);
    };
    render() {
        const theme = this.context;
        let cards = this.state.community.cities.map(a => {
            return (
                <CityCard
                    key={a.key}
                    city={a}
                    addCitizensCallback={this.addCitizens}
                    removeCitizensCallback={this.removeCitizens}
                    deleteCallback={this.deleteCity}
                ></CityCard>
            );
        });
        return (
            <div id="cities-app" style={{ fontSize: theme.fontSize }}>
                <h2>Cities and Community</h2>
                {this.state.serverError ? (
                    this.serverStatus()
                ) : (
                    <div id="city-interface">
                        <CityCreatorForm
                            community={this.state.community}
                            callback={this.addNewCity}
                            nextKey={this.state.maxKey}
                        />
                        <CityReporter
                            northMost={this.state.northMostCity}
                            southMost={this.state.southMostCity}
                            totalPop={this.state.totalPop}
                        />
                    </div>
                )}
                <div className="card-holder">{cards}</div>
            </div>
        );
    }
}

export default CitiesApp;
