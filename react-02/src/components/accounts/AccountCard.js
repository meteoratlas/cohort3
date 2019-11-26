import React, { Component } from "react";
import { AnimateOnChange } from "react-animation";

class AccountCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFieldValue: "",
            resultText: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {}
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
            resultText: `Successfully deposited $${value} into this account.`
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
            resultText: `Successfully withdrew $${value} from this account.`
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
    render() {
        // Use destructuring to get the relevant values
        // from the card's prop (an account object)
        let { name, funds } = this.props.account;
        return (
            <div className="account-card">
                {/* Use the destructed variables to populate the associated
                fields in the card's elements*/}
                <h2>{name}</h2>
                <p>Funds: ${funds}</p>
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
