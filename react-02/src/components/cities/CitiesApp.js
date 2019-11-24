import React, { Component } from "react";

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
        return (
            <div id="cities-app">
                <h2>Cities and Community</h2>
                {this.serverStatus()}
            </div>
        );
    }
}

export default CitiesApp;
