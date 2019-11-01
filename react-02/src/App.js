import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Icon from "./components/Icon";

class App extends Component {
    constructor() {
        super();
        this.state = {
            lastIcon: "None"
        };
    }
    reportIconClicked = n => {
      console.log("click")
        /*this.setState({
            lastIcon: n
        });*/
    };
    render() {
        return (
            <div className="App">
                <Icon pic="search.png" callback={this.reportIconClicked}/>
                <header className="App-header">
                  <p>The last icon clicked was {this.state.lastIcon}.</p>
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
                </header>
            </div>
        );
    }
}

export default App;
