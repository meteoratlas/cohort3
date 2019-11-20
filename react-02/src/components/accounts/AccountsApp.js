import React, { Component } from "react";
import AccountManager from "./AccountManager";
import AccountCard from "./AccountCard";
import { Account } from "./model/Account";

class AccountsApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
            maxID: 0
        };
        this.cards = [];
    }
    componentDidMount() {
        //this.cards = this.populateCards(this.state.controller.accounts);
    }
    addNewAccount = (name, balance) => {
        // Assume that the AccountManager did the error checking
        let newAccount = new Account(name, balance);
        this.setState(prev => ({
            accounts: [...prev.accounts, newAccount]
        }));
    };
    populateCards = arr => {
        console.log(arr);
        if (!arr) {
            console.warn(
                "ERROR: tried to create account cards with uninitialized account controller."
            );
            return;
        }
        let test = [1, 2, 3];
        test.map(a => {
            //this.setState({ maxID: this.state.maxID + 1 });
            return (
                <p>HEY</p>
                //<AccountCard UID={this.state.maxID} account={a}></AccountCard>
            );
        });
    };
    render() {
        const cards = this.state.controller
            ? this.populateCards(this.state.controller.accounts)
            : null;
        return (
            <div id="account-app">
                <h2>Accounts</h2>
                <AccountManager
                    accounts={this.state.accounts}
                    callback={this.addNewAccount}
                />
                <div id="card-holder">
                    {cards}
                    <AccountCard UID={0} />
                    <AccountCard UID={1} />
                </div>
            </div>
        );
    }
}

export default AccountsApp;
