import React, { Component } from "react";
//import { AnimateOnChange } from "react-animation";

class AccountCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFieldValue: "",
            resultText: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    onDepositClicked = () => {
        let value = this.isValidInput(this.state.inputFieldValue);
        if (!value || value <= 0) {
            this.setState({
                resultText: "Please enter a valid amount to withdraw."
            });
            return;
        }
        this.props.depositCallback(this.props.account.UID, value);
        this.setState({
            inputFieldValue: "",
            resultText: `Successfully deposited $${value.toFixed(
                2
            )} into this account.`
        });
    };
    onWithdrawClicked = () => {
        let value = this.isValidInput(this.state.inputFieldValue);
        if (!value || value <= 0) {
            this.setState({
                resultText: "Please enter a valid amount to withdraw."
            });
            return;
        }
        if (value > this.props.account.funds) {
            this.setState({
                resultText: "Your account does not contain the requested funds."
            });
            return;
        }
        // send callback to manager
        this.props.withdrawCallback(this.props.account.UID, value);
        this.setState({
            inputFieldValue: "",
            resultText: `Successfully withdrew $${value.toFixed(
                2
            )} from this account.`
        });
    };
    onDeleteClicked = () => {
        this.props.deleteCallback(this.props.account.UID);
    };
    isValidInput(input) {
        if (isNaN(input) || typeof input === "undefined" || input === "") {
            return false;
        }
        return parseFloat(input);
    }
    handleChange(e) {
        this.setState({ inputFieldValue: e.target.value });
    }
    // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    render() {
        // Use destructuring to get the relevant values
        // from the card's prop (an account object)
        let { name, funds } = this.props.account;
        return (
            <div className="account-card">
                {/* Use the destructed variables to populate the associated
                fields in the card's elements*/}
                <h2>{name}</h2>
                <p>Available Funds: ${this.numberWithCommas(funds)}</p>
                <input
                    type="number"
                    value={this.state.inputFieldValue}
                    onChange={this.handleChange}
                ></input>
                <br />
                <button onClick={this.onWithdrawClicked}>Withdraw</button>
                <button onClick={this.onDepositClicked}>Deposit</button>
                <p>{this.state.resultText}</p>
                <button onClick={this.onDeleteClicked}>Delete Account</button>
            </div>
        );
    }
}

export default AccountCard;
