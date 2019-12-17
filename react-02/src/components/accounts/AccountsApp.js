import React, { Component } from "react";
//import update from "immutability-helper";
import AccountManager from "./AccountManager";
import AccountCard from "./AccountCard";
import { Account, AccountController } from "./model/Account";
//import { AnimateOnChange } from "react-animation";
import AccountReporter from "./AccountReporter";
import { ThemeContextConsumer, Context } from "../../ThemeContextProvider";

class AccountsApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cntrl: new AccountController(),
            maxID: 0,
            allAccountsSum: 0,
            highestValueAcc: "N/A",
            lowestValueAcc: "N/A"
        };
        this.cards = [];
    }
    static contextType = Context;
    addNewAccount = (name, balance) => {
        let newAcc = new Account(name, balance, this.state.maxID);
        let newAccounts = [...this.state.cntrl.accounts, newAcc];
        let newObj = new AccountController();
        newObj.accounts = newAccounts;
        this.setState(
            { cntrl: newObj, maxID: this.state.maxID + 1 },
            this.updateGlobalAccountValues
        );
    };
    deleteAccount = accID => {
        let newAccounts = this.state.cntrl.removeAccount(
            this.state.cntrl.getAccount(accID)
        );
        let newObj = new AccountController();
        newObj.accounts = newAccounts;
        this.setState({ cntrl: newObj }, this.updateGlobalAccountValues);
    };
    updateGlobalAccountValues = () => {
        if (this.state.cntrl.accounts.length < 1) {
            this.setState({ highestValueAcc: "N/A", lowestValueAcc: "N/A" });
            return;
        }
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
    withdrawFunds = (accID, toWithdraw) => {
        let newCntrl = this.state.cntrl.clone();
        newCntrl.getAccount(accID).withdraw(toWithdraw);
        this.setState(
            {
                cntrl: newCntrl
            },
            this.updateGlobalAccountValues
        );
    };
    depositFunds = (accID, toDeposit) => {
        let newCntrl = this.state.cntrl.clone();
        newCntrl.getAccount(accID).deposit(toDeposit);
        this.setState(
            {
                cntrl: newCntrl
            },
            this.updateGlobalAccountValues
        );
    };
    render() {
        const theme = this.context;
        const cards = this.populateCards(this.state.cntrl.accounts);
        return (
            <div id="account-app" style={{ fontSize: theme.fontSize }}>
                <h2>Accounts</h2>
                <div id="account-interface">
                    <AccountManager
                        controller={this.state.cntrl}
                        callback={this.addNewAccount}
                    />
                    <AccountReporter
                        highestAccount={this.state.highestValueAcc}
                        lowestAccount={this.state.lowestValueAcc}
                        allFunds={this.state.allAccountsSum}
                    />
                </div>
                <div className="card-holder">{cards}</div>
            </div>
        );
    }
}

export default AccountsApp;
