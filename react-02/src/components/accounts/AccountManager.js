import React, { Component } from "react";
import { AnimateOnChange } from "react-animation";

class AccountManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newAccountName: "",
            newAccountBalance: "",
            response: ""
        };
    }
    respond = msg => {
        this.setState({
            response: msg
        });
    };
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            response: ""
        });
    };
    findHighestOrLowest = hiOrLo => {
        if (this.props.accounts.length === 0) {
            this.respond("You have no accounts.");
            return;
        }
        if (this.props.accounts.length === 1) {
            let acc = this.props.accounts[0].name;
            this.respond(
                `Your ${hiOrLo} value account is ${acc.name}, containing $${acc.funds}.`
            );
        }
        let baseline = this.props.accounts[0];
        this.props.accounts.forEach(n => {
            if (hiOrLo === "highest") {
                if (n.funds > baseline.funds) {
                    baseline = n;
                }
            } else {
                if (n.funds < baseline.funds) {
                    baseline = n;
                }
            }
        });
        this.respond(
            `Your ${hiOrLo} value account is ${baseline.name}, containing $${baseline.funds}.`
        );
    };
    sumAccounts = () => {
        if (this.props.accounts.length === 0) {
            this.respond("You have no accounts.");
            return;
        }
        if (this.props.accounts.length === 1) {
            this.respond(
                `The total sum of all your accounts is $${this.props.accounts[0].funds}.`
            );
            return;
        }
        let sum = this.props.accounts.map(n => n.funds).reduce((a, n) => a + n);
        this.respond(`The total sum of all your accounts is $${sum}.`);
    };
    createAccount = () => {
        if (this.state.newAccountName === "") {
            this.respond("Please enter a name for your new account.");
            return;
        }
        let n = parseFloat(this.state.newAccountBalance);
        if (n <= 0 || isNaN(n)) {
            this.respond("Your account must have more than $0.00.");
            return;
        }
        let reserved = false;
        if (this.props.accounts.length > 0) {
            this.props.accounts.forEach(a => {
                if (a.name === this.state.newAccountName) {
                    reserved = true;
                }
            });
        }
        if (reserved) {
            this.respond(`An account with that name already exists.`);
            return;
        }
        // Check to ensure the input is good, then call the passed callback
        this.props.callback(
            this.state.newAccountName,
            this.state.newAccountBalance
        );
        this.respond(
            `Your new account (${this.state.newAccountName}) was created successfully.`
        );
        // reset form fields
        this.setState({
            newAccountName: "",
            newAccountBalance: ""
        });
    };
    render() {
        return (
            <div>
                <label htmlFor="newAccountName">Name of New Account</label>
                <input
                    name="newAccountName"
                    id="newAccountName"
                    value={this.state.newAccountName}
                    onChange={this.handleInputChange}
                ></input>
                <label htmlFor="newAccountBalance">Initial Balance</label>
                <input
                    name="newAccountBalance"
                    id="newAccountBalance"
                    type="number"
                    value={this.state.newAccountBalance}
                    onChange={this.handleInputChange}
                ></input>
                <br />
                <button onClick={this.createAccount}>Create Account</button>
                <br />
                <button onClick={() => this.findHighestOrLowest("highest")}>
                    Find Highest Value Account
                </button>
                <button onClick={() => this.findHighestOrLowest("lowest")}>
                    Find Lowest Value Account
                </button>
                <button onClick={this.sumAccounts}>
                    Find Value of All Accounts
                </button>
                <br />
                <br />
                <AnimateOnChange>
                    <p>{this.state.response}</p>
                </AnimateOnChange>
            </div>
        );
    }
}

export default AccountManager;
