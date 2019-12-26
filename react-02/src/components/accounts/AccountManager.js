import React, { Component } from "react";
// import { AnimateOnChange } from "react-animation";

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
    findHighestOrLowest = hiOrLo => {};
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
        if (this.props.controller.accounts.length > 0) {
            this.props.controller.accounts.forEach(a => {
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
                <br />
                <input
                    name="newAccountName"
                    id="newAccountName"
                    placeholder="Account Name"
                    value={this.state.newAccountName}
                    onChange={this.handleInputChange}
                ></input>
                <br />
                <label htmlFor="newAccountBalance">Initial Balance</label>
                <br />
                <input
                    name="newAccountBalance"
                    id="newAccountBalance"
                    type="number"
                    placeholder="Initial Account Balance"
                    value={this.state.newAccountBalance}
                    onChange={this.handleInputChange}
                ></input>
                <br />
                <br />
                <button onClick={this.createAccount}>Create Account</button>
                <br />
                <p>{this.state.response}</p>
                <br />
                <br />
            </div>
        );
    }
}

export default AccountManager;
