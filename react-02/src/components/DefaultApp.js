import React from "react";
import logo from "../logo.svg";

const DefaultApp = props => {
    return (
        <React.Fragment>
            <p>The last icon clicked was {props.lastIcon}.</p>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </React.Fragment>
    );
};
export default DefaultApp;
