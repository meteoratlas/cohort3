import React, { Component } from "react";
import AccountManager from "./AccountManager";
import AccountCard from "./AccountCard";
import { Account, AccountController } from "./model/Account";

class AccountsApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: null,
            maxID: 0
        };
    }
    componentDidMount() {
        if (!this.state.accounts) {
            this.setState({
                accounts: new AccountController()
            });
        }
    }
    render() {
        return (
            <div id="account-app">
                <h2>Accounts</h2>
                <AccountManager />
                <AccountCard UID={0} />
                <AccountCard UID={1} />
            </div>
        );
    }
}

export default AccountsApp;
