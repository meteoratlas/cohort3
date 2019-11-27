import React, { Component } from "react";

class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            budgetName: "Monthly Budget",
            rentFunds: 1200,
            groceryFunds: 240,
            transitFunds: 200,
            ransomFunds: 45000,
            entertainmentFunds: 50
        };
    }
}

export default Budget;
