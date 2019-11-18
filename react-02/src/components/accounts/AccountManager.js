import React, { Component } from "react";
import AccountCard from "./AccountCard";

class AccountManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newAccountName: "",
            newAccountBalance: ""
        };
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    createAccount = () => {
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
                <button onClick={this.createAccount}>Create Account</button>
            </div>
        );
    }
}

export default AccountManager;
