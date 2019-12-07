import React from "react";
import logo from "../logo.svg";

const DefaultApp = props => {
    return (
        <div id="default-app">
            <h2>React Apps</h2>
            <p>Click this icon to access {props.lastIcon}.</p>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Click an icon above to choose an application.</p>
        </div>
    );
};
export default DefaultApp;
