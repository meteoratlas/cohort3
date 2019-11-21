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
        return (
            <div className="account-card">
                <h2>{this.props.account.name}</h2>
                <p>Funds: ${this.props.account.funds}</p>
                <input
                    type="number"
                    value={this.state.inputFieldValue}
                    onChange={this.handleChange}
                ></input>
                <br />
                <button onClick={this.onWithdrawClicked}>Withdraw</button>
                <button>Deposit</button>
                <p>{this.state.resultText}</p>
                <button>Delete Account</button>
            </div>
        );
    }
}

export default AccountCard;
