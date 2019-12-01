import React from "react";

const AccountReporter = props => {
    return (
        <div id="account-reporter">
            <div>
                <h4>Highest Value Account:</h4>
                <p>{props.highestAccount}</p>
            </div>
            <div>
                <h4>Lowest Value Account:</h4>
                <p>{props.lowestAccount}</p>
            </div>
            <div>
                <h4>Sum of All Account Funds:</h4>
                <p>${props.allFunds}</p>
            </div>
        </div>
    );
};

export default AccountReporter;
