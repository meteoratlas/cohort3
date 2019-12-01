import React from "react";

const CityReporter = props => {
    return (
        <div id="city-reporter">
            <div>
                <h4>Northernmost City:</h4>
                <p>{props.northMost}</p>
            </div>
            <div>
                <h4>Southernmost City:</h4>
                <p>{props.southMost}</p>
            </div>
            <div>
                <h4>Total Population of All Cities:</h4>
                <p>{props.totalPop} citizens</p>
            </div>
        </div>
    );
};

export default CityReporter;
