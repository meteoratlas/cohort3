import React, { Component } from "react";
import update from "immutability-helper";
import AccountManager from "./AccountManager";
import AccountCard from "./AccountCard";
import { Account, AccountController } from "./model/Account";
import { AnimateOnChange } from "react-animation";
import AccountReporter from "./AccountReporter";

class AccountsApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cntrl: new AccountController(),
            maxID: 0,
            allAccountsSum: 0,
            highestValueAcc: "",
            lowestValueAcc: ""
        };
        this.cards = [];
    }
    componentDidMount() {}
    addNewAccount = (name, balance) => {
        let newAcc = new Account(name, balance, this.state.maxID);
        let newAccounts = [...this.state.cntrl.accounts, newAcc];
        let newObj = new AccountController();
        newObj.accounts = newAccounts;
        this.setState({ cntrl: newObj, maxID: this.state.maxID + 1 });
        this.updateGlobalAccountValues();
    };
    updateGlobalAccountValues = () => {
        this.setState(state => {
            return {
                highestValueAcc: state.cntrl.findHighestValueAccount(),
                lowestValueAcc: state.cntrl.findLowestValueAccount(),
                allAccountsSum: state.cntrl.totalAllAccountFunds()
            };
        });
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
        let [account] = this.state.cntrl.accounts.filter(a => a.name === name);
        return account;
    }
    getAccount(ID) {
        for (let i = 0; i < this.state.cntrl.accounts.length; i++) {
            if (this.state.cntrl.accounts[i].UID === ID) {
                return i;
            }
        }
        return null;
    }
    withdrawFunds = (accID, toWithdraw) => {
        // on withdraw callback
        this.updateGlobalAccountValues();
    };
    depositFunds = (accID, toDeposit) => {
        // on deposit callback
        this.updateGlobalAccountValues();
    };
    deleteAccount = index => {
        // on delete callback
        this.updateGlobalAccountValues();
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
                <AccountReporter
                    highestAccount={this.state.highestValueAcc}
                    lowestAccount={this.state.lowestValueAcc}
                    allFunds={this.state.allAccountsSum}
                />
                <AnimateOnChange>
                    <div id="card-holder">{cards}</div>
                </AnimateOnChange>
            </div>
        );
    }
}

export default AccountsApp;
