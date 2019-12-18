import React from "react";
import logo from "../logo.svg";
import { ThemeContextConsumer } from "../ThemeContextProvider";

const DefaultApp = props => {
    return (
        <ThemeContextConsumer>
            {theme => (
                <div id="default-app" style={{ fontSize: theme.fontSize }}>
                    <h2>React Apps</h2>
                    <p>Click this icon to access {props.lastIcon}.</p>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Click an icon above to choose an application.</p>
                </div>
            )}
        </ThemeContextConsumer>
    );
};
export default DefaultApp;
