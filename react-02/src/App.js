import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Icon from "./components/Icon";
import TicTacToeApp from "./components/tictactoe/TicTacToeApp";

class App extends Component {
    constructor() {
        super();
        this.tabs = {
            "DEFAULT": this.renderDefault,
            "TICTACTOE": this.renderTicTacToe,
            "PLACEHOLDER1": this.renderDefault,
            "PLACEHOLDER2": this.renderDefault,
            "PLACEHOLDER3": this.renderDefault,
        }
        this.state = {
            lastIcon: "nothing",
            currentTab: "DEFAULT"
        };
    }
    reportIconClicked = (name, tab) => {
      this.setState({
          lastIcon: name,
          currentTab: tab
      });
    };
    renderDefault = () =>{
        return <React.Fragment>
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
          </React.Fragment>
    }
    renderTicTacToe = () =>{
        return <TicTacToeApp />
    }
    render() {
        return (
            <div className="App">
                <Icon pic="search.png" name="search" tab="DEFAULT" callback={this.reportIconClicked} />
                <Icon pic="techno.png" name="chip" tab="TICTACTOE" callback={this.reportIconClicked} />
                <Icon pic="picture.png" name="picture" tab="PLACEHOLDER1" callback={this.reportIconClicked} />
                <Icon pic="cube.png" name="cube" tab="PLACEHOLDER2" callback={this.reportIconClicked} />
                <Icon pic="book.png" name="book" tab="PLACEHOLDER3" callback={this.reportIconClicked} />
                <header className="App-header">
                { 
                    this.tabs[this.state.currentTab]()
                }
                </header>
            </div>
        );
    }
}

export default App;
