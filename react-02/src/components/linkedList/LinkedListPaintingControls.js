import React, { useState } from "react";

const LinkedListControls = props => {
    const [response, setResponse] = useState("");
    const handleSubmit = () => {
        let result = props.addPainting();
        if (result === null) {
            setResponse("No more paintings are available.");
            return;
        }
        setResponse("");
    };
    return (
        <>
            <div id="ll-controls-nav">
                <div className="form-column">
                    <button onClick={props.prev}>Previous Node</button>
                    <button onClick={props.first}>Go to First Node</button>
                    <button onClick={handleSubmit}>Add Painting</button>
                </div>
                <div className="form-column">
                    <button onClick={props.next}>Next Node</button>
                    <button onClick={props.last}>Go to Last Node</button>
                    <button onClick={props.delete}>Delete Current Node</button>
                </div>

                <br />
                <div id="ll-controls-mod">
                    <br />
                </div>
            </div>
            <p>{response}</p>
        </>
    );
};

export default LinkedListControls;
