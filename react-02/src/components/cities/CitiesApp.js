import React, { Component } from "react";
import CityCreatorForm from "./CityCreatorForm";

class CitiesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverOkay: true
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
    render() {
        //let cards = this.state.community.map(...);
        return (
            <div id="cities-app">
                <h2>Cities and Community</h2>
                <CityCreatorForm />
                {this.serverStatus()}
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
