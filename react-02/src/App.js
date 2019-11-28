import React, { Component } from "react";
import "./App.css";
import Icon from "./components/Icon";
import TicTacToeApp from "./components/tictactoe/TicTacToeApp";
import DefaultApp from "./components/DefaultApp";
import AccountsApp from "./components/accounts/AccountsApp";
import CitiesApp from "./components/cities/CitiesApp";

class App extends Component {
    constructor() {
        super();
        this.tabs = {
            DEFAULT: this.renderDefault,
            TICTACTOE: this.renderTicTacToe,
            ACCOUNTS: this.renderAccounts,
            CITY: this.renderCities,
            LINKEDLIST: this.renderDefault,
            STACKQUEUE: this.renderDefault
        };
        this.state = {
            lastIcon: "nothing",
            currentTab: "ACCOUNTS"
        };
    }
    reportIconClicked = (name, tab) => {
        this.setState({
            lastIcon: name,
            currentTab: tab
        });
    };
    renderDefault = () => {
        return <DefaultApp lastIcon={this.state.lastIcon} />;
    };
    renderTicTacToe = () => {
        return <TicTacToeApp />;
    };
    renderAccounts = () => {
        return <AccountsApp />;
    };
    renderCities = () => {
        return <CitiesApp />;
    };
    render() {
        return (
            <div className="App .wobble-hor-bottom">
                <Icon
                    pic="house.svg"
                    name="home"
                    tab="DEFAULT"
                    callback={this.reportIconClicked}
                />
                <Icon
                    pic="tic.svg"
                    name="tic-tac-toe"
                    tab="TICTACTOE"
                    callback={this.reportIconClicked}
                />
                <Icon
                    pic="coins.svg"
                    name="accounts"
                    tab="ACCOUNTS"
                    callback={this.reportIconClicked}
                />
                <Icon
                    pic="city.svg"
                    name="city"
                    tab="CITY"
                    callback={this.reportIconClicked}
                />
                <Icon
                    pic="chain.svg"
                    name="linkedlist"
                    tab="LINKEDLIST"
                    callback={this.reportIconClicked}
                />
                <Icon
                    pic="stack.svg"
                    name="stackqueue"
                    tab="STACKQUEUE"
                    callback={this.reportIconClicked}
                />
                <header className="App-header">
                    {this.tabs[this.state.currentTab]()}
                </header>
            </div>
        );
    }
}

export default App;
