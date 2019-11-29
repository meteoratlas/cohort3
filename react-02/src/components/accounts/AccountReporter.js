import React from "react";

const AccountReporter = props => {
    return (
        <div>
            <h4>Highest Value Account:</h4>
            <p>{props.highestAccount}</p>
            <h4>Lowest Value Account:</h4>
            <p>{props.lowestAccount}</p>
            <h4>Sum of All Account Funds:</h4>
            <p>${props.allFunds}</p>
        </div>
    );
};

export default AccountReporter;
