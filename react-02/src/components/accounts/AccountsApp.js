import React, { Component } from "react";
import AccountManager from "./AccountManager";
import AccountCard from "./AccountCard";
import { Account } from "./model/Account";
import { AnimateOnChange } from "react-animation";

class AccountsApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
            maxID: 0
        };
        this.cards = [];
        this.withdrawFunds = this.withdrawFunds.bind(this);
    }
    addNewAccount = (name, balance) => {
        // The AccountManager handles the error checking
        let newAccount = new Account(name, balance, this.state.maxID);
        this.setState(prev => ({
            accounts: [...prev.accounts, newAccount],
            maxID: this.state.maxID + 1
        }));
    };
    populateCards = arr => {
        return arr.map(a => {
            return (
                <AccountCard
                    key={a.UID}
                    account={a}
                    withdrawCallback={this.withdrawFunds}
                    depositCallback={this.depositFunds}
                    deleteCallback={this.deleteAccount}
                ></AccountCard>
            );
        });
    };
    getAccountByName(name) {
        return this.state.accounts.filter(a => a.name === name)[0];
    }
    getAccount(ID) {
        for (let i = 0; i < this.state.accounts.length; i++) {
            if (this.state.accounts[i].UID === ID) {
                return i;
            }
        }
        return null;
    }
    withdrawFunds = (accID, toWithdraw) => {
        //https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react/43639228
        this.setState(prevState => ({
            accounts: prevState.accounts.map(a =>
                a.UID === accID ? { ...a, funds: a.funds - toWithdraw } : a
            )
        }));
    };
    depositFunds = (accID, toDeposit) => {
        this.setState(prevState => ({
            accounts: prevState.accounts.map(a =>
                a.UID === accID ? { ...a, funds: a.funds + toDeposit } : a
            )
        }));
    };
    deleteAccount = index => {
        let newArr = this.state.accounts.concat();
        // use id to get the relevant account
        //let i = newArr.reduce(uid )
        newArr.splice(index, 1);
        this.setState(prevState => ({ accounts: newArr }));
    };
    render() {
        const cards =
            this.state.accounts.length > 0
                ? this.populateCards(this.state.accounts)
                : null;
        return (
            <div id="account-app">
                <h2>Accounts</h2>
                <AccountManager
                    accounts={this.state.accounts}
                    callback={this.addNewAccount}
                />
                <AnimateOnChange>
                    <div id="card-holder">{cards}</div>
                </AnimateOnChange>
            </div>
        );
    }
}

export default AccountsApp;
