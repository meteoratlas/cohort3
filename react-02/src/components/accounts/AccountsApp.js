import React, { Component } from "react";
import update from "immutability-helper";
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
        let newAcc = new Account(name, balance, this.state.maxID);
        let newAccounts = [...this.state.cntrl.accounts, newAcc];
        let newObj = new AccountController();
        newObj.accounts = newAccounts;
        this.setState({ cntrl: newObj, maxID: this.state.maxID + 1 });
    };
    findHighestValueAccount = () => {};
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
                ? this.populateCards(this.state.cntrl.accounts)
                : null;
        return (
            <div id="account-app">
                <h2>Accounts</h2>
                <AccountManager
                    controller={this.state.cntrl}
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
