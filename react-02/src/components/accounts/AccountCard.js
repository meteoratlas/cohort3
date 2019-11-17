import React, { Component } from "react";

class AccountCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UID: this.props.UID, // unique account identifier
            inputFieldValue: "",
            resultText: "Please select an operation."
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {}
    onWithdrawClicked = () => {
        let value = this.isValidInput(this.state.inputFieldValue);
        if (!value || value <= 0) {
            this.setState({
                resultText: "Please enter a valid amount to withdraw."
            });
            return;
        }
        if (value > this.props.account.balance()) {
            this.setState({
                resultText: "Your account does not contain the requested funds."
            });
            return;
        }
        // send callback to manager
        this.props.withdrawCallback(value);
        this.setState({ inputFieldValue: "" });
    };
    isValidInput(input) {
        if (
            typeof input === "NaN" ||
            typeof input === "undefined" ||
            input === ""
        ) {
            return false;
        }
        return parseFloat(input);
    }
    handleChange(e) {
        this.setState({ inputFieldValue: e.target.value });
    }
    render() {
        return (
            <div className="account-card">
                <input
                    type="number"
                    value={this.state.inputFieldValue}
                    onChange={this.handleChange}
                ></input>
                <button onClick={this.onWithdrawClicked}>Withdraw</button>
                <button>Deposit</button>
                <p>{this.state.resultText}</p>
            </div>
        );
    }
}

export default AccountCard;
