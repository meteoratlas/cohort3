import React, { Component } from "react";
import "./App.css";
import Icon from "./components/Icon";
import TicTacToeApp from "./components/tictactoe/TicTacToeApp";
import DefaultApp from "./components/DefaultApp";
import AccountsApp from "./components/accounts/AccountsApp";
import CitiesApp from "./components/cities/CitiesApp";
import LinkedListApp from "./components/linkedList/LinkedListApp";
import StackQueueApp from "./components/stackqueue/StackQueueApp";
import SettingsApp from "./components/settings/SettingsApp";
import { Context } from "./ThemeContextProvider";

class App extends Component {
    constructor() {
        super();
        this.tabs = {
            DEFAULT: this.renderDefault,
            TICTACTOE: this.renderTicTacToe,
            ACCOUNTS: this.renderAccounts,
            CITY: this.renderCities,
            LINKEDLIST: this.renderLinkedList,
            STACKQUEUE: this.renderStackQueue,
            SETTINGS: this.renderSettings
        };
        this.state = {
            lastIcon: "nothing",
            currentTab: "STACKQUEUE",
            hovered: ""
        };
    }
    static contextType = Context;
    reportIconClicked = (name, tab) => {
        this.setState({
            lastIcon: name,
            currentTab: tab
        });
    };
    reportIconHovered = value => {
        this.setState({ hovered: value });
    };
    renderDefault = () => {
        return <DefaultApp lastIcon={this.state.hovered} />;
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
    renderLinkedList = () => {
        return <LinkedListApp />;
    };
    renderStackQueue = () => {
        return <StackQueueApp />;
    };
    renderSettings = () => {
        return <SettingsApp />;
    };
    render() {
        const theme = this.context;
        return (
            <div
                className="App .wobble-hor-bottom"
                style={{
                    fontSize: theme.fontSize,
                    color: theme.currentTheme.fg,
                    backgroundColor: theme.currentTheme.bg,
                    borderColor: theme.currentTheme.fg
                }}
            >
                <header>
                    <Icon
                        pic="house.svg"
                        name="home"
                        tab="DEFAULT"
                        callback={this.reportIconClicked}
                        hover={this.reportIconHovered}
                    />
                    <Icon
                        pic="tic.svg"
                        name="tic-tac-toe"
                        tab="TICTACTOE"
                        callback={this.reportIconClicked}
                        hover={this.reportIconHovered}
                    />
                    <Icon
                        pic="coins.svg"
                        name="accounts"
                        tab="ACCOUNTS"
                        callback={this.reportIconClicked}
                        hover={this.reportIconHovered}
                    />
                    <Icon
                        pic="city.svg"
                        name="city"
                        tab="CITY"
                        callback={this.reportIconClicked}
                        hover={this.reportIconHovered}
                    />
                    <Icon
                        pic="chain.svg"
                        name="linkedlist"
                        tab="LINKEDLIST"
                        callback={this.reportIconClicked}
                        hover={this.reportIconHovered}
                    />
                    <Icon
                        pic="stack.svg"
                        name="stackqueue"
                        tab="STACKQUEUE"
                        callback={this.reportIconClicked}
                        hover={this.reportIconHovered}
                    />
                    <Icon
                        pic="settings-knobs.svg"
                        name="settings"
                        tab="SETTINGS"
                        callback={this.reportIconClicked}
                        hover={this.reportIconHovered}
                    />
                </header>
                <div className="App-body">
                    {this.tabs[this.state.currentTab]()}
                </div>
            </div>
        );
    }
}

export default App;
