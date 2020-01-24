import React, { Component } from "react";

class CityCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFieldValue: "",
            resultText: ""
        };
        console.log(this.props.styleObj);
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
    onCitizensClicked = added => {
        let value = this.isValidInput(this.state.inputFieldValue);
        if (!value || value <= 0) {
            this.setState({
                resultText: "Please enter a valid number."
            });
            return;
        }
        let response;
        if (added === "add") {
            response = "added";
            this.props.addCitizensCallback(this.props.city.key, value);
        } else if (added === "remove") {
            if (this.props.city.population < value) {
                this.setState({
                    resultText:
                        "Error: Citizens requested to remove is greater than the total population."
                });
                return;
            }
            response = "removed";
            this.props.removeCitizensCallback(this.props.city.key, value);
        }

        this.setState({
            inputFieldValue: "",
            resultText: `Successfully ${response} ${value} new citizens.`
        });
    };
    onDeleteClicked = () => {
        this.props.deleteCallback(this.props.city.key);
    };
    render() {
        let { name } = this.props.city;
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
                <button onClick={() => this.onCitizensClicked("add")}>
                    Add Citizens
                </button>
                <button onClick={() => this.onCitizensClicked("remove")}>
                    Remove Citizens
                </button>
                <p>{this.state.resultText}</p>
                <button onClick={this.onDeleteClicked}>Delete This City</button>
            </div>
        );
    }
}

export default CityCard;
