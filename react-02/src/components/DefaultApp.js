import React from "react";
import logo from "../logo.svg";

const DefaultApp = props => {
    return (
        <React.Fragment>
            <p>Click this icon to access {props.lastIcon}.</p>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Click an icon above to choose an application.</p>
        </React.Fragment>
    );
};
export default DefaultApp;
