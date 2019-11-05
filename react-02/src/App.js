import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Icon from "./components/Icon";

class App extends Component {
    constructor() {
        super();
        this.state = {
            lastIcon: "nothing"
        };
    }
    reportIconClicked = name => {
      this.setState({
          lastIcon: name
      });
    };
    render() {
        return (
            <div className="App">
                <Icon pic="search.png" name="search" callback={this.reportIconClicked} />
                <Icon pic="techno.png" name="chip" callback={this.reportIconClicked} />
                <Icon pic="picture.png" name="picture" callback={this.reportIconClicked} />
                <Icon pic="cube.png" name="cube" callback={this.reportIconClicked} />
                <Icon pic="book.png" name="book" callback={this.reportIconClicked} />
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
