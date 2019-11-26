import React, { Component } from "react";
import AccountManager from "./AccountManager";
import AccountCard from "./AccountCard";
import { Account, AccountController } from "./model/Account";
import { AnimateOnChange } from "react-animation";

class AccountsApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cntrl: new AccountController(),
            maxID: 0
        };
        this.cards = [];
    }
    componentDidMount() {
        //this.setState({ cntrl: new AccountController() });
    }
    addNewAccount = (name, balance) => {
        // The AccountManager will handle the error checking
        // add account callback
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
        // on withdraw callback
    };
    depositFunds = (accID, toDeposit) => {
        // on deposit callback
    };
    deleteAccount = index => {
        // on delete callback
    };
    render() {
        const cards =
            this.state.cntrl.accounts.length > 0
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
