import React, { Component } from "react";
//import { AnimateOnChange } from "react-animation";
import { City } from "./model/city";

class CityCreatorForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCityName: "",
            newCityLat: "",
            newCityLong: "",
            newCityPop: "",
            response: ""
        };
    }
    respond = msg => {
        this.setState({
            response: msg
        });
    };
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            response: ""
        });
    };
    createCity = () => {
        // Evaluate form input
        const ref = {
            newCityName: "name",
            newCityLat: "latitude",
            newCityLong: "longitude",
            newCityPop: "population"
        };
        for (let key of Object.keys(ref)) {
            if (!this.state[key]) {
                this.setState({
                    response: `Please enter a ${ref[key]} for your city.`
                });
                return;
            }
        }

        const lat = parseFloat(this.state.newCityLat);
        if (Math.abs(lat) > 90) {
            this.setState({
                response: `Please enter a valid latitude.`
            });
            return;
        }
        const long = parseFloat(this.state.newCityLong);
        if (Math.abs(long) > 180) {
            this.setState({
                response: `Please enter a valid longitude.`
            });
            return;
        }
        const pop = parseInt(this.state.newCityPop);
        if (pop < 0) {
            this.setState({
                response: `Please enter a valid population.`
            });
            return;
        }

        // Check for name dup, key, write to server here
        const newCity = new City(
            this.state.newCityName,
            lat,
            long,
            pop,
            this.props.nextKey
        );
        this.props.callback(newCity);

        // creation successful, reset form
        this.setState({
            response: `Successfully created your new city '${this.state.newCityName}'.`,
            newCityName: "",
            newCityLat: "",
            newCityLong: "",
            newCityPop: ""
        });
    };
    render() {
        return (
            <div id="city-creator">
                <div id="city-creator">
                    <div id="city-maker">
                        <label htmlFor="new-city-name">New City Name</label>
                        <input
                            type="text"
                            id="new-city-name"
                            name="newCityName"
                            value={this.state.newCityName}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="new-city-lat">New City Latitude</label>
                        <input
                            type="number"
                            min="-90"
                            max="90"
                            id="new-city-lat"
                            name="newCityLat"
                            value={this.state.newCityLat}
                            onChange={this.handleInputChange}
                        />
                        <br />
                        <label htmlFor="new-city-long">
                            New City Longitude
                        </label>
                        <input
                            type="number"
                            min="-180"
                            max="180"
                            id="new-city-long"
                            name="newCityLong"
                            value={this.state.newCityLong}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="new-city-pop">
                            New City Population
                        </label>
                        <input
                            type="number"
                            min="1"
                            id="new-city-pop"
                            name="newCityPop"
                            value={this.state.newCityPop}
                            onChange={this.handleInputChange}
                        />
                        <br />
                        <br />
                        <button id="new-city-submit" onClick={this.createCity}>
                            Create City
                        </button>
                        <br />
                        {/* <AnimateOnChange> */}
                        <p id="response">{this.state.response}</p>
                        {/* </AnimateOnChange> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default CityCreatorForm;
