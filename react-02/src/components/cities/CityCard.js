import React, { Component } from "react";

class CityCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFieldValue: "",
            resultText: ""
        };
    }
    isValidInput(input) {
        if (isNaN(input) || typeof input === "undefined" || input === "") {
            return false;
        }
        return parseFloat(input);
    }
    handleChange = e => {
        this.setState({ inputFieldValue: e.target.value });
    };
    render() {
        let { name, funds } = this.props.city;
        return (
            <div className="city-card">
                <h2>{name}</h2>
                <p>{this.props.city.show()}</p>
                <input
                    type="number"
                    value={this.state.inputFieldValue}
                    onChange={this.handleChange}
                ></input>
                <br />
                <button onClick={this.onWithdrawClicked}>Add Citizens</button>
                <button onClick={this.onDepositClicked}>Remove Citizens</button>
                <p>{this.state.resultText}</p>
                <button onClick={this.onDeleteClicked}>Delete This City</button>
            </div>
        );
    }
}

export default CityCard;
